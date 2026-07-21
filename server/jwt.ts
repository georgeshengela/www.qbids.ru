import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { type Request, type Response, type NextFunction } from "express";

function resolveSecret(envKey: string, devFallback: string): string {
  const fromEnv = process.env[envKey];
  if (fromEnv) return fromEnv;

  // Prefer deriving from SESSION_SECRET so production can boot without separate JWT envs
  if (process.env.SESSION_SECRET) {
    console.warn(`${envKey} not set; deriving from SESSION_SECRET`);
    return crypto.createHmac("sha256", process.env.SESSION_SECRET).update(envKey).digest("hex");
  }

  if (process.env.NODE_ENV === "production") {
    console.warn(`${envKey} and SESSION_SECRET not set; using unstable fallback — set JWT secrets in Render`);
    const seed = process.env.DATABASE_URL || "qbids-fallback-seed";
    return crypto.createHmac("sha256", seed).update(envKey).digest("hex");
  }

  return devFallback;
}

const JWT_SECRET = resolveSecret("JWT_SECRET", "dev-only-jwt-secret-change-in-production");
const JWT_REFRESH_SECRET = resolveSecret(
  "JWT_REFRESH_SECRET",
  "dev-only-refresh-secret-change-in-production",
);


// Token expiration times
const ACCESS_TOKEN_EXPIRY = "1h"; // 1 hour
const REFRESH_TOKEN_EXPIRY = "30d"; // 30 days

export interface JWTPayload {
  userId: string;
  username: string;
  role: string;
}

export interface RefreshTokenPayload {
  userId: string;
}

/**
 * Generate access token (short-lived)
 */
export function generateAccessToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });
}

/**
 * Generate refresh token (long-lived)
 */
export function generateRefreshToken(payload: RefreshTokenPayload): string {
  return jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRY,
  });
}

/**
 * Verify access token
 */
export function verifyAccessToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Verify refresh token
 */
export function verifyRefreshToken(token: string): RefreshTokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_REFRESH_SECRET) as RefreshTokenPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Hash refresh token for secure storage
 */
export async function hashRefreshToken(token: string): Promise<string> {
  // Use bcrypt with cost factor 12 for strong hashing
  return await bcrypt.hash(token, 12);
}

/**
 * Verify refresh token against stored hash
 */
export async function verifyRefreshTokenHash(token: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(token, hash);
}

/**
 * Middleware to authenticate requests using JWT or session
 * Supports both authentication methods for backward compatibility
 */
export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
  // Check for JWT token in Authorization header
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7); // Remove "Bearer " prefix
    const payload = verifyAccessToken(token);
    
    if (payload) {
      // Set session-like data for compatibility with existing code
      req.session.userId = payload.userId;
      req.session.userRole = payload.role;
      return next();
    }
  }
  
  // If no valid JWT, check for session-based auth (existing system)
  if (req.session.userId) {
    return next();
  }
  
  // No valid authentication found
  return res.status(401).json({ error: "Unauthorized" });
}

/**
 * Optional authentication middleware - doesn't require auth but sets user if available
 */
export function optionalAuthenticateJWT(req: Request, res: Response, next: NextFunction) {
  // Check for JWT token in Authorization header
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    const payload = verifyAccessToken(token);
    
    if (payload) {
      req.session.userId = payload.userId;
      req.session.userRole = payload.role;
    }
  }
  
  // Continue regardless of authentication status
  next();
}

# QBIDS.GE - Live Penny Auction Platform

## Overview
A real-time penny auction platform built for the Georgian market. Users can participate in live auctions for electronics and other items, with real-time bidding powered by WebSocket technology.

## Project Type
Full-stack web application with React frontend and Express backend

## Tech Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Wouter (routing)
- **Backend**: Node.js, Express, Socket.IO (real-time)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Express Session with PostgreSQL store
- **UI Components**: Radix UI, Framer Motion

## Project Structure
```
├── client/               # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (header, footer, auction cards, etc.)
│   │   ├── pages/        # Route pages (home, auctions, profile, admin, etc.)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities (i18n, socket, analytics, etc.)
├── server/               # Express backend
│   ├── services/         # Business logic (auction, bot, timer services)
│   ├── routes.ts         # API routes
│   ├── socket.ts         # WebSocket handlers
│   └── index.ts          # Server entry point
├── shared/               # Shared TypeScript schemas
└── migrations/           # Database migrations
```

## Key Features
- Real-time bidding with WebSocket updates
- Multi-language support (Russian, English, Georgian)
- Bot integration for automated bidding
- Admin panel for auction management
- User authentication and profile management with OTP verification
- Phone number verification via SMS (SMSOffice integration)
- Countdown timers and automatic winner determination
- Bid history tracking

## Environment Variables
- `DATABASE_URL` - PostgreSQL connection string (auto-configured)
- `SESSION_SECRET` - Express session secret (auto-configured)
- `SMSOFFICE_API_KEY` - SMSOffice API key for OTP SMS delivery
- `NODE_ENV` - Environment mode (development/production)
- `PORT` - Server port (default: 5000)

## Development Workflow
The project runs both frontend and backend on a single server (port 5000):
- Vite dev server provides HMR for frontend
- Express serves API endpoints and static files
- Socket.IO handles real-time bidding updates

## Database Setup
Database schema is managed with Drizzle ORM. The schema includes:
- `users` - User accounts and authentication
- `auctions` - Auction items and status
- `bids` - Bid history
- `sessions` - Session storage
- `bot_settings` - Bot configuration

## Recent Changes
- **2025-11-11**: Stateless OTP Verification System (Mobile & Web Compatible)
  - **✅ CRITICAL FIX**: Migrated OTP system from session-based to stateless database storage
    - **Problem**: Previous session-based OTP storage didn't work for mobile apps (JWT/stateless)
    - **Solution**: Created `otp_verifications` table with hashed OTP codes and verificationId tokens
    - **Result**: OTP verification now works for BOTH web (sessions) and mobile (JWT tokens)
  
  - **Database Schema**:
    - Created `otp_verifications` table with bcrypt-hashed OTP storage
    - Indexes: (phone, purpose), expiresAt for efficient lookups and cleanup
    - Fields: id (UUID/verificationId), phone, otpHash, expiresAt, consumedAt, attemptCount, purpose, ipAddress
    - Supports stateless verification without session dependency
  
  - **OTP Service Layer** (`server/services/otp-service.ts`):
    - `createAndSendOtp()` - Generates 4-digit OTP, hashes with bcrypt (10 rounds), stores in DB, sends SMS, returns verificationId
    - `verifyOtp()` - Validates verificationId + code using constant-time bcrypt comparison
    - Security features: Max 5 attempts, 10-minute expiry, one-time use (consumedAt flag), IP tracking
    - `cleanupExpiredOtps()` - Removes expired verification records
  
  - **API Endpoints** (Stateless & Mobile-Compatible):
    - `POST /api/auth/send-otp` - Returns `{ success, verificationId, expiresIn }`
    - `POST /api/auth/verify-otp` - Accepts `{ verificationId, code, phone }`, returns `{ success, verifiedPhone }`
    - Works without sessions - mobile apps can use JWT tokens
    - Web clients get additional session storage for convenience
  
  - **Frontend Updates**:
    - Auth modal stores verificationId from send-otp response
    - Sends verificationId with verify-otp request
    - Backwards compatible with web session flow
  
  - **Security & Best Practices**:
    - ✅ Bcrypt hashing with 10 salt rounds
    - ✅ Constant-time comparison (prevents timing attacks)
    - ✅ One-time use enforcement (consumedAt flag)
    - ✅ Rate limiting support (attempt counter, IP address tracking)
    - ✅ Automatic expiry (10 minutes)
    - ✅ Stateless verification (works with JWT tokens)
  
  - **API Documentation**:
    - Updated `/admin/api-docs` with new stateless OTP flow
    - Documented verificationId parameter for mobile integrations
    - Examples show both web and mobile usage patterns
  
  - **Architect Review**: ✅ PASSED - Confirmed production-ready for both web and mobile
    - Recommended enhancements: Request-level throttling, integration tests, cleanup cron job
  
- **2025-10-29**: Complete Georgian localization
  - Updated all page titles, meta tags, and SEO content to Georgian language
  - Changed default language from Russian to Georgian (ka) across entire application
  - Updated database settings: currency ₾ (Georgian Lari), Georgian contact info
  - Updated index.html with Georgian SEO meta tags for QBIDS.GE
  - Changed site domain from QBIDS.KG to QBIDS.GE throughout
  - Translation keys added for all UI elements (footer, stats, trust indicators)
  - Database configured with Georgian defaults: language=ka, contact info (Tbilisi, +995 593 09 00 00)
  
- **2025-10-29**: Initial Replit setup
  - Installed all dependencies
  - Pushed database schema to PostgreSQL
  - Configured workflow for development server on port 5000
  - Set up deployment configuration for production
  - Verified application runs successfully

## Notes
- The application is configured for Georgian timezone (Asia/Tbilisi)
- Default language is Georgian (ka), with English and Russian support
- Currency: Georgian Lari (₾), bid price 0.20 GEL per bid
- Contact: support@qbids.ge, info@qbids.ge, +995 593 09 00 00, Tbilisi
- Site name: QBIDS.GE with tagline "პენი-აუქციონები საქართველოში"
- Uses session-based authentication (no JWT)
- WebSocket for real-time features (Socket.IO)
- SEO optimized for Georgian market with ka_GE locale

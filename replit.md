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
- **2025-11-11**: OTP Verification Implementation
  - Created SMSOffice service (`server/services/sms-service.ts`) for sending SMS with 4-digit OTP codes
  - Added OTP fields to user schema: otpCode, otpExpiresAt, isPhoneVerified
  - Implemented `/api/auth/send-otp` endpoint - generates OTP, sends via SMSOffice, stores in session (10-min expiry)
  - Implemented `/api/auth/verify-otp` endpoint - validates code, clears pendingOTP, sets verifiedPhone in session
  - Updated `/api/auth/register` to enforce phone verification - rejects if phone provided but not verified
  - Added OTP verification modal to AuthModal component with 4-digit input field
  - Updated phone validation from +996 (Kyrgyzstan) to +995 (Georgian market)
  - Added comprehensive session cleanup in all code paths (success/failure) to prevent stale verification data
  - Security: Server-side verification enforced, session data cleared properly
  - Architect reviewed and approved implementation
  
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

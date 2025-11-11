# QBIDS.GE - Live Penny Auction Platform

## Overview
QBIDS.GE is a real-time penny auction platform designed for the Georgian market, allowing users to participate in live auctions for various items, primarily electronics. The platform aims to capture a significant share of the online auction market in Georgia by offering an engaging and transparent bidding experience. Key capabilities include real-time bidding, multi-language support, automated bot integration, and comprehensive auction management. The project's ambition is to become the leading penny auction site in Georgia, known for its dynamic auctions and user-friendly interface.

## User Preferences
I want to prioritize iterative development, receiving explanations that are clear and concise. Ask before making major changes or architectural decisions. Do not make changes to folder `client/lib/analytics`. Do not make changes to the file `server/services/third-party-integration.ts`.

## System Architecture
The platform is a full-stack web application utilizing a React frontend and an Express backend.

### UI/UX Decisions
- Uses Radix UI for unstyled, accessible components.
- Tailwind CSS for utility-first styling, enabling rapid UI development and a consistent design system.
- Framer Motion for animations, enhancing user interaction and visual appeal.
- The design incorporates a modern, clean aesthetic suitable for an auction platform.
- Multi-language support (Georgian, Russian, English) is a core UI feature, with Georgian as the default.

### Technical Implementations
- **Frontend**: React 18, TypeScript, Vite for fast development, and Wouter for client-side routing.
- **Backend**: Node.js with Express for API services. Socket.IO is central to real-time bidding functionality.
- **Database**: PostgreSQL is used with Drizzle ORM for type-safe database interactions and schema management.
- **Authentication**: Express Session with a PostgreSQL store handles user sessions. OTP verification is implemented for phone number verification, supporting both web (session-based) and mobile (stateless/JWT-based) flows. OTP codes are hashed with bcrypt and stored in a dedicated `otp_verifications` table.
- **Real-time Bidding**: Implemented using WebSockets via Socket.IO, providing instant updates on bids, timers, and auction status.
- **Bot Integration**: Automated bidding bots are integrated to ensure active auctions.
- **API Design**: Bid history endpoints are designed to return a flattened, mobile-friendly response for easier consumption by mobile applications. A comprehensive `/api/timers` endpoint provides real-time timer details for all auction statuses (upcoming, live, finished).
- **CORS Configuration**: Explicitly configured to allow cross-origin requests, supporting mobile application integration.

### Feature Specifications
- Real-time bidding with live updates.
- User authentication, registration, and profile management including phone number verification via OTP.
- Admin panel for managing auctions, users, and system settings.
- Countdown timers for auctions and automatic winner determination.
- Bid history tracking for transparency.
- Multi-language support with default set to Georgian.

### System Design Choices
- **Monorepo Structure**: Frontend, backend, and shared TypeScript schemas are managed within a single repository for streamlined development.
- **Scalability**: Designed with a modular service-oriented structure on the backend to facilitate future scaling.
- **Security**: OTP verification incorporates bcrypt hashing, constant-time comparison, one-time use flags, and IP tracking.
- **Deployment**: Configured for a single-server deployment running both frontend and backend, with Vite handling HMR for frontend development.

## External Dependencies
- **PostgreSQL**: Primary database for all application data.
- **Socket.IO**: WebSocket library for real-time communication.
- **SMSOffice**: Third-party SMS gateway for OTP delivery.
- **Unsplash**: Used for high-quality auction item images.

## Recent Changes (November 11, 2025)

### Comprehensive Bid History API for Mobile (NEW)
- **Created `/api/users/bid-history` endpoint** for mobile app integration
- Single endpoint returns complete user bid history with categorization:
  - `bids`: All regular bids with auction details
  - `prebids`: All prebids with auction details
  - `activeBids`: Filtered active bids (status = 'live')
  - `upcomingPrebids`: Filtered upcoming prebids (status = 'upcoming')
  - `finishedHistory`: Combined finished bids AND prebids (status = 'finished'), sorted by timestamp
  - `summary`: Statistics including totalBids, totalPrebids, counts for each category
- Mobile-friendly flattened structure with complete auction data
- Includes type field ('bid' or 'prebid') for easy differentiation
- Matches web UI bid history page functionality
- Critical fix: finishedHistory includes BOTH finished bids and finished prebids (no omissions)

### User Stats API Fixed
- **Fixed `/api/users/stats` endpoint** to return correct fields matching API documentation
- Changed from `{activeBids, wonAuctions, activePrebids}` to `{totalBids, auctionsWon, auctionsParticipated, totalSpent}`
- `totalBids`: Total count of all bids + prebids placed by user
- `auctionsWon`: Number of auctions user has won
- `auctionsParticipated`: Count of unique auctions user has bid in (combines both bids and prebids tables)
- `totalSpent`: Total amount spent on bids (totalBids × 0.01 GEL)

### Bid History API Simplified (Mobile-Friendly)
- **Updated bid history endpoints** to return flattened, mobile-friendly response format
- Endpoints: `/api/auctions/:id/bids` and `/api/auctions/slug/:slug/bids`
- Response now includes direct `username` and `timestamp` fields (no nested user object)
- Easier to consume in React Native and other mobile frameworks

### Bid Increment Fixed
- **Fixed bid increment** from 0.20 GEL to 0.01 GEL across all 11 auctions in database
- All new bids will now increment auction price by 0.01 GEL instead of 0.20 GEL
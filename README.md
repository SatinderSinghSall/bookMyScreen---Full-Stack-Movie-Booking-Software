# 🎬 bookMyScreen --- Full-Stack Movie Booking System

> A full-stack, production-oriented movie ticket booking platform built
> as a **TypeScript + Express + MongoDB backend** and a **React + Vite
> frontend**.\
> The project demonstrates authentication, OTP verification, movie and
> theatre discovery, show scheduling, real-time seat locking, Razorpay
> test payments, booking management, and a responsive booking
> experience.

---

## 📚 Table of Contents

1.  [Project Overview](#-project-overview)
2.  [Project Objectives](#-project-objectives)
3.  [Key Features](#-key-features)
4.  [System Architecture](#-system-architecture)
5.  [Technology Stack](#-technology-stack)
6.  [Libraries and Dependencies](#-libraries-and-dependencies)
7.  [Monorepo Structure](#-monorepo-structure)
8.  [Backend Architecture](#-backend-architecture)
9.  [Frontend Architecture](#-frontend-architecture)
10. [Core Functional Workflows](#-core-functional-workflows)
11. [Authentication and
    Authorization](#-authentication-and-authorization)
12. [Movie and Theatre Management](#-movie-and-theatre-management)
13. [Show Management](#-show-management)
14. [Seat Selection and Real-Time
    Locking](#-seat-selection-and-real-time-locking)
15. [Payment Integration](#-payment-integration)
16. [Booking Management](#-booking-management)
17. [MongoDB Data Model](#-mongodb-data-model)
18. [Redis Architecture](#-redis-architecture)
19. [Socket.IO Architecture](#-socketio-architecture)
20. [Frontend State and Data
    Management](#-frontend-state-and-data-management)
21. [Environment Configuration](#-environment-configuration)
22. [Installation and Setup](#-installation-and-setup)
23. [Database Seeding](#-database-seeding)
24. [Running the Application](#-running-the-application)
25. [Production Build](#-production-build)
26. [Testing the Complete Booking
    Flow](#-testing-the-complete-booking-flow)
27. [Security Considerations](#-security-considerations)
28. [Error Handling](#-error-handling)
29. [Academic / Engineering
    Highlights](#-academic--engineering-highlights)
30. [Future Enhancements](#-future-enhancements)
31. [Author](#-author)
32. [License](#-license)

---

# 🎬 Project Overview

**bookMyScreen** is a full-stack web application for discovering movies,
viewing theatres and show timings, selecting seats, making online
payments, and managing bookings.

The system follows a modular client-server architecture:

```text
┌──────────────────────────────────────────────────────────┐
│                     bookMyScreen                         │
│                Full-Stack Monorepo                       │
└──────────────────────────────────────────────────────────┘
              │
      ┌───────┴────────┐
      │                │
      ▼                ▼
┌──────────────┐  ┌────────────────┐
│  Frontend    │  │    Backend     │
│ React + Vite │  │ Express + TS   │
└──────┬───────┘  └───────┬────────┘
       │                   │
       │ HTTP / REST       │
       ├──────────────────►│
       │                   │
       │ Socket.IO         │
       ├──────────────────►│
       │                   │
       │                   ├──────► MongoDB
       │                   │
       │                   ├──────► Redis
       │                   │
       │                   ├──────► Razorpay
       │                   │
       │                   └──────► SMTP / Gmail
       │
       ▼
  User Interface
```

The application is designed to model a realistic online cinema-booking
workflow while remaining suitable for academic demonstration, portfolio
presentation, and further production development.

---

# 🎯 Project Objectives

The primary objectives of the system are:

- Provide a complete movie discovery and ticket-booking experience.
- Implement secure user authentication.
- Support OTP-based account verification.
- Display movies according to the selected location/state.
- Display theatres and show timings for a selected movie and date.
- Provide interactive seat selection.
- Prevent accidental simultaneous seat selection using temporary Redis
  locks.
- Integrate Razorpay for payment processing.
- Support Razorpay Test Mode for development and demonstration.
- Verify successful payments before creating bookings.
- Persist confirmed bookings in MongoDB.
- Maintain seat availability inside show documents.
- Provide a booking-history/profile experience.
- Demonstrate modular backend architecture using TypeScript.
- Demonstrate modern React application architecture using React Query
  and Context APIs.

---

# ✨ Key Features

## 👤 Authentication

- User account creation.
- Email-based authentication flow.
- OTP generation and verification.
- OTP delivery through Nodemailer.
- Mail template generation using Mailgen.
- Password hashing infrastructure.
- Access-token based authentication.
- Refresh-token based session renewal.
- Protected backend routes through authentication middleware.
- Auth state management on the frontend.

## 🎞️ Movie Discovery

- Movie listing page.
- Movie cards with posters and metadata.
- Movie details page.
- Movie filtering infrastructure.
- Movie language information.
- Certification information.
- Movie format information.
- Duration information.
- Location-aware theatre/show discovery.

## 🏢 Theatre Discovery

- Theatre records stored in MongoDB.
- Multiple cities and Indian states/regions supported by seeded data.
- Theatre logos.
- Theatre name and location information.
- Theatre grouping for movie shows.

## 🕐 Show Scheduling

- Movie-specific shows.
- Theatre-specific shows.
- Date-specific show discovery.
- Location/state-specific show discovery.
- Multiple show slots per day.
- Cinema formats such as 2D, 3D, IMAX, and PVR PXL.
- Audio information.
- Configurable seat layouts.
- Show-specific pricing maps.

## 💺 Seat Booking

- Interactive seat layout.
- Seat categorisation.
- Seat price calculation.
- Temporary seat locking.
- Real-time seat-lock broadcasting.
- Seat unlock after successful booking.
- Automatic Redis lock expiration.
- Protection against already-booked seats.

## 💳 Payments

- Razorpay integration.
- Razorpay order creation.
- Razorpay Checkout.
- Razorpay Test Mode support.
- Payment signature verification.
- Payment status verification.
- Payment method persistence.
- Booking creation after payment verification.

## 🎟️ Booking Management

- Booking reference generation.
- Booking persistence.
- Confirmed/failed/cancelled status model.
- Booking timestamp.
- Payment ID storage.
- Ticket price and convenience-fee information.
- User-specific booking history.
- Movie/theatre/show details populated for booking history.

## ⚡ Real-Time Features

- Socket.IO communication.
- Show-specific socket rooms.
- Temporary seat locks.
- Seat-lock broadcasts.
- Seat unlock events.
- Redis-backed locking.

---

# 🏗️ System Architecture

The project is divided into two principal applications:

```text
Full-Stack bookMyScreen/
│
├── bms-frontend/     → React client
│
└── bms-backend/      → Express/TypeScript API server
```

Supporting infrastructure:

```text
Frontend
   │
   ├── REST API ───────────────► Express
   │                              │
   │                              ├── MongoDB
   │                              ├── Redis
   │                              ├── Razorpay
   │                              └── SMTP
   │
   └── Socket.IO ──────────────► Express/Socket.IO
```

---

# 🧰 Technology Stack

## Frontend

Technology Purpose

---

React 19 Component-based UI
Vite 7 Frontend build tool and development server
React Router 7 Client-side routing
Axios HTTP communication
TanStack React Query Server-state fetching and mutations
Tailwind CSS 4 Utility-first styling
React Icons UI icons
React Hot Toast Toast notifications
Notistack Notification infrastructure
Swiper Slider/carousel components
React Slick Carousel/slider support
date-fns Date utilities
Day.js Date formatting and show-date handling
Socket.IO Client Real-time seat communication

## Backend

Technology Purpose

---

Node.js JavaScript runtime
TypeScript Static typing
Express 5 HTTP API framework
MongoDB Primary database
Mongoose 8 MongoDB ODM
Redis / ioredis Temporary seat-lock storage
Socket.IO Real-time communication
JSON Web Token Access/refresh authentication
Nodemailer Email delivery
Mailgen HTML email generation
Razorpay SDK Payment gateway integration
Zod Request/data validation
Nanoid Identifier generation support
Day.js Date/time handling
CORS Cross-origin API access
Cookie Parser Cookie handling
HTTP Errors HTTP error construction

---

# 📦 Libraries and Dependencies

## Backend Dependencies

```json
{
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "crypto": "^1.0.1",
  "dayjs": "^1.11.13",
  "dotenv": "^17.0.1",
  "express": "^5.1.0",
  "http-errors": "^2.0.0",
  "ioredis": "^5.10.0",
  "jsonwebtoken": "^9.0.2",
  "mailgen": "^2.0.29",
  "mongoose": "^8.16.1",
  "nanoid": "^5.1.7",
  "nodemailer": "^7.0.4",
  "razorpay": "^2.9.6",
  "socket.io": "^4.8.3",
  "zod": "^3.25.67"
}
```

Development dependencies:

```json
{
  "@types/cookie-parser": "^1.4.9",
  "@types/cors": "^2.8.19",
  "@types/express": "^5.0.3",
  "@types/jsonwebtoken": "^9.0.10",
  "@types/node": "^24.0.10",
  "@types/nodemailer": "^6.4.17",
  "nodemon": "^3.1.10",
  "ts-node": "^10.9.2",
  "typescript": "^5.8.3"
}
```

## Frontend Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.11",
  "@tanstack/react-query": "^5.81.5",
  "axios": "^1.10.0",
  "date-fns": "^4.1.0",
  "dayjs": "^1.11.13",
  "notistack": "^3.0.2",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.6.3",
  "react-slick": "^0.30.3",
  "react-spinners": "^0.17.0",
  "slick-carousel": "^1.8.1",
  "socket.io-client": "^4.8.3",
  "swiper": "^11.2.10",
  "tailwindcss": "^4.1.11"
}
```

---

# 📁 Monorepo Structure

The following structure represents the complete project tree.

```text
Full-Stack bookMyScreen/
│
├── 📁 bms-backend/
│   ├── 📁 src/
│   │   ├── 📁 config/
│   │   │   ├── 📄 config.ts
│   │   │   ├── 📄 db.ts
│   │   │   └── 📄 redis.ts
│   │   │
│   │   ├── 📁 middlewares/
│   │   │   ├── 📄 auth.middleware.ts
│   │   │   ├── 📄 error.middleware.ts
│   │   │   └── 📄 validate.ts
│   │   │
│   │   ├── 📁 modules/
│   │   │   │
│   │   │   ├── 📁 auth/
│   │   │   │   ├── 📄 auth.controller.ts
│   │   │   │   ├── 📄 auth.interface.ts
│   │   │   │   ├── 📄 auth.route.ts
│   │   │   │   ├── 📄 otp.service.ts
│   │   │   │   ├── 📄 refresh.model.ts
│   │   │   │   └── 📄 token.service.ts
│   │   │   │
│   │   │   ├── 📁 booking/
│   │   │   │   ├── 📄 booking.controller.ts
│   │   │   │   ├── 📄 booking.interface.ts
│   │   │   │   ├── 📄 booking.model.ts
│   │   │   │   ├── 📄 booking.route.ts
│   │   │   │   └── 📄 booking.service.ts
│   │   │   │
│   │   │   ├── 📁 movie/
│   │   │   │   ├── 📄 movie.controller.ts
│   │   │   │   ├── 📄 movie.interface.ts
│   │   │   │   ├── 📄 movie.model.ts
│   │   │   │   ├── 📄 movie.route.ts
│   │   │   │   ├── 📄 movie.service.ts
│   │   │   │   └── 📄 movie.validation.ts
│   │   │   │
│   │   │   ├── 📁 payment/
│   │   │   │   ├── 📄 payement.service.ts
│   │   │   │   ├── 📄 payment.controller.ts
│   │   │   │   ├── 📄 payment.interface.ts
│   │   │   │   └── 📄 payment.route.ts
│   │   │   │
│   │   │   ├── 📁 show/
│   │   │   │   ├── 📄 show.controller.ts
│   │   │   │   ├── 📄 show.interface.ts
│   │   │   │   ├── 📄 show.model.ts
│   │   │   │   ├── 📄 show.routes.ts
│   │   │   │   ├── 📄 show.service.ts
│   │   │   │   └── 📄 show.validation.ts
│   │   │   │
│   │   │   ├── 📁 theater/
│   │   │   │   ├── 📄 theater.controller.ts
│   │   │   │   ├── 📄 theater.interface.ts
│   │   │   │   ├── 📄 theater.model.ts
│   │   │   │   ├── 📄 theater.routes.ts
│   │   │   │   ├── 📄 theater.service.ts
│   │   │   │   └── 📄 theater.validation.ts
│   │   │   │
│   │   │   └── 📁 user/
│   │   │       ├── 📄 user.controller.ts
│   │   │       ├── 📄 user.interface.ts
│   │   │       ├── 📄 user.model.ts
│   │   │       ├── 📄 user.route.ts
│   │   │       └── 📄 user.service.ts
│   │   │
│   │   ├── 📁 routes/
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📁 scripts/
│   │   │   ├── 📄 seed-movies.ts
│   │   │   ├── 📄 seed-shows.ts
│   │   │   └── 📄 seed-theaters.ts
│   │   │
│   │   ├── 📁 socket/
│   │   │   └── 📄 sockethandlers.ts
│   │   │
│   │   ├── 📁 utils/
│   │   │   └── 📄 index.ts
│   │   │
│   │   ├── 📄 app.ts
│   │   └── 📄 server.ts
│   │
│   ├── ⚙️ .env.example
│   ├── ⚙️ .gitignore
│   ├── ⚙️ nodemon.json
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── ⚙️ tsconfig.json
│
├── 📁 bms-frontend/
│   ├── 📁 public/
│   │   └── 🖼️ vite.svg
│   │
│   ├── 📁 src/
│   │   ├── 📁 apis/
│   │   │   ├── 📄 axiosWrapper.js
│   │   │   └── 📄 index.js
│   │   │
│   │   ├── 📁 assets/
│   │   │   ├── 🖼️ ads1.png
│   │   │   ├── 🖼️ banner1.jpg
│   │   │   ├── 📄 banner2.avif
│   │   │   ├── 📄 banner3.avif
│   │   │   ├── 📄 banner4.avif
│   │   │   ├── 🖼️ bookMyScreen.png
│   │   │   ├── 📄 cinepolis.avif
│   │   │   ├── 🖼️ divider-img.jpg
│   │   │   ├── 📄 dragon.avif
│   │   │   ├── 📄 e1.avif
│   │   │   ├── 📄 e2.avif
│   │   │   ├── 📄 e3.avif
│   │   │   ├── 📄 e4.avif
│   │   │   ├── 📄 e5.avif
│   │   │   ├── 📄 et00432498-rxzbzvumal-portrait.avif
│   │   │   ├── 📄 inox.avif
│   │   │   ├── 📄 m1.avif
│   │   │   ├── 📄 m10.avif
│   │   │   ├── 📄 m11.avif
│   │   │   ├── 📄 m12.avif
│   │   │   ├── 📄 m2.avif
│   │   │   ├── 📄 m3.avif
│   │   │   ├── 📄 m4.avif
│   │   │   ├── 📄 m5.avif
│   │   │   ├── 📄 m6.avif
│   │   │   ├── 📄 m7.avif
│   │   │   ├── 📄 m8.avif
│   │   │   ├── 📄 m9.avif
│   │   │   ├── 🖼️ main-icon-white.png
│   │   │   ├── 🖼️ main-icon.png
│   │   │   ├── 📄 metro.avif
│   │   │   ├── 🖼️ pin.gif
│   │   │   ├── 📄 pvr.avif
│   │   │   ├── 🖼️ screen.png
│   │   │   ├── 🖼️ smalll-logo.png
│   │   │   ├── 🖼️ symbolic-icon.png
│   │   │   └── 🖼️ travel.gif
│   │   │
│   │   ├── 📁 components/
│   │   │   ├── 📁 auth/
│   │   │   │   ├── 📄 StepAccountCreation.jsx
│   │   │   │   ├── 📄 StepEmail.jsx
│   │   │   │   └── 📄 StepOTP.jsx
│   │   │   │
│   │   │   ├── 📁 movies/
│   │   │   │   ├── 📄 MovieCard.jsx
│   │   │   │   ├── 📄 MovieFilters.jsx
│   │   │   │   ├── 📄 MovieList.jsx
│   │   │   │   └── 📄 TheaterTimings.jsx
│   │   │   │
│   │   │   ├── 📁 profile/
│   │   │   │   └── 📄 BookingHistory.jsx
│   │   │   │
│   │   │   ├── 📁 seat-layout/
│   │   │   │   ├── 📄 Footer.jsx
│   │   │   │   ├── 📄 Header.jsx
│   │   │   │   └── 📄 Seat.jsx
│   │   │   │
│   │   │   ├── 📁 shared/
│   │   │   │   ├── 📄 BannerSlider.jsx
│   │   │   │   ├── 📄 Footer.jsx
│   │   │   │   ├── 📄 FullScreenLoader.jsx
│   │   │   │   ├── 📄 Header.jsx
│   │   │   │   └── 📄 SignInModel.jsx
│   │   │   │
│   │   │   ├── 📄 LiveEvents.jsx
│   │   │   ├── 📄 Recommended.jsx
│   │   │   └── 📄 index.js
│   │   │
│   │   ├── 📁 context/
│   │   │   ├── 📄 AuthContext.jsx
│   │   │   ├── 📄 LocationContext.jsx
│   │   │   └── 📄 SeatContext.jsx
│   │   │
│   │   ├── 📁 hooks/
│   │   │   ├── 📄 index.js
│   │   │   ├── 📄 useCountdown.jsx
│   │   │   ├── 📄 useCurrentStateLocation.js
│   │   │   └── 📄 useLoadUser.js
│   │   │
│   │   ├── 📁 pages/
│   │   │   ├── 📄 Checkout.jsx
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 MovieDetails.jsx
│   │   │   ├── 📄 Movies.jsx
│   │   │   ├── 📄 Profile.jsx
│   │   │   ├── 📄 SeatLayout.jsx
│   │   │   └── 📄 index.js
│   │   │
│   │   ├── 📁 utils/
│   │   │   ├── 📄 constants.js
│   │   │   ├── 📄 index.js
│   │   │   └── 📄 socket.js
│   │   │
│   │   ├── 📄 App.jsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.jsx
│   │
│   ├── ⚙️ .env.example
│   ├── ⚙️ .gitignore
│   ├── 📝 README.md
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── ⚙️ vite.config.js
│
├── 📄 MONGO.TXT
├── 📝 README.md
├── 📝 SETUP_GUIDE.md
└── ⚙️ docker-compose.yml
```

---

# 🖥️ Backend Architecture

The backend follows a **modular service-oriented Express architecture**.

A typical module is organised as:

```text
module/
├── controller
├── interface
├── model
├── route
├── service
└── validation
```

This separation keeps HTTP handling, business logic, persistence, and
validation independent.

## Configuration Layer

```text
src/config/
├── config.ts
├── db.ts
└── redis.ts
```

### `config.ts`

Centralises environment variables such as:

- Server port.
- MongoDB connection string.
- JWT secrets.
- Hashing secret.
- SMTP credentials.
- Redis host/port.
- Razorpay credentials.
- Frontend URL.

### `db.ts`

Responsible for establishing the Mongoose/MongoDB connection.

### `redis.ts`

Creates the ioredis client and handles Redis connection/error events.

---

# 🔐 Middleware Layer

```text
src/middlewares/
├── auth.middleware.ts
├── error.middleware.ts
└── validate.ts
```

## Authentication Middleware

`auth.middleware.ts` protects routes that require a logged-in user.

The booking route, for example, uses:

```text
POST /book
      │
      ▼
isVerifiedUser
      │
      ▼
createBookingHandler
```

## Validation Middleware

The validation layer provides reusable request validation using the
project's validation infrastructure.

## Error Middleware

Centralises backend error processing so service/controller errors can
propagate through Express.

---

# 👤 Authentication Module

```text
src/modules/auth/
├── auth.controller.ts
├── auth.interface.ts
├── auth.route.ts
├── otp.service.ts
├── refresh.model.ts
└── token.service.ts
```

Responsibilities include:

- User authentication.
- OTP workflow.
- Email delivery.
- Access token creation.
- Refresh token handling.
- Authentication persistence.

### OTP Architecture

```text
User
 │
 ▼
Request verification
 │
 ▼
OTP generation
 │
 ▼
Mailgen + Nodemailer
 │
 ▼
User email
 │
 ▼
OTP verification
 │
 ▼
Authenticated account
```

---

# 🎞️ Movie Module

```text
src/modules/movie/
├── movie.controller.ts
├── movie.interface.ts
├── movie.model.ts
├── movie.route.ts
├── movie.service.ts
└── movie.validation.ts
```

The movie module manages:

- Movie documents.
- Movie metadata.
- Movie listing.
- Movie detail retrieval.
- Movie validation.
- Movie API operations.

Movie records can contain information such as:

- Title.
- Poster.
- Certification.
- Languages.
- Formats.
- Duration.
- Other movie metadata used by the frontend.

---

# 🏢 Theatre Module

```text
src/modules/theater/
├── theater.controller.ts
├── theater.interface.ts
├── theater.model.ts
├── theater.routes.ts
├── theater.service.ts
└── theater.validation.ts
```

The theatre module provides:

- Theatre persistence.
- Theatre metadata.
- City/state information.
- Theatre logos.
- Theatre retrieval and management.

The project includes a dedicated theatre seeder to populate development
data.

---

# 🕐 Show Module

```text
src/modules/show/
├── show.controller.ts
├── show.interface.ts
├── show.model.ts
├── show.routes.ts
├── show.service.ts
└── show.validation.ts
```

A show associates:

```text
Movie
  │
  ├── Theatre
  │
  ├── Location
  │
  ├── Date
  │
  ├── Start Time
  │
  ├── Format
  │
  ├── Audio Type
  │
  ├── Price Map
  │
  └── Seat Layout
```

The show service supports:

- Movie/date/location show lookup.
- Show-by-ID retrieval.
- Show creation.
- Theatre/movie grouping.
- Seat status updates.

---

# 💺 Seat Layout Model

Each show contains a seat layout.

Conceptually:

```text
seatLayout
│
├── Row A
│   ├── A1 → AVAILABLE
│   ├── A2 → AVAILABLE
│   └── A3 → BOOKED
│
├── Row B
│   ├── B1 → AVAILABLE
│   ├── B2 → BLOCKED
│   └── B3 → AVAILABLE
│
└── ...
```

Seat statuses supported by the show service are:

```text
AVAILABLE
BOOKED
BLOCKED
```

The frontend presents these states visually and allows users to select
available seats.

---

# 💳 Payment Module

```text
src/modules/payment/
├── payement.service.ts
├── payment.controller.ts
├── payment.interface.ts
└── payment.route.ts
```

> Note: the service filename is currently `payement.service.ts` in the
> provided project tree.

The payment service performs two important operations.

## 1. Razorpay Order Creation

The application sends the payable amount to the backend.

The backend creates a Razorpay order using:

```text
amount × 100
currency = INR
```

because Razorpay processes the amount in the smallest currency unit.

## 2. Payment Signature Verification

The backend computes an HMAC-SHA256 signature from:

```text
razorpay_order_id + "|" + razorpay_payment_id
```

and compares it with the signature returned by Razorpay.

This protects the application from accepting an arbitrary client-side
payment-success claim.

---

# 🎟️ Booking Module

```text
src/modules/booking/
├── booking.controller.ts
├── booking.interface.ts
├── booking.model.ts
├── booking.route.ts
└── booking.service.ts
```

The booking entity contains:

```text
bookingRef
userId
showId
seats[]
status
bookingDateTime
paymentId
paymentMethod
bookingFee
```

Booking status supports:

```text
CONFIRMED
FAILED
CANCELLED
```

The booking process includes:

1.  Validate booking data.
2.  Check whether requested seats are already booked.
3.  Verify the Razorpay payment status.
4.  Create the booking document.
5.  Mark selected seats as `BOOKED`.
6.  Return the booking to the frontend.

---

# 🔄 Core Booking Workflow

```text
                  ┌──────────────┐
                  │ Select Movie │
                  └──────┬───────┘
                         │
                         ▼
                 ┌───────────────┐
                 │ Select Date   │
                 │ & Location    │
                 └──────┬────────┘
                        │
                        ▼
                ┌────────────────┐
                │ Select Theatre │
                │ & Show Time    │
                └───────┬────────┘
                        │
                        ▼
                 ┌──────────────┐
                 │ Select Seats │
                 └──────┬───────┘
                        │
                        ▼
              ┌───────────────────┐
              │ Redis Seat Lock   │
              │ Temporary 5 min   │
              └────────┬──────────┘
                       │
                       ▼
                ┌──────────────┐
                │   Checkout   │
                └──────┬───────┘
                       │
                       ▼
              ┌───────────────────┐
              │ Razorpay Checkout │
              └────────┬──────────┘
                       │
                       ▼
                ┌──────────────┐
                │ Payment      │
                │ Verification │
                └──────┬───────┘
                       │
                       ▼
               ┌────────────────┐
               │ Create Booking │
               └───────┬────────┘
                       │
                       ▼
                ┌──────────────┐
                │ Seats BOOKED │
                └──────┬───────┘
                       │
                       ▼
              ┌──────────────────┐
              │ Booking History  │
              └──────────────────┘
```

---

# ⚡ Seat Locking Architecture

Seat locking is implemented with **Socket.IO + Redis**.

The objective is to prevent two users from holding the same seat
simultaneously during the payment period.

A temporary lock follows this conceptual model:

```text
seat-lock:{showId}:{seatId}
```

The lock is given a TTL of approximately:

```text
300 seconds = 5 minutes
```

A Redis set is also maintained for the locked seats associated with a
show.

This gives the application a temporary reservation layer before
permanent booking.

---

# 🔌 Socket.IO Architecture

The project contains:

```text
src/socket/sockethandlers.ts
```

The frontend contains:

```text
src/utils/socket.js
```

The socket flow includes events such as:

```text
join-show
lock-seats
unlock-seats
seat-locked
```

Conceptual flow:

```text
User A
  │
  │ lock A1
  ▼
Socket.IO
  │
  ▼
Redis
  │
  ├── seat-lock:show:A1
  └── locked-seats:show
  │
  ▼
Broadcast seat-locked
  │
  ▼
Other connected users
```

When the user successfully completes the booking, the frontend emits an
unlock event as part of the booking completion workflow.

---

# 🧠 Redis Responsibilities

Redis is not the primary database of the application.

Instead, it is used for **short-lived, high-speed coordination data**,
particularly seat locks.

```text
MongoDB
└── Permanent application data

Redis
└── Temporary seat-lock state
```

This separation is important because:

- MongoDB stores persistent business records.
- Redis provides fast temporary state.
- Redis TTL automatically removes expired seat locks.

---

# 🖥️ Frontend Architecture

The frontend is organised around:

```text
pages
components
contexts
hooks
apis
utils
assets
```

This separates:

- Page-level screens.
- Reusable UI.
- Global state.
- Custom hooks.
- API communication.
- Utility logic.
- Static resources.

---

# 📄 Frontend Pages

```text
src/pages/
├── Checkout.jsx
├── Home.jsx
├── MovieDetails.jsx
├── Movies.jsx
├── Profile.jsx
├── SeatLayout.jsx
└── index.js
```

## Home

Provides the primary movie-booking landing experience.

## Movies

Displays movie listings and filtering/discovery UI.

## Movie Details

Displays movie information and theatre/show availability.

## Seat Layout

Provides the interactive seat-selection interface.

## Checkout

Displays:

- Selected movie.
- Theatre.
- Date.
- Show time.
- Selected seats.
- Ticket price.
- Taxes/convenience fee.
- Total payable amount.
- User information.
- Razorpay payment initiation.

## Profile

Provides the user's account area.

## Booking History

Displays previous confirmed bookings and populated show/movie/theatre
information.

---

# 🧩 Frontend Components

## Authentication

```text
components/auth/
├── StepAccountCreation.jsx
├── StepEmail.jsx
└── StepOTP.jsx
```

These implement the multi-step authentication/verification experience.

## Movies

```text
components/movies/
├── MovieCard.jsx
├── MovieFilters.jsx
├── MovieList.jsx
└── TheaterTimings.jsx
```

Responsibilities include:

- Movie rendering.
- Filtering.
- Movie lists.
- Theatre/show timing presentation.

## Seat Layout

```text
components/seat-layout/
├── Footer.jsx
├── Header.jsx
└── Seat.jsx
```

The `Seat` component represents individual seat UI and state.

## Shared Components

```text
components/shared/
├── BannerSlider.jsx
├── Footer.jsx
├── FullScreenLoader.jsx
├── Header.jsx
└── SignInModel.jsx
```

These are reusable across multiple pages.

---

# 🧠 React Context Architecture

```text
src/context/
├── AuthContext.jsx
├── LocationContext.jsx
└── SeatContext.jsx
```

## AuthContext

Maintains authenticated user state and authentication-related UI
behaviour.

## LocationContext

Maintains the selected geographic location/state used for movie/show
discovery.

## SeatContext

Maintains the selected show and selected seats during the booking
workflow.

Conceptually:

```text
App
│
├── AuthContext
│
├── LocationContext
│
└── SeatContext
      │
      ├── selected show
      └── selected seats
```

---

# 🪝 Custom Hooks

```text
src/hooks/
├── index.js
├── useCountdown.jsx
├── useCurrentStateLocation.js
└── useLoadUser.js
```

### `useCountdown`

Supports countdown behaviour used around the temporary booking period.

### `useCurrentStateLocation`

Supports location detection/selection.

### `useLoadUser`

Loads authenticated user information.

---

# 🌐 API Layer

```text
src/apis/
├── axiosWrapper.js
└── index.js
```

The API layer centralises communication between React and the backend.

The backend base URL is configured using:

```env
VITE_BACKEND_URL=http://localhost:9000/api/v1
```

This makes it possible to change the backend location without modifying
every API call.

---

# 📡 React Query

TanStack React Query is used for server-state operations.

The project uses query/mutation patterns for operations such as:

```text
Get shows
Create payment order
Verify payment
Create booking
```

This provides:

- Loading state management.
- Error handling.
- Request caching.
- Mutation lifecycle handling.
- Cleaner component code.

---

# 💰 Pricing Architecture

The checkout page separates:

```text
Base ticket price
       +
Taxes / convenience fee
       =
Total payable amount
```

The frontend calculates and displays:

```text
Order amount
Taxes & fees
To be paid
```

The backend persists the booking-fee structure:

```text
bookingFee
├── ticketPrice
├── total
└── convenience
```

---

# 🗃️ MongoDB Data Model

The project uses Mongoose models for its persistent entities.

Major collections/entities include:

```text
users
refreshTokenmodels
movies
theaters
shows
bookings
```

## User

Stores account/user information used for authentication and booking
ownership.

## Movie

Stores movie metadata.

## Theatre

Stores theatre information such as:

- Name.
- City.
- State.
- Location.
- Logo.
- Theatre-specific metadata.

## Show

Stores:

```text
movie
theater
location
format
audioType
startTime
date
priceMap
seatLayout
```

## Booking

Stores:

```text
bookingRef
userId
showId
seats
status
bookingDateTime
paymentId
paymentMethod
bookingFee
```

---

# 🌱 Database Seeding

Development data is generated using:

```text
src/scripts/
├── seed-movies.ts
├── seed-shows.ts
└── seed-theaters.ts
```

Corresponding npm commands:

```bash
npm run seed:theaters
npm run seed:movies
npm run seed:shows
```

The seeders are designed to populate the development database with:

- Movies.
- Theatres across supported locations.
- Shows for multiple dates.
- Seat layouts.
- Pricing data.

The show seeder generates repeated time slots and associates them with
movies and theatres.

---

# 🔐 Environment Configuration

## Backend `.env`

The backend requires environment variables for:

```env
PORT=9000

MONGO_CONNECTION_STRING=mongodb://localhost:27017/bookmyscreen-db

NODEMAILER_EMAIL=your_email@example.com
NODEMAILER_PASSWORD=your_gmail_app_password

HASH_SECRET=your_hash_secret
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

FRONTEND_URL=http://localhost:5173

REDIS_HOST=localhost
REDIS_PORT=6379

RAZORPAY_API_KEY=rzp_test_your_key
RAZORPAY_SECRET_KEY=your_test_secret
```

### Important

Never commit:

```text
.env
```

to Git.

Never publish:

```text
RAZORPAY_SECRET_KEY
NODEMAILER_PASSWORD
JWT secrets
HASH_SECRET
```

---

# 🌐 Frontend `.env`

The frontend requires:

```env
VITE_BACKEND_URL=http://localhost:9000/api/v1
VITE_RAZORPAY_API_KEY=rzp_test_your_key
```

The Razorpay **Key ID** is intended for frontend integration. The
Razorpay **Secret Key must remain on the backend**.

---

# 🛠️ Installation and Setup

## Prerequisites

Install the following:

- Node.js
- npm
- MongoDB
- Redis-compatible server such as Memurai on Windows
- Git
- VS Code or another code editor

Razorpay credentials are only required when testing the payment flow.

---

## 1. Clone the Project

```bash
git clone <your-repository-url>
cd "Full-Stack bookMyScreen"
```

---

## 2. Install Backend Dependencies

```bash
cd bms-backend
npm install
```

---

## 3. Install Frontend Dependencies

Open another terminal:

```bash
cd bms-frontend
npm install
```

---

## 4. Configure MongoDB

Make sure MongoDB is running.

Example local connection:

```text
mongodb://localhost:27017/bookmyscreen-db
```

---

## 5. Configure Redis

Make sure Redis/Memurai is running on:

```text
localhost:6379
```

---

## 6. Configure Environment Files

Create:

```text
bms-backend/.env
bms-frontend/.env
```

using the variable templates described above.

---

# 🌱 Database Seeding

From:

```text
bms-backend/
```

run:

```bash
npm run seed:theaters
npm run seed:movies
npm run seed:shows
```

Recommended order:

```text
Theatres
   ↓
Movies
   ↓
Shows
```

This ensures shows have valid movie and theatre references.

---

# ▶️ Running the Application

## Backend

From:

```text
bms-backend/
```

run:

```bash
npm run dev
```

Expected output is similar to:

```text
[Redis] Connected successfully.
Connected to database
Listening on port: 9000
```

## Frontend

From:

```text
bms-frontend/
```

run:

```bash
npm run dev
```

Vite normally makes the application available at:

```text
http://localhost:5173
```

---

# 🧪 Testing the Complete Booking Flow

A complete manual test can be performed as follows.

## Step 1 --- Open the application

```text
http://localhost:5173
```

## Step 2 --- Select location

Choose a supported location/state.

## Step 3 --- Browse movies

Open the Movies page.

## Step 4 --- Open a movie

View movie details and available theatres.

## Step 5 --- Select date

Choose a date with seeded shows.

## Step 6 --- Select theatre and show

Choose a theatre and show time.

## Step 7 --- Select seats

Select available seats.

The application temporarily locks selected seats using Redis/Socket.IO.

## Step 8 --- Open checkout

Review:

```text
Movie
Theatre
Date
Time
Seats
Ticket price
Fees
Total
```

## Step 9 --- Test payment

Use Razorpay **Test Mode**.

Do not use real payment credentials.

## Step 10 --- Verify payment

The backend verifies the Razorpay signature and payment status.

## Step 11 --- Create booking

The backend creates a confirmed booking and marks the selected seats as
booked.

## Step 12 --- Verify booking history

Open the user's profile/booking-history section.

The new booking should appear with its associated movie/show/theatre
information.

---

# 💳 Razorpay Test Mode

The application is configured to support Razorpay's Test Mode.

Test Mode allows the complete payment integration to be tested without
making a real financial transaction.

The frontend receives the Razorpay order from the backend and opens
Razorpay Checkout.

Conceptually:

```text
Frontend
   │
   │ amount
   ▼
Backend
   │
   │ Razorpay Orders API
   ▼
Razorpay
   │
   │ order
   ▼
Frontend
   │
   │ Checkout
   ▼
Razorpay Test Payment
   │
   │ payment response
   ▼
Frontend
   │
   │ verification request
   ▼
Backend
   │
   │ HMAC verification
   ▼
Payment verified
   │
   ▼
Booking creation
```

For security, the Razorpay secret remains on the backend.

---

# 🛡️ Security Considerations

The project includes several security-oriented mechanisms.

## Authentication

Protected routes use authentication middleware.

## Password/Secret Handling

Sensitive values are supplied through environment variables.

## JWT

Access and refresh tokens are separated.

## Payment Verification

The backend verifies Razorpay payment signatures instead of trusting
only frontend payment state.

## Seat Protection

The application checks whether seats are already booked before creating
a booking.

## Redis TTL

Temporary seat locks automatically expire, reducing the risk of
permanently blocked seats.

## CORS

Cross-origin requests are explicitly configured through the backend.

---

# ⚠️ Important Development Note: MongoDB Transactions

The current local development setup uses a regular local MongoDB
deployment.

The booking implementation has been adapted to work without requiring
MongoDB replica-set transactions in this development environment.

For a high-concurrency production deployment, a stronger
atomic/transactional seat-booking strategy should be considered, such
as:

- MongoDB replica sets/transactions.
- Atomic conditional seat updates.
- Carefully designed concurrency controls.
- Idempotent payment/booking processing.

This is particularly important because movie-ticket booking is a
concurrency-sensitive problem.

---

# 🚨 Error Handling

The backend uses Express middleware architecture for error propagation.

Typical flow:

```text
Controller
   │
   ▼
Service
   │
   ├── success → response
   │
   └── error
         │
         ▼
    error middleware
         │
         ▼
     HTTP response
```

The frontend mutation/query layers can then display or log failures.

---

# 🔍 Important API Workflow Examples

## Show Search

The frontend sends movie/location/date information to retrieve grouped
shows.

Conceptually:

```text
GET /api/v1/shows
```

with parameters such as:

```text
movieId
state
date
```

The backend filters shows and groups them by theatre/movie.

## Payment Order

The frontend requests:

```text
POST /api/v1/payment/create-order
```

The backend creates the Razorpay order.

## Booking

After payment verification, the frontend requests:

```text
POST /api/v1/book
```

The backend:

1.  Validates booking data.
2.  Checks seat availability.
3.  Fetches the Razorpay payment.
4.  Confirms the payment is captured.
5.  Saves the booking.
6.  Marks seats as booked.

## Booking History

Authenticated users can request their booking history.

---

# 🧪 Development Commands

## Backend

```bash
npm install
npm run dev
npm run build
npm start
npm run seed:theaters
npm run seed:movies
npm run seed:shows
```

## Frontend

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

---

# 📦 Production Build

## Backend

```bash
cd bms-backend
npm run build
npm start
```

## Frontend

```bash
cd bms-frontend
npm run build
npm run preview
```

For real production deployment, configure:

- Production MongoDB.
- Production Redis.
- HTTPS.
- Production Razorpay credentials.
- Secure cookie/token settings.
- Proper CORS origins.
- Production email credentials.
- Logging and monitoring.
- Atomic seat-booking strategy.

---

# 🧭 Application Navigation

The frontend is conceptually organised around the following user
journey:

```text
Home
 │
 ├── Movies
 │    │
 │    └── Movie Details
 │          │
 │          └── Theatre Timings
 │                │
 │                └── Seat Layout
 │                      │
 │                      └── Checkout
 │                            │
 │                            └── Razorpay
 │                                  │
 │                                  └── Booking
 │
 └── Profile
       │
       └── Booking History
```

---

# 📊 Functional Requirements Summary

Area Functionality

---

Authentication Registration/authentication/OTP/token workflow
User User account and profile
Movies Listing, details, metadata
Locations Location/state-aware discovery
Theatres Theatre records and discovery
Shows Date/location/movie-specific shows
Seats Interactive seat selection
Seat Locking Redis + Socket.IO temporary locks
Checkout Pricing and booking summary
Payment Razorpay Test Mode integration
Verification Razorpay signature/payment verification
Booking Confirmed booking persistence
Seat Update Seats changed to BOOKED
History User-specific booking history
Email Nodemailer + Mailgen
Validation Zod-based validation infrastructure
Database MongoDB + Mongoose
Cache/Locks Redis
Real-Time Socket.IO
Build Vite + TypeScript compiler

---

# 🧱 Engineering Design Principles Demonstrated

The project demonstrates several important software-engineering
concepts.

## Separation of Concerns

Controllers handle HTTP requests while services contain business logic.

## Modular Architecture

Each major domain has its own module:

```text
auth
booking
movie
payment
show
theater
user
```

## Reusable Components

The React application separates reusable components from page-level
screens.

## Server-State Management

TanStack React Query separates server-state operations from UI state.

## Real-Time Coordination

Socket.IO and Redis are used for time-sensitive seat coordination.

## External Service Integration

The application integrates:

- Razorpay.
- SMTP/Gmail.
- Redis.
- MongoDB.

## Data Validation

Validation infrastructure is separated from business logic.

## Environment-Based Configuration

Credentials and deployment-specific values are not hard-coded into the
application.

---

# 🎓 Academic / Engineering Highlights

This project is suitable for demonstrating the following concepts in a
college project, viva, portfolio, or software-engineering report:

### 1. Full-Stack Development

The system integrates frontend, backend, database, caching, real-time
communication, and payment processing.

### 2. REST API Architecture

The React client communicates with the Express backend through HTTP
APIs.

### 3. Database Design

MongoDB/Mongoose is used to model users, movies, theatres, shows, and
bookings.

### 4. Authentication

JWT access/refresh token architecture and OTP verification demonstrate
modern authentication concepts.

### 5. Distributed/Temporary State

Redis demonstrates how short-lived state can be separated from
persistent application data.

### 6. Concurrency

Movie-ticket booking naturally introduces concurrency problems because
multiple users may attempt to select the same seat.

The Redis locking mechanism addresses this at the temporary reservation
stage.

### 7. Payment Security

The project demonstrates server-side payment signature verification
rather than blindly trusting frontend payment results.

### 8. Component-Based UI

React components provide modular and reusable presentation logic.

### 9. State Management

React Context is used for application-level state while React Query
manages server state.

### 10. Software Modularity

The backend is divided by business domains, making the system easier to
understand, maintain, and extend.

---

# 🔮 Future Enhancements

The current system can be extended with:

## 👨‍💼 Admin Dashboard

- Admin authentication.
- Movie management.
- Theatre management.
- Show creation/editing.
- Booking analytics.
- Revenue dashboard.

## 🎫 Digital Tickets

- QR-code ticket generation.
- Ticket PDF generation.
- Email ticket delivery.

## 📧 Notifications

- Booking confirmation email.
- Payment confirmation.
- Cancellation notifications.
- Upcoming-show reminders.

## 💰 Refunds

- Booking cancellation.
- Razorpay refund integration.
- Refund status tracking.

## 🔍 Advanced Search

- Search by title.
- Genre filtering.
- Language filtering.
- Format filtering.
- Rating filtering.

## 📍 Better Location Services

- City-based rather than state-only discovery.
- GPS-based location selection.
- Nearby theatre search.

## 📈 Analytics

- Popular movies.
- Most-booked theatres.
- Peak booking times.
- Revenue reports.
- Seat occupancy analytics.

## 🛡️ Stronger Production Concurrency

- MongoDB replica-set transactions.
- Atomic conditional seat updates.
- Idempotency keys.
- Payment webhook processing.
- Duplicate-payment protection.

## ☁️ Deployment

Possible production architecture:

```text
                    ┌───────────────┐
                    │   CDN / DNS   │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ React/Vite UI │
                    └───────┬───────┘
                            │ HTTPS
                            ▼
                    ┌───────────────┐
                    │ Load Balancer │
                    └───────┬───────┘
                            │
                   ┌────────┴────────┐
                   ▼                 ▼
             ┌──────────┐      ┌──────────┐
             │ Node API │      │ Socket   │
             │ Server   │      │ Server   │
             └────┬─────┘      └────┬─────┘
                  │                 │
             ┌────┴─────────────────┴────┐
             │                           │
             ▼                           ▼
       ┌───────────┐                ┌─────────┐
       │ MongoDB   │                │ Redis   │
       └───────────┘                └─────────┘
                  │
                  ▼
             ┌──────────┐
             │ Razorpay │
             └──────────┘
```

---

# 📋 Project Status

The project currently provides an end-to-end working development
workflow covering:

```text
✅ Authentication
✅ OTP workflow
✅ Movie discovery
✅ Location-aware shows
✅ Theatre discovery
✅ Date-based show selection
✅ Interactive seat selection
✅ Temporary seat locking
✅ Redis integration
✅ Socket.IO integration
✅ Checkout
✅ Razorpay Test Mode
✅ Payment verification
✅ Booking creation
✅ Seat status update
✅ Booking history
```

---

# 🧹 Repository Hygiene

Before pushing the project to GitHub, verify that sensitive files are
excluded.

Recommended:

```gitignore
node_modules/
.env
dist/
```

Do not commit:

```text
.env
Razorpay Secret Key
Gmail App Password
JWT secrets
Database passwords
Private API credentials
```

A safe repository should contain:

```text
.env.example
```

rather than the actual `.env`.

---

# 👨‍💻 Author

**Satinder Singh Sall**

Project:

**bookMyScreen --- Full-Stack Movie Booking System**

Technology focus:

```text
React
TypeScript
Express
MongoDB
Mongoose
Redis
Socket.IO
Razorpay
JWT
Nodemailer
TanStack React Query
Tailwind CSS
Vite
```

---

# 📄 License

This project currently declares:

```text
ISC
```

as its package license.

---

# ⭐ Conclusion

**bookMyScreen** is a complete full-stack cinema-ticket booking
application demonstrating the integration of modern web-development
technologies into a single domain-driven system.

Its architecture combines:

```text
React
   +
Express / TypeScript
   +
MongoDB
   +
Redis
   +
Socket.IO
   +
Razorpay
   +
JWT Authentication
   +
OTP Email Verification
```

The project goes beyond a simple CRUD application by addressing
real-world booking concerns such as **authentication, temporary resource
locking, concurrent seat selection, payment verification, persistent
bookings, and real-time communication**.

It therefore serves as both a practical movie-booking application and a
strong demonstration of full-stack software-engineering principles.

# 🎬 BookMyScreen Movie Booking System Tutorial (MERN Stack)

## 🚀 Features Covered:

- 🎭 **Theatre & Show Management**
- 🎟️ **Movie Listings with Metadata**
- 🪑 **Dynamic Seat Layouts with Real-Time Status**
- 🧾 **Booking with Payment Simulation**
- 🧮 **Concurrency Handling for Seat Booking**
- 🗺️ **Grouped Showtimes by Location & Theatre**
- 🔐 **Auth & Role-Based Access (Admin/Customer)**
- ⚙️ **Clean Architecture**  
  (Services, Controllers, Routes, Validations)
- 📦 **MongoDB + Mongoose Models**
- 💬 **Toast & Modal Feedback UI**

# 🎬 bookMyScreen Backend

> Backend API and server-side infrastructure for **bookMyScreen**, a
> full-stack movie ticket booking platform.
>
> Built with **Node.js, TypeScript, Express, MongoDB, Mongoose, Redis,
> Socket.IO, JWT, Nodemailer, Mailgen, Zod, and Razorpay**.

---

## 📚 Table of Contents

1.  [Overview](#-overview)
2.  [Backend Objectives](#-backend-objectives)
3.  [Backend Features](#-backend-features)
4.  [Architecture](#-architecture)
5.  [Technology Stack](#-technology-stack)
6.  [Dependencies](#-dependencies)
7.  [Backend Project Structure](#-backend-project-structure)
8.  [Application Layers](#-application-layers)
9.  [Configuration](#-configuration)
10. [Database Layer](#-database-layer)
11. [Redis Layer](#-redis-layer)
12. [Authentication Module](#-authentication-module)
13. [User Module](#-user-module)
14. [Movie Module](#-movie-module)
15. [Theatre Module](#-theatre-module)
16. [Show Module](#-show-module)
17. [Seat Management](#-seat-management)
18. [Socket.IO and Real-Time
    Architecture](#-socketio-and-real-time-architecture)
19. [Payment Module](#-payment-module)
20. [Booking Module](#-booking-module)
21. [Booking Transaction Workflow](#-booking-transaction-workflow)
22. [Middleware](#-middleware)
23. [Routing Architecture](#-routing-architecture)
24. [Utilities](#-utilities)
25. [Database Seeding](#-database-seeding)
26. [Environment Variables](#-environment-variables)
27. [Installation](#-installation)
28. [Running the Backend](#-running-the-backend)
29. [Testing the Backend](#-testing-the-backend)
30. [Production Build](#-production-build)
31. [Security](#-security)
32. [Concurrency and Booking Safety](#-concurrency-and-booking-safety)
33. [Error Handling](#-error-handling)
34. [Engineering Highlights](#-engineering-highlights)
35. [Future Enhancements](#-future-enhancements)
36. [Author](#-author)
37. [License](#-license)

---

# 🎬 Overview

The **bookMyScreen backend** is the server-side application responsible
for the business logic and persistent data of the movie-booking
platform.

It provides REST APIs and real-time Socket.IO communication for:

- Authentication.
- OTP verification.
- User management.
- Movie management.
- Theatre management.
- Show management.
- Seat availability.
- Temporary seat locking.
- Razorpay payment processing.
- Payment verification.
- Booking creation.
- Booking history.

The backend communicates with several infrastructure and external
services:

```text
                         ┌──────────────────┐
                         │  React Frontend  │
                         └────────┬─────────┘
                                  │
                     REST API + Socket.IO
                                  │
                                  ▼
                       ┌──────────────────┐
                       │ bookMyScreen API │
                       │ Express + TS     │
                       └────────┬─────────┘
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
        ┌─────────┐        ┌─────────┐       ┌──────────┐
        │ MongoDB │        │  Redis  │       │ Razorpay │
        └─────────┘        └─────────┘       └──────────┘
                                │
                                ▼
                         Temporary locks

                       ┌───────────────┐
                       │ SMTP / Gmail  │
                       └───────────────┘
                                │
                                ▼
                           OTP Emails
```

---

# 🎯 Backend Objectives

The backend is designed to:

- Expose structured REST APIs.
- Keep business logic separate from HTTP controllers.
- Persist application data in MongoDB.
- Provide authentication and authorization.
- Protect booking routes.
- Support OTP-based account verification.
- Manage movie, theatre, and show data.
- Handle seat availability.
- Coordinate temporary seat locks through Redis.
- Broadcast real-time seat state through Socket.IO.
- Integrate Razorpay Test Mode.
- Verify payment signatures server-side.
- Persist confirmed bookings.
- Update permanently booked seats.
- Provide authenticated booking history.
- Support repeatable development database seeding.

---

# ✨ Backend Features

## 🔐 Authentication

- User authentication.
- Email-based OTP workflow.
- OTP generation.
- OTP email delivery.
- Mailgen email templates.
- Nodemailer SMTP integration.
- Access-token infrastructure.
- Refresh-token infrastructure.
- Protected routes.
- Verified-user middleware.

## 👤 User Management

- User persistence.
- Authenticated user retrieval.
- User-specific bookings.
- User ownership of booking records.

## 🎞️ Movie Management

- Movie persistence.
- Movie listing.
- Movie details.
- Movie metadata.
- Validation infrastructure.

## 🏢 Theatre Management

- Theatre persistence.
- Theatre location/state information.
- Theatre metadata.
- Theatre retrieval.
- Development seeding.

## 🕐 Show Management

- Movie-specific shows.
- Theatre-specific shows.
- Date-specific filtering.
- Location/state-specific filtering.
- Show grouping by theatre and movie.
- Multiple show times.
- Show formats.
- Audio types.
- Show-specific pricing.
- Show-specific seat layouts.

## 💺 Seat Management

- Seat layout generation.
- Available seats.
- Booked seats.
- Blocked seats.
- Temporary Redis seat locks.
- Permanent seat booking.
- Double-booking checks.

## ⚡ Real-Time

- Socket.IO server.
- Show-specific rooms.
- Seat-lock events.
- Seat-unlock events.
- Redis-backed temporary locking.

## 💳 Payments

- Razorpay order creation.
- Razorpay Test Mode support.
- Payment signature verification.
- Payment status verification.
- Payment method persistence.
- Payment-linked booking creation.

## 🎟️ Bookings

- Booking reference generation.
- Booking creation.
- Booking status.
- Payment association.
- Seat association.
- User association.
- Show association.
- Booking history.
- Seat state update.

---

# 🏗️ Architecture

The backend uses a **modular architecture** where functionality is
grouped by business domain.

```text
src/
│
├── config
├── middlewares
├── modules
│   ├── auth
│   ├── booking
│   ├── movie
│   ├── payment
│   ├── show
│   ├── theater
│   └── user
├── routes
├── scripts
├── socket
├── utils
├── app.ts
└── server.ts
```

Each business module generally separates:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Model
  ↓
MongoDB
```

Interfaces and validation are used where applicable.

---

# 🧰 Technology Stack

Technology Role

---

Node.js JavaScript runtime
TypeScript Static typing
Express 5 REST API framework
MongoDB Primary persistent database
Mongoose 8 MongoDB ODM
Redis Temporary seat-lock state
ioredis Redis client
Socket.IO Real-time communication
JWT Authentication tokens
Nodemailer SMTP email delivery
Mailgen Email template generation
Razorpay Payment gateway
Zod Data/request validation
Day.js Date/time operations
Nanoid Identifier generation support
CORS Cross-origin request handling
Cookie Parser HTTP cookie parsing
HTTP Errors HTTP error utilities
dotenv Environment configuration
crypto Payment signature verification

---

# 📦 Dependencies

## Runtime Dependencies

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

## Development Dependencies

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

---

# 📁 Backend Project Structure

```text
bms-backend/
│
├── 📁 src/
│   │
│   ├── 📁 config/
│   │   ├── 📄 config.ts
│   │   ├── 📄 db.ts
│   │   └── 📄 redis.ts
│   │
│   ├── 📁 middlewares/
│   │   ├── 📄 auth.middleware.ts
│   │   ├── 📄 error.middleware.ts
│   │   └── 📄 validate.ts
│   │
│   ├── 📁 modules/
│   │   │
│   │   ├── 📁 auth/
│   │   │   ├── 📄 auth.controller.ts
│   │   │   ├── 📄 auth.interface.ts
│   │   │   ├── 📄 auth.route.ts
│   │   │   ├── 📄 otp.service.ts
│   │   │   ├── 📄 refresh.model.ts
│   │   │   └── 📄 token.service.ts
│   │   │
│   │   ├── 📁 booking/
│   │   │   ├── 📄 booking.controller.ts
│   │   │   ├── 📄 booking.interface.ts
│   │   │   ├── 📄 booking.model.ts
│   │   │   ├── 📄 booking.route.ts
│   │   │   └── 📄 booking.service.ts
│   │   │
│   │   ├── 📁 movie/
│   │   │   ├── 📄 movie.controller.ts
│   │   │   ├── 📄 movie.interface.ts
│   │   │   ├── 📄 movie.model.ts
│   │   │   ├── 📄 movie.route.ts
│   │   │   ├── 📄 movie.service.ts
│   │   │   └── 📄 movie.validation.ts
│   │   │
│   │   ├── 📁 payment/
│   │   │   ├── 📄 payement.service.ts
│   │   │   ├── 📄 payment.controller.ts
│   │   │   ├── 📄 payment.interface.ts
│   │   │   └── 📄 payment.route.ts
│   │   │
│   │   ├── 📁 show/
│   │   │   ├── 📄 show.controller.ts
│   │   │   ├── 📄 show.interface.ts
│   │   │   ├── 📄 show.model.ts
│   │   │   ├── 📄 show.routes.ts
│   │   │   ├── 📄 show.service.ts
│   │   │   └── 📄 show.validation.ts
│   │   │
│   │   ├── 📁 theater/
│   │   │   ├── 📄 theater.controller.ts
│   │   │   ├── 📄 theater.interface.ts
│   │   │   ├── 📄 theater.model.ts
│   │   │   ├── 📄 theater.routes.ts
│   │   │   ├── 📄 theater.service.ts
│   │   │   └── 📄 theater.validation.ts
│   │   │
│   │   └── 📁 user/
│   │       ├── 📄 user.controller.ts
│   │       ├── 📄 user.interface.ts
│   │       ├── 📄 user.model.ts
│   │       ├── 📄 user.route.ts
│   │       └── 📄 user.service.ts
│   │
│   ├── 📁 routes/
│   │   └── 📄 index.ts
│   │
│   ├── 📁 scripts/
│   │   ├── 📄 seed-movies.ts
│   │   ├── 📄 seed-shows.ts
│   │   └── 📄 seed-theaters.ts
│   │
│   ├── 📁 socket/
│   │   └── 📄 sockethandlers.ts
│   │
│   ├── 📁 utils/
│   │   └── 📄 index.ts
│   │
│   ├── 📄 app.ts
│   └── 📄 server.ts
│
├── ⚙️ .env.example
├── ⚙️ .gitignore
├── ⚙️ nodemon.json
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── ⚙️ tsconfig.json
```

> **Note:** `payement.service.ts` is the filename currently present in
> the project structure.

---

# 🧱 Application Layers

## 1. Routes

Routes define the API endpoints and connect them to controllers.

```text
HTTP Request
     ↓
Route
     ↓
Middleware
     ↓
Controller
```

## 2. Controllers

Controllers are responsible for:

- Receiving Express requests.
- Accessing authenticated user information.
- Calling services.
- Sending HTTP responses.
- Passing errors to middleware.

## 3. Services

Services contain the core business logic.

Examples:

```text
BookingService
MovieService
ShowService
PaymentService
UserService
```

## 4. Models

Mongoose schemas define persistent MongoDB structures.

## 5. Interfaces

TypeScript interfaces provide compile-time contracts for data
structures.

## 6. Validation

Validation modules provide structured validation for incoming data.

---

# ⚙️ Configuration

```text
src/config/
├── config.ts
├── db.ts
└── redis.ts
```

## `config.ts`

Centralises environment configuration.

It handles:

- Server port.
- MongoDB URL.
- Access-token secret.
- Refresh-token secret.
- Hashing secret.
- Email username.
- Email password.
- Redis host.
- Redis port.
- Razorpay key.
- Razorpay secret.
- Frontend URL.
- Database configuration.

The application reads configuration through environment variables rather
than hard-coding credentials.

---

# 🗃️ Database Layer

MongoDB is the primary persistent database.

Mongoose provides:

- Schemas.
- Models.
- References.
- Queries.
- Population.
- Validation.
- Middleware.
- Database sessions.

The backend uses a local development database such as:

```text
mongodb://localhost:27017/bookmyscreen-db
```

---

# 📊 Main MongoDB Entities

The backend contains modules/models for the major application domains.

```text
User
 │
 └── Booking
       │
       └── Show
            ├── Movie
            └── Theatre
```

Conceptually:

```text
User
  │
  │ 1:N
  ▼
Booking
  │
  │ N:1
  ▼
Show
 ├──────────────┐
 ▼              ▼
Movie         Theatre
```

---

# 👤 User Entity

The user module manages user-related persistence and operations.

User information is used for:

- Authentication.
- Authorization.
- Booking ownership.
- Profile information.
- Booking history.

---

# 🎞️ Movie Entity

Movies represent the content available for booking.

Movie data supports information used by the frontend such as:

- Title.
- Poster URL.
- Duration.
- Format.
- Certification.
- Languages.
- Other movie metadata.

The movie module includes:

```text
movie.controller.ts
movie.interface.ts
movie.model.ts
movie.route.ts
movie.service.ts
movie.validation.ts
```

---

# 🏢 Theatre Entity

The theatre module manages cinema locations.

The theatre data can include:

- Theatre name.
- City.
- State.
- Location.
- Logo.
- Other theatre metadata.

The theatre seeder is responsible for populating development theatre
data.

---

# 🕐 Show Entity

A show connects a movie with a theatre and a particular time/date.

The show structure includes:

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

Supported show formats in the current backend include:

```text
2D
3D
IMAX
PVR PXL
```

The show service supports:

- Creating shows.
- Finding shows by movie/date/location.
- Finding an individual show.
- Updating seat states.
- Grouping shows by theatre/movie.

---

# 🔎 Show Search

The show service constructs a query around:

```text
movie ID
location
date
```

Conceptually:

```text
Movie
  +
Location
  +
Date
   │
   ▼
MongoDB Show Query
   │
   ▼
Matching Shows
   │
   ▼
Populate Movie + Theatre
   │
   ▼
Group by Theatre/Movie
   │
   ▼
Frontend
```

Location matching is implemented with a case-insensitive regular
expression.

---

# 💺 Seat Management

Seats are stored inside the show document as part of `seatLayout`.

A simplified structure is:

```text
seatLayout
[
  {
    row: "A",
    seats: [
      { number: 1, status: "AVAILABLE" },
      { number: 2, status: "AVAILABLE" },
      { number: 3, status: "BOOKED" }
    ]
  }
]
```

Supported persistent seat states:

```text
AVAILABLE
BOOKED
BLOCKED
```

---

# 🔒 Permanent Seat Update

The show service provides:

```text
updateSeatStatus()
```

It:

1.  Finds the show.
2.  Parses seat identifiers such as `A1`.
3.  Finds the corresponding row.
4.  Finds the seat number.
5.  Validates the seat.
6.  Rejects an already-booked seat.
7.  Changes the seat status.
8.  Marks `seatLayout` as modified.
9.  Saves the show document.

This is used when a booking is confirmed.

---

# ⚡ Redis Layer

Redis is used for temporary state rather than the primary permanent
database.

The backend uses **ioredis**.

Configuration:

```text
Host: localhost
Port: 6379
```

On startup, the backend reports Redis connection status.

Conceptually:

```text
MongoDB
└── Permanent data

Redis
└── Temporary seat locks
```

---

# ⏳ Temporary Seat Locks

Seat locks use keys conceptually similar to:

```text
seat-lock:{showId}:{seatId}
```

The lock TTL is approximately:

```text
300 seconds
```

or:

```text
5 minutes
```

This means a temporarily held seat automatically becomes eligible for
release when the lock expires.

A show-level locked-seat set is also maintained by the socket handling
layer.

---

# 🔌 Socket.IO and Real-Time Architecture

Socket.IO provides real-time communication between connected clients and
the backend.

The main socket handler is:

```text
src/socket/sockethandlers.ts
```

The real-time booking layer supports events such as:

```text
join-show
lock-seats
unlock-seats
seat-locked
```

A simplified flow:

```text
Client A
   │
   │ lock seat A1
   ▼
Socket.IO Server
   │
   ▼
Redis
   │
   ├── Temporary seat lock
   └── Show locked-seat state
   │
   ▼
Broadcast
   │
   ▼
Other Clients
```

This allows the UI to react to seat-selection activity in real time.

---

# 🔐 Authentication Module

```text
src/modules/auth/
├── auth.controller.ts
├── auth.interface.ts
├── auth.route.ts
├── otp.service.ts
├── refresh.model.ts
└── token.service.ts
```

The authentication architecture includes:

- Authentication controllers.
- OTP service.
- Token service.
- Refresh-token persistence.
- Authentication routes.

---

# 📧 OTP Email Workflow

The OTP service uses:

```text
Nodemailer
+
Mailgen
+
Gmail SMTP
```

Conceptually:

```text
User
 │
 ▼
Authentication Request
 │
 ▼
OTP Generated
 │
 ▼
Mailgen
 │
 ▼
Nodemailer
 │
 ▼
Gmail SMTP
 │
 ▼
User Email
 │
 ▼
OTP Verification
```

Email credentials are loaded through environment variables.

---

# 🎫 Token Architecture

The project separates:

```text
Access Token
Refresh Token
```

The token service is responsible for token-related operations.

The refresh model provides persistence for refresh-token data.

This supports a longer-lived authentication session without requiring
the access token itself to have an unnecessarily long lifetime.

---

# 🛡️ Protected Routes

The backend includes:

```text
isVerifiedUser
```

middleware.

For example, the booking route follows:

```text
POST /
  │
  ▼
isVerifiedUser
  │
  ▼
createBookingHandler
```

This ensures the booking operation is associated with an authenticated
user.

---

# 💳 Payment Module

```text
src/modules/payment/
├── payement.service.ts
├── payment.controller.ts
├── payment.interface.ts
└── payment.route.ts
```

The payment module integrates Razorpay.

Two major operations are implemented:

```text
Create Razorpay Order
Verify Razorpay Payment Signature
```

---

# 🧾 Razorpay Order Creation

The payment service receives an amount from the application.

The backend converts:

```text
INR
```

into the smallest currency unit expected by Razorpay:

```text
amount × 100
```

The order is created with:

```text
currency = INR
```

and a generated receipt identifier.

---

# 🔏 Payment Signature Verification

Payment verification uses HMAC-SHA256.

The signature input is conceptually:

```text
razorpay_order_id
        +
        "|"
        +
razorpay_payment_id
```

The backend creates an HMAC using the Razorpay secret and compares the
generated signature with the signature returned by Razorpay.

```text
Razorpay Response
       │
       ├── order_id
       ├── payment_id
       └── signature
               │
               ▼
       Backend HMAC-SHA256
               │
               ▼
        Signature Match?
          │         │
         YES        NO
          │         │
          ▼         ▼
       Verified   Rejected
```

The Razorpay secret must never be exposed to the frontend.

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

The booking module is responsible for permanent booking persistence.

---

# 📋 Booking Data Model

A booking contains:

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

Booking statuses:

```text
CONFIRMED
FAILED
CANCELLED
```

The booking model also uses timestamps.

---

# 🔄 Booking Transaction Workflow

The booking service performs the following sequence:

```text
1. Validate booking data
          ↓
2. Generate booking reference
          ↓
3. Start database session
          ↓
4. Check existing confirmed seats
          ↓
5. Fetch Razorpay payment
          ↓
6. Confirm payment is captured
          ↓
7. Create booking
          ↓
8. Update show seat status
          ↓
9. Commit
          ↓
10. Return booking
```

The intended business rule is:

> A booking should only become confirmed after the payment has been
> successfully verified and the selected seats can be booked.

---

# 💰 Payment Verification During Booking

The booking service does an additional server-side check by fetching the
Razorpay payment using the payment ID.

It checks:

```text
paymentDetails.status === "captured"
```

Only a captured payment proceeds to booking creation.

This creates two complementary layers:

```text
Payment Signature Verification
             +
Payment Status Verification
             ↓
       Booking Eligibility
```

---

# 🧮 Booking Fee Structure

The booking model stores:

```text
bookingFee
├── ticketPrice
├── total
└── convenience
```

This allows the booking record to retain the financial breakdown
associated with the ticket.

---

# 🧾 Booking Reference

Every booking receives a generated booking reference through the
utility:

```text
generateBookingReference()
```

The booking reference is marked as unique in the Mongoose schema.

Conceptually:

```text
Booking
├── MongoDB _id
└── bookingRef
```

The booking reference can therefore be used as a human-readable booking
identifier.

---

# 📚 Booking History

Authenticated users can retrieve their bookings.

The booking service queries by:

```text
userId
```

and populates:

```text
Booking
   ↓
Show
   ├── Movie
   └── Theatre
```

The result is sorted by creation time so newer bookings are returned
first.

---

# 🛣️ Routing Architecture

The central route layer is:

```text
src/routes/index.ts
```

Individual modules expose their own route files.

Examples:

```text
auth.route.ts
booking.route.ts
movie.route.ts
payment.route.ts
show.routes.ts
theater.routes.ts
user.route.ts
```

A typical request path is:

```text
Client
  ↓
Express App
  ↓
API Router
  ↓
Module Router
  ↓
Middleware
  ↓
Controller
  ↓
Service
  ↓
Model
  ↓
MongoDB / External Service
```

---

# 🧩 Middleware

```text
src/middlewares/
├── auth.middleware.ts
├── error.middleware.ts
└── validate.ts
```

## Authentication Middleware

Protects routes that require a verified user.

## Error Middleware

Receives errors propagated through Express and provides centralised
error handling.

## Validation Middleware

Supports structured request validation.

---

# 🧰 Utilities

```text
src/utils/
└── index.ts
```

The utility layer contains reusable application-level functions.

Examples include:

- Booking reference generation.
- Seat-layout generation.
- Price-map generation.
- Show grouping.

A key utility is:

```text
groupShowsByTheatreAndMovie()
```

which transforms raw show documents into a grouped structure suitable
for theatre/show presentation.

---

# 🌱 Database Seeding

Development data can be populated using:

```text
src/scripts/
├── seed-movies.ts
├── seed-shows.ts
└── seed-theaters.ts
```

NPM scripts:

```bash
npm run seed:theaters
npm run seed:movies
npm run seed:shows
```

Recommended execution order:

```text
seed:theaters
      ↓
seed:movies
      ↓
seed:shows
```

This ensures shows can reference existing movies and theatres.

---

# 🎭 Show Seeder

The show seeder creates development shows by combining:

```text
Movies
×
Theatres
×
Dates
×
Time Slots
```

Conceptually:

```text
Movie 1 ─┬─ Theatre 1 ─┬─ Date 1 ─┬─ Time
         │              ├─ Date 2 ─┼─ Time
         │              └─ ...
         │
         ├─ Theatre 2
         │
         └─ ...
```

The seeded show includes:

- Movie reference.
- Theatre reference.
- Location.
- Format.
- Audio type.
- Start time.
- Date.
- Price map.
- Seat layout.

---

# 🌍 Location-Aware Data

Theatre and show seeding supports multiple Indian states and cities.

Show retrieval uses the theatre/state location to return relevant shows
for the selected location.

This allows a flow such as:

```text
Location: Odisha
       ↓
Movie
       ↓
Theatres in Odisha
       ↓
Available Shows
```

---

# 🔐 Environment Variables

Create:

```text
bms-backend/.env
```

Example development configuration:

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
RAZORPAY_SECRET_KEY=your_razorpay_test_secret
```

> Never commit the real `.env` file or private credentials to Git.

---

# 🔒 Secret Management

The following values must remain private:

```text
NODEMAILER_PASSWORD
HASH_SECRET
ACCESS_TOKEN_SECRET
REFRESH_TOKEN_SECRET
RAZORPAY_SECRET_KEY
Database credentials
```

Only the Razorpay **Key ID** is intended to be exposed to the frontend
as part of the checkout integration.

---

# 🛠️ Installation

## Prerequisites

Install:

- Node.js.
- npm.
- MongoDB.
- Redis or a Redis-compatible Windows service such as Memurai.
- Git.

Razorpay Test Mode credentials are required for testing the payment
workflow.

---

## 1. Enter Backend Directory

```bash
cd bms-backend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Create `.env`

Create:

```text
bms-backend/.env
```

and populate the required variables.

## 4. Start MongoDB

Ensure MongoDB is running.

## 5. Start Redis

Ensure Redis/Memurai is running on:

```text
localhost:6379
```

---

# 🌱 Seed the Database

Run:

```bash
npm run seed:theaters
npm run seed:movies
npm run seed:shows
```

If the seed data is regenerated, existing seeded documents may be
replaced depending on the seeder implementation.

---

# ▶️ Run Development Server

```bash
npm run dev
```

Expected startup output is similar to:

```text
[Redis] Connected successfully.
Connected to database
Listening on port: 9000
```

The API is available under:

```text
http://localhost:9000
```

with the frontend configured against:

```text
http://localhost:9000/api/v1
```

---

# 🧪 Backend Testing Workflow

The backend can be tested through the complete application flow or
through an API client such as Postman/Insomnia.

Recommended sequence:

```text
1. Start MongoDB
2. Start Redis
3. Start backend
4. Seed development data
5. Start frontend
6. Register/login
7. Select movie
8. Select show
9. Select seats
10. Complete Test Mode payment
11. Verify payment
12. Create booking
13. Inspect MongoDB
```

---

# 🔍 Database Verification

After a successful booking, verify the relevant MongoDB collections.

The booking should contain:

```text
bookingRef
userId
showId
seats
status = CONFIRMED
bookingDateTime
paymentId
paymentMethod
bookingFee
```

The corresponding show should have the selected seats marked:

```text
BOOKED
```

---

# 💳 Razorpay Test Mode

The backend supports Razorpay Test Mode.

A typical flow is:

```text
Frontend
   │
   │ amount
   ▼
POST /payment/create-order
   │
   ▼
Backend
   │
   ▼
Razorpay
   │
   ▼
Order ID
   │
   ▼
Frontend Checkout
   │
   ▼
Test Payment
   │
   ▼
Payment Response
   │
   ▼
Signature Verification
   │
   ▼
Booking API
   │
   ▼
Payment Status Check
   │
   ▼
MongoDB Booking
```

Test Mode should be used for development rather than real financial
transactions.

---

# 🛡️ Security Architecture

The backend includes several security mechanisms.

## Authentication

Protected operations require an authenticated user.

## Token Separation

Access and refresh tokens have separate responsibilities and secrets.

## Environment Secrets

Private credentials are loaded from environment variables.

## Payment Signature Verification

Razorpay signatures are verified server-side using HMAC-SHA256.

## Payment Status Verification

The booking service verifies that the Razorpay payment is captured.

## Seat Availability Verification

The booking service checks for an existing confirmed booking containing
any requested seat.

## Temporary Seat Locks

Redis locks reduce simultaneous seat-selection conflicts during
checkout.

---

# ⚔️ Concurrency and Booking Safety

Movie booking is inherently concurrency-sensitive.

Two users may attempt:

```text
User A → Seat A1
User B → Seat A1
```

at approximately the same time.

The system addresses this through multiple layers:

```text
Layer 1
Redis temporary seat locks
        ↓
Layer 2
Existing confirmed booking check
        ↓
Layer 3
Seat status check
        ↓
Layer 4
Permanent BOOKED state
```

This provides a defence-in-depth approach to seat availability.

---

# 🗄️ Database Session / Transaction Considerations

The booking service is structured around a Mongoose session and
transaction-style workflow:

```text
Start Session
     ↓
Start Transaction
     ↓
Check Seats
     ↓
Verify Payment
     ↓
Create Booking
     ↓
Update Seats
     ↓
Commit
```

If an error occurs, the service attempts to abort the transaction and
rethrows the error.

For a production deployment, the MongoDB topology and transaction
configuration should be explicitly designed and tested for the chosen
production environment.

---

# 🚨 Error Handling

Errors are propagated from:

```text
Service
   ↓
Controller
   ↓
Express Error Middleware
```

Typical backend failures include:

```text
Invalid booking data
Show not found
Invalid seat row
Invalid seat number
Seat already booked
Payment not successful
Database connection failure
Razorpay API failure
Authentication failure
Validation failure
```

The central error middleware provides a single place for handling
application errors.

---

# 🧪 Development Scripts

The backend `package.json` provides:

```json
{
  "scripts": {
    "dev": "nodemon",
    "build": "tsc",
    "start": "node dist/server.ts",
    "seed:theaters": "ts-node src/scripts/seed-theaters.ts",
    "seed:movies": "ts-node src/scripts/seed-movies.ts",
    "seed:shows": "ts-node src/scripts/seed-shows.ts"
  }
}
```

## Development

```bash
npm run dev
```

## Compile TypeScript

```bash
npm run build
```

## Start

```bash
npm start
```

## Seed Theatres

```bash
npm run seed:theaters
```

## Seed Movies

```bash
npm run seed:movies
```

## Seed Shows

```bash
npm run seed:shows
```

---

# 📦 Production Build

Build the TypeScript application:

```bash
npm run build
```

Then start the compiled application:

```bash
npm start
```

Before deploying, configure:

- Production MongoDB.
- Production Redis.
- Production Razorpay credentials.
- Production email service.
- HTTPS.
- Secure CORS configuration.
- Secure authentication settings.
- Production logging.
- Monitoring.
- Backup strategy.

---

# 🏭 Production Architecture

A scalable deployment can follow:

```text
                       Internet
                           │
                           ▼
                    ┌─────────────┐
                    │ Reverse     │
                    │ Proxy / CDN │
                    └──────┬──────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ Node/Express API│
                  │ + Socket.IO     │
                  └───────┬─────────┘
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
        ┌─────────┐  ┌─────────┐  ┌──────────┐
        │ MongoDB │  │  Redis  │  │ Razorpay │
        └─────────┘  └─────────┘  └──────────┘
             │
             ▼
       Persistent Data
```

---

# 🧠 Engineering Principles

## Separation of Concerns

HTTP handling and business logic are separated.

## Domain-Based Modules

Each major business area has its own module.

## Strong Typing

TypeScript interfaces and types reduce accidental data mismatches.

## Persistence Abstraction

Mongoose models isolate MongoDB operations from controllers.

## Real-Time Coordination

Socket.IO handles live communication while Redis handles temporary lock
state.

## External-Service Integration

The backend communicates with payment and email providers through
dedicated services.

## Environment Configuration

Deployment-specific configuration is externalised from application
source code.

---

# 🎓 Academic / Software Engineering Highlights

The backend demonstrates several concepts useful for academic
evaluation, viva presentations, and portfolio projects.

### RESTful API Design

Express routes expose backend functionality to the frontend.

### Modular Architecture

The system is separated into independent business modules.

### ODM-Based Database Access

Mongoose provides structured access to MongoDB.

### Authentication

JWT-based access/refresh token infrastructure is combined with OTP
verification.

### Real-Time Communication

Socket.IO provides live communication for seat interactions.

### Caching / Temporary State

Redis provides fast temporary state for seat locks.

### Payment Gateway Integration

Razorpay demonstrates integration with an external payment provider.

### Cryptographic Verification

HMAC-SHA256 is used to verify payment signatures.

### Concurrency Management

Temporary locks and booking-time checks address simultaneous
seat-selection attempts.

### Transaction-Oriented Booking

The booking service groups critical database operations into a
session-based workflow.

### Service-Oriented Business Logic

Core operations are implemented inside service modules instead of
controllers.

---

# 🔬 Backend Request Lifecycle

A typical authenticated booking request follows:

```text
HTTP Request
     │
     ▼
Express
     │
     ▼
Router
     │
     ▼
Authentication Middleware
     │
     ▼
Booking Controller
     │
     ▼
Booking Service
     │
     ├── MongoDB
     │
     ├── Razorpay
     │
     └── Show Service
             │
             ▼
          MongoDB
     │
     ▼
HTTP Response
```

---

# 📈 Scalability Considerations

For larger workloads, the backend can be expanded with:

- Horizontal Node.js instances.
- Redis adapter for Socket.IO across multiple servers.
- MongoDB replica sets.
- MongoDB indexes tuned to booking/search queries.
- Queue-based email processing.
- Payment webhooks.
- Idempotent booking/payment operations.
- Centralised logging.
- Distributed tracing.
- Rate limiting.
- API versioning.
- Background workers.

---

# 🔮 Future Backend Enhancements

## 👨‍💼 Admin APIs

- Admin authentication.
- Movie CRUD.
- Theatre CRUD.
- Show CRUD.
- User administration.
- Booking administration.

## 💰 Payment Enhancements

- Razorpay webhooks.
- Refund processing.
- Payment reconciliation.
- Idempotency support.
- Duplicate payment protection.

## 🎫 Ticket Generation

- QR-code tickets.
- PDF ticket generation.
- Email ticket delivery.

## 📧 Notification System

- Booking confirmation.
- Payment confirmation.
- Cancellation emails.
- Upcoming-show reminders.

## 📊 Analytics APIs

- Revenue analytics.
- Occupancy analytics.
- Popular movies.
- Popular theatres.
- Daily/weekly/monthly booking reports.

## 🔒 Advanced Security

- Rate limiting.
- Request sanitisation.
- Stronger password policies.
- Session/device management.
- Audit logs.
- Security headers.
- Production secret management.

---

# 🧹 Repository Hygiene

The backend repository should not commit:

```text
.env
node_modules/
dist/
```

A suitable `.gitignore` should protect:

```text
node_modules/
.env
dist/
```

The repository should contain:

```text
.env.example
```

with placeholder values rather than real credentials.

---

# 📋 Backend Capability Summary

Capability Implementation

---

HTTP Server Express
Language TypeScript
Database MongoDB
ODM Mongoose
Authentication JWT
OTP Nodemailer + Mailgen
Refresh Tokens Mongoose model
Validation Zod infrastructure
Cache/Locks Redis
Redis Client ioredis
Real-Time Socket.IO
Payments Razorpay
Payment Security HMAC-SHA256
Movies Movie module
Theatres Theatre module
Shows Show module
Seats Show seat layout
Bookings Booking module
User History Booking queries
Seeding TypeScript seed scripts
Configuration dotenv

---

# 📊 Backend Module Map

```text
                         bookMyScreen Backend
                                  │
          ┌───────────────────────┼────────────────────────┐
          │                       │                        │
          ▼                       ▼                        ▼
       AUTH                    CONTENT                 BOOKING
          │                       │                        │
    ┌─────┴─────┐        ┌────────┼────────┐        ┌──────┴──────┐
    │           │        │        │        │        │             │
   OTP        JWT      Movie   Theatre    Show    Payment       Booking
    │           │                              │        │           │
    └───────────┘                              │        │           │
                                               └────────┴───────────┘
                                                        │
                                                        ▼
                                                   Seat Status
                                                        │
                                       ┌────────────────┴─────────────┐
                                       ▼                              ▼
                                   MongoDB                         Redis
                                       │                              │
                                  Permanent                     Temporary
                                    State                          Locks
```

---

# 📌 Project Status

The backend currently supports an end-to-end working movie-booking flow:

```text
✅ Express API
✅ TypeScript
✅ MongoDB
✅ Mongoose
✅ Authentication
✅ OTP email workflow
✅ JWT access/refresh token infrastructure
✅ Movie module
✅ Theatre module
✅ Show module
✅ Seat layouts
✅ Redis integration
✅ Temporary seat locking
✅ Socket.IO real-time events
✅ Razorpay Test Mode
✅ Payment order creation
✅ Payment signature verification
✅ Payment status verification
✅ Booking creation
✅ Seat status update
✅ Booking history
✅ Database seed scripts
```

---

# 👨‍💻 Author

**Satinder Singh Sall**

Project:

**bookMyScreen --- Full-Stack Movie Booking System**

Backend technology focus:

```text
Node.js
TypeScript
Express
MongoDB
Mongoose
Redis
Socket.IO
Razorpay
JWT
Nodemailer
Mailgen
Zod
```

---

# 📄 License

The backend package currently declares:

```text
ISC
```

as its license.

---

# ⭐ Conclusion

The **bookMyScreen backend** provides the server-side foundation for a
complete online movie ticket-booking platform.

It combines:

```text
TypeScript
     +
Express
     +
MongoDB
     +
Mongoose
     +
Redis
     +
Socket.IO
     +
JWT
     +
OTP Email
     +
Razorpay
```

The most important engineering aspect is that the backend does not treat
booking as a simple database insert. It combines **authentication,
temporary seat locking, seat-availability checks, payment verification,
persistent booking creation, and seat-state updates** into one
coordinated workflow.

This makes the backend a strong practical demonstration of modern
full-stack backend engineering, database modelling, real-time
communication, third-party service integration, and concurrency-aware
resource booking.

# 🎬 bookMyScreen Frontend

> Modern React frontend for **bookMyScreen**, a full-stack movie ticket
> booking platform.
>
> Built with **React 19, Vite 7, React Router, TanStack React Query,
> Axios, Tailwind CSS, Socket.IO Client, Day.js, date-fns, Swiper, React
> Slick, React Icons, React Hot Toast, and Notistack**.

---

## 📚 Table of Contents

1.  [Overview](#-overview)
2.  [Frontend Objectives](#-frontend-objectives)
3.  [Key Features](#-key-features)
4.  [Technology Stack](#-technology-stack)
5.  [Libraries and Dependencies](#-libraries-and-dependencies)
6.  [Complete Frontend Structure](#-complete-frontend-structure)
7.  [Application Architecture](#-application-architecture)
8.  [Pages](#-pages)
9.  [Components](#-components)
10. [Authentication UI](#-authentication-ui)
11. [Movie Discovery](#-movie-discovery)
12. [Location Management](#-location-management)
13. [Theatre and Show Timings](#-theatre-and-show-timings)
14. [Seat Layout](#-seat-layout)
15. [Real-Time Seat Locking](#-real-time-seat-locking)
16. [Checkout](#-checkout)
17. [Razorpay Integration](#-razorpay-integration)
18. [Booking History](#-booking-history)
19. [API Architecture](#-api-architecture)
20. [React Query](#-react-query)
21. [Context Architecture](#-context-architecture)
22. [Custom Hooks](#-custom-hooks)
23. [Routing](#-routing)
24. [Assets](#-assets)
25. [Environment Variables](#-environment-variables)
26. [Installation](#-installation)
27. [Running the Frontend](#-running-the-frontend)
28. [Build and Preview](#-build-and-preview)
29. [Testing the User Journey](#-testing-the-user-journey)
30. [Frontend Architecture Diagram](#-frontend-architecture-diagram)
31. [Security Considerations](#-security-considerations)
32. [Performance and UX](#-performance-and-ux)
33. [Academic / Engineering
    Highlights](#-academic--engineering-highlights)
34. [Future Enhancements](#-future-enhancements)
35. [Project Status](#-project-status)
36. [Author](#-author)
37. [License](#-license)

---

# 🎬 Overview

The **bookMyScreen frontend** is a single-page React application that
provides the complete client-side interface for discovering movies and
booking cinema tickets.

It communicates with the backend through:

```text
REST APIs
   +
Socket.IO
```

and integrates Razorpay Checkout for the payment stage.

The frontend is responsible for:

- Rendering the user interface.
- Managing authentication state.
- Managing location state.
- Displaying movies.
- Displaying theatres and shows.
- Managing seat selection.
- Coordinating temporary seat-lock interactions.
- Presenting checkout information.
- Starting Razorpay Checkout.
- Sending payment/booking information to the backend.
- Displaying booking history.
- Providing loading, error, and notification states.

---

# 🎯 Frontend Objectives

The frontend is designed to provide a complete and intuitive
cinema-booking experience.

Primary objectives:

- Build a responsive component-based UI.
- Provide clear movie discovery.
- Support location-aware show discovery.
- Make theatre/show selection simple.
- Provide an interactive cinema seat layout.
- Reflect temporary seat-lock states in real time.
- Provide a structured checkout screen.
- Integrate Razorpay Test Mode.
- Display successful bookings in the user profile.
- Keep API/server state separate from local UI state.
- Provide reusable React components and hooks.

---

# ✨ Key Features

## 🏠 Home

- Main landing page.
- Banner/slider content.
- Recommended content.
- Live-event section.
- Shared navigation.
- Location-aware browsing.

## 👤 Authentication

- Account creation flow.
- Email step.
- OTP verification.
- Sign-in modal.
- Authenticated user state.
- User loading support.
- Protected booking experience.

## 🎞️ Movies

- Movie listing.
- Movie cards.
- Movie filtering UI.
- Movie details.
- Movie metadata presentation.
- Location-aware theatre/show discovery.

## 📍 Location

- Current/selected location support.
- State/location context.
- Location-aware show queries.

## 🏢 Theatres

- Theatre listing.
- Theatre logo display.
- Theatre names.
- Theatre grouping.
- Show-time presentation.

## 🕐 Shows

- Date selection.
- Seven-day show-date interface.
- Show filtering by movie/location/date.
- Theatre grouping.
- Multiple show times.
- Audio information.

## 💺 Seats

- Interactive seat layout.
- Seat selection.
- Seat availability.
- Temporary locking.
- Booking state representation.
- Countdown support.

## ⚡ Real-Time

- Socket.IO client.
- Show room participation.
- Seat lock events.
- Seat unlock events.
- Real-time seat state communication.

## 💳 Checkout

- Selected movie/show summary.
- Selected seats.
- Ticket pricing.
- Convenience/tax calculation.
- Total payable amount.
- User information.
- Razorpay payment initiation.

## 🎟️ Bookings

- Booking creation.
- Booking success feedback.
- Navigation to booking history.
- User-specific booking history.
- Movie/show/theatre details.

---

# 🧰 Technology Stack

Technology Purpose

---

React 19 UI framework
Vite 7 Development server and build tool
React Router 7 Client-side routing
Axios REST API communication
TanStack React Query Server-state management
Tailwind CSS 4 Utility-first styling
Socket.IO Client Real-time communication
Day.js Date/show-date handling
date-fns Date utilities
React Icons Iconography
React Hot Toast Toast notifications
Notistack Notification infrastructure
Swiper Touch-friendly sliders
React Slick Carousel/slider support
Slick Carousel Slider dependency
React Spinners Loading indicators

---

# 📦 Libraries and Dependencies

## Runtime Dependencies

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

## Development Dependencies

```json
{
  "@eslint/js": "^9.29.0",
  "@types/react": "^19.1.8",
  "@types/react-dom": "^19.1.6",
  "@vitejs/plugin-react": "^4.5.2",
  "eslint": "^9.29.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.2.0",
  "vite": "^7.0.0"
}
```

---

# 📁 Complete Frontend Structure

```text
bms-frontend/
│
├── 📁 public/
│   └── 🖼️ vite.svg
│
├── 📁 src/
│   │
│   ├── 📁 apis/
│   │   ├── 📄 axiosWrapper.js
│   │   └── 📄 index.js
│   │
│   ├── 📁 assets/
│   │   ├── 🖼️ ads1.png
│   │   ├── 🖼️ banner1.jpg
│   │   ├── 📄 banner2.avif
│   │   ├── 📄 banner3.avif
│   │   ├── 📄 banner4.avif
│   │   ├── 🖼️ bookMyScreen.png
│   │   ├── 📄 cinepolis.avif
│   │   ├── 🖼️ divider-img.jpg
│   │   ├── 📄 dragon.avif
│   │   ├── 📄 e1.avif
│   │   ├── 📄 e2.avif
│   │   ├── 📄 e3.avif
│   │   ├── 📄 e4.avif
│   │   ├── 📄 e5.avif
│   │   ├── 📄 et00432498-rxzbzvumal-portrait.avif
│   │   ├── 📄 inox.avif
│   │   ├── 📄 m1.avif
│   │   ├── 📄 m10.avif
│   │   ├── 📄 m11.avif
│   │   ├── 📄 m12.avif
│   │   ├── 📄 m2.avif
│   │   ├── 📄 m3.avif
│   │   ├── 📄 m4.avif
│   │   ├── 📄 m5.avif
│   │   ├── 📄 m6.avif
│   │   ├── 📄 m7.avif
│   │   ├── 📄 m8.avif
│   │   ├── 📄 m9.avif
│   │   ├── 🖼️ main-icon-white.png
│   │   ├── 🖼️ main-icon.png
│   │   ├── 📄 metro.avif
│   │   ├── 🖼️ pin.gif
│   │   ├── 📄 pvr.avif
│   │   ├── 🖼️ screen.png
│   │   ├── 🖼️ smalll-logo.png
│   │   ├── 🖼️ symbolic-icon.png
│   │   └── 🖼️ travel.gif
│   │
│   ├── 📁 components/
│   │   │
│   │   ├── 📁 auth/
│   │   │   ├── 📄 StepAccountCreation.jsx
│   │   │   ├── 📄 StepEmail.jsx
│   │   │   └── 📄 StepOTP.jsx
│   │   │
│   │   ├── 📁 movies/
│   │   │   ├── 📄 MovieCard.jsx
│   │   │   ├── 📄 MovieFilters.jsx
│   │   │   ├── 📄 MovieList.jsx
│   │   │   └── 📄 TheaterTimings.jsx
│   │   │
│   │   ├── 📁 profile/
│   │   │   └── 📄 BookingHistory.jsx
│   │   │
│   │   ├── 📁 seat-layout/
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 Header.jsx
│   │   │   └── 📄 Seat.jsx
│   │   │
│   │   ├── 📁 shared/
│   │   │   ├── 📄 BannerSlider.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   ├── 📄 FullScreenLoader.jsx
│   │   │   ├── 📄 Header.jsx
│   │   │   └── 📄 SignInModel.jsx
│   │   │
│   │   ├── 📄 LiveEvents.jsx
│   │   ├── 📄 Recommended.jsx
│   │   └── 📄 index.js
│   │
│   ├── 📁 context/
│   │   ├── 📄 AuthContext.jsx
│   │   ├── 📄 LocationContext.jsx
│   │   └── 📄 SeatContext.jsx
│   │
│   ├── 📁 hooks/
│   │   ├── 📄 index.js
│   │   ├── 📄 useCountdown.jsx
│   │   ├── 📄 useCurrentStateLocation.js
│   │   └── 📄 useLoadUser.js
│   │
│   ├── 📁 pages/
│   │   ├── 📄 Checkout.jsx
│   │   ├── 📄 Home.jsx
│   │   ├── 📄 MovieDetails.jsx
│   │   ├── 📄 Movies.jsx
│   │   ├── 📄 Profile.jsx
│   │   ├── 📄 SeatLayout.jsx
│   │   └── 📄 index.js
│   │
│   ├── 📁 utils/
│   │   ├── 📄 constants.js
│   │   ├── 📄 index.js
│   │   └── 📄 socket.js
│   │
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
│
├── ⚙️ .env.example
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── ⚙️ vite.config.js
```

---

# 🏗️ Application Architecture

The frontend follows a component-oriented architecture.

```text
                     React Application
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
           Pages       Components      Contexts
             │              │              │
             │              │              ├── Auth
             │              │              ├── Location
             │              │              └── Seats
             │              │
             └──────────────┼──────────────┐
                            │              │
                            ▼              ▼
                          Hooks          APIs
                            │              │
                            │              ▼
                            │        Express Backend
                            │
                            ▼
                       React Query
                            │
                            ▼
                    Server State / Cache
```

---

# 📄 Pages

```text
src/pages/
├── Home.jsx
├── Movies.jsx
├── MovieDetails.jsx
├── SeatLayout.jsx
├── Checkout.jsx
├── Profile.jsx
└── index.js
```

## 🏠 `Home.jsx`

The landing page for the application.

It provides access to:

- Main navigation.
- Promotional/banner content.
- Recommended content.
- Live events.
- Movie discovery.

---

# 🎞️ `Movies.jsx`

The movie listing interface.

Responsibilities include:

- Fetching/displaying movies.
- Rendering movie cards.
- Applying filters.
- Navigating to movie details.

---

# 🎬 `MovieDetails.jsx`

Displays information about an individual movie and connects movie
discovery to theatre/show selection.

Typical flow:

```text
Movie Details
      ↓
Select Date
      ↓
View Theatre Timings
      ↓
Select Show
```

---

# 🏢 `TheaterTimings.jsx`

Located at:

```text
src/components/movies/TheaterTimings.jsx
```

This component handles:

- Seven-day date selection.
- Selected date formatting.
- Show API requests.
- Theatre grouping.
- Show-time buttons.
- Audio information.
- Navigation to seat layout.

The show query is based on:

```text
movieId
location
date
```

This allows the interface to display only relevant shows.

---

# 💺 `SeatLayout.jsx`

Provides the cinema seating interface.

It works with:

```text
Seat
Header
Footer
SeatContext
Socket.IO
```

The page is responsible for:

- Displaying the seat layout.
- Handling seat selection.
- Communicating seat-lock state.
- Maintaining selected seats.
- Navigating to checkout.

---

# 💳 `Checkout.jsx`

The checkout page consolidates the booking information before payment.

It displays:

```text
Movie
Theatre
Show
Selected Seats
Ticket Price
Taxes / Convenience Fee
Total
User Details
```

The payment workflow is:

```text
Checkout
   ↓
Load Razorpay SDK
   ↓
Create Order
   ↓
Open Razorpay Checkout
   ↓
Receive Payment Response
   ↓
Verify Payment
   ↓
Create Booking
   ↓
Navigate to Booking History
```

---

# 👤 `Profile.jsx`

Provides the user's profile area and access to booking information.

The profile experience connects to:

```text
BookingHistory.jsx
```

---

# 🧩 Components

## Authentication Components

```text
components/auth/
├── StepAccountCreation.jsx
├── StepEmail.jsx
└── StepOTP.jsx
```

These components create a multi-step account/verification UI.

Conceptually:

```text
Email
  ↓
Account Details
  ↓
OTP
  ↓
Authenticated User
```

---

# 🎞️ Movie Components

```text
components/movies/
├── MovieCard.jsx
├── MovieFilters.jsx
├── MovieList.jsx
└── TheaterTimings.jsx
```

## `MovieCard`

Reusable movie presentation component.

## `MovieFilters`

Provides movie discovery/filter UI.

## `MovieList`

Renders the movie collection.

## `TheaterTimings`

Connects movie selection with available shows.

---

# 💺 Seat Components

```text
components/seat-layout/
├── Header.jsx
├── Footer.jsx
└── Seat.jsx
```

The `Seat` component represents an individual cinema seat and its
current UI state.

---

# 🧱 Shared Components

```text
components/shared/
├── BannerSlider.jsx
├── Footer.jsx
├── FullScreenLoader.jsx
├── Header.jsx
└── SignInModel.jsx
```

These components provide common application UI.

Examples:

- Header/navigation.
- Footer.
- Authentication modal.
- Loading state.
- Promotional slider.

---

# 🎯 Additional Components

```text
LiveEvents.jsx
Recommended.jsx
```

These support the home/discovery experience.

---

# 🔐 Authentication UI

The authentication experience is divided into steps rather than being
implemented as one large component.

```text
StepEmail
    ↓
StepAccountCreation
    ↓
StepOTP
```

The global authentication state is managed through:

```text
AuthContext.jsx
```

This allows components throughout the application to access the
authenticated user state.

---

# 📍 Location Management

The application contains:

```text
LocationContext.jsx
useCurrentStateLocation.js
```

Location information is used when retrieving shows.

Conceptual data flow:

```text
Selected Location
       ↓
LocationContext
       ↓
Movie / Theatre Show UI
       ↓
API Query
       ↓
Backend
       ↓
Location-specific Shows
```

---

# 🕐 Show Date Management

The theatre timing interface presents a seven-day date range.

Conceptually:

```text
Today
  │
  ├── Day 1
  ├── Day 2
  ├── Day 3
  ├── Day 4
  ├── Day 5
  ├── Day 6
  └── Day 7
```

The selected date is formatted for the backend show query.

---

# 💺 Seat Context

The frontend contains:

```text
SeatContext.jsx
```

This context is responsible for maintaining seat-selection information
across the booking flow.

Conceptually:

```text
Seat Layout
    │
    ▼
SeatContext
    │
    ├── selected seats
    └── selected show information
    │
    ▼
Checkout
```

---

# ⚡ Real-Time Seat Locking

The frontend contains:

```text
src/utils/socket.js
```

and uses:

```text
socket.io-client
```

The seat workflow is designed around temporary locks.

```text
Select Seat
    ↓
Socket Event
    ↓
Backend
    ↓
Redis Lock
    ↓
Broadcast
    ↓
Other Clients
```

This helps prevent multiple users from simultaneously holding the same
seat during checkout.

---

# ⏳ Countdown

The custom hook:

```text
useCountdown.jsx
```

supports countdown behaviour around temporary booking/seat-lock periods.

The conceptual workflow is:

```text
Seat Locked
    ↓
Countdown Starts
    ↓
Payment / Booking
    │
    ├── Success → Booking
    │
    └── Timeout → Seat released
```

---

# 🌐 API Architecture

The API layer is:

```text
src/apis/
├── axiosWrapper.js
└── index.js
```

## `axiosWrapper.js`

Provides a central Axios configuration/wrapper.

This avoids duplicating backend configuration across individual API
calls.

## `index.js`

Contains API functions used throughout the application.

Conceptual structure:

```text
React Component
      ↓
API Function
      ↓
Axios Wrapper
      ↓
Backend REST API
```

---

# 🔗 Backend Connection

The development backend URL is:

```env
VITE_BACKEND_URL=http://localhost:9000/api/v1
```

Therefore API requests are routed to:

```text
http://localhost:9000/api/v1
```

---

# 🧠 React Query

TanStack React Query is used for server-state operations.

It supports:

- Query fetching.
- Mutations.
- Loading states.
- Error states.
- Cache management.
- Query invalidation.
- Placeholder/previous data handling.

Examples of server operations include:

```text
Get Movies
Get Movie Details
Get Shows
Create Payment Order
Verify Payment
Create Booking
Get Booking History
```

---

# 🔄 Query/Mutation Architecture

Conceptually:

```text
                 React Component
                        │
          ┌─────────────┴─────────────┐
          │                           │
        useQuery                 useMutation
          │                           │
          ▼                           ▼
      GET Requests              POST/PUT Actions
          │                           │
          └─────────────┬─────────────┘
                        ▼
                      Axios
                        │
                        ▼
                    Backend API
```

This keeps server communication predictable and easier to manage.

---

# 🧠 Context Architecture

The frontend uses three primary contexts:

```text
src/context/
├── AuthContext.jsx
├── LocationContext.jsx
└── SeatContext.jsx
```

## AuthContext

Manages:

- Authenticated user.
- Authentication UI state.
- Sign-in modal behaviour.
- User authentication information.

## LocationContext

Manages:

- Current/selected location.
- Location information used by show discovery.

## SeatContext

Manages:

- Selected seats.
- Booking-related seat state.

---

# 🪝 Custom Hooks

```text
src/hooks/
├── index.js
├── useCountdown.jsx
├── useCurrentStateLocation.js
└── useLoadUser.js
```

## `useCountdown.jsx`

Provides countdown behaviour.

## `useCurrentStateLocation.js`

Supports location detection/selection.

## `useLoadUser.js`

Loads the authenticated user.

## `index.js`

Provides the hook export surface.

---

# 🛣️ Routing

The application uses:

```text
react-router-dom
```

The navigation architecture includes pages for:

```text
Home
Movies
Movie Details
Seat Layout
Checkout
Profile
Booking History
```

A conceptual route journey is:

```text
/
 │
 ├── /movies
 │       │
 │       └── /movies/:movieId
 │               │
 │               └── /.../seat-layout
 │                         │
 │                         └── checkout
 │
 └── /profile
         │
         └── booking history
```

---

# 🖼️ Assets

Static resources are stored under:

```text
src/assets/
```

The project includes assets for:

- Branding.
- Logos.
- Movie posters.
- Promotional banners.
- Theatre imagery.
- UI icons.
- Illustrations.
- Other visual content.

Examples:

```text
bookMyScreen.png
main-icon.png
main-icon-white.png
banner1.jpg
banner2.avif
banner3.avif
banner4.avif
m1.avif ... m12.avif
pvr.avif
inox.avif
cinepolis.avif
```

---

# 🎨 Styling

The project uses:

```text
Tailwind CSS 4
```

with:

```text
@tailwindcss/vite
```

The main stylesheet is:

```text
src/index.css
```

The styling approach is utility-first and supports reusable responsive
UI construction.

---

# 🔔 Notifications

The project uses notification libraries including:

```text
react-hot-toast
notistack
```

These are used to communicate events such as:

```text
Successful authentication
Payment success
Booking success
API errors
Validation errors
Other user feedback
```

---

# 💳 Razorpay Integration

The frontend integrates Razorpay Checkout.

The frontend receives its public Razorpay key through:

```env
VITE_RAZORPAY_API_KEY=rzp_test_your_key
```

The secret key is **not** stored in the frontend.

Conceptual flow:

```text
Checkout
   │
   ▼
Create Razorpay Order
   │
   ▼
Backend
   │
   ▼
Razorpay
   │
   ▼
Order Response
   │
   ▼
Razorpay Checkout
   │
   ▼
Payment Response
   │
   ▼
Payment Verification
   │
   ▼
Booking API
```

---

# 🎟️ Booking Completion

After successful payment and booking creation, the frontend:

```text
1. Shows success feedback.
2. Releases the temporary seat lock.
3. Navigates the user to booking history.
```

This creates a clear end-to-end user journey.

---

# 💰 Checkout Pricing

The checkout interface displays:

```text
Order Amount
      +
Taxes / Convenience Fee
      =
Total Payable
```

The user can review the final amount before initiating payment.

The booking request includes the fee structure required by the backend.

---

# 🔐 Environment Variables

Create:

```text
bms-frontend/.env
```

Development example:

```env
VITE_BACKEND_URL=http://localhost:9000/api/v1

VITE_RAZORPAY_API_KEY=rzp_test_your_key
```

### Important

Only frontend-safe public configuration should be exposed through
`VITE_*` variables.

Never put:

```text
Razorpay Secret Key
JWT Secret
Gmail Password
Database Password
```

in the frontend `.env`.

---

# 🛠️ Installation

## Prerequisites

Install:

- Node.js.
- npm.
- Git.

The backend should also be running when testing API-dependent
functionality.

---

## 1. Enter Frontend Directory

```bash
cd bms-frontend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment

Create:

```text
.env
```

with:

```env
VITE_BACKEND_URL=http://localhost:9000/api/v1
VITE_RAZORPAY_API_KEY=rzp_test_your_key
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Vite normally starts the application at:

```text
http://localhost:5173
```

The frontend expects the backend API at:

```text
http://localhost:9000/api/v1
```

---

# 🧪 Testing the User Journey

A complete manual frontend test can follow:

```text
1. Open Home
        ↓
2. Select Location
        ↓
3. Open Movies
        ↓
4. Select Movie
        ↓
5. Select Date
        ↓
6. Select Theatre
        ↓
7. Select Show Time
        ↓
8. Select Seats
        ↓
9. Confirm Seat Lock
        ↓
10. Open Checkout
        ↓
11. Review Price
        ↓
12. Proceed to Payment
        ↓
13. Complete Razorpay Test Payment
        ↓
14. Verify Payment
        ↓
15. Booking Created
        ↓
16. Open Profile
        ↓
17. View Booking History
```

---

# 🔄 Complete Frontend Data Flow

```text
                       User
                        │
                        ▼
                  React UI
                        │
           ┌────────────┼────────────┐
           │            │            │
           ▼            ▼            ▼
        Context       Hooks       Components
           │            │            │
           └────────────┼────────────┘
                        │
                        ▼
                  React Query
                        │
                        ▼
                     Axios
                        │
                        ▼
                Backend REST API
                        │
                        ▼
                    MongoDB
```

Real-time seat communication runs separately:

```text
Seat Component
      │
      ▼
Socket.IO Client
      │
      ▼
Socket.IO Backend
      │
      ▼
Redis Seat Lock
```

---

# 🏛️ Frontend Architecture Diagram

```text
┌───────────────────────────────────────────────────────────┐
│                    bookMyScreen Frontend                  │
├───────────────────────────────────────────────────────────┤
│                                                           │
│                        React 19                           │
│                           │                               │
│        ┌──────────────────┼──────────────────┐            │
│        │                  │                  │            │
│        ▼                  ▼                  ▼            │
│      Pages           Components           Context        │
│        │                  │                  │            │
│        │          ┌───────┼───────┐        │            │
│        │          │       │       │        │            │
│        │         Auth   Movies   Seats      │            │
│        │                                  │             │
│        └────────────────┬─────────────────┘             │
│                         │                               │
│                         ▼                               │
│                       Hooks                             │
│                         │                               │
│                         ▼                               │
│                  TanStack Query                         │
│                         │                               │
│                         ▼                               │
│                       Axios                             │
│                         │                               │
└─────────────────────────┼────────────────────────────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ Express Backend   │
                └─────────┬─────────┘
                          │
              ┌───────────┼───────────┐
              ▼           ▼           ▼
          MongoDB       Redis      Razorpay
```

---

# 🔒 Security Considerations

The frontend follows several important security principles.

## Public Configuration Only

`VITE_*` variables are bundled into the client application, so they must
never contain secrets.

## Backend Payment Verification

The frontend should not independently decide that a payment is valid.

Payment verification occurs on the backend.

## Authentication

Protected operations rely on backend authentication/authorization rather
than frontend UI checks alone.

## API Validation

The backend remains responsible for validating and authorising requests.

---

# ⚡ Performance and UX

The project uses several mechanisms to improve the user experience.

## React Query

Reduces unnecessary server requests through caching and query
management.

## Placeholder Data

Show timing interfaces can preserve previous query data while requesting
a new date, reducing visual flicker.

## Loading Components

```text
FullScreenLoader.jsx
```

provides reusable loading UI.

## Toast Feedback

Users receive immediate feedback for important operations.

## Responsive Components

Tailwind CSS provides responsive utility classes for building layouts
across screen sizes.

## Real-Time Updates

Socket.IO reduces the need for continuous polling for seat-lock state.

---

# 🧠 Component Design Principles

The frontend separates:

```text
Page-Level Responsibility
        +
Reusable UI Responsibility
```

For example:

```text
Movies.jsx
   │
   ├── MovieFilters
   └── MovieList
         │
         └── MovieCard
```

Similarly:

```text
SeatLayout.jsx
      │
      ├── Header
      ├── Seat
      └── Footer
```

This makes components easier to maintain and reuse.

---

# 🎓 Academic / Engineering Highlights

The frontend demonstrates several important software-engineering
concepts.

### Component-Based Development

The UI is decomposed into reusable React components.

### Client-Side Routing

React Router enables multiple application screens without full-page
browser navigation.

### Server-State Management

TanStack React Query handles asynchronous backend state.

### Global State Management

React Context handles authentication, location, and seat-related
application state.

### Custom Hooks

Repeated logic is extracted into reusable hooks.

### REST Integration

Axios provides structured communication with the Express backend.

### Real-Time Communication

Socket.IO Client provides live seat-lock interaction.

### Payment Integration

Razorpay Checkout provides the payment UI.

### Responsive UI

Tailwind CSS provides utility-first responsive styling.

### User Experience

Loaders, notifications, sliders, date selection, and interactive seats
provide a complete user-facing workflow.

---

# 📊 Frontend Capability Summary

Area Implementation

---

UI Framework React 19
Build Tool Vite 7
Routing React Router 7
API Client Axios
Server State TanStack React Query
Global State React Context
Real-Time Socket.IO Client
Styling Tailwind CSS 4
Date Handling Day.js + date-fns
Notifications React Hot Toast + Notistack
Sliders Swiper + React Slick
Icons React Icons
Loaders React Spinners
Payment UI Razorpay Checkout
Authentication UI OTP/account/sign-in components
Movie UI Cards/list/filter/details
Theatre UI Theatre/show timings
Seat UI Interactive seat layout
Booking UI Checkout + booking history

---

# 🧭 User Journey Map

```text
                         HOME
                           │
                           ▼
                       LOCATION
                           │
                           ▼
                         MOVIES
                           │
                           ▼
                    MOVIE DETAILS
                           │
                           ▼
                    THEATRE TIMINGS
                           │
                           ▼
                      SHOW TIME
                           │
                           ▼
                     SEAT LAYOUT
                           │
                           ▼
                       CHECKOUT
                           │
                           ▼
                  RAZORPAY PAYMENT
                           │
                           ▼
                  PAYMENT VERIFICATION
                           │
                           ▼
                      BOOKING
                           │
                           ▼
                   BOOKING HISTORY
```

---

# 🧹 Repository Hygiene

The frontend repository should not commit:

```text
node_modules/
.env
dist/
```

Use:

```text
.env.example
```

for documenting required configuration.

Never store backend secrets in the frontend.

---

# 🏭 Production Considerations

For production deployment, configure:

- Production backend URL.
- HTTPS.
- Production Razorpay public key.
- Correct CORS origin.
- Secure authentication configuration.
- Production asset hosting.
- Environment-specific variables.
- Error monitoring.
- Performance monitoring.

A production frontend can be built using:

```bash
npm run build
```

and served using a suitable static hosting platform or web server.

---

# 🔮 Future Enhancements

## 🔎 Advanced Search

- Movie title search.
- Genre filters.
- Language filters.
- Format filters.
- Rating filters.

## 📍 Location

- City-based discovery.
- GPS location.
- Nearby theatres.
- Location search.

## 🎟️ Digital Tickets

- QR-code tickets.
- Ticket PDF.
- Downloadable receipts.

## 📧 Notifications

- Booking confirmation.
- Payment confirmation.
- Upcoming-show reminders.

## ⭐ Reviews

- Movie ratings.
- User reviews.
- Theatre reviews.

## 💰 Offers

- Coupon codes.
- Promotional discounts.
- Membership pricing.

## 🛍️ Add-ons

- Food and beverage ordering.
- Premium seating.
- Parking.

## ♿ Accessibility

- Improved keyboard navigation.
- Screen-reader support.
- Better colour contrast.
- Accessible seat indicators.

---

# 📋 Project Status

The frontend currently supports an end-to-end functional development
experience:

```text
✅ React application
✅ Vite development/build system
✅ Client-side routing
✅ Authentication UI
✅ OTP UI
✅ Movie listing
✅ Movie details
✅ Location selection
✅ Theatre discovery
✅ Show/date selection
✅ Seven-day show browsing
✅ Interactive seat layout
✅ Seat selection
✅ Socket.IO integration
✅ Temporary seat-lock workflow
✅ Countdown
✅ Checkout
✅ Razorpay Test Mode
✅ Payment verification workflow
✅ Booking creation
✅ Booking history
✅ Loading states
✅ Toast notifications
✅ Responsive UI infrastructure
```

---

# 👨‍💻 Author

**Satinder Singh Sall**

Project:

**bookMyScreen --- Full-Stack Movie Booking System**

Frontend technology focus:

```text
React
Vite
React Router
Axios
TanStack React Query
Tailwind CSS
Socket.IO Client
Day.js
date-fns
Razorpay
React Icons
Swiper
React Slick
React Hot Toast
```

---

# 📄 License

The frontend package currently uses:

```text
ISC
```

as its package license.

---

# ⭐ Conclusion

The **bookMyScreen frontend** provides a complete React-based user
experience for the movie-ticket booking platform.

It combines:

```text
React
   +
Vite
   +
React Router
   +
TanStack React Query
   +
Axios
   +
React Context
   +
Tailwind CSS
   +
Socket.IO
   +
Razorpay
```

The application demonstrates modern frontend engineering through
**component-based architecture, server-state management, reusable
contexts and hooks, real-time seat communication, payment integration,
responsive UI construction, and a complete end-to-end booking journey**.

Together with the bookMyScreen backend, the frontend forms a complete
full-stack cinema-booking platform suitable for academic demonstration,
portfolio presentation, and continued production-oriented development.

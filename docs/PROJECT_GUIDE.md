# Project Architecture Guide

Welcome to the DevEvent Tracker technical architecture overview. This guide details how the application is structured, how the frontend and backend interact, and where you can focus your contribution efforts.

---

## Technical Stack

DevEvent Tracker is built on a modern web stack:
- **Framework**: Next.js 16 (App Router)
- **Runtime and Render Engine**: React 19
- **Styling**: Tailwind CSS v4 (configured entirely in CSS via `@import` rules)
- **Database**: MongoDB with Mongoose (ODM)
- **Media Hosting**: Cloudinary (for event banners)
- **Analytics**: PostHog (event tracking)

---

## Directory Structure

```
├── app/                  # Next.js App Router (pages and APIs)
│   ├── api/              # API Route Handlers (REST endpoints)
│   │   └── events/       # GET all events, POST new event, GET single event
│   ├── create-event/     # Create event page
│   ├── events/           # Event detail page path
│   ├── my-bookings/      # User registrations dashboard page
│   ├── globals.css       # Core Tailwind CSS styles and theme variables
│   ├── layout.tsx        # Global layout (Navbar, background LightRays)
│   └── page.tsx          # Homepage showing featured events and search filters
├── components/           # Reusable React components
│   ├── BookEvent.tsx     # Handles booking/registration modal for an event
│   ├── CreateNewEvent.tsx# Event creation form (Zod validation)
│   ├── EventCard.tsx     # Display preview card for events
│   ├── EventDetails.tsx  # Layout for full event details
│   ├── ExploreBtn.tsx    # Smooth scrolling button
│   ├── Navbar.tsx        # Responsive navigation
│   └── LightRays.tsx     # Dynamic background canvas effect
├── database/             # Database connection, model schemas, index exports
│   ├── index.ts          # Central model export hub
│   ├── event.model.ts    # Mongoose schema for events
│   └── booking.model.ts  # Mongoose schema for bookings
├── lib/                  # Shared utility functions, actions, constants
│   ├── actions/          # Server Actions (database operations)
│   │   ├── event.actions.ts   # Fetching and filtering events
│   │   └── booking.actions.ts # Creating, getting, and canceling bookings
│   ├── mongodb.ts        # Cached MongoDB database connection
│   └── utils.ts          # Tailwind merge utilities
```

---

## Database Schemas

We have two main collections in MongoDB:

### 1. Events Schema (`database/event.model.ts`)
Stores details about conferences, meetups, and hackathons.
- **Pre-save Hook**: Automatically runs before saving an event to generate a URL-friendly `slug` from the `title`, normalize the `date` into `YYYY-MM-DD`, and normalize the `time` into 24-hour format (`HH:MM`).

### 2. Bookings Schema (`database/booking.model.ts`)
Stores registrations of users for events.
- **Validation**: Enforces valid email formats and makes sure the referenced event ID actually exists in the database.
- **Constraints**: Uses a compound unique index on `{ eventId: 1, email: 1 }` to prevent a user from registering for the same event multiple times.

---

## Open Tasks and Schema Mismatches (Opportunities for Contribution)

Here are the details of the active bugs and mismatches currently present in the codebase that you can help resolve:

### 1. Form Validation and Schema Mismatches
The event creation form in `components/CreateNewEvent.tsx` has field mismatches with the Mongoose model schema in `database/event.model.ts`. If submitted, it will fail Mongoose validation:
* **Description Mismatch**: The form field is named `shortDescription`, but the database model expects `description`.
* **Audience Mismatch**: The form field is named `targetAudience`, but the database model expects `audience`.
* **Missing Field (Venue)**: The database model requires a `venue` field (`Venue is required`), but the form does not have an input for it.
* **Missing API Call**: The form's `onSubmit` currently triggers a success toast mock instead of sending a `POST` request with `FormData` to `/api/events`.

### 2. Navbar Navigation Issues
In `components/Navbar.tsx`, the navigation link for "Events" points to `/events`. However, the page route `app/events/page.tsx` does not exist.
* **Task**: Create `app/events/page.tsx` to list all events with advanced search, or redirect `/events` to the homepage search section.

### 3. Missing Dashboard Access
The user bookings dashboard exists under `app/my-bookings/page.tsx`, but it is not linked anywhere in the Navbar.
* **Task**: Add a "My Bookings" link in the Navbar (`components/Navbar.tsx`) so users can access and cancel their bookings easily.

### 4. Search and Filter Debounce Optimization
The search input in `components/SearchFilters.tsx` currently uses a 400ms debounce.
* **Task**: Make sure search queries behave nicely and load skeleton states instead of blank layouts while loading results.

---

## Frontend-Backend Integration

All page routes in Next.js utilize server-side caching (`'use cache'`) for fast rendering. When bookings or events are created/updated, you should trigger cache revalidation (using Next.js `revalidatePath` or `revalidateTag`) to keep the interface in sync.

When creating or modifying components, utilize the styles specified in `app/globals.css` to maintain visual consistency.

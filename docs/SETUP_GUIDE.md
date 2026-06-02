# Local Development Setup Guide

This guide will walk you through setting up DevEvent Tracker on your local machine. Follow these steps to configure your database and media hosting environments.

---

## Prerequisites

Before starting, ensure you have the following installed:
- **Node.js**: Version 18.x or 20.x (LTS versions are recommended).
- **npm** (included with Node.js) or an alternative package manager such as Yarn, pnpm, or Bun.
- **Git** installed on your system.

---

## Step 1: Fork and Clone the Repository

1. Fork the repository on GitHub.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/DevEvent_Tracker.git
   cd DevEvent_Tracker
   ```

---

## Step 2: Install Dependencies

Run the following command in the project root to install the required packages:
```bash
npm install
```

---

## Step 3: Set Up Environment Variables

Create a file named `.env.local` in the root of the project. This file is ignored by Git, ensuring that your local credentials remain secure.

Copy and paste the following keys into your `.env.local`:
```env
# MongoDB Connection URI
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/devevent?retryWrites=true&w=majority

# Base URL (For local development)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Cloudinary Credentials (For image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# PostHog Analytics (Optional: Keep empty if not using analytics)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

---

## Step 4: Configure MongoDB Atlas (Free Database)

DevEvent Tracker uses MongoDB to store event and booking data. Follow these steps to configure a free database:

1. Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new project and provision a database cluster using the free M0 Sandbox.
3. Under Database Access, configure a user with a password (take note of these credentials).
4. Under Network Access, add an IP entry for `0.0.0.0/0` to allow access from any IP address (recommended for development), or add your current IP address.
5. Navigate to your Database deployments dashboard, click Connect, select Drivers, and choose Node.js.
6. Copy the database connection string.
7. Paste this connection string as the value for `MONGODB_URI` in your `.env.local` file, replacing `<username>` and `<password>` with the credentials of the database user you created.

---

## Step 5: Configure Cloudinary (Free Media Hosting)

DevEvent Tracker allows organizers to upload banner images for events. These images are stored on Cloudinary:

1. Sign up for a free account at [Cloudinary](https://cloudinary.com).
2. Once signed in, navigate to your dashboard console.
3. You will find your Cloud Name, API Key, and API Secret displayed on the page.
4. Copy these values and paste them into your `.env.local` file:
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
5. Note: When you upload an image through the app, a folder named `DevEvent` will be automatically generated in your Cloudinary media library.

---

## Step 6: Start the Development Server

Start the local server by running:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. You should see the DevEvent dashboard running.

---

## Troubleshooting Common Issues

### 1. "Please define the MONGODB_URI environment variable..."
Ensure that your env file is named exactly `.env.local` and is located in the root directory (the same folder as `package.json`). If you modified the file while the server was running, restart the server (press `Ctrl+C` in the terminal and run `npm run dev` again).

### 2. MongoDB connection timeout or authentication failure
- Double-check that your database user's username and password in the connection string match what was created in Atlas. If your password contains special characters, they must be URL-encoded (for example, `@` becomes `%40`).
- Ensure that the IP Access List in MongoDB Atlas is configured to allow connections (either from your current IP address or from `0.0.0.0/0`).

### 3. Cloudinary Upload Fails
Ensure you copied the correct API keys. A missing or incorrect Cloudinary configuration will cause the Create Event submission to return a server error (status 500) during banner image processing.

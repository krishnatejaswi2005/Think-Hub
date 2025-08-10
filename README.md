# Thinkhub — Startup Directory Web App

[![Next.js](https://img.shields.io/badge/Next.js-13-blue)](https://nextjs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-Content%20Platform-brightgreen)](https://www.sanity.io/)
[![Sentry](https://img.shields.io/badge/Sentry-Monitoring-orange)](https://sentry.io/welcome/)
[![NextAuth](https://img.shields.io/badge/NextAuth-Authentication-purple)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Utility%20First%20CSS-blueviolet)](https://tailwindcss.com/)

---

## Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Clone and Setup](#clone-and-setup)
  * [Environment Variables](#environment-variables)
* [Commands](#commands)
* [Project Concepts](#project-concepts)
* [Usage](#usage)
* [Deployment](#deployment)

---

## Project Overview

Thinkhub is a fully functional **startup directory** built with **Next.js** that allows users to browse, create, and manage startup profiles. Users can log in using **GitHub OAuth** via NextAuth, create startups with detailed markdown pitches, and view author profiles along with curated "Editor's Picks." The content is managed dynamically through **Sanity CMS**, providing a seamless content operating system experience.

You can check out the live deployed application here: [https://thinkhub-startup-directory.vercel.app/](https://thinkhub-startup-directory.vercel.app/)

---

## Features

* GitHub OAuth login via **NextAuth**
* Create, view, and manage startups with rich markdown content
* Categorized startups with filtering and real-time search
* Author profiles showcasing their startups
* Curated "Editor's Picks" section
* Dark/light theming with custom fonts
* Real-time data fetching, caching, and server-side rendering
* Performance monitoring and error tracking via **Sentry**
* Responsive UI with **Tailwind CSS** and **Shadcn UI** components

---

## Tech Stack

| Technology                               | Purpose                                               |
| ---------------------------------------- | ----------------------------------------------------- |
| [Next.js 13](https://nextjs.org/)        | React Framework with App Router, SSR, ISR, API routes |
| [Sanity](https://www.sanity.io/)         | Content Operating System & Headless CMS               |
| [NextAuth](https://next-auth.js.org/)    | Authentication via GitHub OAuth                       |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework                           |
| [Shadcn UI](https://ui.shadcn.com/)      | Prebuilt accessible React components                  |
| [Sentry](https://sentry.io/)             | Application monitoring and error tracking             |
| Markdown-it                              | Markdown parsing for rich content                     |
| Slugify                                  | URL slug generation                                   |

---

## Getting Started

### Prerequisites

* Node.js (version 18 or higher recommended)
* npm or yarn
* Git installed

---

### Clone and Setup

1. **Clone the repository:**

```bash
git clone https://github.com/<your-github-username>/thinkhub.git
cd thinkhub
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of the project with the following variables:

```env
AUTH_SECRET=your_generated_auth_secret
AUTH_GITHUB_ID=your_github_oauth_client_id
AUTH_GITHUB_SECRET=your_github_oauth_client_secret
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset
SANITY_WRITE_TOKEN=your_sanity_write_token
SENTRY_AUTH_TOKEN=your_sentry_auth_token
```

---

### Environment Variables Setup Instructions

| Variable                        | Description & How to Obtain                                                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `AUTH_SECRET`                   | A secret string used by NextAuth to encrypt session data. Generate with: `npx auth secret`                                                    |
| `AUTH_GITHUB_ID`                | GitHub OAuth App Client ID. Create an OAuth app in your GitHub [Developer Settings](https://github.com/settings/developers) under OAuth Apps. |
| `AUTH_GITHUB_SECRET`            | GitHub OAuth App Client Secret. Found alongside the Client ID in your GitHub OAuth App settings.                                              |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID. Obtain from [Sanity.io Manage Projects](https://www.sanity.io/manage) dashboard.                                      |
| `NEXT_PUBLIC_SANITY_DATASET`    | The Sanity dataset name, usually `production` or custom dataset name. Configured during Sanity project setup.                                 |
| `SANITY_WRITE_TOKEN`            | Sanity API token with write permissions. Generate from Sanity project settings under API Tokens.                                              |
| `SENTRY_AUTH_TOKEN`             | Sentry authorization token. Create this in your Sentry account under **API Keys** for configuring monitoring.                                 |

---

## Commands

| Command            | Description                                     |
| ------------------ | ----------------------------------------------- |
| `npm run dev`      | Run development server locally                  |
| `npm run build`    | Build the Next.js app for production            |
| `npm start`        | Start the production server                     |
| `npm run type-gen` | Generate TypeScript types from Sanity schemas   |
| `npx sanity start` | Start Sanity Studio locally for content editing |

---

## Project Concepts Implemented

* **Authentication** with GitHub via NextAuth.js
* **Sanity CMS** integration for content management and live fetching
* **Markdown rendering** for startup pitches
* **CDN usage:** Leveraged Sanity's CDN for fast image and data delivery
* **Caching:** Implemented caching strategies for API routes and data fetching to optimize performance
* **Parallel data fetching:** Utilized Next.js features to fetch data concurrently for faster page loads
* **Server-side rendering (SSR):** Used Next.js SSR and partial pre-rendering for SEO and performance
* **Real-time search:** Search startups with URL query param sync
* **Theming & fonts:** Custom light/dark themes with Google Fonts integration
* **Error tracking & performance monitoring:** Setup with Sentry for production monitoring

---

## Usage

* After running `npm run dev`, open [http://localhost:3000](http://localhost:3000) locally
* Or visit the **live deployed app** at [https://thinkhub-startup-directory.vercel.app/](https://thinkhub-startup-directory.vercel.app/)
* Login with your GitHub account
* Create new startups with detailed markdown pitches
* Browse startups by category or search in real-time
* View author profiles and editor's picks
* Edit your startup entries if logged in as the author

---

## Deployment

Thinkhub is deployed on **Vercel** and supports seamless environment variable management and serverless features.

* Live URL: [https://thinkhub-startup-directory.vercel.app/](https://thinkhub-startup-directory.vercel.app/)
* To deploy yourself, connect your GitHub repo to Vercel and configure environment variables in Vercel dashboard.

---

If you have any questions or want to contribute, feel free to open issues or pull requests.

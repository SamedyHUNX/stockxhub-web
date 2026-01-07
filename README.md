<div align="center">
  
![StockXHub](/public/readme/thumbnail.webp)

## **Built With**

<p align="center" style="font-weight:900;">
  <strong>
    <img src="https://img.shields.io/badge/Next.js-16.1.1-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  </strong>
  <strong>
    <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  </strong>
  <strong>
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </strong>
  <strong>
    <img src="https://img.shields.io/badge/MongoDB-7.0.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  </strong>
  <strong>
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </strong>
  <strong>
    <img src="https://img.shields.io/badge/Better_Auth-1.4.10-000000?style=for-the-badge&logo=auth0&logoColor=white" alt="Better Auth" />
  </strong>
</p>

</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Links](#links)
- [License](#license)

## 🎯 About

**StockXHub** is a modern job platform built with Next.js 16 and React 19. It provides a seamless experience for both job seekers and employers, featuring authentication, job listings, search functionality, and real-time updates.

The platform leverages the latest web technologies to deliver a fast, responsive, and user-friendly experience with server-side rendering, optimized performance, and a clean, modern UI.

## ✨ Features

- 🔐 **Authentication** - Secure user authentication with Better Auth
- 💼 **Job Listings** - Browse and search through job opportunities
- 🔍 **Advanced Search** - Powerful search functionality with cmdk
- 🌙 **Dark Mode** - Built-in theme switching with next-themes
- 📧 **Email Notifications** - Automated email system with Nodemailer
- 🎨 **Modern UI** - Beautiful interface with Radix UI components
- 📱 **Responsive Design** - Mobile-first, fully responsive layout
- ⚡ **Optimized Performance** - Server-side rendering and efficient data fetching
- 🤖 **AI Integration** - Enhanced features with Inngest AI
- 🌍 **Country Selection** - International support with country lists

## 🛠 Tech Stack {#tech-stack}

### Frontend

- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **React Hook Form** - Form management
- **Sonner** - Toast notifications
- **next-themes** - Theme management

### Backend

- **MongoDB 7.0.0** - NoSQL database
- **Mongoose 9.1.1** - MongoDB object modeling
- **Better Auth 1.4.10** - Authentication solution
- **Nodemailer 7.0.12** - Email service
- **Inngest** - Background jobs and workflows

### UI Components

- **cmdk** - Command menu interface
- **React Select** - Advanced select components
- **class-variance-authority** - Component variants
- **clsx & tailwind-merge** - Utility functions

## 🚀 Getting Started {#getting-started}

### Prerequisites

- Node.js 20+ installed
- MongoDB instance (local or cloud)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR_USERNAME/stockxhub-web.git
   cd stockxhub-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the required environment variables (see [Environment Variables](#environment-variables) section below)

4. **Test database connection** (optional)

   ```bash
   npm run test:db
   ```

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🔐 Environment Variables {#environment-variables}

Create a `.env` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Email Service (Nodemailer)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
EMAIL_FROM=noreply@stockxhub.com

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

> **Note:** Never commit your `.env` file to version control. It's already added to `.gitignore`.

## 📁 Project Structure {#project-structure}

```
stockxhub-web/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
├── database/              # Database models and connection
│   ├── models/           # Mongoose models
│   └── mongoose.ts       # Database configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
├── middleware/            # Next.js middleware
├── providers/             # Context providers
├── public/                # Static assets
│   ├── assets/           # Images and icons
│   └── readme/           # README assets
├── scripts/               # Utility scripts
├── types/                 # TypeScript type definitions
└── package.json          # Dependencies and scripts
```

## 🔗 Links {#links}

- 🎨 **Figma Design**: [View Design](https://www.figma.com/design/F4i9aI918nqW24kSBDVbuw/StockXHub?node-id=186059-5898&t=dyxQcM4C0Hhys3kz-1)
- 💻 **GitHub Repository**: [Source Code](https://github.com/SamedyHUNX/stockxhub-web)
- 👤 **LinkedIn**: [Connect with me](https://www.linkedin.com/in/vadhna-samedy-hun-91a2b01b0)
- 🌐 **Live Demo**: [Visit Site](https://stockxhub-web.vercel.app)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test:db` - Test database connection

## 📄 License {#license}

This project is private and proprietary.

---

<div align="center">
  Made with ❤️ by <a href="https://www.linkedin.com/in/vadhna-samedy-hun-91a2b01b0">samedyhunx</a>
</div>

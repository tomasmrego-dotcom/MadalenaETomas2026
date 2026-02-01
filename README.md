# Private Wedding Website

A private wedding website for Madalena & Tomás's wedding celebration. Built with Next.js, React, TypeScript, and Tailwind CSS.

> **Note:** This is a private wedding website. The code is public for portfolio purposes, but the deployed site is intended for invited guests only.

## Features

- 🎨 **Modern UI**: Beautiful gradient design with responsive layout
- 📱 **Mobile-Friendly**: Fully responsive design that works on all devices
- 📝 **RSVP Form**: Interactive form with validation and user feedback
- ⚡ **Fast Performance**: Built with Next.js 15 for optimal performance
- 🎯 **TypeScript**: Type-safe development experience
- 💅 **Tailwind CSS**: Utility-first styling for rapid development

## Components

- **Hero Section**: Eye-catching header with couple names and wedding date
- **Wedding Details**: Information about ceremony, reception, and dress code
- **RSVP Form**: Full-featured form with:
  - Name and email validation
  - Attendance selection
  - Guest count selector
  - Dietary restrictions field
  - Message/song requests
  - Success confirmation

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone or navigate to this repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Customization

### Update Wedding Information

Edit [src/components/Hero.tsx](src/components/Hero.tsx) to update:
- Couple names
- Wedding date
- Venue name and location

### Modify Wedding Details

Edit [src/components/WeddingDetails.tsx](src/components/WeddingDetails.tsx) to change:
- Ceremony time and location
- Reception details
- Dress code information

### Form Configuration

Edit [src/components/RSVPForm.tsx](src/components/RSVPForm.tsx) to:
- Add/remove form fields
- Modify validation rules
- Update RSVP deadline
- Connect to a backend API (currently simulated)

### Styling

- Global styles: [src/app/globals.css](src/app/globals.css)
- Tailwind configuration: [tailwind.config.ts](tailwind.config.ts)

## Project Structure

```
wedding-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Hero.tsx            # Hero section
│       ├── WeddingDetails.tsx  # Wedding details section
│       └── RSVPForm.tsx        # RSVP form with validation
├── public/                     # Static assets
├── .github/
│   └── copilot-instructions.md # GitHub Copilot instructions
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## Technologies

- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript 5**: Type-safe JavaScript
- **Tailwind CSS 3**: Utility-first CSS framework
- **ESLint**: Code linting

## Deployment

This project can be easily deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **Any Node.js hosting**: Build and run with `npm run build && npm start`

## Backend Integration

The RSVP form currently simulates submission. To connect to a real backend:

1. Create an API route in `src/app/api/rsvp/route.ts`
2. Update the `handleSubmit` function in [src/components/RSVPForm.tsx](src/components/RSVPForm.tsx)
3. Connect to your database or email service

Example API route:

```typescript
// src/app/api/rsvp/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Save to database or send email
  return NextResponse.json({ success: true });
}
```

## License

MIT

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ for your special day

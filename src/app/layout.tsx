import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://madalenaetomas2026.pt'),
  title: "Convite",
  description: "",
  icons: {
    icon: '/envelope.png',
  },
  openGraph: {
    title: "Convite",
    description: "",
    url: "https://madalenaetomas2026.pt",
    siteName: "Convite",
    type: "website",
    images: [
      {
        url: '/envelope.png',
        width: 1200,
        height: 630,
        alt: 'Convite',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

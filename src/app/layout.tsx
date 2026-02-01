import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casamento de Madalena & Tomás",
  description: "Junta-te a nós no nosso dia especial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

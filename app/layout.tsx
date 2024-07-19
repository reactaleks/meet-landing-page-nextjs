import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Meet Landing Page - Front End Mentor",
  description: "This project created as part of front end mentor exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}

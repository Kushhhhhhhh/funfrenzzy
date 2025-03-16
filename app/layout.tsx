import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Funfrenzzy - Trendy Fashion for Cool People",
  description:
    "Discover the latest in fashion, style, and shopping at Funfrenzzy. Find trendy clothes, accessories, and more for cool people who love to stand out.",
  keywords: [
    "fashion",
    "trendy clothes",
    "shopping online",
    "cool fashion",
    "style inspiration",
    "urban fashion",
    "Gen-Z fashion",
    "fashion trends",
    "online clothing store",
    "stylish outfits",
  ],
  authors: [{ name: "Kush Sharma", url: "https://funfrenzzy.vercel.app" }],
  creator: "Your Name",
  openGraph: {
    title: "Funfrenzzy - Trendy Fashion for Cool People",
    description:
      "Discover the latest in fashion, style, and shopping at Funfrenzzy. Find trendy clothes, accessories, and more for cool people who love to stand out.",
    url: "https://funfrenzzy.vercel.app",
    siteName: "Funfrenzzy",
    images: [
      {
        url: "https://yourwebsite.com/images/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Funfrenzzy - Trendy Fashion for Cool People",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funfrenzzy - Trendy Fashion for Cool People",
    description:
      "Discover the latest in fashion, style, and shopping at Funfrenzzy. Find trendy clothes, accessories, and more for cool people who love to stand out.",
    site: "@KushSha06747704",
    creator: "@KushSha06747704",
    images: "https://yourwebsite.com/images/og-image.jpg", // Replace with your actual image URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
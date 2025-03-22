import CustomCursor from "@/components/custom-cursor";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nirbhay Singh - Creator, Developer",
  description:
    "Personal portfolio website of Nirbhay, a software developer specializing in web development and creative solutions.",
  keywords: [
    "software developer",
    "web development",
    "portfolio",
    "Nirbhay",
    "frontend",
    "backend",
    "fullstack",
  ],
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico', sizes: '32x32' },
      { url: '/images/favicon/icon.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/images/favicon/icon.png" sizes="512x512" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Header />
          <main className="relative">{children}</main>
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}

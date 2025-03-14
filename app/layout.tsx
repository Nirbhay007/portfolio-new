import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import CustomCursor from "@/components/custom-cursor";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        </ThemeProvider>
      </body>
    </html>
  );
}

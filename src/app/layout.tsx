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
  title: "CodeTide | AI powered code reviews",
  description: "Let your developers build products and our AI will take care of the code reviews. Seamlessly integrated with GitHub and GitLab, it helps teams ship better code faster while maintaining high quality standards.",
  keywords: [
    "AI code review",
    "automated code review",
    "GitHub code review",
    "GitLab code review",
    "code review automation",
    "AI code analysis",
    "code quality",
    "automated code analysis",
    "code review bot",
    "AI programming assistant",
    "Automated Code Review Tools",
    "Intelligent Code Analysis",
    "Code Quality Tools",
    "Code Quality Automation",
    "Faster Code Reviews",
    "Code Review with CodeTide",
    "Code Review Revolution",
    "Real-Time Code Review",
    "Code Review Platform",
    "Faster, Smarter Code",
    "Best AI Code Review"
  ],
  verification: {
    google: "fWfSEYwU8JOJz1GfDXE7OnxBTv9MVJh_dtGeT5cyP6E",
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

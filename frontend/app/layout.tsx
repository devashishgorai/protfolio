import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = localFont({
  src: [
    {
      path: "./fonts/SFNS.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const headingFont = localFont({
  src: [
    {
      path: "./fonts/SFCompact.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devashish Kumar | Portfolio",
  description:
    "Premium personal portfolio for Devashish Kumar, an ECE student and aspiring software engineer building elegant, real-world digital experiences.",
  keywords: [
    "Devashish Kumar",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "software engineer",
    "ECE student",
  ],
  authors: [{ name: "Devashish Kumar" }],
  creator: "Devashish Kumar",
  icons: {
    icon: "/images/metaiconpng.png",
    shortcut: "/images/metaiconpng.png",
    apple: "/images/metaiconpng.png",
  },
  openGraph: {
    title: "Devashish Kumar | Portfolio",
    description:
      "A premium portfolio experience showcasing Devashish Kumar's projects, skills, journey, and contact links.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devashish Kumar | Portfolio",
    description:
      "Premium portfolio website for Devashish Kumar, built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, and GSAP.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable} h-full scroll-smooth`}>
      <body className="min-h-screen bg-[#090014] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

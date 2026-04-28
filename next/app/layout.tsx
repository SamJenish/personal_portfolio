import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/motion/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sam Jenish – Full Stack Engineer",
  description: "Full Stack Engineer & Software Developer showcasing projects, skills, and contact information.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#0a0a0a] text-[#ededed] scroll-smooth`}> 
      <body className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

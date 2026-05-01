import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Olive | The Safest Way to Shop for Groceries",
  description: "Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your Family’s Diet and Get Expert-Backed Food Insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSerif.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-[#171717]">
        {children}
      </body>
    </html>
  );
}

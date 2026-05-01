import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import CustomCursor from "@/components/custom-cursor";
import { GrainOverlay } from "@/components/grain-overlay";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "ShopFarm | Sell Direct",
  description:
    "ShopFarm builds serious DTC brands for pasture-raised and regenerative farms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {/* Swap to licensed GT Sectra/Sohne family in production. */}
        <CustomCursor />
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}

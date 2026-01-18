import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://elite-estates-psi.vercel.app'),
  title: "ELITE ESTATES | Luxury Real Estate",
  description: "Exquisite properties for the discerning few. Discover your legacy with our curated collection of ultra-premium estates worldwide.",
  keywords: ["luxury real estate", "premium properties", "luxury homes", "estates", "high-end real estate", "exclusive properties"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ELITE ESTATES | Luxury Real Estate",
    description: "Exquisite properties for the discerning few.",
    url: "https://elite-estates-psi.vercel.app",
    siteName: "ELITE ESTATES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELITE ESTATES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}

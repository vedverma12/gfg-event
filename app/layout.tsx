import type { Metadata } from "next";
import { Anton, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://code-infinity.example"),
  title: {
    default: "CODE: INFINITY | 24-Hour Hackathon",
    template: "%s | CODE: INFINITY",
  },
  description:
    "Assemble. Build. Snap your idea into reality. Join the 24-hour CODE: INFINITY hackathon at Bennett University on 15 November 2026.",
  openGraph: {
    title: "CODE: INFINITY | 24-Hour Hackathon",
    description:
      "Six tracks. Twenty-four hours. One universe of ideas. 15 November 2026 at Bennett University.",
    type: "website",
    images: [{ url: "/images/hero-bg.jpg", width: 1920, height: 1080, alt: "Abstract cosmic energy" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main id="main-content"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}

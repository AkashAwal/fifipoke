import type { Metadata, Viewport } from "next";
import { Michroma, Oswald } from "next/font/google";
import { PointerTrace } from "@/components/PointerTrace";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const oswald = Oswald({
  variable: "--nf-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const michroma = Michroma({
  variable: "--nf-michroma",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const description =
  "Fifi is a New Delhi handpoke and machine tattoo artist — minimalist to bold custom pieces, with a focus on precision and hygiene.";

export const metadata: Metadata = {
  title: "FIFIPOKE — Tattoo Artist & Studio",
  description,
  icons: {
    icon: [
      { url: "/images/icon-light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/images/icon-dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "FIFIPOKE — Tattoo Artist & Studio",
    description,
  },
  twitter: {
    card: "summary",
    title: "FIFIPOKE — Tattoo Artist & Studio",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#010101",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${oswald.variable} ${michroma.variable}`}>
      <body>
        <SmoothScroll />
        <PointerTrace />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

import { Toaster } from "sonner";

// ... existing code ...

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sohamenterprises.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soham Enterprises | Pure Essential Oils Wholesale Supplier & Manufacturer Mumbai",
    template: "%s | Soham Enterprises"
  },
  applicationName: "Soham Enterprises",
  description: "Leading Mumbai supplier and manufacturer of 100% pure essential oils, cold-pressed carrier oils, and natural fragrance extracts in bulk. Lab-tested GC/MS quality for aromatherapy, cosmetics, and pharmaceutical formulations.",
  keywords: [
    "Essential Oils",
    "Carrier Oils",
    "Fragrance Oils",
    "Natural Extracts",
    "Pure Essential Oils Wholesale",
    "Essential Oil Supplier Mumbai",
    "Bulk Essential Oils India",
    "Aroma Chemicals Mumbai",
    "Essential Oil Manufacturer Kalbadevi",
    "Soham Enterprises"
  ],
  authors: [{ name: "Soham Enterprises" }],
  creator: "Soham Enterprises",
  publisher: "Soham Enterprises",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Soham Enterprises | Pure Essential Oils Wholesale Supplier & Manufacturer Mumbai",
    description: "Pure natural essential oils, cold-pressed carrier oils, and botanical extracts in bulk from Soham Enterprises, Kalbadevi, Mumbai.",
    url: siteUrl,
    siteName: "Soham Enterprises",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soham Enterprises - Pure Essential Oils Supplier Mumbai",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Enterprises | Pure Essential Oils Wholesale Supplier Mumbai",
    description: "Bulk suppliers of pure essential oils, carrier oils, and natural botanical extracts.",
    images: ["/logo.png"],
  },
  verification: {
    google: "flwnhzq7zw7EQOfd9DXR9W21XmVkSL23PjVR6d8Wpe4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-background text-foreground`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-89V4BDRRTS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-89V4BDRRTS');
          `}
        </Script>
        <OrganizationSchema />
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartDrawer />
          <Toaster richColors position="top-center" />
        </CartProvider>
      </body>
    </html>
  );
}

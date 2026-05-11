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

export const metadata: Metadata = {
  metadataBase: new URL("https://sohamenterprises.vercel.app"),
  title: {
    default: "Soham Enterprises - essential oil supplier",
    template: "%s | Soham Enterprises"
  },
  applicationName: "Soham Enterprises",
  description: "Global suppliers of high-quality essential oils, industrial chemicals, and natural extracts. Trusted quality for pharmaceutical and cosmetic industries.",
  keywords: ["Essential Oils", "Natural Extracts", "Industrial Chemicals", "Pharmaceutical Formulations", "Cosmetic Raw Materials", "Soham Enterprises", "Indian Essential Oil Suppliers"],
  authors: [{ name: "Soham Enterprises" }],
  creator: "Soham Enterprises",
  publisher: "Soham Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Soham Enterprises - essential oil supplier",
    description: "Pure extracts and chemical compounds for global excellence.",
    url: "https://sohamenterprises.vercel.app",
    siteName: "Soham Enterprises",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soham Enterprises Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Enterprises - essential oil supplier",
    description: "Global suppliers of premium essential oils and extracts.",
    images: ["/logo.png"],
  },
  verification: {
    google: "flwnhzq7zw7EQOfd9DXR9W21XmVkSL23PjVR6d8Wpe4",
  },
  alternates: {
    canonical: "/",
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

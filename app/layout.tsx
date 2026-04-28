import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
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
    default: "Soham Enterprise | Premium Essential Oils & Natural Compounds",
    template: "%s | Soham Enterprise"
  },
  description: "Global suppliers of high-quality essential oils, industrial chemicals, and natural extracts. Trusted quality for pharmaceutical and cosmetic industries.",
  keywords: ["Essential Oils", "Natural Extracts", "Industrial Chemicals", "Pharmaceutical Formulations", "Cosmetic Raw Materials", "Soham Enterprise", "Indian Essential Oil Suppliers"],
  authors: [{ name: "Soham Enterprise" }],
  creator: "Soham Enterprise",
  publisher: "Soham Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Soham Enterprise | Premium Essential Oils & Natural Compounds",
    description: "Pure extracts and chemical compounds for global excellence.",
    url: "https://sohamenterprises.vercel.app",
    siteName: "Soham Enterprise",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Soham Enterprise Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Enterprise | Pure Natural Ingredients",
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

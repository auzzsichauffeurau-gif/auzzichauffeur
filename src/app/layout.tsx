import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Toaster } from 'sonner';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.auzziechauffeur.com.au'),
  title: {
    default: "Auzzsi Chauffeur Service | Premium Airport Transfers Australia",
    template: "%s | Auzzsi Chauffeur Service"
  },
  description: "Australia's leading national chauffeur service. Premium airport transfers, corporate travel, and private drivers in Sydney, Melbourne, Brisbane, Adelaide, Gold Coast, and Hobart. Book your luxury ride today.",
  keywords: ["Chauffeur Service Australia", "Airport Transfers Sydney", "Corporate Transfers", "Private Driver Melbourne", "Luxury Car Hire Australia", "Auzzsi Chauffeur"],
  authors: [{ name: "Auzzsi Chauffeur Service" }],
  creator: "Auzzsi Chauffeur Service",
  publisher: "Auzzsi Chauffeur Service",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.auzziechauffeur.com.au",
    title: "Auzzsi Chauffeur Service | Premium Airport Transfers Australia",
    description: "Experience premium chauffeur services across Australia. Reliable airport transfers, corporate travel, and luxury private tours.",
    siteName: "Auzzsi Chauffeur Service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auzzsi Chauffeur Service Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auzzsi Chauffeur Service",
    description: "Australia's #1 National Chauffeur Service. Book now for premium airport transfers.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable}`}>
        <SchemaMarkup />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

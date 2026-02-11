import type { Metadata, Viewport } from "next";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.auzziechauffeur.com.au/'),
  title: {
    default: "Airport Transfers | Auzzie Chauffeur | Book in 2 Mins",
    template: "%s"
  },
  description: "Reliable chauffeur service in Australia. Flight mapping, fixed rates, and 4.9★ rated drivers. Book your luxury airport transfer online today.",
  keywords: ["Chauffeur Service Australia", "Airport Transfers Sydney", "Corporate Transfers", "Private Driver Melbourne", "Luxury Car Hire Australia", "Auzzie Chauffeur"],
  authors: [{ name: "Auzzie Chauffeur Service" }],
  creator: "Auzzie Chauffeur Service",
  publisher: "Auzzie Chauffeur Service",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.auzziechauffeur.com.au/",
    title: "Auzzie Chauffeur Service | Premium Airport Transfers Australia",
    description: "Experience premium chauffeur services across Australia. Reliable airport transfers, corporate travel, and luxury private tours.",
    siteName: "Auzzie Chauffeur Service",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auzzie Chauffeur Service Fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auzzie Chauffeur Service",
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
      <head>
        <link
          rel="preload"
          href="/hero-bg.webp"
          as="image"
          fetchPriority="high"
        />
      </head>
      <body>
        {/* Layout Wrapper */}
        <SchemaMarkup />
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

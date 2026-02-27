import type { Metadata, Viewport } from "next";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Toaster } from 'sonner';
import Script from "next/script";
import ClarityAnalytics from "@/components/ClarityAnalytics";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL('https://auzziechauffeur.com.au'),
  title: {
    default: "Airport Transfers & Chauffeur Service Australia | Auzzie Chauffeur",
    template: "%s | Auzzie Chauffeur"
  },
  description: "Australia's leading national chauffeur service. Book 24/7 for reliable airport transfers, corporate travel, and private drivers with fixed rates and flight mapping.",
  keywords: ["Chauffeur Service Australia", "Airport Transfers Sydney", "Corporate Transfers", "Private Driver Melbourne", "Luxury Car Hire Australia", "Auzzie Chauffeur"],
  authors: [{ name: "Auzzie Chauffeur Service", url: "https://auzziechauffeur.com.au" }],
  creator: "Auzzie Chauffeur Service",
  publisher: "Auzzie Chauffeur Service",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://auzziechauffeur.com.au/",
    title: "Auzzie Chauffeur | National Luxury Transport & Airport Transfers",
    description: "Experience professional chauffeur-driven cars across Sydney, Melbourne, Brisbane & all major cities. 24/7 availability, child seats available, and meet & greet service.",
    siteName: "Auzzie Chauffeur",
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    other: {
      "p:domain_verify": "0681ab915a81589b7e081c3cd643aec2",
    },
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZR134D7476"
          strategy="afterInteractive"
        />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="1ot+hNd6eRdgMR0xl/TAZQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZR134D7476');
          `}
        </Script>

      </head>
      <body className="antialiased">
        {/* Layout Wrapper */}
        <SchemaMarkup />
        {children}
        <WhatsAppButton />
        <ClarityAnalytics />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Privacy Policy | Auzzie Chauffeur | Data Protection & Security" },
    description: "Read Auzzie Chauffeur's Privacy Policy. Understand how we collect, use, and protect your personal information when you book our luxury transport services.",
    alternates: {
        canonical: '/privacy-policy',
    },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main>
            <Navbar />
            <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#374151' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}>Privacy Policy</h1>

                <p style={{ marginBottom: '1rem' }}>Last updated: January 2026</p>

                <p style={{ marginBottom: '1.5rem' }}>
                    At Auzzie Chauffeur ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and chauffeur services.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                <div style={{ marginBottom: '1rem' }}>
                    We may collect personal information such as:
                    <ul style={{ paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Name, Email Address, and Phone Number</li>
                        <li>Pickup and Drop-off locations</li>
                        <li>Payment information and transaction details</li>
                        <li>Flight details (for airport transfers)</li>
                        <li>Usage data via cookies and analytics (e.g., Microsoft Clarity)</li>
                    </ul>
                </div>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Your information is used to:
                    <ul style={{ paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Process and confirm your bookings</li>
                        <li>Communicate with you regarding our services</li>
                        <li>Improve our website and customer service via behavioral analytics</li>
                        <li>Process payments securely</li>
                    </ul>
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Security & Safe Software</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. Auzzie Chauffeur does not host malware, unwanted software, or deceptive downloadable content. We are committed to a safe browsing experience for all our users.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>4. Third-Party Analytics</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We use Microsoft Clarity to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Us</h2>
                <p style={{ marginBottom: '1rem' }}>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <strong>Email:</strong> info@auzziechauffeur.com.au
                    <br />
                    <strong>Phone:</strong> 0415 673 786
                </p>
            </div>
            <Footer />
        </main>
    );
}

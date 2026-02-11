"use client";

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
                    At Auzzsi Chauffeur ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and chauffeur services.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
                <div style={{ marginBottom: '1rem' }}>
                    We may collect personal information such as:
                    <ul style={{ paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Name, Email Address, and Phone Number</li>
                        <li>Pickup and Drop-off locations</li>
                        <li>Payment information and transaction details</li>
                        <li>Flight details (for airport transfers)</li>
                    </ul>
                </div>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Your information is used to:
                    <ul style={{ paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Process and confirm your bookings</li>
                        <li>Communicate with you regarding our services</li>
                        <li>Improve our website and customer service</li>
                        <li>Process payments securely</li>
                    </ul>
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Security</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. All payment transactions are encrypted and processed securely.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>4. Contact Us</h2>
                <p style={{ marginBottom: '1rem' }}>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <strong>Email:</strong> info@auzziechauffeur.com.au
                    <br />
                    <strong>Phone:</strong> info@auzziechauffeur.com.au
                </p>
            </div>
            <Footer />
        </main>
    );
}

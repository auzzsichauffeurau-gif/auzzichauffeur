"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsConditions() {
    return (
        <main>
            <Navbar />
            <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#374151' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}>Terms & Conditions</h1>

                <p style={{ marginBottom: '1rem' }}>Effective Date: January 2026</p>

                <p style={{ marginBottom: '1.5rem' }}>
                    Welcome to Auzzie Chauffeur. By booking our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>1. Booking & Confirmations</h2>
                <p style={{ marginBottom: '1rem' }}>
                    All bookings are subject to vehicle availability. A booking is not confirmed until you receive a confirmation email from us. We reserve the right to cancel any booking due to unforeseen circumstances.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>2. Cancellations & Refunds</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Cancellations made less than 24 hours before the scheduled pickup time may incur a cancellation fee. Refunds are processed at the discretion of Auzzie Chauffeur and may take up to 5-7 business days.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>3. Passenger Conduct</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Passengers are expected to behave in a respectful manner. Smoking and consumption of alcohol (unless authorized) are strictly prohibited in our vehicles. Any damage caused to the vehicle by a passenger will be charged to the booking party.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>4. Anti-Spam Policy</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Auzzie Chauffeur maintains a zero-tolerance policy for unsolicited marketing, bot-generated content, and user-generated spam. Our forms and contact channels are for legitimate transport enquiries only. We use automated detection to block spam attempts and may report repeat offenders.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>5. Liability</h2>
                <p style={{ marginBottom: '1rem' }}>
                    Auzzie Chauffeur is not liable for delays caused by traffic, weather, or other conditions beyond our control. We recommend booking with ample time for airport transfers to account for potential delays.
                </p>

                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginTop: '2rem', marginBottom: '1rem' }}>6. Changes to Terms</h2>
                <p style={{ marginBottom: '1rem' }}>
                    We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on this website.
                </p>
            </div>
            <Footer />
        </main>
    );
}

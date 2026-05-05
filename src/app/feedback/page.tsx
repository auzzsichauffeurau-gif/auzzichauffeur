import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/FeedbackForm";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Customer Feedback | Auzzie Chauffeur | Share Your Experience",
    description: "Share your experience with Auzzie Chauffeur. We value your feedback to help us improve our luxury transport services.",
};

export default function FeedbackPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <Hero
                title="We Value Your Feedback"
                subtitle="Help us continue to improve our premium service."
                showStats={false}
            />

            <section style={{ padding: '4rem 1rem', backgroundColor: '#f9fafb', flexGrow: 1 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
                            Tell Us About Your Experience
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                            Whether you had a seamless airport transfer or a memorable wedding day, we want to hear from you.
                            Your feedback helps us maintain the high standards you expect from Auzzie Chauffeur.
                        </p>
                    </div>

                    <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
                        {/* Centered Form */}
                        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                            <FeedbackForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

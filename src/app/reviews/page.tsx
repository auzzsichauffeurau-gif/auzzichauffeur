import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Customer Reviews | Auzzie Chauffeur | 4.9★ Rated Service" },
    description: "Read what our customers say about Auzzie Chauffeur. Over 10,000 satisfied clients across Australia trust us for their luxury transport needs.",
};

export default function ReviewsPage() {
    return (
        <main>
            <Navbar />
            <Hero
                title="Customer Reviews"
                subtitle="Join thousands of satisfied travelers who choose Auzzie Chauffeur for premium service."
                showStats={true}
            />

            <section style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1a2b4b' }}>Real Experiences, Real Stories</h2>
                        <p style={{ color: '#6b7280', fontSize: '1.2rem', marginTop: '1rem' }}>We take pride in every journey we complete.</p>
                    </div>
                </div>

                <Testimonials />
            </section>

            <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb', textAlign: 'center' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Want to share your experience?</h3>
                    <p style={{ color: '#4b5563', marginBottom: '2rem' }}>Your feedback helps us maintain our high standards of service.</p>
                    <a href="/feedback" style={{
                        display: 'inline-block',
                        padding: '12px 30px',
                        backgroundColor: '#1a2b4b',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontWeight: '600'
                    }}>Leave a Review</a>
                </div>
            </section>

            <BookingCTA />
            <Footer />
        </main>
    );
}

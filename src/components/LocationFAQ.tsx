import { HelpCircle, ChevronDown } from "lucide-react";
import styles from "./components.module.css";

interface FAQProps {
    city: string;
}

export default function LocationFAQ({ city }: FAQProps) {
    const faqs = [
        {
            question: `How much does a chauffeur service cost in ${city}?`,
            answer: `Our ${city} chauffeur service pricing varies based on distance, vehicle type, and service duration. Contact us for a personalized quote tailored to your specific needs. We offer competitive rates for airport transfers, corporate transport, and hourly bookings.`
        },
        {
            question: `Do you provide 24/7 chauffeur service in ${city}?`,
            answer: `Yes! We operate 24 hours a day, 7 days a week in ${city}. Whether you need an early morning airport transfer or late-night corporate transport, our professional chauffeurs are always available.`
        },
        {
            question: `What areas do you cover in ${city}?`,
            answer: `We provide comprehensive coverage across ${city} and surrounding suburbs. Our service extends to all major neighborhoods, business districts, airports, and popular destinations throughout the metropolitan area.`
        },
        {
            question: `How do I book a chauffeur in ${city}?`,
            answer: `Booking is easy! You can call us directly, use our online booking form, or contact us via WhatsApp. We recommend booking in advance for guaranteed availability, especially during peak times and special events.`
        },
        {
            question: `What types of vehicles are available in ${city}?`,
            answer: `Our ${city} fleet includes luxury sedans, executive SUVs, and premium vehicles. All our cars are meticulously maintained, fully insured, and equipped with modern amenities for your comfort and safety.`
        },
        {
            question: `Are your chauffeurs licensed and experienced?`,
            answer: `Absolutely! All our ${city} chauffeurs are fully licensed, professionally trained, and have extensive local knowledge. They undergo rigorous background checks and maintain the highest standards of professionalism and discretion.`
        }
    ];

    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div style={{ margin: '3rem 0', background: '#f8fafc', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #f1f5f9' }}>
                <h2 className={styles.title}>
                    <HelpCircle color="#c5a467" size={28} />
                    <span>Frequently Asked Questions - {city}</span>
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#4b5563' }}>
                    Common questions about our chauffeur service in {city}
                </p>

                <div className={styles.faqContainer}>
                    {faqs.map((faq, idx) => (
                        <details key={idx} className={styles.faqDetails}>
                            <summary className={styles.faqSummary}>
                                <span>{faq.question}</span>
                                <ChevronDown size={20} color="#c5a467" />
                            </summary>
                            <div className={styles.faqContent}>
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>

                <div style={{ marginTop: '2rem', textAlign: 'center', padding: '1.5rem', background: '#eff6ff', borderRadius: '0.5rem', border: '1px solid #dbeafe' }}>
                    <p style={{ fontWeight: 600, color: '#374151', marginBottom: '0.5rem' }}>Still have questions?</p>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Contact our {city} team directly for personalized assistance.</p>
                </div>
            </div>
        </>
    );
}

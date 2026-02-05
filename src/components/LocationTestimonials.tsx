import { Star, MessageSquare, Quote } from "lucide-react";
import styles from "./components.module.css";

interface TestimonialsProps {
    city: string;
}

export default function LocationTestimonials({ city }: TestimonialsProps) {
    const reviews = [
        {
            name: "James Anderson",
            role: "Corporate Client",
            text: `Excellent service in ${city}. The chauffeur was punctual, professional, and the vehicle was immaculate. Highly recommended for business travel.`,
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            role: "Airport Transfer",
            text: `Seamless airport transfer experience. The driver met me at baggage claim and helped with luggage. Dealing with Auzzsi in ${city} was a pleasure.`,
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Private Tour",
            text: `We booked a day tour around ${city} and it was fantastic. Our driver was knowledgeable and flexible with our itinerary. 5 stars!`,
            rating: 5
        },
        {
            name: "Emily Thompson",
            role: "Wedding Transport",
            text: `Used their service for our wedding guests. Reliable, stylish, and on time. Thank you for making our day easier!`,
            rating: 5
        }
    ];

    return (
        <div style={{ margin: '4rem 0' }}>
            <h3 className={styles.title}>
                <MessageSquare color="#c5a467" size={24} />
                <span>Client Reviews in {city}</span>
            </h3>

            <div className={styles.reviewsGrid}>
                {reviews.map((review, idx) => (
                    <div key={idx} className={styles.reviewCard}>
                        {/* Quote Icon Background */}
                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', opacity: 0.1 }}>
                            <Quote size={40} color="#c5a467" />
                        </div>

                        <div className={styles.reviewHeader}>
                            <div className={styles.avatar}>
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>{review.name}</h4>
                                <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>{review.role}</p>
                                <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="#c5a467" color="#c5a467" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p style={{ fontStyle: 'italic', color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                            "{review.text}"
                        </p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <a
                    href="/reviews"
                    style={{
                        display: 'inline-block',
                        padding: '0.75rem 1.5rem',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.375rem',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#374151',
                        transition: 'all 0.2s',
                        background: 'white'
                    }}
                >
                    Read All Reviews
                </a>
            </div>
        </div>
    );
}

"use client";

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const reviews = [
        {
            name: "James Anderson",
            role: "Corporate Client",
            text: "Auzzie has been our go-to for corporate transfers in Sydney. The drivers are always punctual, vehicles are immaculate, and the booking process is seamless.",
            rating: 5
        },
        {
            name: "Sarah Mitchell",
            role: "Airport Transfer",
            text: "The best start to our holiday! The chauffeur met us at baggage claim and helped with everything. Truly a premium experience compared to rideshare.",
            rating: 5
        },
        {
            name: "David Chen",
            role: "Event Organiser",
            text: "Managed transport for our 200-person conference perfectly. The coordination team was fantastic and every guest arrived on time comfortably.",
            rating: 5
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>What Our Clients Say</h2>
                <div className={styles.separator}></div>

                <div className={styles.grid}>
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={styles.cardWrapper}
                            style={{
                                opacity: index === activeIndex ? 1 : 0,
                                zIndex: index === activeIndex ? 2 : 1,
                                pointerEvents: index === activeIndex ? 'auto' : 'none'
                            }}
                        >
                            <div className={styles.card}>
                                <div className={styles.stars}>
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="#c5a467" strokeWidth={0} />)}
                                </div>
                                <Quote size={40} className={styles.quoteIcon} />
                                <p className={styles.reviewText}>"{review.text}"</p>
                                <div>
                                    <h3 className={styles.reviewerName}>{review.name}</h3>
                                    <span className={styles.reviewerRole}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.dots}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : styles.dotInactive}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

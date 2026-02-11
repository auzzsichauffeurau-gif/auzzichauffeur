"use client";

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
    const reviews = [
        {
            name: "James Anderson",
            role: "Corporate Client",
            text: "Auzzsi has been our go-to for corporate transfers in Sydney. The drivers are always punctual, vehicles are immaculate, and the booking process is seamless.",
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
        <section style={{ padding: '5rem 2rem', backgroundColor: '#f9fafb' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '1rem', fontWeight: 'bold' }}>What Our Clients Say</h2>
                <div style={{ width: '60px', height: '4px', backgroundColor: '#c5a467', margin: '0 auto 3rem' }}></div>

                <div style={{ display: 'grid', gridTemplateAreas: '"stack"' }}>
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            style={{
                                gridArea: 'stack',
                                opacity: index === activeIndex ? 1 : 0,
                                transition: 'opacity 0.6s ease-in-out',
                                pointerEvents: index === activeIndex ? 'auto' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: index === activeIndex ? 2 : 1,
                            }}
                        >
                            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)', maxWidth: '700px', width: '100%' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: '#c5a467' }}>
                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={20} fill="#c5a467" strokeWidth={0} />)}
                                </div>
                                <Quote size={40} color="#e5e7eb" style={{ marginBottom: '1rem' }} />
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4b5563', marginBottom: '2rem', fontStyle: 'italic' }}>"{review.text}"</p>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>{review.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: index === activeIndex ? '#1e3a8a' : '#d1d5db',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

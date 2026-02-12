"use client";

import QuoteForm from "@/components/quote/QuoteForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./quote.module.css";
import { Check, Shield, Star, Clock } from "lucide-react";
import { Suspense } from "react";

export default function QuotePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.contentSide}>
                    <h1 className={styles.title}>Get Your Instant Quote</h1>
                    <p className={styles.subtitle}>
                        Professional chauffeur service at competitive rates.
                        Enter your details to get an estimated price for your journey.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', marginTop: '2.5rem', marginBottom: '1.5rem' }}>
                        Why Choose Our Service?
                    </h2>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Shield size={24} /></div>
                            <div>
                                <h3>Fixed Price Guarantee</h3>
                                <p>No hidden fees or surge pricing. The price you see is what you pay.</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Star size={24} /></div>
                            <div>
                                <h3>Premium Fleet</h3>
                                <p>Current model Mercedes-Benz, Audi, and BMW vehicles.</p>
                            </div>
                        </div>
                        <div className={styles.featureItem}>
                            <div className={styles.iconBox}><Clock size={24} /></div>
                            <div>
                                <h3>Reliable Service</h3>
                                <p>We track your flight and wait for you. 60 mins free waiting time at airports.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.trustSignals}>
                        <img src="/logo-accreditation-classic-light.png" alt="Accredited" className={styles.badge} />
                        <div className={styles.rating}>
                            <div className={styles.stars}>★★★★★</div>
                            <span>4.9/5 Average Rating</span>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className={styles.formSide}>
                    <Suspense fallback={<div>Loading form...</div>}>
                        <QuoteForm />
                    </Suspense>
                </div>
            </div>

            <Footer />
        </main>
    );
}

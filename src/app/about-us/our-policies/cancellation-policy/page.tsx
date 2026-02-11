"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function CancellationPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Standard Cancellation Terms",
            content: "Cancellations made more than 24 hours prior to the scheduled pickup time will incur no charge. Cancellations made between 4 and 24 hours prior to pickup will incur a 50% cancellation fee. Cancellations made less than 4 hours prior to pickup will be charged the full fare."
        },
        {
            title: "No-Show Policy",
            content: "If the passenger does not appear at the designated pickup location within 15 minutes of the scheduled time (or 60 minutes for airport pickups) and has not contacted us, the ride will be considered a 'No-Show' and the full fare will be charged."
        },
        {
            title: "Changes to Bookings",
            content: "Changes to booking times or locations must be requested at least 4 hours in advance. We will do our best to accommodate changes, subject to vehicle availability. Significant changes may result in a fare adjustment."
        },
        {
            title: "Event & Wedding Cancellations",
            content: "For special events and weddings, a non-refundable deposit is required at booking. Cancellations must be made at least 7 days in advance to avoid being charged the full balance."
        },
        {
            title: "Refund Process",
            content: "Refunds for eligible cancellations will be processed within 5-7 business days to the original method of payment. Please contact our accounts team for any refund queries."
        }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Cancellation Policy
                    </div>
                    <h1 className={styles.heroTitle}>Cancellation Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        We understand that plans can change. Our Cancellation Policy is designed to be fair to both our clients and our chauffeurs, ensuring reliable service for everyone.
                    </p>
                </div>

                <div className={styles.accordion}>
                    {sections.map((section, index) => (
                        <div key={index} className={styles.accordionItem}>
                            <button
                                className={styles.accordionButton}
                                onClick={() => toggleSection(index)}
                            >
                                <span className={styles.accordionTitle} style={{ color: openIndex === index ? '#bfa15f' : '' }}>
                                    {section.title}
                                </span>
                                {openIndex === index ? (
                                    <MinusCircle className={styles.icon} color="#bfa15f" strokeWidth={1} />
                                ) : (
                                    <PlusCircle className={styles.icon} strokeWidth={1} />
                                )}
                            </button>
                            <div className={`${styles.panel} ${openIndex === index ? styles.panelOpen : ''}`}>
                                <div className={styles.panelContent}>
                                    {section.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function FatigueManagementPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Driver Safety",
            content: "Fatigue is a major risk on our roads. We strictly enforce fatigue management protocols to ensure our drivers are rested, alert, and capable of driving safely at all times."
        },
        {
            title: "Operating Hours",
            content: "We monitor driver shifts to strictly adhere to maximum driving hours and minimum rest breaks as mandated by the Heavy Vehicle National Law (HVNL) and relevant state regulations."
        },
        {
            title: "Scheduling",
            content: "Our dispatch team plans schedules with adequate buffer times to allow for rest breaks. We do not incentivize speeding or skipping breaks to meet deadlines."
        },
        {
            title: "Health & Wellbeing",
            content: "We encourage open communication with our drivers regarding their health and fitness to drive. Drivers are empowered to refuse a shift or pull over if they feel fatigued."
        },
        {
            title: "Monitoring",
            content: "We utilize real-time monitoring and regular audits of logbooks to ensure compliance with fatigue management standards."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Fatigue Management Policy
                    </div>
                    <h1 className={styles.heroTitle}>Fatigue Management Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        Safety is non-negotiable. Our Fatigue Management Policy ensures that every Auzzsi Chauffeur behind the wheel is fresh, alert, and ready to drive you safely.
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

"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function StandardsConductPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Professionalism",
            content: "Our chauffeurs are the face of our company. We expect the highest standards of professionalism, including punctuality, courtesy, and discretion. Uniforms must be immaculate, and personal hygiene standards strictly maintained."
        },
        {
            title: "Vehicle presentation",
            content: "Every vehicle in our fleet must be presented in showroom condition. This means they are washed daily, vacuumed before every job, and kept free of personal items or clutter."
        },
        {
            title: "Respectful Behavior",
            content: "We have a zero-tolerance policy for harassment, discrimination, or abusive behavior towards passengers, other road users, or colleagues. We expect mutual respect in all interactions."
        },
        {
            title: "Compliance with Laws",
            content: "All drivers must strictly adhere to all road rules and regulations. This includes speed limits, traffic signals, and parking restrictions. Any fines incurred are the sole responsibility of the driver."
        },
        {
            title: "Drug & Alcohol Policy",
            content: "We maintain a strict zero-tolerance policy for drugs and alcohol. Random testing is conducted to ensure compliance and the safety of our passengers."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Standards & Conduct Policy
                    </div>
                    <h1 className={styles.heroTitle}>Standards & Conduct Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        Excellence is not an accident; it is the result of high intention and consistent execution. Our Standards & Conduct Policy sets the benchmark for quality service.
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

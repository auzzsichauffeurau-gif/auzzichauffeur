"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function SocialResponsibilityPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Community Engagement",
            content: "We believe in giving back to the communities we serve. We support local charities and events where possible and encourage our staff to participate in community service initiatives."
        },
        {
            title: "Fair Labour Practices",
            content: "We are committed to fair and ethical employment practices. We ensure all our staff and drivers are paid fairly, treated with respect, and work in a safe and discrimination-free environment."
        },
        {
            title: "Diversity & Inclusion",
            content: "We welcome employees, partners, and clients from all backgrounds. We do not discriminate on the basis of race, gender, age, religion, or sexual orientation. We strive to create an inclusive culture where everyone feels valued."
        },
        {
            title: "Accessibility",
            content: "We are dedicated to making transport accessible for everyone. We offer assistance for passengers with disabilities and are working to expand our accessible vehicle options."
        },
        {
            title: "Ethical Business",
            content: "We conduct our business with integrity and transparency. We have zero tolerance for bribery, corruption, or unethical behavior in our dealings with suppliers, partners, and government bodies."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Social Responsibility Policy
                    </div>
                    <h1 className={styles.heroTitle}>Social Responsibility Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        Our responsibility extends beyond our clients. We are committed to making a positive impact on society, our employees, and the wider community.
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

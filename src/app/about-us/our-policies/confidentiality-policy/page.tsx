"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function ConfidentialityPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Client Privacy & Discretion",
            content: "We understand that our clients often discuss sensitive business or personal matters during their journey. Our chauffeurs are bound by strict confidentiality agreements and are trained to exercise absolute discretion at all times."
        },
        {
            title: "Protection of Information",
            content: "Any information overheard, documents seen, or destinations visited during the course of a service are treated as strictly confidential. We do not disclose client identities or travel details to third parties unless required by law."
        },
        {
            title: "VIP & High Profile Clients",
            content: "We have specific protocols for high-profile individuals, celebrities, and government officials to ensure their privacy and security are maintained. This includes non-disclosure of travel itineraries and secure handling of booking data."
        },
        {
            title: "Data Security",
            content: "All booking data, including passenger manifests and contact details, is stored securely and is accessible only to authorized personnel for the purpose of service delivery."
        },
        {
            title: "Media Inquiries",
            content: "Our staff and drivers are prohibited from speaking to the media regarding any of our clients. All media inquiries are directed to our management team, who maintain a strict 'no comment' policy regarding client activities."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Confidentiality Policy
                    </div>
                    <h1 className={styles.heroTitle}>Confidentiality Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        Trust is the foundation of our service. Our Confidentiality Policy guarantees that your business remains your business.
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

"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./privacy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "What Is Personal Information?",
            content: "Personal information is information or an opinion about an individual, or an individual who is reasonably identifiable, whether the information or opinion is true or not, or is recorded in a material form or not. It includes your name, age, gender, contact details, health and race (health and race are also sensitive information). In this Privacy Policy, a reference to personal information includes sensitive information."
        },
        {
            title: "Businesses Of ETG Owns And Operates",
            content: "Equity Transport Group (ETG) owns and operates a range of transport services. This policy applies to all operations under the ETG umbrella, ensuring consistent privacy standards across all our brands."
        },
        {
            title: "What Kind Of Personal Information Do We Collect And Hold?",
            content: "We collect information necessary to provide our services, such as your name, address, contact details, payment information, and travel preferences. We may also collect sensitive information where required for specific services (e.g., accessibility requirements)."
        },
        {
            title: "How Do We Collect Personal Information?",
            content: "We collect personal information directly from you when you book a service, contact us, or interact with our website. We may also collect information from third parties such as travel agents or corporate booking partners."
        },
        {
            title: "Why Do We Collect, Use And Hold Your Personal Information?",
            content: "We use your information to facilitate your travel bookings, process payments, communicate with you, and improve our services. We may also use it for marketing purposes if you have consented."
        },
        {
            title: "To Whom Will We Disclose Your Personal Information?",
            content: "We may disclose your information to our drivers, affiliates, service providers, and regulatory bodies where required by law. We do not sell your personal information to third parties."
        },
        {
            title: "Marketing",
            content: "We may send you updates and offers related to our services. You can opt-out of marketing communications at any time by following the unsubscribe instructions in our emails."
        },
        {
            title: "What Happens If You Don't Provide Us With Your Personal Information?",
            content: "If you choose not to provide certain personal information, we may be unable to fulfill your booking request or provide you with the full range of our services."
        },
        {
            title: "How Do We Hold Your Personal Information And Manage The Data Quality And Security Of Your Personal Information?",
            content: "We take reasonable steps to protect your personal information from misuse, loss, and unauthorized access. We store data in secure electronic systems and train our staff on privacy obligations."
        },
        {
            title: "Do We Transfer Personal Information Overseas?",
            content: "In some cases, we may disclose personal information to overseas recipients, such as when you book international transfers through our partners. We ensure these partners adhere to comparable privacy standards."
        },
        {
            title: "Links To Other Websites",
            content: "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external websites."
        },
        {
            title: "How We Handle Complaints",
            content: "If you have a concern about your privacy, please contact our Privacy Officer. We take complaints seriously and will investigate and respond within a reasonable timeframe."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Data Retention & Privacy...
                    </div>
                    <h1 className={styles.heroTitle}>Data Retention & Privacy Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Privacy Information & Data Management</h2>
                <div className={styles.introText}>
                    <p>
                        At Equity Transport Group (ETG) we comply with the Privacy Act 1988 (Cth) (Privacy Act). This Policy explains how we manage the personal information that we collect, hold, use and disclose and how to contact us if you have any further queries.
                    </p>
                    <p>
                        This Privacy Policy applies to you only to the extent that the collection and handling of your personal information by ETG is subject to the Privacy Act.
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

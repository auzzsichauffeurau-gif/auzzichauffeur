"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function ChildSafetyPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Commitment to Safety",
            content: "Auzzsi Chauffeur is committed to the safety and well-being of all passengers, especially children. We strictly adhere to Australian road safety laws regarding child restraints."
        },
        {
            title: "Child Seats & Restraints",
            content: "We provide compliant child safety seats for infants and children upon request. Please specify the age and approximate weight of the child when booking so we can install the appropriate capsule, baby seat, or booster seat."
        },
        {
            title: "Unaccompanied Minors",
            content: "We accept bookings for unaccompanied minors (children under 18 travelling alone) only with prior written consent from a parent or guardian. Our drivers carry Working with Children Checks (WWCC) where required by state legislation."
        },
        {
            title: "Driver Training",
            content: "Our chauffeurs are trained in the correct installation of child restraints and are instructed to ensure all child locks are engaged before the journey commences."
        },
        {
            title: "Parental Responsibility",
            content: "While we provide safety equipment, parents or guardians remain responsible for ensuring their child is settled and comfortable. It is recommended that a parent or guardian checks the fit of the child restraint before travel."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Child Safety Policy
                    </div>
                    <h1 className={styles.heroTitle}>Child Safety Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        Ensuring the safety of our youngest passengers is a top priority. Our Child Safety Policy outlines our procedures for transporting children and the provision of appropriate safety restraints.
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

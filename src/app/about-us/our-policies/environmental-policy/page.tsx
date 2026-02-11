"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../shared-policy.module.css";
import Link from "next/link";
import { PlusCircle, MinusCircle } from "lucide-react";

export default function EnvironmentalPolicyPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const sections = [
        {
            title: "Sustainable Transport",
            content: "We are committed to reducing our environmental footprint. We are actively transitioning our fleet to include more hybrid and electric vehicles (EVs) where infrastructure allows, without compromising on luxury."
        },
        {
            title: "Fleet Maintenance",
            content: "Our vehicles are strictly maintained to manufacturer specifications to ensure optimal fuel efficiency and minimal emissions. Regular servicing helps prolong vehicle life and reduce waste."
        },
        {
            title: "Paperless Operations",
            content: "We have implemented digital booking and invoicing systems to minimize paper usage. We encourage our clients and partners to utilize e-tickets and digital receipts."
        },
        {
            title: "Responsible Driving",
            content: "Our chauffeurs are trained in eco-driving techniques, such as smooth acceleration and braking, to reduce fuel consumption. We also use route optimization software to minimize distance and idle time."
        },
        {
            title: "Waste Reduction",
            content: "We minimize single-use plastics in our vehicles (such as water bottles) by partnering with brands that use recyclable materials or offer sustainable alternatives."
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
                        <Link href="/">Home</Link> &gt; <Link href="/about-us">About Us</Link> &gt; <Link href="/about-us/our-policies">Our Policies</Link> &gt; Environmental Policy
                    </div>
                    <h1 className={styles.heroTitle}>Environmental Policy</h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className={styles.contentSection}>
                <div className={styles.introText}>
                    <p>
                        Luxury doesn't have to cost the earth. We are dedicated to implementing sustainable practices across our operations to protect the environment for future generations.
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


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../careers.module.css";
import Link from "next/link";
import type { Metadata } from 'next';
import CareersForm from "@/components/CareersForm";

export const metadata: Metadata = {
    title: "Become a Chauffeur | Auzzie Chauffeur Careers",
    description: "Join Auzzie Chauffeur as a professional driver. Express your interest in joining our luxury fleet and providing premium service across Australia.",
    alternates: {
        canonical: '/careers/chauffeur',
    },
};

export default function ChauffeurCareersPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/careers">Careers</Link> <span>&gt;</span> Become A Chauffeur
                    </div>
                    <h1 className={styles.heroTitle}>Become A Chauffeur</h1>
                    <p className={styles.heroSubtitle}>
                        Join Australia&apos;s most prestigious chauffeur network.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.pageTitle}>Drive Excellence</h2>
                        <div className={styles.bodyText} style={{ marginTop: '2rem' }}>
                            <p><strong>What we look for:</strong></p>
                            <ul>
                                <li>Punctuality and reliability</li>
                                <li>Professional grooming and attire</li>
                                <li>Excellent local area knowledge</li>
                                <li>Valid driver&apos;s license and accreditation</li>
                                <li>Commitment to 5-star service</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <div>
                            <h3 className={styles.introText}>Apply to join our luxury fleet</h3>
                            <div className={styles.bodyText}>
                                <p>
                                    As an Auzzie chauffeur, you represent the pinnacle of Australian luxury transport.
                                    We provide the vehicles, the training, and the bookings. You provide the exceptional
                                    experience our clients expect.
                                </p>
                            </div>

                            <CareersForm role="Chauffeur" />
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../careers.module.css";
import Link from "next/link";
import type { Metadata } from 'next';
import CareersForm from "@/components/CareersForm";

export const metadata: Metadata = {
    title: "Join as a Contractor | Auzzie Chauffeur Network",
    description: "Independent chauffeured vehicle operators wanted. Join the Auzzie National Network and grow your business with our steady stream of luxury bookings.",
    alternates: {
        canonical: '/careers/contractor',
    },
};

export default function ContractorCareersPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/careers">Careers</Link> <span>&gt;</span> Join As A Contractor
                    </div>
                    <h1 className={styles.heroTitle}>Join As A Contractor</h1>
                    <p className={styles.heroSubtitle}>
                        Partner with Auzzie and grow your chauffeur business.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.pageTitle}>Partner With Us</h2>
                        <div className={styles.bodyText} style={{ marginTop: '2rem' }}>
                            <p><strong>Requirements:</strong></p>
                            <ul>
                                <li>Late model luxury vehicle (under 5 years)</li>
                                <li>Current commercial insurance</li>
                                <li>Full accreditation and licensing</li>
                                <li>ABN and GST registration</li>
                                <li>Impeccable service standards</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <div>
                            <h3 className={styles.introText}>Independent Operator Application</h3>
                            <div className={styles.bodyText}>
                                <p>
                                    Are you an independent chauffeur with your own luxury vehicle? Join our national network
                                    to receive consistent high-quality bookings from corporate, airport, and private clients
                                    across Australia.
                                </p>
                            </div>

                            <CareersForm role="Contractor" />
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

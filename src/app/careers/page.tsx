
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./careers.module.css";
import Link from "next/link";
import type { Metadata } from 'next';
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Chauffeur Careers Australia | Auzzie Chauffeur | Join Our Team",
    description: "Looking for chauffeur jobs in Australia? Join Auzzie Chauffeur as a staff driver or contractor. Drive luxury vehicles and provide premium service.",
    alternates: {
        canonical: '/careers',
    },
};

export default function CareersPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> Careers
                    </div>
                    <h1 className={styles.heroTitle}>Careers</h1>
                    <p className={styles.heroSubtitle}>
                        Drive with Auzzie, Australia&apos;s premier chauffeur service
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/careers/chauffeur" className={styles.btnGold}>Become A Chauffeur</Link>
                        <Link href="/careers/contractor" className={styles.btnOutline}>Join As A Contractor</Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.pageTitle}>Love Driving And<br />Working With<br />People?</h2>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <div>
                            <h3 className={styles.introText}>A Career As An Auzzie Chauffeur Might Be For You!</h3>
                            <div className={styles.bodyText}>
                                <p>
                                    Auzzie is the leader in chauffeur-driven services nationwide and we&apos;re always on the lookout
                                    for people to join our team. We regularly have vacancies for both experienced chauffeurs
                                    (contract and staff) and those looking to get a start in the industry. All you need is an
                                    exemplary driving record and a commitment to great customer service.
                                </p>
                                <p>
                                    You&apos;ll be joining a team of chauffeurs who love what they do, where no two days are the same.
                                    Every day, you&apos;ll meet new people and provide the luxury transport service
                                    Auzzie is known for.
                                </p>
                            </div>
                        </div>

                        <div className={styles.cardsGrid}>
                            {/* Card 1 */}
                            <Link href="/careers/chauffeur" className={styles.card} id="become-a-chauffeur">
                                <img src="/tile-driver.png" alt="chauffeur" className={styles.cardBg} />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>Become A Chauffeur</h3>
                                    <p className={styles.cardText}>
                                        Want to join us as a chauffeur driving vehicles from our luxury fleet?
                                        Click below to leave your details and we&apos;ll be in touch.
                                    </p>
                                    <span className={styles.cardLink}>Join Us Now <ChevronRight size={16} /></span>
                                </div>
                            </Link>

                            {/* Card 2 */}
                            <Link href="/careers/contractor" className={styles.card} id="join-as-contractor">
                                <img src="/tile-steering.png" alt="contractor" className={styles.cardBg} />
                                <div className={styles.cardOverlay}></div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>Join As A Contractor</h3>
                                    <p className={styles.cardText}>
                                        Are you an independent contractor with your own vehicle?
                                        Click below to join our national network of professional drivers.
                                    </p>
                                    <span className={styles.cardLink}>Join Us Now <ChevronRight size={16} /></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

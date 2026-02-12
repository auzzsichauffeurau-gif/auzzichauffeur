
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./history.module.css";
import { Play, Quote } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our History | Auzzie Chauffeur | 20 Years of Excellence",
    description: "Learn about the history of Auzzie Chauffeur. Since 2004, we have provided premium chauffeur services across Australia with a focus on family values.",
};

export default function OurHistoryPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroLeft}>
                        <div className={styles.breadcrumb}>Home &gt; About Us &gt; Our History</div>
                        <h1 className={styles.heroTitle}>Driving Australia For Years</h1>
                        <p className={styles.heroDescription}>
                            Auzzie Chauffeur has spent years perfecting the art of chauffeured travel.
                            From humble beginnings to a nationwide fleet, our journey is driven by excellence.
                        </p>
                        <div className={styles.heroButtons}>
                            <button className={styles.btnGold}>Book Now</button>
                            <button className={styles.btnOutline}>Instant Quote</button>
                        </div>
                    </div>

                    <div className={styles.anniversaryBadge}>
                        <span className={styles.yearNumber}>Est.</span>
                        <span className={styles.yearText}>2004</span>
                    </div>
                </div>
            </section>

            {/* Our History Section */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.historySplit}>
                        <div className={styles.textBlock}>
                            <h2 className={styles.sectionHeading}>Our History</h2>
                            <p>
                                Auzzie Chauffeur started with a vision to provide a superior level of service
                                that was missing in the Australian transport industry. What began as a small
                                operation has grown into one of the country's most respected chauffeur services.
                            </p>
                            <p>
                                Throughout the years, we have remained committed to our core values of
                                reliability, safety, and comfort. We believe that the journey is just as
                                important as the destination, which is why we meticulously maintain our
                                fleet and train our chauffeurs to the highest standards.
                            </p>
                        </div>
                        <div className={styles.imageBlock}>
                            {/* Placeholder for history video/image */}
                            <img src="/luxury-tour.png" alt="History" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Stories Section */}
            <section className={`${styles.section} ${styles.storiesSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Our Stories</h2>
                    <div className={styles.storiesGrid}>

                        {/* Story Card 1 */}
                        <div className={styles.storyCard}>
                            <div className={styles.videoPlaceholder}>
                                <span className={styles.playButton}>
                                    <Play size={24} fill="currentColor" />
                                </span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>Meet Our Founders</h3>
                                <Quote size={20} className={styles.quoteIcon} />
                                <p className={styles.quoteText}>
                                    "We basically grew up in this industry. It's more than a business;
                                    it's a family legacy of service."
                                </p>
                            </div>
                        </div>

                        {/* Story Card 2 */}
                        <div className={styles.storyCard}>
                            <div className={styles.videoPlaceholder}>
                                <span className={styles.playButton}>
                                    <Play size={24} fill="currentColor" />
                                </span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>The Faces Behind The Magic</h3>
                                <Quote size={20} className={styles.quoteIcon} />
                                <p className={styles.quoteText}>
                                    "It's about the little things. Not just driving, but ensuring
                                    peace of mind for every passenger we carry."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Travel Through Time Section */}
            <section className={`${styles.section} ${styles.timelineSection}`}>
                <div className={styles.container}>
                    <div className={styles.timelineIntro}>
                        <h2 className={styles.sectionHeading}>Travel Through Time</h2>
                        <p className={styles.textBlock}>
                            Explore our interactive timeline to see how Auzzie Chauffeur has evolved,
                            adopted new technologies, and expanded its reach across Australia and beyond.
                        </p>
                    </div>

                    <div className={styles.timelinePlaceholder}>
                        <div className={styles.timelineItem}>
                            <strong>2004</strong> - Foundation of the company
                        </div>
                        <div className={styles.timelineItem}>
                            <strong>2010</strong> - Expansion to interstate capitals
                        </div>
                        <div className={styles.timelineItem}>
                            <strong>2018</strong> - Launch of the new digital booking platform
                        </div>
                        <div className={styles.timelineItem}>
                            <strong>2024</strong> - Celebrating 20 years of excellence
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            <section className={`${styles.section} ${styles.logosSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>Our Logos Through The Years</h2>
                    <div className={styles.logosGrid}>
                        <div className={styles.logoItem}>
                            <img src="/logo-history-2004.png" alt="Auzzie Logo 2004" />
                            <span>2004</span>
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/logo-history-2014.png" alt="Auzzie Logo 2014" />
                            <span>2014</span>
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/logo-history-2024.png" alt="Auzzie Logo 2024" />
                            <span>2024 (Present)</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

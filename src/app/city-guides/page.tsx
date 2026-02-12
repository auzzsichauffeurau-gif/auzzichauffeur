import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Australia City Guides & Travel Tips",
    description: "Download our exclusive city guides for Melbourne, Brisbane, and the Gold Coast. Expert travel tips from your local chauffeur team.",
};
import styles from "./city-guides.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CityGuidesPage() {
    const guides = [
        { id: 'melbourne', title: "Auzzie Melbourne City Guide", pdfLink: "#" },
        { id: 'gold-coast', title: "Auzzie Gold Coast City Guide", pdfLink: "#" },
        { id: 'brisbane', title: "Auzzie Brisbane City Guide", pdfLink: "#" },
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> &gt; City Guides
                    </div>
                    <h1 className={styles.heroTitle}>Local City Guides</h1>
                    <p className={styles.heroSubtitle}>Expert travel insights, curated by the team at Auzzie Chauffeur</p>
                </div>
            </section>

            {/* Resources Section */}
            <section className={styles.resourcesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Auzzie Chauffeur Resources</h2>

                    <div className={styles.layout}>
                        {/* List Side */}
                        <div className={styles.guideList}>
                            {guides.map((guide) => (
                                <div key={guide.id} className={styles.guideItem}>
                                    {guide.title}
                                </div>
                            ))}
                        </div>

                        {/* Map Side */}
                        <div className={styles.mapContainer}>
                            <Image src="/au-map.png" alt="Auzzie Chauffeur Coverage Map Australia" width={600} height={450} />

                            {/* Brisbane/Gold Coast Area */}
                            <div className={styles.mapMarker} style={{ top: '45%', left: '88%' }}>
                                <div className={styles.mapDot} style={{ top: '50%', left: '-15px' }}></div>
                                <a href="#" className={styles.downloadBtn}>Download PDF</a>
                            </div>

                            {/* Sydney Area */}
                            <div className={styles.mapMarker} style={{ top: '55%', left: '85%' }}>
                                <div className={styles.mapDot} style={{ top: '50%', left: '-15px' }}></div>
                                <a href="#" className={styles.downloadBtn}>Download PDF</a>
                            </div>

                            {/* Melbourne Area */}
                            <div className={styles.mapMarker} style={{ top: '65%', left: '78%' }}>
                                <div className={styles.mapDot} style={{ top: '50%', left: '-15px' }}></div>
                                <a href="#" className={styles.downloadBtn}>Download PDF</a>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#fdfbf7', borderRadius: '8px', borderLeft: '4px solid #c5a467' }}>
                        <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Expert Chauffeur Insights</h3>
                        <p style={{ color: '#4b5563', lineHeight: '1.7' }}>
                            Our guides are more than just maps. They are a collection of over 20 years of experience on the Australian roads.
                            From the best time to avoid the M1 in Brisbane to the secret drop-off points at Melbourne Airport that save you 15 minutes of walking,
                            our local chauffeurs share their insightful analysis to make your journey seamless.
                            We recommend planning your Sydney CBD transfers at least 45 minutes ahead of peak hours (8 AM - 9:30 AM) to ensure on-time arrival.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

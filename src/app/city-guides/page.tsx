import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./city-guides.module.css";
import Link from "next/link";

export default function CityGuidesPage() {
    const guides = [
        { id: 'melbourne', title: "Hughes Melbourne City Guide", pdfLink: "#" },
        { id: 'gold-coast', title: "Hughes Gold Coast City Guide", pdfLink: "#" },
        { id: 'brisbane', title: "Hughes Brisbane City Guide", pdfLink: "#" },
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
                    <h1 className={styles.heroTitle}>City Guides</h1>
                    <p className={styles.heroSubtitle}>The latest travel guides, news and blogs from Hughes Chauffeurs</p>
                </div>
            </section>

            {/* Resources Section */}
            <section className={styles.resourcesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Hughes Chauffeurs Resources</h2>

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
                            <img src="/au-map.png" alt="Australia Map" />

                            {/* Positioning buttons approximately based on the map image. 
                                Assuming a standard AU map projection. 
                                Adjust percentages if visual verification fails.
                            */}

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


                            <div className={styles.mapDot} style={{ top: '60%', left: '60%' }}></div> {/* Adelaideish */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

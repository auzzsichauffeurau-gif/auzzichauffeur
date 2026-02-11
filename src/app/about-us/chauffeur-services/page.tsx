
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./service.module.css";
import Link from "next/link";

export default function ChauffeurServicesPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/about-us">About Us</Link> <span>&gt;</span> Chauffeur Services
                    </div>
                    <h1 className={styles.heroTitle}>Chauffeur Services</h1>
                    <p className={styles.heroSubtitle}>
                        Travel in premium comfort and style with Auzzsi Chauffeur
                    </p>
                    <div className={styles.heroButtons}>
                        <button className={styles.btnGold}>Book Now</button>
                        <button className={styles.btnOutline}>Instant Quote</button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.pageTitle}>Sit Back And Relax<br />With Auzzsi Chauffeur</h2>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <p>Behind every great service there are great people.</p>

                        <p>
                            Auzzsi Chauffeur prides itself on offering the highest quality chauffeurs available in Australia.
                        </p>

                        <p>
                            All chauffeurs on the Auzzsi Fleet have been handpicked to ensure our clients are driven
                            to their destination in a discrete, professional and reliable fashion.
                        </p>

                        <p>
                            Each chauffeur must undergo a stringent recruitment process, training and practical
                            assessment program whilst demonstrating compliance with the company&apos;s policies before
                            commencing work on the Auzzsi Fleet.
                        </p>

                        <p>
                            Operational personnel regularly check, inspect and update each chauffeur&apos;s file to
                            ensure they are compliant with the legislative requirements to operate a passenger vehicle.
                        </p>

                        <h3 className={styles.sectionHeading}>Uniforms</h3>

                        <p>
                            All Auzzsi chauffeurs are professionally attired with traditional blue suit and Auzzsi tie.
                            The Auzzsi uniform is consistent throughout our Australian network.
                        </p>

                        <p>
                            Your Auzzsi Chauffeur is fully trained and able to provide you with the personal attention
                            and professional service you expect.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

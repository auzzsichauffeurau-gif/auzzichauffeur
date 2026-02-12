import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHelp from "@/components/ContactHelp";
import styles from "./sedans.module.css";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Executive Sedan Rental | Auzzie Chauffeur | Book Luxury Sedan",
    description: "Hire a premium executive sedan for your next transfer. Late-model Mercedes, BMW, and Audi vehicles with professional chauffeurs nationwide.",
    alternates: {
        canonical: '/the-fleet/executive-sedans',
    },
};

export default function ExecutiveSedansPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HER SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> &gt; <Link href="/the-fleet">The Fleet</Link> &gt; Executive Sedans
                    </div>
                    <h1 className={styles.heroTitle}>Executive Sedans</h1>
                    <p className={styles.heroSubtitle}>
                        Accessible and reliable; indulge in the experience of luxury at a reasonable price.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/book" className={styles.btnGold}>Book Now</Link>
                        <Link href="/quote" className={styles.btnTransparent}>Instant Quote</Link>
                    </div>
                </div>
            </section>

            {/* Executive sedan hire Mercedes BMW Audi business travel corporate transfers */}
            <section className={styles.introSection}>
                <div className={styles.twoColumnLayout}>
                    <h2 className={styles.introHeading}>
                        Executive Sedans: Luxury On Demand, Anytime, Anywhere
                    </h2>
                    <div className={styles.introText}>
                        <p>
                            Experience the epitome of refined elegance with our fleet of <Link href="/the-fleet/executive-sedans" className={styles.highlight}>executive sedans</Link>, available to hire anytime and anywhere. Our meticulously selected sedans are designed to elevate your travel experience, whether it's for <Link href="/services/corporate-transfers" className={styles.highlight}>business</Link> or pleasure. Step into the world of serene comfort as you sink into plush leather seats, surrounded by premium amenities and classic interior.
                        </p>
                        <p>
                            To ensure your full comfort and ease, all our fleet of executive sedans are driven by skilled and <Link href="/about-us/chauffeur-services" className={styles.highlight}>discreet chauffeurs</Link> ready to serve you. Whether you're attending a <Link href="/services/conferences-special-events" className={styles.highlight}>business conference</Link>, exploring a new city, or simply seeking a comfortable ride to the <Link href="/services/airport-transfers" className={styles.highlight}>airport hassle-free</Link>, our services are tailored to your convenience.
                        </p>
                        <p>
                            With seamless booking processes, you can reserve your executive sedan effortlessly, ensuring a stress-free and timely arrival. Our dedicated chauffeurs are trained in hospitality and professionalism to cater to your every need, offering a personalized ride. We pride ourselves on punctuality, ensuring you arrive at your destination refreshed, relaxed, and with executive style. <Link href="/book" className={styles.highlight}>Book an executive sedan today</Link> and redefine your journey, where every mile is a testament to fine living.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMAGE GALLERY */}
            <section className={styles.gallerySection}>
                <img src="/tile-meeting-2.png" alt="Executive interior" className={styles.galleryImage} />
                <img src="/tile-audi.png" alt="Black Executive Sedan" className={styles.galleryImage} />
                <img src="/tile-driver.png" alt="Chauffeur opening door" className={styles.galleryImage} />
            </section>

            {/* RANGE OF VEHICLES */}
            <section className={styles.rangeSection}>
                <h2 className={styles.rangeTitle}>Our Range Of Vehicles</h2>
                <div className={styles.rangeText}>
                    <p>
                        Whether you are looking for a luxury limousine or a spacious people mover. Auzzie has a vehicle to suit you. With vehicle types available for any occasion, all driven by professional, experienced chauffeurs.
                    </p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                        Not sure what vehicle suits your needs? Contact our friendly team via email at <a href="mailto:info@auzziechauffeur.com.au" style={{ color: '#1a2b4b' }}>info@auzziechauffeur.com.au</a>.
                    </p>
                </div>
                <Link href="/book" className={styles.btnBlue}>Book Now</Link>
            </section>

            {/* CONTACT SECTION */}
            <ContactHelp />

            <Footer />
        </main>
    );
}

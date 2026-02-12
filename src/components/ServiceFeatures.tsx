import styles from './ServiceFeatures.module.css';
import { Plane, Briefcase, Calendar, Wine, Heart, Star, Globe, Ship } from 'lucide-react';
import Link from 'next/link';

export default function ServiceFeatures() {
    const features = [
        {
            icon: <Plane size={32} />,
            text: "Airport Transfers",
            link: "/services/airport-transfers"
        },
        {
            icon: <Briefcase size={32} />,
            text: "Corporate Travel",
            link: "/services/corporate-transfers"
        },
        {
            icon: <Calendar size={32} />,
            text: "Conferences & Events",
            link: "/services/conferences-special-events" // Fallback to slug or dedicated
        },
        {
            icon: <Wine size={32} />,
            text: "Private Tours",
            link: "/services/luxury-tours"
        },
        {
            icon: <Heart size={32} />,
            text: "Weddings",
            link: "/services/wedding-cars"
        },
        {
            icon: <Star size={32} />,
            text: "Hourly Charter",
            link: "/services/hourly-chauffeur"
        },
        {
            icon: <Ship size={32} />,
            text: "Cruise Transfers",
            link: "/services/cruise-ship-transfers"
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Chauffeurs At Your Service</h2>

            <p className={styles.description}>
                Experience the pinnacle of luxury with <Link href="/about-us" className={styles.inlineLink}>Auzzie Chauffeur Service</Link>. We provide professional chauffeur-driven cars for <Link href="/services/airport-transfers" className={styles.inlineLink}>airport transfers</Link>, <Link href="/services/corporate-transfers" className={styles.inlineLink}>corporate travel</Link>, and <Link href="/services/conferences-special-events" className={styles.inlineLink}>special events</Link> across Australia.
                Whether you need a <Link href="/services/hourly-chauffeur" className={styles.inlineLink}>private driver</Link> in <Link href="/melbourne" className={styles.inlineLink}>Melbourne</Link>, <Link href="/sydney" className={styles.inlineLink}>Sydney</Link>, <Link href="/brisbane" className={styles.inlineLink}>Brisbane</Link>, <Link href="/gold-coast" className={styles.inlineLink}>Gold Coast</Link>, <Link href="/adelaide" className={styles.inlineLink}>Adelaide</Link>, <Link href="/perth" className={styles.inlineLink}>Perth</Link>, or <Link href="/cairns-port-douglas" className={styles.inlineLink}>Cairns</Link>, our fleet of <Link href="/the-fleet" className={styles.inlineLink}>luxury European vehicles</Link> ensures you arrive in style and total comfort.
                Book your reliable <Link href="/services" className={styles.inlineLink}>ground transport</Link> today with Australia's trusted, local chauffeur team.
            </p>

            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <Link href={feature.link} key={index} className={styles.feature} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className={styles.iconWrapper}>
                            {feature.icon}
                        </div>
                        <p className={styles.featureTitle}>{feature.text}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

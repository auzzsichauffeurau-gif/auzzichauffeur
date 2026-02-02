import styles from './ServiceFeatures.module.css';
import { Plane, Briefcase, Calendar, Wine, Heart, Star, Globe } from 'lucide-react';
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
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Chauffeurs At Your Service</h2>

            <p className={styles.description}>
                Experience the pinnacle of luxury with Auzzsi Chauffeur Service. We provide professional chauffeur-driven cars for airport transfers, corporate travel, and special events across Australia.
                Whether you need a private driver in <strong>Melbourne</strong>, <strong>Sydney</strong>, <strong>Brisbane</strong>, <strong>Gold Coast</strong>, <strong>Adelaide</strong>, <strong>Cairns</strong>, or <strong>Hobart</strong>, our fleet of premium European vehicles ensures you arrive in style and comfort.
                Book your reliable ground transport today with Australia's trusted chauffeur team.
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

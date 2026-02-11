import styles from './Footer.module.css';
import { Linkedin, Facebook, Instagram, Play, Apple, MessageSquare, CheckCircle, Leaf, Award, Anchor } from 'lucide-react';

import Link from 'next/link';

export default function Footer() {
    const quickLinks = [
        { name: "Airport Meeting Points", href: "#" },
        { name: "Book Now", href: "/contact-us" },
        { name: "Manage Booking", href: "#" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "City Guides", href: "/locations" },
        { name: "Popular Routes", href: "#" },
        { name: "Corporate Transfers", href: "/services" },
        { name: "Conferences & Special Events", href: "/services" },
        { name: "Cruise Ship Transfers", href: "/services" },
        { name: "Private Driver", href: "/services" },
        { name: "Airline & Cruise Crewing", href: "/services" },
        { name: "Luxury Private Tours", href: "/the-fleet" } // Assuming tours relate to fleet
    ];

    const services = [
        { name: "Airport Transfer Sydney", href: "/sydney/airport-transfers" },
        { name: "Sydney Chauffeur", href: "/sydney" },
        { name: "Airport Transfer Melbourne", href: "/melbourne/airport-transfers" },
        { name: "Melbourne Chauffeur", href: "/melbourne" },
        { name: "Airport Transfer Brisbane", href: "/brisbane/airport-transfers" },
        { name: "Brisbane Chauffeur", href: "/brisbane" },
        { name: "Airport Transfer Adelaide", href: "/adelaide/airport-transfers" },
        { name: "Adelaide Chauffeur", href: "/adelaide" },
        { name: "Airport Transfer Gold Coast", href: "/gold-coast/airport-transfers" },
        { name: "Gold Coast Chauffeur", href: "/gold-coast" }
    ];

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    {/* Column 1: Logo & Vision */}
                    <div className={`${styles.column} ${styles.logoColumn}`}>
                        <div className={styles.brandWrapper}>
                            <img
                                src="/logo/footer-logo.png"
                                alt="Auzzsi Chauffeur"
                                style={{ height: '119px', width: 'auto', marginBottom: '1rem' }}
                            />
                        </div>

                        <p className={styles.description}>
                            Auzzsi is Australia&apos;s only fully national chauffeur service, providing premium airport transfers, private drivers, and chauffeurs in major cities, including Sydney, Melbourne, Brisbane, Adelaide, Gold Coast, and more. With a network of first-class drivers, Auzzsi ensures unparalleled service nationwide.
                        </p>


                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>QUICK LINKS</h4>
                        <ul className={styles.linkList}>
                            {quickLinks.map((link, i) => (
                                <li key={i} className={styles.linkItem}>
                                    <Link href={link.href} className={styles.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Chauffeur Services */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>CHAUFFEUR SERVICES</h4>
                        <ul className={styles.linkList}>
                            {services.map((link, i) => (
                                <li key={i} className={styles.linkItem}>
                                    <Link href={link.href} className={styles.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Awards & Socials */}
                    <div className={styles.column}>
                        <div className={styles.awardsGrid}>
                            <img src="/logo-accreditation-classic.png" alt="Accredited Chauffeur" className={styles.awardImage} />
                            <img src="/logo-accreditation-black-gold.png" alt="5 Star Service" className={styles.awardImage} />
                            <img src="/logo-accreditation-clean.png" alt="Verified Partner" className={styles.awardImage} />
                            <img src="/logo-accreditation-modern.png" alt="Accredited" className={styles.awardImage} />
                        </div>

                        <h4 className={styles.columnTitle} style={{ marginTop: '1rem' }}>SECURE PAYMENTS</h4>
                        <div className={styles.payments}>
                            {/* Simulating Payment Icons with CSS/Text */}
                            <div className={styles.visa}>VISA</div>
                            <div className={styles.master}>
                                <div className={`${styles.masterCircle} ${styles.mcRed}`}></div>
                                <div className={`${styles.masterCircle} ${styles.mcYellow}`}></div>
                            </div>
                            <div className={styles.amex}>AMEX</div>
                        </div>

                        <h4 className={styles.columnTitle} style={{ marginTop: '1rem' }}>LET&apos;S STAY CONNECTED</h4>
                        <div className={styles.socials}>
                            <Linkedin size={24} className={styles.socialIcon} />
                            <Facebook size={24} className={styles.socialIcon} />
                            <Instagram size={24} className={styles.socialIcon} />
                        </div>
                    </div>
                </div>

                {/* Bottom Links */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '2rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.85rem', color: '#9ca3af' }}>
                    <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
                    <Link href="/terms-conditions" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
                </div>
            </footer>

            {/* Floating Widgets */}

        </>
    );
}

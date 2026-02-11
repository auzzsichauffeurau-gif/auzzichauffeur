import styles from './Footer.module.css';
import { Linkedin, Facebook, Instagram, Play, Apple, MessageSquare, CheckCircle, Leaf, Award, Anchor } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const quickLinks = [
        { name: "Airport Meeting Points", href: "/services/meeting-points" },
        { name: "Book Now", href: "/contact-us" },
        { name: "Manage Booking", href: "/contact-us" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "City Guides", href: "/locations" },
        { name: "Popular Routes", href: "/locations" },
        { name: "Corporate Transfers", href: "/services/corporate-transfers" },
        { name: "Conferences & Special Events", href: "/services/conferences-special-events" },
        { name: "Cruise Ship Transfers", href: "/services/cruise-ship-transfers" },
        { name: "Private Driver", href: "/services/hourly-chauffeur" },
        { name: "Airline & Cruise Crewing", href: "/services/airline-cruise-crewing" },
        { name: "Luxury Private Tours", href: "/services/luxury-tours" },
        { name: "Customer Reviews", href: "/reviews" }
    ];

    const services = [
        { name: "Sydney Chauffeur", href: "/sydney" },
        { name: "Melbourne Chauffeur", href: "/melbourne" },
        { name: "Brisbane Chauffeur", href: "/brisbane" },
        { name: "Perth Chauffeur", href: "/perth" },
        { name: "Adelaide Chauffeur", href: "/adelaide" },
        { name: "Gold Coast Chauffeur", href: "/gold-coast" },
        { name: "Hobart Chauffeur", href: "/hobart" },
        { name: "Cairns Chauffeur", href: "/cairns-port-douglas" },
        { name: "Airport Transfers", href: "/services/airport-transfers" },
    ];

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    {/* Column 1: Logo & Vision */}
                    <div className={`${styles.column} ${styles.logoColumn}`}>
                        <div className={styles.brandWrapper}>
                            <Image
                                src="/logo/footer-logo.webp"
                                alt="Auzzie Chauffeur"
                                width={300}
                                height={178}
                                style={{ height: 'auto', width: '200px', marginBottom: '1rem' }}
                            />
                        </div>

                        <p className={styles.description}>
                            Auzzie is Australia&apos;s only fully national chauffeur service, providing premium airport transfers, private drivers, and chauffeurs in major cities, including Sydney, Melbourne, Brisbane, Adelaide, Gold Coast, and more. With a network of first-class drivers, Auzzie ensures unparalleled service nationwide.
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
                            <Image src="/logo-accreditation-classic.webp" alt="Accredited Chauffeur" className={styles.awardImage} width={80} height={80} />
                            <Image src="/logo-accreditation-black-gold.webp" alt="5 Star Service" className={styles.awardImage} width={80} height={80} />
                            <Image src="/logo-accreditation-clean.webp" alt="Verified Partner" className={styles.awardImage} width={80} height={80} />
                            <Image src="/logo-accreditation-modern.webp" alt="Accredited" className={styles.awardImage} width={80} height={80} />
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

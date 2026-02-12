import styles from './Footer.module.css';
import { Linkedin, Facebook, Instagram, Play, Apple, MessageSquare, CheckCircle, Leaf, Award, Anchor } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const quickLinks = [
        { name: "About Us", href: "/about-us" },
        { name: "News & Travel Guides", href: "/news" },
        { name: "Airport Meeting Points", href: "/services/meeting-points" },
        { name: "Book Now", href: "/book" },
        { name: "Company Policies", href: "/about-us/our-policies" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "FAQ", href: "/about-us/faqs" },
        { name: "Customer Reviews", href: "/reviews" },
        { name: "Pricing Guide (PDF)", href: "/Auzzie-Chauffeur-Pricing-Guide.pdf" }
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
                            Auzzie is Australia&apos;s only fully national chauffeur service, providing luxury airport transfers, private drivers, and chauffeurs in major cities, including Sydney, Melbourne, Brisbane, Adelaide, Gold Coast, and more. With a network of first-class drivers, Auzzie ensures unparalleled service nationwide.
                        </p>


                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>QUICK LINKS</h3>
                        <ul className={styles.linkList}>
                            {quickLinks.map((link, i) => (
                                <li key={i} className={styles.linkItem}>
                                    <Link href={link.href} className={styles.link}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>CONTACT US</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem} style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                                <strong>General:</strong><br />
                                <a href="mailto:info@auzziechauffeur.com.au" style={{ color: '#bfa15f', textDecoration: 'none' }}>info@auzziechauffeur.com.au</a>
                            </li>
                            <li className={styles.linkItem} style={{ color: '#d1d5db', marginBottom: '1rem' }}>
                                <strong>Bookings:</strong><br />
                                <a href="mailto:booking@auzziechauffeur.com.au" style={{ color: '#bfa15f', textDecoration: 'none' }}>booking@auzziechauffeur.com.au</a>
                            </li>
                            <li className={styles.linkItem} style={{ color: '#d1d5db' }}>
                                <strong>Head Office:</strong><br />
                                Tullamarine, VIC 3043<br />
                                Melbourne, Australia
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Awards & Socials */}
                    <div className={styles.column}>
                        <div className={styles.awardsGrid}>
                            <Image src="/logo-accreditation-classic.webp" alt="Accredited Chauffeur Commercial Operator Australia" className={styles.awardImage} width={80} height={80} />
                            <Image src="/logo-accreditation-black-gold.webp" alt="5 Star Luxury Chauffeur Service Award" className={styles.awardImage} width={80} height={80} />
                            <Image src="/logo-accreditation-clean.webp" alt="Verified Partner Professional Driver Accreditation" className={styles.awardImage} width={80} height={80} />
                            <Image src="/logo-accreditation-modern.webp" alt="Official Transport Accreditation Australia" className={styles.awardImage} width={80} height={80} />
                        </div>

                        <h3 className={styles.columnTitle} style={{ marginTop: '1rem' }}>SECURE PAYMENTS</h3>
                        <div className={styles.payments}>
                            {/* Simulating Payment Icons with CSS/Text */}
                            <div className={styles.visa}>VISA</div>
                            <div className={styles.master}>
                                <div className={`${styles.masterCircle} ${styles.mcRed}`}></div>
                                <div className={`${styles.masterCircle} ${styles.mcYellow}`}></div>
                            </div>
                            <div className={styles.amex}>AMEX</div>
                        </div>

                        <h3 className={styles.columnTitle} style={{ marginTop: '1rem' }}>LET'S STAY CONNECTED</h3>
                        <div className={styles.socials}>
                            <a href="https://linkedin.com/company/auzziechauffeur" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn">
                                <Linkedin size={24} className={styles.socialIcon} />
                            </a>
                            <a href="https://facebook.com/auzziechauffeur" target="_blank" rel="noopener noreferrer nofollow" aria-label="Facebook">
                                <Facebook size={24} className={styles.socialIcon} />
                            </a>
                            <a href="https://instagram.com/auzziechauffeur" target="_blank" rel="noopener noreferrer nofollow" aria-label="Instagram">
                                <Instagram size={24} className={styles.socialIcon} />
                            </a>
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

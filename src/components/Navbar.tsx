"use client";
import styles from './Navbar.module.css';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {

    // Define structure for dropdowns
    const navStructure = [
        {
            title: "Airport Transfers",
            link: "/melbourne/airport-transfers",
            items: [
                { name: "Adelaide Airport", link: "/adelaide/airport-transfers" },
                { name: "Brisbane Airport", link: "/brisbane/airport-transfers" },
                { name: "Cairns Airport", link: "/cairns-port-douglas/airport-transfers" },
                { name: "Gold Coast Airport", link: "/gold-coast/airport-transfers" },
                { name: "Hobart Airport", link: "/hobart/airport-transfers" },
                { name: "Melbourne Airport", link: "/melbourne/airport-transfers" },
                { name: "Perth Airport", link: "/perth/airport-transfers" },
                { name: "Sydney Airport", link: "/sydney/airport-transfers" },
                { name: "Airport Meeting Points", link: "/services/meeting-points" },
            ]
        },
        {
            title: "Services",
            link: "/services",
            items: [
                { name: "Corporate Transfers", link: "/services/corporate-transfers" },
                { name: "Wedding Cars", link: "/services/wedding-cars" },
                { name: "Hourly Chauffeur", link: "/services/hourly-chauffeur" },
                { name: "All Day Hire", link: "/services/all-day-hire" },
                { name: "Luxury Tours", link: "/services/luxury-tours" },
                { name: "Airline & Cruise Crewing", link: "/services/airline-cruise-crewing" },
                { name: "Conferences & Special Events", link: "/services/conferences-special-events" },
                { name: "Cruise Ship Transfers", link: "/services/cruise-ship-transfers" },
                { name: "International Student Transfers", link: "/services/international-student-transfers" },
            ]
        },
        {
            title: "Locations",
            link: "/locations",
            items: [
                { name: "Adelaide", link: "/adelaide" },
                { name: "Brisbane", link: "/brisbane" },
                { name: "Cairns & Port Douglas", link: "/cairns-port-douglas" },
                { name: "Gold Coast", link: "/gold-coast" },
                { name: "Hobart", link: "/hobart" },
                { name: "Melbourne", link: "/melbourne" },
                { name: "Perth", link: "/perth" },
                { name: "Sydney", link: "/sydney" },
            ]
        },
        {
            title: "The Fleet",
            link: "/the-fleet",
            items: [
                { name: "Executive Sedans", link: "/the-fleet/executive-sedans" },
                { name: "Luxury Sedans", link: "/the-fleet/premium-sedans" },
                { name: "Luxury SUVs", link: "/the-fleet/premium-suvs" },
                { name: "People Movers", link: "/the-fleet/people-movers" },
                { name: "Luxury Minibuses", link: "/the-fleet/luxury-minibuses" },
                { name: "Coaches", link: "/the-fleet/coaches" },
            ]
        },
        {
            title: "About Us",
            link: "/about-us",
            items: [
                { name: "Our History", link: "/about-us/our-history" },
                { name: "FAQs", link: "/about-us/faqs" },
                { name: "Chauffeur Services", link: "/about-us/chauffeur-services" },
                { name: "Our Policies", link: "/about-us/our-policies" },
                { name: "News", link: "/news" },
                { name: "City Guides", link: "/city-guides" },
            ]
        }
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState<string[]>([]);

    const toggleGroup = (title: string) => {
        setExpandedGroups(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    // Toggle scroll lock when menu opens
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Close submenus when closing main menu could be a nice touch, but optional
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <header className={styles.headerContainer}>
                {/* Top Bar */}
                <div className={styles.topBar}>
                    <div className={styles.topBarContent}>
                        <span className={styles.topBarText}>Available 24/7</span>
                        <a href="tel:0415673786" className={styles.topBarLink}>
                            Start Booking: 0415 673 786
                        </a>
                        <a href="mailto:booking@auzziechauffeur.com.au" className={styles.topBarLink}>
                            booking@auzziechauffeur.com.au
                        </a>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className={styles.header}>
                    {/* Logo Section */}
                    <Link href="/" className={styles.brandWrapper} onClick={() => setMobileMenuOpen(false)}>
                        <Image
                            src="/logo/header-logo.webp"
                            alt="Auzzie Chauffeur"
                            className={styles.logoImage}
                            width={300}
                            height={178}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        {navStructure.map((nav, index) => (
                            <div key={index} className={styles.navItemWrapper}>
                                <Link href={nav.link} className={styles.navItem}>
                                    {nav.title} <ChevronDown className={styles.chevron} />
                                </Link>

                                {/* Check if items length is large to apply multi-column style */}
                                <div className={`${styles.dropdown} ${nav.items.length > 8 ? styles.multiColumnDropdown : ''}`}>
                                    {nav.items.map((item, itemIndex) => (
                                        <Link key={itemIndex} href={item.link} className={styles.dropdownLink}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <Link href="/contact-us" className={styles.navItemWrapper}>
                            <span className={styles.navItem} style={{ gap: 0 }}>Contact Us</span>
                        </Link>

                        <Link href="/quote" className={styles.quoteBtn}>Get Quote</Link>
                    </nav>

                    {/* Mobile Actions */}
                    <div className={styles.mobileActions}>
                        <Link href="/book" className={styles.mobileHeaderCta}>
                            Book Now
                        </Link>
                        <button
                            className={styles.hamburger}
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Open Menu"
                        >
                            <Menu size={28} color="white" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                    <div className={styles.mobileMenuHeader}>
                        <div className={styles.brandWrapper}>
                            <div className={styles.logoCircle} style={{ width: 40, height: 40, fontSize: '1.4rem' }}>A</div>
                            <div className={styles.brandText}>
                                <span className={styles.brandName} style={{ fontSize: '1.2rem' }}>AUZZIE</span>
                            </div>
                        </div>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X size={28} color="#1f2937" />
                        </button>
                    </div>

                    <div className={styles.mobileMenuContent}>
                        {navStructure.map((nav, index) => {
                            const isExpanded = expandedGroups.includes(nav.title);
                            return (
                                <div key={index} className={styles.mobileGroup}>
                                    <div
                                        className={styles.mobileGroupHeader}
                                        onClick={() => toggleGroup(nav.title)}
                                    >
                                        <span className={styles.mobileGroupTitle}>{nav.title}</span>
                                        <ChevronDown size={20} style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                                    </div>

                                    <div className={`${styles.mobileLinks} ${isExpanded ? styles.mobileLinksOpen : ''}`}>
                                        <Link
                                            href={nav.link}
                                            className={styles.mobileLinkActive} // Main category link
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            All {nav.title}
                                        </Link>
                                        {nav.items.map((item, itemIndex) => (
                                            <Link
                                                key={itemIndex}
                                                href={item.link}
                                                className={styles.mobileLink}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                        <div className={styles.mobileGroup}>
                            <Link
                                href="/contact-us"
                                className={styles.mobileGroupTitle}
                                style={{ display: 'block', textDecoration: 'none' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div style={{ paddingBottom: '2rem' }}>
                            <Link
                                href="/book"
                                className={styles.mobileBookBtn}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book Now
                            </Link>
                            <Link
                                href="/quote"
                                className={styles.mobileQuoteBtn}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.spacer}></div>
        </>
    );
}

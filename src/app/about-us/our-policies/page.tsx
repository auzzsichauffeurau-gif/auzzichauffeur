
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./policies.module.css";
import Link from "next/link";

export default function OurPoliciesPage() {
    const policies = [
        { label: "Cancellation Policy", href: "/about-us/our-policies/cancellation-policy" },
        { label: "Child Safety Policy", href: "/about-us/our-policies/child-safety-policy" },
        { label: "Confidentiality Policy", href: "/about-us/our-policies/confidentiality-policy" },
        { label: "Data Retention & Privacy Policy", href: "/about-us/our-policies/data-retention-privacy-policy" },
        { label: "Environmental Policy", href: "/about-us/our-policies/environmental-policy" },
        { label: "Fatigue Management Policy", href: "/about-us/our-policies/fatigue-management-policy" },
        { label: "Social Responsibility Policy", href: "/about-us/our-policies/social-responsibility-policy" },
        { label: "Standards & Conduct Policy", href: "/about-us/our-policies/standards-conduct-policy" }
    ];

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/about-us">About Us</Link> <span>&gt;</span> Our Policies
                    </div>
                    <h1 className={styles.heroTitle}>Our Policies</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.pageTitle}>Auzzsi Company<br />Policies</h2>
                    </div>

                    {/* Right Column */}
                    <div className={styles.rightColumn}>
                        <p>
                            As part of our commitment to excellence, we have implemented a set of comprehensive
                            company policies that govern our operations. These policies encompass various aspects
                            such as vehicle maintenance, safety protocols, driver conduct, reservation procedures,
                            and customer support. By adhering to these policies, we aim to provide a seamless and
                            enjoyable experience for every client, while upholding the highest standards of
                            professionalism and reliability in the industry.
                        </p>

                        <ul className={styles.policyList}>
                            {policies.map((policy, index) => (
                                <li key={index}>
                                    {policy.href ? (
                                        <Link href={policy.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            {policy.label}
                                        </Link>
                                    ) : (
                                        policy.label
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}

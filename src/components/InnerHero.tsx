import Link from 'next/link';
import styles from './InnerHero.module.css';

interface InnerHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: { label: string; href?: string }[];
}

export default function InnerHero({
    title,
    subtitle,
    breadcrumbs = []
}: InnerHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                {/* Breadcrumbs */}
                <div className={styles.breadcrumbs}>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            {index > 0 && <span className={styles.separator}>&gt;</span>}
                            {crumb.href ? (
                                <Link href={crumb.href} className={styles.crumbLink}>
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className={styles.crumbCurrent}>{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </div>

                <h1 className={styles.title}>{title}</h1>

                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

                <div className={styles.actions}>
                    <a href="/contact-us" className={`${styles.btn} ${styles.btnPrimary}`}>
                        BOOK NOW
                    </a>
                    <a href="/contact-us" className={`${styles.btn} ${styles.btnSecondary}`}>
                        INSTANT QUOTE
                    </a>
                </div>
            </div>
        </section>
    );
}

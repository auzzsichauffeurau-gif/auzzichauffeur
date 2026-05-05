import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./components.module.css";

interface BreadcrumbsProps {
    city: string;
    service?: string;
}

export default function Breadcrumbs({ city, service }: BreadcrumbsProps) {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/-+/g, '-');
    const serviceSlug = service ? service.toLowerCase().replace(/\s+/g, '-') : '';

    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumbsContainer}>
            <ol className={styles.breadcrumbsList} itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link
                        href="/"
                        className={styles.breadcrumbsLink}
                        itemProp="item"
                    >
                        <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>

                <ChevronRight size={14} color="#9ca3af" style={{ flexShrink: 0 }} />

                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link
                        href={`/${citySlug}`}
                        className={service ? styles.breadcrumbsLink : styles.breadcrumbsActive}
                        itemProp="item"
                    >
                        <span itemProp="name">{city}</span>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>

                {service && (
                    <>
                        <ChevronRight size={14} color="#9ca3af" style={{ flexShrink: 0 }} />
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span
                                className={styles.breadcrumbsActive}
                                itemProp="name"
                            >
                                {service}
                            </span>
                            <meta itemProp="position" content="3" />
                            <link itemProp="item" href={`https://www.auzziechauffeur.com.au/${citySlug}/${serviceSlug}`} />
                        </li>
                    </>
                )}
            </ol>
        </nav>
    );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./components.module.css";

interface BreadcrumbsProps {
    city: string;
}

export default function Breadcrumbs({ city }: BreadcrumbsProps) {
    const citySlug = city.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');

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
                        href="/locations"
                        className={styles.breadcrumbsLink}
                        itemProp="item"
                    >
                        <span itemProp="name">Locations</span>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>

                <ChevronRight size={14} color="#9ca3af" style={{ flexShrink: 0 }} />

                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span
                        className={styles.breadcrumbsActive}
                        itemProp="name"
                    >
                        {city}
                    </span>
                    <meta itemProp="position" content="3" />
                    <link itemProp="item" href={`https://auzzsi.com.au/${citySlug}`} />
                </li>
            </ol>
        </nav>
    );
}

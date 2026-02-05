import { MapPin } from "lucide-react";
import styles from "./components.module.css";

interface NeighborhoodsProps {
    location: string;
    areas: string[];
}

export default function Neighborhoods({ location, areas }: NeighborhoodsProps) {
    if (!areas || areas.length === 0) return null;

    return (
        <div className={styles.cardWrapper}>
            <h3 className={styles.title}>
                Serving Key Neighborhoods in {location}
            </h3>

            <ul className={styles.grid}>
                {areas.map((area, idx) => (
                    <li key={idx} className={styles.gridItem}>
                        <MapPin size={16} color="#9ca3af" style={{ flexShrink: 0 }} />
                        <span className={styles.itemText}>{area}</span>
                    </li>
                ))}
            </ul>

            <div className={styles.note}>
                * We cover the entire metropolitan area and surrounding suburbs.
            </div>
        </div>
    );
}

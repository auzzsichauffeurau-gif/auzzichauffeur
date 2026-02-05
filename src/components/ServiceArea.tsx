import { MapPin } from "lucide-react";
import styles from "./components.module.css";

interface ServiceAreaProps {
    location: string;
    postcodes: string[];
}

export default function ServiceArea({ location, postcodes }: ServiceAreaProps) {
    if (!postcodes || postcodes.length === 0) return null;

    return (
        <div className={styles.cardWrapper}>
            <h3 className={styles.title}>
                <MapPin color="#c5a467" size={24} />
                <span>Service Area Coverage - {location}</span>
            </h3>

            <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                We proudly serve the following postcodes and surrounding areas with premium chauffeur services.
            </p>

            <div className={styles.serviceGrid}>
                {postcodes.map((postcode, idx) => (
                    <div key={idx} className={styles.serviceItem}>
                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>
                            {postcode}
                        </span>
                    </div>
                ))}
            </div>

            <div className={styles.note}>
                * Coverage extends to surrounding suburbs and metropolitan areas
            </div>
        </div>
    );
}

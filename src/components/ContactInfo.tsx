import { Phone, Mail, Map } from "lucide-react";
import styles from "./components.module.css";

interface ContactInfoProps {
    city?: string;
}

export default function ContactInfo({ city }: ContactInfoProps) {
    return (
        <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <h3 className={styles.title}>Contact & Support</h3>

            <div className={styles.contactGrid}>
                {/* Phone */}
                <a href="tel:1300465374" className={styles.contactCard}>
                    <div className={`${styles.iconCircle} ${styles.iconGold}`}>
                        <Phone color="white" size={24} />
                    </div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Phone</h4>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem' }}>1300 465 374</p>
                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>24/7 Support</p>
                </a>

                {/* Email */}
                <a href="mailto:info@auzziechauffeur.com.au" className={styles.contactCard}>
                    <div className={`${styles.iconCircle} ${styles.iconBlue}`}>
                        <Mail color="white" size={24} />
                    </div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Email</h4>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', wordBreak: 'break-all', textAlign: 'center' }}>
                        info@auzziechauffeur.com.au
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>Quick Response</p>
                </a>

                {/* Service Area */}
                <div className={styles.contactCard}>
                    <div className={`${styles.iconCircle} ${styles.iconGreen}`}>
                        <Map color="white" size={24} />
                    </div>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Coverage</h4>
                    <p style={{ color: '#4b5563', fontSize: '0.9rem', textAlign: 'center' }}>
                        Australia Wide
                    </p>
                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.5rem' }}>All Major Cities</p>
                </div>
            </div>
        </div>
    );
}

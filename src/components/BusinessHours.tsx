import { Clock } from "lucide-react";
import styles from "./components.module.css";

export default function BusinessHours() {
    return (
        <div className={styles.cardWrapper}>
            <h3 className={styles.title}>
                <Clock color="#c5a467" size={24} />
                <span>Operating Hours</span>
            </h3>

            <div className={styles.hoursGrid}>
                {/* Standard Hours */}
                <div className={styles.hoursCard}>
                    <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>Standard Support</h4>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: '#4b5563' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', paddingBottom: '0.5rem', borderBottom: '1px solid #f3f4f6' }}>
                            <span>Monday - Friday</span>
                            <span style={{ fontWeight: 600 }}>08:00 AM - 08:00 PM</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem' }}>
                            <span>Saturday - Sunday</span>
                            <span style={{ fontWeight: 600 }}>09:00 AM - 06:00 PM</span>
                        </li>
                    </ul>
                </div>

                {/* Chauffeur Service */}
                <div className={styles.hoursCard} style={{ background: '#f8fafc', borderColor: '#c5a467', borderWidth: '1px' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>Chauffeur Service</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#15803d' }}>24/7 Available</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.5 }}>
                        * Pre-booked transfers and chauffeur services operate 24 hours a day, 365 days a year.
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fffbeb', borderRadius: '0.5rem', border: '1px solid #fcd34d', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: '#92400e', fontWeight: 500 }}>
                    Book online anytime! Our booking system is always open.
                </p>
            </div>
        </div>
    );
}

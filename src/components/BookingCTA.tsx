import styles from './BookingCTA.module.css';

export default function BookingCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h2 className={styles.title}>Make Your Next Journey Stress-Free</h2>
                <h2 className={styles.title} style={{ marginBottom: '1.5rem' }}>With Auzzie</h2>

                <p className={styles.subtitle}>
                    Experience the Auzzie difference and take your next journey in comfort and style. Book your car today.
                </p>

                <a href="#" className={styles.button}>Book Now</a>
            </div>
        </section>
    );
}

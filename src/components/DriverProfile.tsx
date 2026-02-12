import styles from './DriverProfile.module.css';

export default function DriverProfile() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h2 className={styles.title}>
                        Your Auzzie Chauffeur: Professional, Experienced, Courteous And Discreet
                    </h2>
                    <a href="/book" className={styles.btnBook}>Book Your Journey</a>
                </div>

                <div className={styles.rightContent}>
                    <p className={styles.description}>
                        We handpick our chauffeurs for their exemplary driving records, extensive experience in luxury hospitality, and unwavering commitment to passenger safety. Your Auzzie driver is more than just a pilot; they are local experts who tailor every trip to your specific needs—whether that's navigating the quickest route during peak hour or providing a quiet, discreet environment for you to prepare for your next meeting.
                    </p>
                </div>
            </div>

            <div className={styles.imageGrid}>
                <div className={styles.gridItem}>
                    <img src="/tile-driver.png" alt="Senior Auzzie chauffeur in professional uniform ready for passenger arrival" width={600} height={400} />
                </div>
                <div className={styles.gridItem}>
                    <img src="/tile-meeting-1.png" alt="Auzzie chauffeur providing luxury door-to-door meet and greet service" width={600} height={400} />
                </div>
                <div className={styles.gridItem}>
                    <img src="/tile-woman-phone.png" alt="Executive passenger using Auzzie chauffeur booking service on mobile" width={600} height={400} />
                </div>
                <div className={styles.gridItem}>
                    <img src="/tile-audi.png" alt="Pristine luxury fleet vehicle from Auzzie Chauffeur available for airport transfers" width={600} height={400} />
                </div>
            </div>
        </section>
    );
}

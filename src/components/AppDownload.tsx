import styles from './AppDownload.module.css';
import { Play, Apple } from 'lucide-react'; // Using Lucide icons as approximations for store logos if SVG assets aren't available

export default function AppDownload() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Download The Auzzie App</h2>
                    <p className={styles.subtitle}>Luxury transfers at your fingertips</p>

                    <div className={styles.storeButtons}>
                        <a href="#" className={styles.storeBtn}>
                            <Play size={24} fill="white" strokeWidth={0} /> {/* Google Play approximate icon */}
                            <div className={styles.btnText}>
                                <span className={styles.btnSmall}>GET IT ON</span>
                                <span className={styles.btnLarge}>Google Play</span>
                            </div>
                        </a>

                        <a href="#" className={styles.storeBtn}>
                            <Apple size={28} fill="white" style={{ marginBottom: 2 }} />
                            <div className={styles.btnText}>
                                <span className={styles.btnSmall}>Download on the</span>
                                <span className={styles.btnLarge}>App Store</span>
                            </div>
                        </a>
                    </div>

                    <a href="#" className={styles.learnMore}>Learn More</a>
                </div>

                <div className={styles.imageWrapper}>
                    <img
                        src="/app-mockup.png"
                        alt="Auzzie App on iPhone"
                        className={styles.phoneImage}
                    />
                </div>
            </div>
        </section>
    );
}

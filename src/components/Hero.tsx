import styles from './Hero.module.css';
import BookingWidget from './BookingWidget';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

export default function Hero({
  title = "Auzzsi Chauffeur Service",
  subtitle = "Experience the Auzzsi difference with premium transfers, tours and event transport.",
  showStats = true
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.mainText}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.subtitle}>
            {subtitle}
          </p>



          <div className={styles.ctaButtons}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Get a Quote</button>
          </div>

        </div>


        {/* Booking Widget Section */}
        <div style={{ marginBottom: '3rem' }}>
          <BookingWidget />
        </div>

        {showStats && (
          <div className={styles.footer}>
            {/* Stats Section */}
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Thousands</span>
                <span className={styles.statLabel}>Of Detailed Trips</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>5-Star</span>
                <span className={styles.statLabel}>Service Rating</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>7</span>
                <span className={styles.statLabel}>Major Cities Served</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Premium</span>
                <span className={styles.statLabel}>Luxury Fleet</span>
              </div>
            </div>

            {/* App Badges */}
            <div className={styles.appButtons}>
              <a href="#" className={styles.appBtn}>
                <img src="/google-play-badge.png" alt="Get it on Google Play" style={{ height: '35px' }} />
                {/* Fallback text if needed, but image is best for badges */}
                <span style={{ display: 'none' }}>Get it on Google Play</span>
              </a>
              <a href="#" className={styles.appBtn}>
                <img src="/app-store-badge.png" alt="Download on the App Store" style={{ height: '35px' }} />
                <span style={{ display: 'none' }}>Download on the App Store</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section >
  );
}

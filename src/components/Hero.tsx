import styles from './Hero.module.css';
import BookingWidget from './BookingWidget';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  bgImage?: string;
}

export default function Hero({
  title = "Auzzie Chauffeur Service",
  subtitle = "Experience the Auzzie difference with premium transfers, tours and event transport.",
  showStats = true,
  bgImage
}: HeroProps) {
  return (
    <section
      className={styles.hero}
      style={bgImage ? { backgroundImage: `url('${bgImage}')` } : undefined}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.mainText}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.subtitle}>
            {subtitle}
          </p>





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
                <span className={styles.statValue}>10k+</span>
                <span className={styles.statLabel}>Reliable Transfers</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.9/5</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Nationwide Support</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Luxury</span>
                <span className={styles.statLabel}>European Fleet</span>
              </div>
            </div>


          </div>
        )}
      </div>
    </section >
  );
}

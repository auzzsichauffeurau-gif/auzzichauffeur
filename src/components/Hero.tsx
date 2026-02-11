import styles from './Hero.module.css';
import BookingWidget from './BookingWidget';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  bgImage?: string;
}

export default function Hero({
  title = "Auzzsi Chauffeur Service",
  subtitle = "Experience the Auzzsi difference with premium transfers, tours and event transport.",
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


          </div>
        )}
      </div>
    </section >
  );
}

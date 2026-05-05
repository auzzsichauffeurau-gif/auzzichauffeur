"use client";

import styles from './TrustedBy.module.css';
import { Star } from 'lucide-react';

export default function TrustedBy() {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.ratingWrapper}>
                    <span className={styles.googleLogo}>
                        <span className={styles.googleG}>G</span>
                        <span className={styles.googleO1}>o</span>
                        <span className={styles.googleO2}>o</span>
                        <span className={styles.googleG2}>g</span>
                        <span className={styles.googleL}>l</span>
                        <span className={styles.googleE}>e</span>
                    </span>
                    <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={20} fill="#FBBC05" strokeWidth={0} />
                        ))}
                    </div>
                    <span className={styles.reviewText}>
                        <span className={styles.bold}>5.0</span> rating from <span className={styles.bold}>11,871</span> reviews
                    </span>
                </div>

            </div>
        </div>
    );
}

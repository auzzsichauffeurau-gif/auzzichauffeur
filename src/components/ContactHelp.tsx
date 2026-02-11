"use client";
import styles from './ContactHelp.module.css';
import { Mail, Phone, Globe, Check } from 'lucide-react';
import { useState } from 'react';

export default function ContactHelp() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <h2 className={styles.title}>Questions? We&apos;re Here To Help!</h2>

                <p className={styles.description}>
                    Our friendly Customer Service Team is on hand 24/7 to answer enquiries and keep you moving.
                    You can contact us at <a href="mailto:booking@auzziechauffeur.com.au" className={styles.link}>booking@auzziechauffeur.com.au</a> or leave your details below, and we&apos;ll be in touch.
                </p>

                <div className={styles.contactRow} style={{ justifyContent: 'center' }}>
                    <div className={styles.contactItem} style={{ alignItems: 'flex-start' }}>
                        <Mail size={28} className={styles.icon} strokeWidth={1.5} style={{ marginTop: '4px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className={styles.itemLabel}>For bookings</span>
                            <a href="mailto:booking@auzziechauffeur.com.au" className={styles.contactLink} style={{ marginBottom: '0.2rem' }}>booking@auzziechauffeur.com.au</a>
                            <span className={styles.itemLabel} style={{ marginTop: '0.5rem' }}>For enquiries</span>
                            <a href="mailto:info@auzziechauffeur.com.au" className={styles.contactLink}>info@auzziechauffeur.com.au</a>
                        </div>
                    </div>
                </div>

                {isSubmitted ? (
                    <div
                        className={styles.card}
                        style={{
                            minHeight: '400px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '3rem 2rem'
                        }}
                    >
                        <div style={{
                            width: '70px',
                            height: '70px',
                            background: '#10b981',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            boxShadow: '0 8px 20px -4px rgba(16, 185, 129, 0.3)'
                        }}>
                            <Check size={36} color="white" strokeWidth={3} />
                        </div>
                        <h3 style={{ fontSize: '1.8rem', color: '#1f2937', marginBottom: '1rem' }}>Message Sent!</h3>
                        <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: '1.6', maxWidth: '450px' }}>
                            Thank you for contacting Auzzie Chauffeur. Your message has been successfully sent to our support team. We generally respond to all enquiries within 2-4 hours.
                        </p>
                    </div>
                ) : (
                    <form className={styles.formGrid} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="contact-first-name" className={styles.label}>First Name *</label>
                            <input id="contact-first-name" name="firstName" type="text" className={styles.input} autoComplete="given-name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contact-last-name" className={styles.label}>Last Name *</label>
                            <input id="contact-last-name" name="lastName" type="text" className={styles.input} autoComplete="family-name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contact-phone" className={styles.label}>Contact Number *</label>
                            <input id="contact-phone" name="phone" type="tel" className={styles.input} autoComplete="tel" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="contact-email" className={styles.label}>Email Address *</label>
                            <input id="contact-email" name="email" type="email" className={styles.input} autoComplete="email" required />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                            <input id="contact-subject" name="subject" type="text" className={styles.input} />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="contact-message" className={styles.label}>Message</label>
                            <textarea id="contact-message" name="message" className={styles.textarea} required></textarea>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

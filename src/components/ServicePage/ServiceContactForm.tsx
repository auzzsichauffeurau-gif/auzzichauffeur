"use client";

import styles from "@/app/(locations)/shared-airport.module.css";

interface ServiceContactFormProps {
    title?: string;
    subtitle?: React.ReactNode;
    detailsLabel?: string;
    showDestination?: boolean;
    dateLabel?: string;
    emailLabel?: string;
    btnText?: string;
}

export default function ServiceContactForm({
    title = "Get a Quote",
    subtitle = "Contact us for a premium chauffeur experience.",
    detailsLabel = "Trip Details",
    showDestination = false,
    dateLabel = "Date*",
    emailLabel = "Email Address*",
    btnText = "Enquire Now"
}: ServiceContactFormProps) {
    return (
        <div className={styles.contactFormWrapper}>
            <h2 className={styles.helpTitle}>{title}</h2>
            <p className={styles.helpSubtitle}>
                {subtitle}
            </p>

            <form className={styles.contactGrid} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Name*</label>
                    <input type="text" className={styles.textInput} placeholder="Your Name" />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>{dateLabel}</label>
                    {dateLabel.toLowerCase().includes('company') ? (
                        <input type="text" className={styles.textInput} placeholder="Company Name" />
                    ) : (
                        <input type="date" className={styles.textInput} />
                    )}
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>Contact Number*</label>
                    <input type="tel" className={styles.textInput} placeholder="+61..." />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.inputLabel}>{emailLabel}</label>
                    <input type="email" className={styles.textInput} placeholder="info@auzziechauffeur.com.au" />
                </div>

                {showDestination && (
                    <>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Pick Up</label>
                            <input type="text" className={styles.textInput} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>Drop Off</label>
                            <input type="text" className={styles.textInput} />
                        </div>
                    </>
                )}

                <div className={styles.inputGroup} style={{ gridColumn: '1 / -1' }}>
                    <label className={styles.inputLabel}>{detailsLabel}</label>
                    <textarea className={styles.textInput} rows={3} style={{ resize: 'none' }}></textarea>
                </div>

                <button className={styles.submitBtn}>{btnText}</button>
            </form>
        </div>
    );
}

'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';
import { Plus } from 'lucide-react';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What Is The Seating Capacity Of Your Chauffeured Cars?",
            answer: "Our fleet ranges from luxury sedans seating up to 3 passengers, to SUVs for 4, People Movers for 7, and minibuses/coaches for larger groups. Please check our Fleet page for specific vehicle details."
        },
        {
            question: "How Can I Pay For A Chauffeured Car From Auzzie?",
            answer: "We accept all major credit cards including Visa, MasterCard, and American Express. Corporate accounts can also be set up for regular business travelers with monthly invoicing options."
        },
        {
            question: "Does Auzzie Charge Cancellation Fees?",
            answer: "Cancellation fees may apply depending on how close to the booking time the cancellation occurs. Generally, cancellations made more than 24 hours in advance incur no fee. Please refer to our Terms & Conditions for full details."
        },
        {
            question: "How Far In Advance Can I Book With Auzzie?",
            answer: "You can book as far in advance as you like. We recommend booking at least 24 hours in advance to ensure vehicle availability, especially during peak travel times or for special events."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>FAQ</h2>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.questionButton}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-label={`Toggle FAQ: ${faq.question}`}
                            >
                                <span className={styles.questionText}>{faq.question}</span>
                                <Plus
                                    size={24}
                                    className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
                                    strokeWidth={1.5}
                                />
                            </button>
                            <div className={`${styles.answer} ${openIndex === index ? styles.answerOpen : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.viewAllWrapper}>
                    <a href="#" className={styles.viewAllBtn}>View All FAQ&apos;s</a>
                </div>
            </div>
        </section>
    );
}

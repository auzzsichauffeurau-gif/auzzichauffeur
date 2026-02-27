'use client';

import { Plus, Trash2 } from 'lucide-react';
import styles from '../admin.module.css';

export interface FAQItem {
    question: string;
    answer: string;
}

interface SchemaBuilderProps {
    faqs: FAQItem[];
    onChange: (faqs: FAQItem[]) => void;
}

export default function SchemaBuilder({ faqs = [], onChange }: SchemaBuilderProps) {
    const addFAQ = () => {
        onChange([...faqs, { question: '', answer: '' }]);
    };

    const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
        const newFaqs = [...faqs];
        newFaqs[index][field] = value;
        onChange(newFaqs);
    };

    const removeFAQ = (index: number) => {
        onChange(faqs.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.card} style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                FAQ Schema (SEO)
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>Add questions and answers here. They will be automatically formatted for Google Rich Results.</p>

            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <div className={styles.faqHeader}>
                            <label className={styles.faqLabel}>Question #{index + 1}</label>
                            <button
                                type="button"
                                onClick={() => removeFAQ(index)}
                                className={styles.removeImageBtn}
                                style={{ position: 'static', padding: '0.25rem' }}
                                title="Remove FAQ"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                        <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                            placeholder="e.g. What is the cancellation policy?"
                            className={styles.inputField}
                            style={{ marginBottom: '0.75rem' }}
                        />
                        <textarea
                            value={faq.answer}
                            onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                            placeholder="Answer goes here..."
                            rows={3}
                            className={styles.textareaField}
                            style={{ resize: 'vertical' }}
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={addFAQ}
                className={styles.btnSecondary}
                style={{ marginTop: '1rem', width: 'auto' }}
            >
                <Plus size={16} /> Add FAQ Item
            </button>
        </div>
    );
}

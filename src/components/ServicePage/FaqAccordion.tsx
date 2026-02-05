"use client";

import { useState } from "react";
import styles from "@/app/(locations)/shared-airport.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className={styles.accordion}>
            {faqs.map((faq, idx) => (
                <div key={idx} className={styles.accordionItem}>
                    <button className={styles.accordionHeader} onClick={() => toggleFaq(idx)}>
                        {faq.question}
                        {openFaq === idx ? <ChevronUp size={20} color="#c5a467" /> : <ChevronDown size={20} color="#9ca3af" />}
                    </button>
                    {openFaq === idx && (
                        <div className={styles.accordionContent}>
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

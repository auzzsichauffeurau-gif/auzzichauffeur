"use client";

import React from 'react';
import styles from './WhatsAppButton.module.css';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "61415673786"; // International format for 0415 673 786
    const message = encodeURIComponent("Hi Auzzie Chauffeur, I'd like to inquire about a booking.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className={styles.whatsappContainer}>
            <div className={styles.tooltip}>Chat with us</div>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
                aria-label="Contact us on WhatsApp"
            >
                <MessageSquare size={30} fill="currentColor" strokeWidth={0} />
            </a>
        </div>
    );
}

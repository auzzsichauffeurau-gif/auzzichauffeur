"use client";

import React, { useState } from 'react';
import styles from "@/app/careers/careers.module.css";
import { supabase } from "@/lib/supabaseClient";
import { Check } from "lucide-react";

interface CareersFormProps {
    role: 'Chauffeur' | 'Contractor';
}

export default function CareersForm({ role }: CareersFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        experience: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Save to Supabase (using contact_messages for now as a catch-all, or you could create a careers table)
        // Since I don't know the schema for careers, I'll use the contact_messages structure but adapt the subject
        const { error } = await supabase.from('contact_messages').insert({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            subject: `Career Application: ${role} - ${formData.location}`,
            message: `Role: ${role}\nLocation: ${formData.location}\nExperience: ${formData.experience}\n\nNotes:\n${formData.message}`,
            status: 'New'
        });

        if (error) {
            alert("Error submitting application: " + error.message);
            setIsSubmitting(false);
            return;
        }

        // Send Email Notification
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'info@auzziechauffeur.com.au',
                    subject: `New ${role} Application: ${formData.firstName} ${formData.lastName}`,
                    html: `
                        <h3>New ${role} Application</h3>
                        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Phone:</strong> ${formData.phone}</p>
                        <p><strong>Location:</strong> ${formData.location}</p>
                        <p><strong>Experience:</strong> ${formData.experience}</p>
                        <p><strong>Additional Notes:</strong><br/>${formData.message}</p>
                    `
                })
            });
        } catch (emailError) {
            console.error("Failed to send email notification", emailError);
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                    <Check size={32} color="white" />
                </div>
                <h3>Application Sent!</h3>
                <p>Thank you for your interest in joining Auzzie. Our recruitment team will review your details and be in touch shortly.</p>
                <button
                    onClick={() => { setIsSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', location: '', experience: '', message: '' }); }}
                    className={styles.btnGold}
                    style={{ marginTop: '1.5rem' }}
                >
                    Submit Another
                </button>
            </div>
        );
    }

    return (
        <form className={styles.applicationForm} onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                    <label>First Name*</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Last Name*</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Email*</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Phone Number*</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Location (City)*</label>
                    <select name="location" value={formData.location} onChange={handleChange} required>
                        <option value="">Select City</option>
                        <option value="Melbourne">Melbourne</option>
                        <option value="Sydney">Sydney</option>
                        <option value="Brisbane">Brisbane</option>
                        <option value="Perth">Perth</option>
                        <option value="Adelaide">Adelaide</option>
                        <option value="Gold Coast">Gold Coast</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label>Years of Chauffeur Experience</label>
                    <select name="experience" value={formData.experience} onChange={handleChange}>
                        <option value="">Select Experience</option>
                        <option value="None">None (Eager to learn)</option>
                        <option value="1-2 years">1-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                    </select>
                </div>
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Cover Letter / Additional Notes</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4}></textarea>
                </div>
            </div>
            <button type="submit" className={styles.btnGold} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Apply Now'}
            </button>
        </form>
    );
}

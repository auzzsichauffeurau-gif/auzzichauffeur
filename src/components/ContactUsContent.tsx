"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from "../app/contact-us/contact.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, Globe, User, Receipt, MapPin, Check } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactUsContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const { error } = await supabase.from('contact_messages').insert({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            status: 'New'
        });

        if (error) {
            alert("Error saving message: " + error.message);
            setIsSubmitting(false);
            return;
        }

        // Send Email Notification
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'info@auzziechauffeur.com.au', // Send to business
                    subject: `New Contact Enquiry: ${formData.subject}`,
                    html: `
                        <h3>New Contact Enquiry</h3>
                        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Phone:</strong> ${formData.phone}</p>
                        <p><strong>Subject:</strong> ${formData.subject}</p>
                        <p><strong>Message:</strong><br/>${formData.message}</p>
                    `
                })
            });
        } catch (emailError) {
            console.error("Failed to send email notification", emailError);
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>Home &gt; Contact Us</div>
                    <h1 className={styles.heroTitle}>Contact Us</h1>
                    <p className={styles.heroSubtitle}>
                        Auzzsi Chauffeur operates 24 hours a day, 7 days a week.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/book">
                            <button className={styles.btnGold}>Book Now</button>
                        </Link>
                        <button className={styles.btnOutline}>Instant Quote</button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className={`${styles.section} ${styles.contactInfoSection}`}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Contact Auzzsi</h2>
                    <div className={styles.sectionBody} style={{ justifyContent: 'center' }}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Mail size={24} />
                            </div>
                            <div className={styles.infoText}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong>For Bookings:</strong><br />
                                    <a href="mailto:booking@auzziechauffeur.com.au" className={styles.link}>
                                        booking@auzziechauffeur.com.au
                                    </a>
                                </div>
                                <div>
                                    <strong>For Enquiries:</strong><br />
                                    <a href="mailto:info@auzziechauffeur.com.au" className={styles.link}>
                                        info@auzziechauffeur.com.au
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section className={`${styles.section} ${styles.feedbackSection}`}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>
                        Feedback &<br />
                        Complaints
                    </h2>
                    <div className={styles.sectionBody}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <User size={24} />
                            </div>
                            <p className={styles.infoText}>
                                If we haven't met your expectations, we would like to know.
                                <br />
                                Your feedback is important to us and helps us improve our
                                services.
                                <br />
                                Please click the below link to provide your details, and the
                                team will be in touch within 48 hours:
                                <br />
                                <br />
                                <a href="/feedback" className={styles.link}>
                                    auzziechauffeur.com.au/feedback
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Account & Billing Enquiries Section */}
            <section className={`${styles.section} ${styles.formSection}`} id="contact-form">
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>
                        General
                        <br />
                        Enquiries
                    </h2>
                    <div className={styles.sectionBody}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <Receipt size={24} />
                            </div>
                            <p className={styles.infoText}>
                                For all accounting & billing enquiries, please email us at{" "}
                                <a href="mailto:info@auzziechauffeur.com.au" className={styles.link}>
                                    info@auzziechauffeur.com.au
                                </a>
                            </p>
                        </div>

                        {isSubmitted ? (
                            <div className="slide-up" style={{
                                gridColumn: '1 / -1',
                                background: '#ecfdf5',
                                padding: '3rem',
                                borderRadius: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                border: '1px solid #a7f3d0'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: '#10b981',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1rem',
                                }}>
                                    <Check size={32} color="white" />
                                </div>
                                <h3 style={{ color: '#065f46', fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message Sent!</h3>
                                <p style={{ color: '#047857' }}>Thank you. One of our team members will be in touch shortly.</p>
                                <button
                                    onClick={() => { setIsSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' }); }}
                                    style={{ marginTop: '1.5rem', padding: '0.6rem 1.2rem', backgroundColor: 'transparent', border: '1px solid #059669', color: '#059669', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form className={styles.formGrid} onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        First Name<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Last Name<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        Email<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>
                                        Subject<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                    <label className={styles.label}>
                                        Message<span className={styles.required}>*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={isSubmitting}
                                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Head Office Section */}
            <section className={`${styles.section} ${styles.officeSection}`}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>
                        Auzzsi Head
                        <br />
                        Office
                    </h2>
                    <div className={styles.sectionBody} style={{ flexDirection: 'column', gap: '2rem' }}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={24} />
                            </div>
                            <p className={styles.infoText}>
                                <strong>6 Alexandra Parade Fitzroy, VIC 3065 AUSTRALIA</strong>
                                <br />
                                <br />
                                Auzzsi Chauffeur is Australia's only truly national chauffeur
                                company, and operates in all major Australian centres. To book
                                a Auzzsi vehicle in your area, we recommend using our online
                                booking form.
                            </p>
                        </div>

                        <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', marginTop: '1rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.928751416345!2d144.97548631589714!3d-37.79165344053648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642df5a3d0b2f%3A0x264b30176847c2!2s6%20Alexandra%20Pde%2C%20Fitzroy%20VIC%203065!5e0!3m2!1sen!2sau!4v1647833075678!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

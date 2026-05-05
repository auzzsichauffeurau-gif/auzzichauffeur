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

        });

        if (error) {
            alert("Error saving message: " + error.message);
            setIsSubmitting(false);
            return;
        }

        // Send Email Notifications
        try {
            const responses = await Promise.all([
                // 1. Send to Business (Admin)
                fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        from: `"${formData.firstName} ${formData.lastName} (Contact Form)" <booking@auzziechauffeur.com.au>`,
                        replyTo: formData.email,
                        to: 'auzzsichauffeur.au@gmail.com',
                        subject: `New Contact Enquiry: ${formData.subject}`,
                        html: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
                                <h3 style="color: #1e3a8a; border-bottom: 2px solid #c5a467; padding-bottom: 10px;">New Contact Enquiry</h3>
                                <p>You have received a new message via the website contact form.</p>
                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee; width: 120px; font-weight: bold;">Name:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.firstName} ${formData.lastName}</td></tr>
                                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>
                                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.phone}</td></tr>
                                    <tr><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Subject:</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${formData.subject}</td></tr>
                                </table>
                                <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #1e3a8a;">
                                    <strong>Message:</strong><br/>
                                    <p style="white-space: pre-wrap; margin-top: 10px;">${formData.message}</p>
                                </div>
                            </div>
                        `
                    })
                }),

                // 2. Send Auto-Reply to Customer
                fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        from: 'Auzzie Chauffeur Info <booking@auzziechauffeur.com.au>',
                        replyTo: 'booking@auzziechauffeur.com.au',
                        to: formData.email,
                        subject: `We received your message - Auzzie Chauffeur`,
                        html: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
                                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                                    <div style="margin-bottom: 20px;">
                                        <img src="https://auzziechauffeur.com.au/logo.png" alt="Auzzie Chauffeur" style="width: 150px; height: auto;" />
                                    </div>
                                    <h2 style="color: #1e3a8a; margin: 0;">Thank You for Contacting Us</h2>
                                    <p style="color: #666; font-size: 0.9em;">We have received your enquiry</p>
                                </div>
                                <p>Dear ${formData.firstName},</p>
                                <p>Thank you for reaching out to <strong>Auzzie Chauffeur</strong>. We have successfully received your message regarding "<strong>${formData.subject}</strong>".</p>
                                <p>One of our team members is reviewing your enquiry and will get back to you as soon as possible, typically within 24 hours.</p>
                                <p>If your matter is urgent, please feel free to reply to this email directly.</p>
                                
                                <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 6px;">
                                    <p style="margin: 0 0 10px 0; font-size: 0.85em; color: #666; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Your Message Copy:</p>
                                    <p style="margin: 0; font-style: italic; color: #555;">"${formData.message}"</p>
                                </div>

                                <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; font-size: 0.9em; color: #888; text-align: center;">
                                    <p style="margin-bottom: 5px;"><strong>Auzzie Chauffeur</strong></p>
                                    <p style="margin: 0;"><a href="https://auzziechauffeur.com.au" style="color: #c5a467; text-decoration: none;">www.auzziechauffeur.com.au</a> | 0415 673 786</p>
                                    <p style="margin: 5px 0 0 0;">Australia's Premium Chauffeur Service</p>
                                </div>
                            </div>
                        `
                    })
                })
            ]);

            // Check for errors in responses
            for (const response of responses) {
                if (!response.ok) {
                    const errorData = await response.json();
                    const errorMessage = typeof errorData.details === 'object'
                        ? JSON.stringify(errorData.details)
                        : (errorData.details || errorData.error || "Email sending failed");
                    throw new Error(errorMessage);
                }
            }

            setIsSubmitted(true);
        } catch (emailError: any) {
            console.error("Failed to send email notification", emailError);
            alert("Message saved, but failed to send email: " + emailError.message);
        }

        setIsSubmitting(false);
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
                        Auzzie Chauffeur operates 24 hours a day, 7 days a week.
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
                    <h2 className={styles.sectionTitle}>Contact Auzzie</h2>
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
                                {/* Honeypot field for bot spam */}
                                <div style={{ display: 'none' }} aria-hidden="true">
                                    <label htmlFor="contact_token">Token</label>
                                    <input id="contact_token" name="contact_token" type="text" tabIndex={-1} autoComplete="off" />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label}>
                                        First Name<span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-first-name-main"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={styles.input}
                                        autoComplete="given-name"
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
                                <p style={{ gridColumn: '1 / -1', fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem' }}>
                                    By submitting, you agree to our <Link href="/terms-conditions" style={{ color: 'inherit', textDecoration: 'underline' }}>Anti-Spam Policy</Link>. We use automated bot detection.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Head Office Section */}
            <section className={`${styles.section} ${styles.officeSection}`}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>
                        Auzzie Head
                        <br />
                        Office
                    </h2>
                    <div className={styles.sectionBody} style={{ flexDirection: 'column', gap: '2rem' }}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <MapPin size={24} />
                            </div>
                            <p className={styles.infoText}>
                                <strong>Tullamarine, VIC 3043, Melbourne, Australia</strong>
                                <br />
                                <br />
                                Auzzie Chauffeur is Australia&apos;s only truly national chauffeur
                                company, and operates in all major Australian centres. To book
                                a Auzzie vehicle in your area, we recommend using our online
                                booking form.
                            </p>
                        </div>

                        <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', marginTop: '1rem' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.3871753788887!2d144.81660000000002!3d-37.696400000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65a115c7d0d89%3A0x5045675218cdc90!2sTullamarine%20VIC%203043%2C%20Australia!5e0!3m2!1sen!2sau!4v1707734400000!5m2!1sen!2sau"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Auzzie Chauffeur Head Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

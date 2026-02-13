"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../app/book/booking.module.css';
import { MapPin, Map, Calendar, Clock, ChevronRight, Check, User, Mail, Phone, Car } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function BookingPageContent() {
    const [addDestination, setAddDestination] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        vehicle: 'Executive Sedan',
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Basic validation
        if (!formData.pickup || !formData.dropoff || !formData.date || !formData.time || !formData.name || !formData.email) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);

        const { error } = await supabase.from('bookings').insert({
            pickup_location: formData.pickup,
            dropoff_location: formData.dropoff,
            pickup_date: formData.date,
            pickup_time: formData.time,
            customer_name: formData.name,
            customer_email: formData.email,
            customer_phone: formData.phone,
            vehicle_type: formData.vehicle,
            status: 'Pending',
            amount: 'TBD'
        });

        if (error) {
            alert("Error submitting booking: " + error.message);
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
                        to: 'booking@auzziechauffeur.com.au',
                        subject: `New Booking Request: ${formData.name}`,
                        html: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
                                <h3 style="color: #1e3a8a; border-bottom: 2px solid #c5a467; padding-bottom: 10px;">New Booking Request</h3>
                                <p><strong>Name:</strong> ${formData.name}</p>
                                <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                                <p><strong>Phone:</strong> ${formData.phone}</p>
                                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                                <h4 style="color: #4b5563;">Trip Details</h4>
                                <p><strong>Pick Up:</strong> ${formData.pickup}</p>
                                <p><strong>Drop Off:</strong> ${formData.dropoff}</p>
                                <p><strong>Date:</strong> ${formData.date}</p>
                                <p><strong>Time:</strong> ${formData.time}</p>
                                <p><strong>Vehicle:</strong> ${formData.vehicle}</p>
                            </div>
                        `
                    })
                }),

                // 2. Send Auto-Reply to Customer
                fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        to: formData.email,
                        subject: `Booking Request Received - Auzzie Chauffeur`,
                        html: `
                            <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #333;">
                                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
                                    <h2 style="color: #1e3a8a; margin: 0;">Booking Request Received</h2>
                                </div>
                                <p>Dear ${formData.name},</p>
                                <p>Thank you for choosing <strong>Auzzie Chauffeur</strong>. We have received your booking request for <strong>${formData.date} at ${formData.time}</strong>.</p>
                                <p>This email confirms that we have received your details. One of our reservations team members will review your request and contact you shortly to confirm the booking and provide a final price.</p>
                                
                                <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 6px;">
                                    <h4 style="margin-top: 0; color: #555;">Your Request Details:</h4>
                                    <ul style="list-style: none; padding: 0; margin: 0;">
                                        <li style="margin-bottom: 8px;"><strong>Pick Up:</strong> ${formData.pickup}</li>
                                        <li style="margin-bottom: 8px;"><strong>Drop Off:</strong> ${formData.dropoff}</li>
                                        <li style="margin-bottom: 8px;"><strong>Vehicle:</strong> ${formData.vehicle}</li>
                                    </ul>
                                </div>

                                <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; font-size: 0.9em; color: #888; text-align: center;">
                                    <p style="margin-bottom: 5px;"><strong>Auzzie Chauffeur</strong></p>
                                    <p style="margin: 0;"><a href="https://auzziechauffeur.com.au" style="color: #c5a467; text-decoration: none;">www.auzziechauffeur.com.au</a></p>
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
        } catch (emailError: any) {
            console.error("Failed to send email notification", emailError);
            alert("Booking saved, but failed to send email: " + emailError.message);
        }

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className={styles.pageContainer}>
            {/* HEADER */}
            <header className={styles.header}>
                <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid #bfa15f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#bfa15f',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        fontFamily: 'serif'
                    }}>
                        A
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: '#bfa15f', fontWeight: '700', fontSize: '1.2rem', letterSpacing: '1px' }}>AUZZIE</span>
                        <span style={{ color: '#ccc', fontSize: '0.6rem', letterSpacing: '2px', textTransform: 'uppercase' }}>CHAUFFEUR SERVICE</span>
                    </div>
                </Link>

                <Link href="/admin/login" className={styles.loginBtn}>
                    Log In
                </Link>
            </header>

            {/* MAIN CONTENT */}
            <div className={styles.mainLayout}>
                {/* Left Image Side */}
                <div className={styles.imageSide}>
                    <img src="/tile-driver.png" alt="Chauffeur Service" />
                </div>

                {/* Right Form Side */}
                <div className={styles.formSide}>
                    {/* Honeypot field for bot spam */}
                    <div style={{ display: 'none' }} aria-hidden="true">
                        <label htmlFor="booking_auth_token">Auth Token</label>
                        <input id="booking_auth_token" name="booking_auth_token" type="text" tabIndex={-1} autoComplete="off" />
                    </div>
                    {isSubmitted ? (
                        <div className={`${styles.bookingForm} slide-up`} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: '#10b981',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)'
                            }}>
                                <Check size={40} color="white" strokeWidth={3} />
                            </div>
                            <h2 style={{ fontSize: '1.8rem', color: '#1f2937', marginBottom: '0.5rem' }}>Booking Request Received!</h2>
                            <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '400px', lineHeight: '1.6' }}>
                                Thank you for your booking request. We have received your details and a confirmation email has been sent to your inbox.
                                <br /><br />
                                One of our team members will review your request and contact you shortly to confirm availability.
                            </p>
                            <Link href="/">
                                <button className={styles.continueBtn} style={{ marginTop: '2rem' }}>
                                    Return to Home
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className={styles.bookingForm}>
                            {/* Page Title */}
                            <h1 style={{
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                color: '#1f2937',
                                padding: '2rem 2rem 1rem 2rem',
                                margin: 0,
                                borderBottom: '2px solid #f3f4f6'
                            }}>
                                Book Your Chauffeur Service
                            </h1>

                            {/* Top Blue Section: Locations */}
                            <div className={styles.locationsPanel}>
                                {/* Pick Up */}
                                <div className={styles.inputGroup}>
                                    <div className={styles.labelRow}>
                                        <MapPin size={18} color="#bfa15f" fill="#bfa15f" />
                                        <label className={styles.labelText}>Pick Up</label>
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <input
                                            type="text"
                                            name="pickup"
                                            value={formData.pickup}
                                            onChange={handleChange}
                                            className={styles.textInput}
                                            placeholder="Enter a location (e.g. 'Sydney Airport')"
                                        />
                                    </div>
                                </div>

                                {/* Drop Off */}
                                <div className={styles.inputGroup} style={{ marginBottom: '1rem' }}>
                                    <div className={styles.labelRow}>
                                        <Map size={18} color="#bfa15f" />
                                        <label className={styles.labelText}>Drop Off</label>
                                    </div>
                                    <div className={styles.inputWrapper}>
                                        <input
                                            type="text"
                                            name="dropoff"
                                            value={formData.dropoff}
                                            onChange={handleChange}
                                            className={styles.textInput}
                                            placeholder="Enter a location (e.g. 'CBD Hotel')"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Light Section: Date & Time */}
                            <div className={styles.dateTimePanel}>
                                <div>
                                    <label className={styles.panelLabel}>Date</label>
                                    <div className={styles.iconInput}>
                                        <div className={styles.inputIconBox}>
                                            <Calendar size={20} />
                                        </div>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={styles.dateTimeInput}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className={styles.panelLabel}>Time</label>
                                    <div className={styles.iconInput}>
                                        <div className={styles.inputIconBox}>
                                            <Clock size={20} />
                                        </div>
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className={styles.dateTimeInput}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Selection */}
                            <div style={{ padding: '0 2rem 1rem 2rem' }}>
                                <div className={styles.inputGroup}>
                                    <div className={styles.labelRow}>
                                        <Car size={18} color="#666" />
                                        <label className={styles.labelText} style={{ color: '#4b5563' }}>Vehicle Preference</label>
                                    </div>
                                    <div className={styles.inputWrapper} style={{ borderBottom: '1px solid #ccc' }}>
                                        <select
                                            name="vehicle"
                                            value={formData.vehicle}
                                            onChange={handleChange}
                                            className={styles.textInput}
                                            style={{ color: 'black', background: 'transparent' }}
                                        >
                                            <option value="Executive Sedan">Executive Sedan (e.g. Mercedes S-Class)</option>
                                            <option value="Premium SUV">Premium SUV (e.g. Audi Q7)</option>
                                            <option value="People Mover">People Mover (e.g. Mercedes V-Class)</option>
                                            <option value="Minibus">Minibus (for groups)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Details Section */}
                            <div style={{ padding: '0 2rem 2rem 2rem' }}>
                                <h2 style={{ fontSize: '1rem', color: '#1f2937', marginBottom: '1rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>Your Details</h2>
                                <div style={{ display: 'grid', gap: '1rem' }}>
                                    <div className={styles.inputGroup}>
                                        <div className={styles.labelRow}>
                                            <User size={18} color="#666" />
                                            <label className={styles.labelText} style={{ color: '#4b5563' }}>Full Name</label>
                                        </div>
                                        <div className={styles.inputWrapper} style={{ borderBottom: '1px solid #ccc' }}>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={styles.textInput}
                                                style={{ color: 'black' }}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <div className={styles.labelRow}>
                                            <Mail size={18} color="#666" />
                                            <label className={styles.labelText} style={{ color: '#4b5563' }}>Email</label>
                                        </div>
                                        <div className={styles.inputWrapper} style={{ borderBottom: '1px solid #ccc' }}>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={styles.textInput}
                                                style={{ color: 'black' }}
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <div className={styles.labelRow}>
                                            <Phone size={18} color="#666" />
                                            <label className={styles.labelText} style={{ color: '#4b5563' }}>Phone</label>
                                        </div>
                                        <div className={styles.inputWrapper} style={{ borderBottom: '1px solid #ccc' }}>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className={styles.textInput}
                                                style={{ color: 'black' }}
                                                placeholder="+61 400 000 000"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className={styles.actionBar}>
                                <button className={styles.clearBtn} disabled={isSubmitting} onClick={() => setFormData({ pickup: '', dropoff: '', date: '', time: '', vehicle: 'Executive Sedan', name: '', email: '', phone: '' })}>Clear</button>

                                <div className={styles.rightActions}>
                                    <button
                                        className={styles.continueBtn}
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                        style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                                    >
                                        {isSubmitting ? 'Processing...' : (
                                            <>Request Booking <ChevronRight size={16} /></>
                                        )}
                                    </button>
                                </div>
                                <p style={{ gridColumn: '1 / -1', fontSize: '0.7rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem', width: '100%' }}>
                                    Form protected by anti-spam measures. Unsolicited marketing is strictly prohibited. <Link href="/terms-conditions" style={{ color: 'inherit', textDecoration: 'underline' }}>Privacy & Terms</Link>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer Strip */}
            <div className={styles.footerStrip}>
                {/* Simulated small logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#bfa15f' }}>
                    <div style={{ border: '1px solid #666', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>A</div>
                </div>
                <div>© 2026, Auzzie Chauffeur Service Pty Ltd ABN 52 010 237 108</div>
            </div>
        </div>
    );
}

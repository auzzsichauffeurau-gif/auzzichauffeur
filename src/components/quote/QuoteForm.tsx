"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import styles from './QuoteForm.module.css';
import { MapPin, Calendar, Clock, ChevronRight, Car, User, Mail, Phone, Calculator, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function QuoteForm() {
    const searchParams = useSearchParams();

    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

    const [formData, setFormData] = useState({
        pickup: '',
        dropoff: '',
        date: '',
        time: '',
        passengers: 1,
        vehicle: 'Executive Sedan',
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    // Populate from URL params if available
    React.useEffect(() => {
        if (searchParams) {
            const pickup = searchParams.get('pickup') || '';
            const dropoff = searchParams.get('dropoff') || '';
            const date = searchParams.get('date') || '';
            const time = searchParams.get('time') || '';

            if (pickup || dropoff || date || time) {
                setFormData(prev => ({
                    ...prev,
                    pickup: pickup || prev.pickup,
                    dropoff: dropoff || prev.dropoff,
                    date: date || prev.date,
                    time: time || prev.time
                }));
            }
        }
    }, [searchParams]);

    // Calculate price using Supabase pricing function
    const calculatePrice = async () => {
        try {
            // Determine service type based on locations
            let serviceType = 'airport_transfer';
            const pickupLower = formData.pickup.toLowerCase();
            const dropoffLower = formData.dropoff.toLowerCase();

            if (pickupLower.includes('airport') || dropoffLower.includes('airport')) {
                serviceType = 'airport_transfer';
            } else {
                // Simple distance heuristic - if locations are far apart, it's long distance
                serviceType = 'long_distance';
            }

            // Map vehicle types to pricing vehicle types
            let vehicleType = 'E-Class';
            if (formData.vehicle === 'Executive Sedan' || formData.vehicle === 'Luxury Sedan') {
                vehicleType = 'S-Class';
            } else if (formData.vehicle === 'Premium SUV') {
                vehicleType = 'E-Class';
            } else if (formData.vehicle === 'People Mover' || formData.vehicle === 'Minibus') {
                vehicleType = 'Sprinter';
            }

            // Call Supabase function
            const { data, error } = await supabase.rpc('get_instant_quote', {
                p_service_type: serviceType,
                p_vehicle_type: vehicleType,
                p_from_location: formData.pickup,
                p_to_location: formData.dropoff,
                p_hours: null
            });

            if (error) {
                console.error('Pricing error:', error);
                // Fallback to simple calculation
                setEstimatedPrice(150);
            } else if (data && data.length > 0) {
                const result = data[0];
                if (result.requires_custom_quote) {
                    setEstimatedPrice(null); // Will show "Custom Quote Required"
                } else {
                    // Extract numeric value from formatted price
                    const priceMatch = result.estimated_price.match(/\d+\.?\d*/);
                    if (priceMatch) {
                        setEstimatedPrice(Math.round(parseFloat(priceMatch[0])));
                    } else {
                        setEstimatedPrice(null);
                    }
                }
            }

            setStep(2);
        } catch (err) {
            console.error('Error calculating price:', err);
            setEstimatedPrice(150); // Fallback
            setStep(2);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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
            status: 'Quote Request',
            amount: estimatedPrice ? `$${estimatedPrice} (Est)` : 'TBD',
            notes: formData.notes
        });

        if (error) {
            console.error('Error submitting quote (full details):', JSON.stringify(error, null, 2));
            alert(`There was an issue sending your request: ${error.message || 'Unknown error'}`);
            setIsSubmitting(false);
            return;
        }

        // Send Email Notification
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'booking@auzziechauffeur.com.au',
                    subject: `New Quote Request: ${formData.name}`,
                    html: `
                        <h3>New Quote Request</h3>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Phone:</strong> ${formData.phone}</p>
                        <hr/>
                        <p><strong>Pick Up:</strong> ${formData.pickup}</p>
                        <p><strong>Drop Off:</strong> ${formData.dropoff}</p>
                        <p><strong>Date:</strong> ${formData.date}</p>
                        <p><strong>Time:</strong> ${formData.time}</p>
                        <p><strong>Vehicle:</strong> ${formData.vehicle}</p>
                        <p><strong>Est. Price:</strong> ${estimatedPrice ? `$${estimatedPrice}` : 'TBD'}</p>
                        <p><strong>Notes:</strong> ${formData.notes}</p>
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
            <div className={styles.successWrapper}>
                <div className={styles.successIcon}>
                    <CheckCircle size={64} color="#10b981" />
                </div>
                <h2>Quote Request Received!</h2>
                <p>Thank you, {formData.name}. We have received your details.</p>
                <div className={styles.estimateBox}>
                    <span>Estimated Starting Price</span>
                    <strong className={styles.priceTag}>${estimatedPrice}*</strong>
                    <small>*Final price may vary based on distance and tolls.</small>
                </div>
                <p>One of our team members will email you a formal quote shortly.</p>
                <Link href="/" className={styles.homeBtn}>Return Home</Link>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            {/* Progress Bar */}
            <div className={styles.progressBar}>
                <div className={`${styles.step} ${step >= 1 ? styles.activeStep : ''}`}>1. Trip Details</div>
                <div className={styles.line}></div>
                <div className={`${styles.step} ${step >= 2 ? styles.activeStep : ''}`}>2. Your Details</div>
            </div>

            <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); calculatePrice(); }}>

                {step === 1 && (
                    <div className={styles.stepContent}>
                        <h3>Where are you going?</h3>

                        <div className={styles.inputGroup}>
                            <label><MapPin size={18} /> Pick Up Location</label>
                            <input
                                type="text"
                                name="pickup"
                                value={formData.pickup}
                                onChange={handleChange}
                                placeholder="Enter pick up address"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><MapPin size={18} /> Drop Off Location</label>
                            <input
                                type="text"
                                name="dropoff"
                                value={formData.dropoff}
                                onChange={handleChange}
                                placeholder="Enter destination"
                                required
                            />
                        </div>

                        <div className={styles.flexRow}>
                            <div className={styles.inputGroup}>
                                <label><Calendar size={18} /> Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label><Clock size={18} /> Time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Car size={18} /> Vehicle Type</label>
                            <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
                                <option>Executive Sedan</option>
                                <option>Premium SUV</option>
                                <option>People Mover</option>
                                <option>Minibus</option>
                            </select>
                        </div>

                        <button type="submit" className={styles.nextBtn}>
                            See Estimate <ChevronRight />
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.stepContent}>
                        <div className={styles.pricePreview}>
                            <span>Estimated Total From:</span>
                            <h3>${estimatedPrice} AUD</h3>
                        </div>

                        <h3>Contact Details</h3>

                        <div className={styles.inputGroup}>
                            <label><User size={18} /> Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Mail size={18} /> Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label><Phone size={18} /> Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Additional Notes (Optional)</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={3}
                            ></textarea>
                        </div>

                        <div className={styles.actionRow}>
                            <button type="button" onClick={() => setStep(1)} className={styles.backBtn}>Back</button>
                            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                {isSubmitting ? 'Get Formal Quote' : 'Get Formal Quote'}
                            </button>
                        </div>
                    </div>
                )}

            </form>
        </div>
    );
}

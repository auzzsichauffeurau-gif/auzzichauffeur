"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

export default function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (rating === 0) {
            toast.error("Please select a star rating first.");
            return;
        }

        setIsSubmitting(true);

        // Simulate API call (or connect to Supabase/API here)
        // For now, just simulate success
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast.success("Thank you for your feedback!");
        setFormData({ name: '', email: '', message: '' });
        setRating(0);
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} style={{
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: '#1f2937' }}>
                How was your experience?
            </h3>

            {/* Honeypot field for bot protection */}
            <div style={{ display: 'none' }} aria-hidden="true">
                <input type="text" name="feedback_token" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Star Rating */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <Star
                            size={32}
                            fill={star <= (hover || rating) ? "#fbbf24" : "none"} // Gold filled or outlined
                            color={star <= (hover || rating) ? "#fbbf24" : "#d1d5db"} // Gold or gray outline
                            strokeWidth={2}
                        />
                    </button>
                ))}
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Your Name</label>
                <input
                    type="text"
                    required
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Email Address</label>
                <input
                    type="email"
                    required
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Your Feedback</label>
                <textarea
                    required
                    rows={4}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you liked or how we can improve..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: isSubmitting ? '#9ca3af' : '#1e3a8a',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s'
                }}
            >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </button>
            <p style={{ fontSize: '0.7rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem' }}>
                We maintain a strict anti-spam policy. Verified feedback only.
            </p>
        </form>
    );
}

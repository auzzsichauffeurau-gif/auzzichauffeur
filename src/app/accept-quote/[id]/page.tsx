"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function AcceptQuotePage() {
    const params = useParams();
    const id = params.id as string;

    const [status, setStatus] = useState<'loading' | 'success' | 'already' | 'error'>('loading');
    const [booking, setBooking] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        if (!id) return;

        fetch(`/api/accept-quote/${id}`, { method: 'POST' })
            .then(r => r.json())
            .then(data => {
                if (data.already) {
                    setStatus('already');
                    setBooking(data.booking);
                } else if (data.success) {
                    setStatus('success');
                    setBooking(data.booking);
                } else {
                    setErrorMsg(data.error || 'Unknown error');
                    setStatus('error');
                }
            })
            .catch((e) => { setErrorMsg(e.message); setStatus('error'); });
    }, [id]);

    const containerStyle: React.CSSProperties = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif',
        padding: '1rem'
    };

    const cardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '2.5rem',
        maxWidth: '520px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    };

    if (status === 'loading') {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⏳</div>
                    <h2 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Processing your request...</h2>
                    <p style={{ color: '#6b7280' }}>Please wait a moment.</p>
                </div>
            </div>
        );
    }

    if (status === 'success') {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '2rem' }}>
                        ✓
                    </div>
                    <h1 style={{ color: '#065f46', fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                        Quote Accepted!
                    </h1>
                    <p style={{ color: '#374151', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                        Thank you, <strong>{booking?.customer_name}</strong>! Your booking has been confirmed.
                        Our team will be in touch shortly with your driver details.
                    </p>
                    {booking && (
                        <div style={{ backgroundColor: '#f9fafb', borderRadius: '8px', padding: '1.25rem', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#374151' }}>
                            <p style={{ margin: '4px 0' }}><strong>Date:</strong> {booking.pickup_date}</p>
                            <p style={{ margin: '4px 0' }}><strong>Time:</strong> {booking.pickup_time}</p>
                            <p style={{ margin: '4px 0' }}><strong>From:</strong> {booking.pickup_location}</p>
                            <p style={{ margin: '4px 0' }}><strong>To:</strong> {booking.dropoff_location}</p>
                            <p style={{ margin: '4px 0' }}><strong>Vehicle:</strong> {booking.vehicle_type}</p>
                            {booking.amount && <p style={{ margin: '4px 0' }}><strong>Amount:</strong> ${booking.amount}</p>}
                        </div>
                    )}
                    <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                        A confirmation email has been sent to <strong>{booking?.customer_email}</strong>.
                    </p>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#9ca3af' }}>
                        Questions? Contact us at{' '}
                        <a href="mailto:info@auzziechauffeur.com.au" style={{ color: '#1e3a8a' }}>
                            info@auzziechauffeur.com.au
                        </a>
                    </p>
                </div>
            </div>
        );
    }

    if (status === 'already') {
        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                    <h2 style={{ color: '#1e3a8a', marginBottom: '0.5rem' }}>Already Confirmed</h2>
                    <p style={{ color: '#6b7280' }}>
                        This booking is already confirmed. No action needed.
                    </p>
                    {booking && (
                        <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#9ca3af' }}>
                            Booking for <strong>{booking.customer_name}</strong> on {booking.pickup_date}.
                        </p>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>❌</div>
                <h2 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>Link Expired or Invalid</h2>
                <p style={{ color: '#6b7280' }}>
                    This quote link is no longer valid. Please contact us directly.
                </p>
                {errorMsg && (
                    <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.5rem', wordBreak: 'break-all' }}>
                        {errorMsg}
                    </p>
                )}
                <a
                    href="mailto:info@auzziechauffeur.com.au"
                    style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#1e3a8a', color: 'white', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}

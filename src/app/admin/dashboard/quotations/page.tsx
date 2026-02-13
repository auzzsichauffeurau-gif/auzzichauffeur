"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import {
    FileText,
    Calendar,
    Clock,
    MapPin,
    User,
    Eye,
    CheckCircle,
    X,
    Search,
    RefreshCw,
    Mail,
    Send,
    Trash2
} from 'lucide-react';
import { toast } from 'sonner';

interface Quotation {
    id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    pickup_location: string;
    dropoff_location: string;
    pickup_date: string;
    pickup_time: string;
    vehicle_type: string;
    status: string;
    amount: string;
    service_type?: string;
    created_at: string;
}

interface EmailTemplate {
    id: string;
    template_name: string;
    subject: string;
    body_html: string;
}

export default function QuotationsPage() {
    const [quotations, setQuotations] = useState<Quotation[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Email Modal State
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedQuote, setSelectedQuote] = useState<Quotation | null>(null);
    const [emailTemplates, setEmailTemplates] = useState<EmailTemplate[]>([]);
    const [selectedTemplateId, setSelectedTemplateId] = useState<string>('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [sending, setSending] = useState(false);

    useEffect(() => {
        fetchQuotations();
        fetchEmailTemplates();
    }, []);

    const fetchQuotations = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .in('status', ['Pending', 'Quote Request', 'Quote Sent'])
                .order('created_at', { ascending: false });

            if (error) throw error;
            setQuotations(data || []);
        } catch (error) {
            console.error('Error fetching quotations:', error);
            toast.error('Failed to load quotations');
        } finally {
            setLoading(false);
        }
    };

    const fetchEmailTemplates = async () => {
        const { data } = await supabase
            .from('email_templates')
            .select('*')
            .eq('is_active', true);

        if (data) setEmailTemplates(data);
    };

    const handleOpenEmailModal = (quote: Quotation) => {
        setSelectedQuote(quote);
        // Default to first template or specific 'quote' template if exists
        const quoteTemplate = emailTemplates.find(t => t.template_name.includes('quote')) || emailTemplates[0];

        if (quoteTemplate) {
            setSelectedTemplateId(quoteTemplate.id);
            populateTemplate(quoteTemplate, quote);
        }

        setShowEmailModal(true);
    };

    const populateTemplate = (template: EmailTemplate, quote: Quotation) => {
        let subject = template.subject;
        let body = template.body_html;

        // Replace variables
        const variables = {
            customer_name: quote.customer_name,
            pickup_location: quote.pickup_location,
            dropoff_location: quote.dropoff_location,
            pickup_date: quote.pickup_date,
            pickup_time: quote.pickup_time,
            amount: quote.amount || '0.00',
            vehicle_type: quote.vehicle_type,
            service_type: quote.service_type || 'Transfer'
        };

        Object.entries(variables).forEach(([key, value]) => {
            const regex = new RegExp(`{${key}}`, 'g');
            subject = subject.replace(regex, value);
            body = body.replace(regex, value);
        });

        setEmailSubject(subject);
        setEmailBody(body);
    };

    const handleTemplateChange = (templateId: string) => {
        setSelectedTemplateId(templateId);
        const template = emailTemplates.find(t => t.id === templateId);
        if (template && selectedQuote) {
            populateTemplate(template, selectedQuote);
        }
    };

    const handleUpdateAmount = async (id: string, newAmount: string) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ amount: newAmount })
                .eq('id', id);

            if (error) throw error;

            setQuotations(quotations.map(q => q.id === id ? { ...q, amount: newAmount } : q));
            toast.success('Amount updated');
        } catch (error: any) {
            toast.error('Failed to update amount: ' + error.message);
        }
    };

    const handleSendQuote = async () => {
        if (!selectedQuote) return;
        setSending(true);

        try {
            // 1. Send Real Email
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: selectedQuote.customer_email,
                    subject: emailSubject,
                    html: emailBody
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.details || 'Email failed to send');
            }

            // 2. Update Booking Status
            const { error: updateError } = await supabase
                .from('bookings')
                .update({ status: 'Quote Sent' })
                .eq('id', selectedQuote.id);

            if (updateError) throw updateError;

            // 3. Create Follow-up Task AUTOMATICALLY
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 2); // 2 days from now

            const { error: followUpError } = await supabase
                .from('followups')
                .insert([{
                    customer_name: selectedQuote.customer_name,
                    customer_email: selectedQuote.customer_email,
                    customer_phone: selectedQuote.customer_phone,
                    type: 'quote',
                    priority: 'high',
                    status: 'pending',
                    due_date: dueDate.toISOString().split('T')[0],
                    notes: `Follow up on sent quote for ${selectedQuote.vehicle_type} trip. Amount: $${selectedQuote.amount}`,
                    booking_id: selectedQuote.id
                }]);

            toast.success('Quote sent and recorded successfully!');
            fetchQuotations();
            setShowEmailModal(false);

        } catch (error: any) {
            toast.error('Failed to send quote: ' + error.message);
        } finally {
            setSending(false);
        }
    };

    const handleDeleteQuote = async (id: string) => {
        if (!confirm('Are you sure you want to delete this quote request?')) return;
        try {
            const { error } = await supabase
                .from('bookings')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setQuotations(quotations.filter(q => q.id !== id));
            toast.success('Quote deleted');
        } catch (error: any) {
            toast.error('Failed to delete: ' + error.message);
        }
    };

    const handleConvertToBooking = async (id: string) => {
        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: 'Confirmed' })
                .eq('id', id);

            if (error) throw error;

            setQuotations(quotations.filter(q => q.id !== id));
            toast.success('Quotation converted to confirmed booking!');
        } catch (error: any) {
            toast.error('Failed to convert: ' + error.message);
        }
    };

    const handleReject = async (id: string) => {
        if (!confirm('Are you sure you want to reject this quotation?')) return;

        try {
            const { error } = await supabase
                .from('bookings')
                .update({ status: 'Cancelled' })
                .eq('id', id);

            if (error) throw error;

            setQuotations(quotations.filter(q => q.id !== id));
            toast.success('Quotation rejected');
        } catch (error: any) {
            toast.error('Failed to reject: ' + error.message);
        }
    };

    const filteredQuotations = quotations.filter(q =>
        q.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.customer_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.pickup_location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Styles
    const cardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, transform 0.2s'
    };

    const buttonStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.35rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '6px',
        fontSize: '0.8rem',
        fontWeight: '600',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.2s'
    };

    const badgeStyle: React.CSSProperties = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.25rem',
        padding: '0.25rem 0.6rem',
        borderRadius: '999px',
        fontSize: '0.7rem',
        fontWeight: '600',
        border: '1px solid transparent'
    };

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FileText size={28} style={{ color: '#f59e0b' }} />
                                Quotations
                            </span>
                        </h1>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                            Manage requests, send quotes, and schedule follow-ups
                        </p>
                    </div>
                    <button
                        onClick={fetchQuotations}
                        style={{
                            ...buttonStyle,
                            backgroundColor: '#f3f4f6',
                            color: '#374151',
                            border: '1px solid #e5e7eb'
                        }}
                    >
                        <RefreshCw size={16} /> Refresh
                    </button>
                </div>

                {/* Search */}
                <div style={{ marginTop: '1.5rem', position: 'relative', maxWidth: '400px' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by name, email, or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            fontSize: '0.9rem',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>

            {/* Loading */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                    Loading quotations...
                </div>
            ) : filteredQuotations.length === 0 ? (
                <div style={{ ...cardStyle, padding: '3rem', textAlign: 'center' }}>
                    <FileText size={48} style={{ color: '#d1d5db', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        No Quotations Found
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        {searchTerm ? 'Try a different search term' : 'All quote requests have been processed'}
                    </p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {filteredQuotations.map((quote) => (
                        <div key={quote.id} style={cardStyle}>
                            <div style={{ padding: '1.25rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1f2937' }}>{quote.customer_name}</h3>
                                            <span style={{
                                                ...badgeStyle,
                                                backgroundColor: quote.status === 'Quote Sent' ? '#dbeafe' : '#fef3c7',
                                                color: quote.status === 'Quote Sent' ? '#1e40af' : '#92400e',
                                                borderColor: quote.status === 'Quote Sent' ? '#bfdbfe' : '#fde68a'
                                            }}>
                                                {quote.status}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{quote.customer_email} • {quote.customer_phone}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>$</span>
                                            <input
                                                type="number"
                                                defaultValue={quote.amount || ''}
                                                onBlur={(e) => handleUpdateAmount(quote.id, e.target.value)}
                                                style={{ width: '80px', padding: '0.25rem', borderRadius: '4px', border: '1px solid #e5e7eb', fontSize: '1rem', fontWeight: 'bold', textAlign: 'right' }}
                                                placeholder="Amount"
                                            />
                                        </div>
                                        <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>
                                            {new Date(quote.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Trip Details */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <MapPin size={16} style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <p style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>From</p>
                                            <p style={{ fontSize: '0.85rem', color: '#374151' }}>{quote.pickup_location}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <MapPin size={16} style={{ color: '#ef4444', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <p style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>To</p>
                                            <p style={{ fontSize: '0.85rem', color: '#374151' }}>{quote.dropoff_location}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <Calendar size={16} style={{ color: '#6b7280', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <p style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Date & Time</p>
                                            <p style={{ fontSize: '0.85rem', color: '#374151' }}>{quote.pickup_date} at {quote.pickup_time}</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                        <User size={16} style={{ color: '#6b7280', marginTop: '2px', flexShrink: 0 }} />
                                        <div>
                                            <p style={{ fontSize: '0.7rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Service</p>
                                            <p style={{ fontSize: '0.85rem', color: '#374151' }}>{quote.vehicle_type} • {quote.service_type || 'Transfer'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button
                                        onClick={() => handleOpenEmailModal(quote)}
                                        style={{ ...buttonStyle, backgroundColor: '#1e3a8a', color: 'white' }}
                                    >
                                        <Mail size={16} />
                                        {quote.status === 'Quote Sent' ? 'Resend Quote' : 'Send Quote'}
                                    </button>
                                    <button
                                        onClick={() => handleConvertToBooking(quote.id)}
                                        style={{ ...buttonStyle, backgroundColor: '#059669', color: 'white' }}
                                    >
                                        <CheckCircle size={16} /> Confirm Booking
                                    </button>
                                    <Link
                                        href={`/admin/dashboard/bookings/${quote.id}`}
                                        style={{ ...buttonStyle, backgroundColor: '#f3f4f6', color: '#374151', textDecoration: 'none' }}
                                    >
                                        <Eye size={16} /> View
                                    </Link>
                                    <button
                                        onClick={() => handleDeleteQuote(quote.id)}
                                        style={{ ...buttonStyle, backgroundColor: '#fee2e2', color: '#dc2626' }}
                                        title="Delete Permanently"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Email Modal */}
            {showEmailModal && selectedQuote && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '1rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', width: '700px', maxWidth: '95%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Send Quote Email</h2>
                            <button onClick={() => setShowEmailModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem', overflow: 'auto', flex: 1 }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Select Template</label>
                                <select
                                    value={selectedTemplateId}
                                    onChange={(e) => handleTemplateChange(e.target.value)}
                                    style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.95rem' }}
                                >
                                    <option value="">-- Select a Template --</option>
                                    {emailTemplates.map(t => (
                                        <option key={t.id} value={t.id}>{t.template_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Subject</label>
                                <input
                                    type="text"
                                    value={emailSubject}
                                    onChange={(e) => setEmailSubject(e.target.value)}
                                    style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #e5e7eb', fontSize: '0.95rem' }}
                                />
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Message Preview (HTML)</label>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        padding: '1rem',
                                        borderRadius: '6px',
                                        border: '1px solid #e5e7eb',
                                        overflow: 'auto',
                                        backgroundColor: '#f9fafb'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: emailBody }}
                                />
                            </div>

                            <div style={{ backgroundColor: '#eff6ff', padding: '1rem', borderRadius: '8px', border: '1px solid #dbeafe', display: 'flex', gap: '0.75rem' }}>
                                <CheckCircle size={20} color="#2563eb" style={{ flexShrink: 0 }} />
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e40af', margin: 0 }}>Automation</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#1e3a8a', margin: '0.25rem 0 0' }}>
                                        Sending this quote will automatically update the status to <b>'Quote Sent'</b> and schedule a <b>Follow-up Task</b> for 2 days from now.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '1.25rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <button
                                onClick={() => setShowEmailModal(false)}
                                style={{ padding: '0.75rem 1.5rem', borderRadius: '6px', border: '1px solid #e5e7eb', backgroundColor: 'white', fontWeight: '600', cursor: 'pointer' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSendQuote}
                                disabled={sending}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '6px',
                                    border: 'none',
                                    backgroundColor: '#1e3a8a',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: sending ? 'wait' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Send size={18} /> {sending ? 'Sending...' : 'Send Quote & Schedule Follow-up'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

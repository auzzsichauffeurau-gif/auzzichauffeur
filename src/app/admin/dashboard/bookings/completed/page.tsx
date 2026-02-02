"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    CheckCircle,
    Calendar,
    MapPin,
    Eye,
    Car,
    Search,
    RefreshCw,
    ArrowRight,
    DollarSign,
    Download,
    Star,
    FileText,
    Receipt
} from 'lucide-react';
import { toast } from 'sonner';

interface Booking {
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
    invoice_id?: string; // If invoice already exists
}

export default function CompletedBookingsPage() {
    const router = useRouter();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('all');
    const [stats, setStats] = useState({ total: 0, revenue: 0 });
    const [generatingId, setGeneratingId] = useState<string | null>(null);

    useEffect(() => {
        fetchCompletedBookings();
    }, []);

    const fetchCompletedBookings = async () => {
        setLoading(true);
        try {
            // Fetch bookings and check if they have invoices (assuming a way to link or just raw fetch)
            // For now, simple fetch
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .eq('status', 'Completed')
                .order('pickup_date', { ascending: false });

            if (error) throw error;

            setBookings(data || []);

            // Calculate stats
            const totalRevenue = (data || []).reduce((sum, b) => {
                const amount = parseFloat(b.amount) || 0;
                return sum + amount;
            }, 0);
            setStats({ total: (data || []).length, revenue: totalRevenue });
        } catch (error) {
            console.error('Error fetching completed bookings:', error);
            toast.error('Failed to load completed bookings');
        } finally {
            setLoading(false);
        }
    };

    const handleGenerateInvoice = async (booking: Booking) => {
        if (generatingId) return;
        setGeneratingId(booking.id);

        try {
            // 1. Check if invoice already exists (Optional, simple check by booking_id or just proceed)
            // For simplicity, we just create. In prod, we'd check 'invoices' table first.

            const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
            const dueDate = new Date();
            dueDate.setDate(dueDate.getDate() + 7); // Due in 7 days

            const { data, error } = await supabase
                .from('invoices')
                .insert([{
                    booking_id: booking.id,
                    customer_name: booking.customer_name,
                    customer_email: booking.customer_email,
                    customer_phone: booking.customer_phone,
                    invoice_number: invoiceNumber,
                    issue_date: new Date().toISOString(),
                    due_date: dueDate.toISOString(),
                    total_amount: booking.amount,
                    subtotal: booking.amount, // Assuming inclusive
                    tax_amount: 0,
                    payment_status: 'unpaid',
                    line_items: JSON.stringify([
                        { description: `Chauffeur Service: ${booking.vehicle_type} - ${booking.pickup_location} to ${booking.dropoff_location}`, amount: booking.amount }
                    ])
                }])
                .select();

            if (error) throw error;

            toast.success(`Invoice ${invoiceNumber} generated!`);

            // Redirect to Invoices page? Or just show success
            if (confirm('Invoice generated. View it now?')) {
                router.push('/admin/dashboard/invoices');
            }

        } catch (error: any) {
            toast.error('Failed to generate invoice: ' + error.message);
        } finally {
            setGeneratingId(null);
        }
    };

    const getFilteredBookings = () => {
        let filtered = bookings;

        const today = new Date();
        if (dateFilter === 'week') {
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            filtered = filtered.filter(b => new Date(b.pickup_date) >= weekAgo);
        } else if (dateFilter === 'month') {
            const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
            filtered = filtered.filter(b => new Date(b.pickup_date) >= monthAgo);
        } else if (dateFilter === 'year') {
            const yearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
            filtered = filtered.filter(b => new Date(b.pickup_date) >= yearAgo);
        }

        if (searchTerm) {
            filtered = filtered.filter(b =>
                b.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.pickup_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.pickup_date.includes(searchTerm)
            );
        }

        return filtered;
    };

    const filteredBookings = getFilteredBookings();

    const cardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        overflow: 'hidden'
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

    const statCardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        padding: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    };

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={28} style={{ color: '#059669' }} />
                                Completed Bookings
                            </span>
                        </h1>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                            Successfully completed trips history
                        </p>
                    </div>
                    <button
                        onClick={fetchCompletedBookings}
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

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                    <div style={statCardStyle}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CheckCircle size={24} style={{ color: '#059669' }} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Total Completed</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</p>
                        </div>
                    </div>
                    <div style={statCardStyle}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DollarSign size={24} style={{ color: '#1e40af' }} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Total Revenue</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>${stats.revenue.toLocaleString()}</p>
                        </div>
                    </div>
                    <div style={statCardStyle}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Star size={24} style={{ color: '#d97706' }} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', fontWeight: '600' }}>Avg. Revenue</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
                                ${stats.total > 0 ? Math.round(stats.revenue / stats.total).toLocaleString() : 0}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    <div style={{ position: 'relative', flex: '1', maxWidth: '300px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input
                            type="text"
                            placeholder="Search description, name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.6rem 0.75rem 0.6rem 2.5rem',
                                borderRadius: '8px',
                                border: '1px solid #e5e7eb',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <select
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        style={{
                            padding: '0.6rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            fontSize: '0.9rem',
                            outline: 'none',
                            backgroundColor: 'white',
                            cursor: 'pointer'
                        }}
                    >
                        <option value="all">All Time</option>
                        <option value="week">Last 7 Days</option>
                        <option value="month">Last 30 Days</option>
                        <option value="year">Last Year</option>
                    </select>
                </div>
            </div>

            {/* Loading */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                    Loading completed bookings...
                </div>
            ) : filteredBookings.length === 0 ? (
                <div style={{ ...cardStyle, padding: '3rem', textAlign: 'center' }}>
                    <CheckCircle size={48} style={{ color: '#d1d5db', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        No Completed Bookings
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        {searchTerm || dateFilter !== 'all' ? 'Try adjusting your filters' : 'No completed trips found'}
                    </p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {filteredBookings.map((booking) => (
                        <div key={booking.id} style={{ ...cardStyle, padding: '1rem 1.25rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {/* Left - Info */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: '1', minWidth: '200px' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: '#d1fae5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <CheckCircle size={20} style={{ color: '#059669' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.95rem' }}>{booking.customer_name}</p>
                                        <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                                            {booking.pickup_date} • {booking.vehicle_type}
                                        </p>
                                    </div>
                                </div>

                                {/* Middle - Route */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '2', minWidth: '250px', color: '#6b7280', fontSize: '0.85rem' }}>
                                    <MapPin size={14} style={{ color: '#22c55e', flexShrink: 0 }} />
                                    <span style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {booking.pickup_location}
                                    </span>
                                    <ArrowRight size={14} style={{ flexShrink: 0 }} />
                                    <MapPin size={14} style={{ color: '#ef4444', flexShrink: 0 }} />
                                    <span style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {booking.dropoff_location}
                                    </span>
                                </div>

                                {/* Right - Amount & Actions */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#059669' }}>${booking.amount}</p>

                                    <button
                                        onClick={() => handleGenerateInvoice(booking)}
                                        disabled={generatingId === booking.id}
                                        style={{
                                            ...buttonStyle,
                                            backgroundColor: 'white',
                                            color: '#1e3a8a',
                                            border: '1px solid #1e3a8a',
                                            fontSize: '0.75rem',
                                            padding: '0.4rem 0.6rem'
                                        }}
                                        title="Generate Invoice"
                                    >
                                        <Receipt size={14} /> {generatingId === booking.id ? '...' : 'Invoice'}
                                    </button>

                                    <Link
                                        href={`/admin/dashboard/bookings/${booking.id}`}
                                        style={{ ...buttonStyle, backgroundColor: '#f3f4f6', color: '#374151', textDecoration: 'none', fontSize: '0.75rem', padding: '0.4rem 0.6rem' }}
                                    >
                                        <Eye size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    User,
    Mail,
    Phone,
    Car,
    CheckCircle,
    XCircle,
    Clock3,
    AlertCircle,
    Printer,
    Edit,
    Trash2,
    Check,
    Play,
    X,
    ArrowRight,
    Save
} from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

interface BookingDetail {
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
    distance_km?: number;
    duration_hours?: number;
    service_type?: string;
    created_at: string;
    notes?: string;
    driver_id?: string;
    vehicle_id?: string;
}

export default function BookingDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;

    const [booking, setBooking] = useState<BookingDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    // Edit Mode States
    const [isEditingMode, setIsEditingMode] = useState(false);
    const [tempBooking, setTempBooking] = useState<BookingDetail | null>(null);

    useEffect(() => {
        if (id) {
            fetchBookingDetails(id as string);
        }
    }, [id]);

    useEffect(() => {
        if (booking) {
            setTempBooking({ ...booking });
        }
    }, [booking]);

    const fetchBookingDetails = async (bookingId: string) => {
        try {
            const { data, error } = await supabase
                .from('bookings')
                .select('*')
                .eq('id', bookingId)
                .single();

            if (error) throw error;
            setBooking(data);
        } catch (error) {
            console.error('Error fetching booking:', error);
            toast.error('Failed to load booking details');
            router.push('/admin/dashboard/bookings');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field: string, value: string) => {
        if (tempBooking) {
            setTempBooking({ ...tempBooking, [field]: value });
        }
    };

    const handleEditToggle = () => {
        setTempBooking(booking ? { ...booking } : null);
        setIsEditingMode(true);
    };

    const handleCancelEdit = () => {
        setIsEditingMode(false);
        setTempBooking(booking ? { ...booking } : null);
    };

    const handleSaveEdit = async () => {
        if (!tempBooking || !booking) return;
        setIsUpdating(true);

        try {
            const { error, data } = await supabase
                .from('bookings')
                .update({
                    customer_name: tempBooking.customer_name,
                    customer_email: tempBooking.customer_email,
                    customer_phone: tempBooking.customer_phone,
                    pickup_location: tempBooking.pickup_location,
                    dropoff_location: tempBooking.dropoff_location,
                    pickup_date: tempBooking.pickup_date,
                    pickup_time: tempBooking.pickup_time,
                    vehicle_type: tempBooking.vehicle_type,
                    service_type: tempBooking.service_type,
                    amount: tempBooking.amount,
                    notes: tempBooking.notes
                })
                .eq('id', booking.id)
                .select()
                .single();

            if (error) throw error;
            if (!data) throw new Error("Update failed or permission denied by database rules.");

            setBooking(data);
            setIsEditingMode(false);
            toast.success('Booking updated successfully!');
        } catch (error: any) {
            toast.error('Failed to save changes: ' + error.message);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleStatusUpdate = async (newStatus: string) => {
        if (!booking) return;
        setIsUpdating(true);

        try {
            const { error, data } = await supabase
                .from('bookings')
                .update({ status: newStatus })
                .eq('id', booking.id)
                .select()
                .single();

            if (error) throw error;
            if (!data) throw new Error("Update failed or permission denied by database rules.");

            setBooking(data);
            toast.success(`Booking status updated to ${newStatus}`);
        } catch (error: any) {
            toast.error('Failed to update status: ' + error.message);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleDelete = async () => {
        if (!booking) return;
        if (!confirm('Are you sure you want to permanently delete this booking? This action cannot be undone.')) return;

        setIsDeleting(true);
        try {
            // Delete related invoices first to avoid foreign key constraints
            await supabase.from('invoices').delete().eq('booking_id', booking.id);
            // Delete related followups first to avoid foreign key constraints
            await supabase.from('followups').delete().eq('booking_id', booking.id);

            const { error, data } = await supabase
                .from('bookings')
                .delete()
                .eq('id', booking.id)
                .select();

            if (error) throw error;
            if (!data || data.length === 0) {
                toast.error('Deletion failed: Permission denied or record not found.');
                setIsDeleting(false);
                return;
            }

            toast.success('Booking deleted successfully');
            router.push('/admin/dashboard/bookings');
        } catch (error: any) {
            toast.error('Failed to delete booking: ' + error.message);
            setIsDeleting(false);
        }
    };

    const getStatusStyles = (status: string): React.CSSProperties => {
        switch (status?.toLowerCase()) {
            case 'completed': return { backgroundColor: '#d1fae5', color: '#065f46', border: '1px solid #a7f3d0' };
            case 'confirmed': return { backgroundColor: '#e0e7ff', color: '#3730a3', border: '1px solid #c7d2fe' };
            case 'in progress': return { backgroundColor: '#dbeafe', color: '#1e40af', border: '1px solid #bfdbfe' };
            case 'pending': return { backgroundColor: '#ffedd5', color: '#9a3412', border: '1px solid #fed7aa' };
            case 'cancelled': return { backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca' };
            default: return { backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb' };
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status?.toLowerCase()) {
            case 'completed': return <CheckCircle size={16} />;
            case 'confirmed': return <CheckCircle size={16} />;
            case 'in progress': return <Play size={16} />;
            case 'pending': return <Clock3 size={16} />;
            case 'cancelled': return <XCircle size={16} />;
            default: return <AlertCircle size={16} />;
        }
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: '#6b7280' }}>Loading booking details...</p>
                </div>
            </div>
        );
    }

    if (!booking || !tempBooking) return null;

    // Styles
    const cardStyle: React.CSSProperties = {
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
        overflow: 'hidden'
    };

    const cardHeaderStyle: React.CSSProperties = {
        padding: '1rem 1.25rem',
        borderBottom: '1px solid #f3f4f6',
        backgroundColor: '#f9fafb'
    };

    const cardTitleStyle: React.CSSProperties = {
        fontSize: '0.9rem',
        fontWeight: '700',
        color: '#1f2937',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        margin: 0
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '0.75rem',
        color: '#6b7280',
        marginBottom: '0.25rem',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.025em'
    };

    const valueStyle: React.CSSProperties = {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#1f2937'
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '0.5rem 0.75rem',
        borderRadius: '6px',
        border: '1px solid #d1d5db',
        fontSize: '0.95rem',
        color: '#1f2937',
        outline: 'none',
        backgroundColor: '#fff'
    };

    const actionButtonBase: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.6rem 1rem',
        borderRadius: '8px',
        fontSize: '0.85rem',
        fontWeight: '600',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.2s'
    };

    const displayData = isEditingMode ? tempBooking : booking;

    return (
        <div style={{ paddingBottom: '3rem' }}>
            {/* Print & Responsive Styles */}
            <style>{`
                @media print {
                    body * { visibility: hidden; }
                    #printable-content, #printable-content * { visibility: visible; }
                    #printable-content { position: absolute; left: 0; top: 0; width: 100%; background: white; padding: 20px; }
                    .no-print { display: none !important; }
                    .print-only { display: block !important; }
                    .card { box-shadow: none !important; border: 1px solid #e5e7eb !important; break-inside: avoid; }
                }
                .print-only { display: none; }
                .booking-grid {
                    display: grid;
                    grid-template-columns: 1fr 380px;
                    gap: 2rem;
                }
                @media (max-width: 1024px) {
                    .booking-grid { grid-template-columns: 1fr; }
                }
                .header-wrapper {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                @media (max-width: 640px) {
                    .header-wrapper {
                        flex-direction: column;
                        align-items: stretch;
                    }
                    .header-actions {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 0.5rem;
                        width: 100%;
                    }
                    .header-actions button, .header-actions a {
                        width: 100%;
                        justify-content: center;
                    }
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                @media (max-width: 768px) {
                    .info-grid { grid-template-columns: 1fr; }
                }
            `}</style>

            <div id="printable-content">
                {/* Print Header */}
                <div className="print-only" style={{ marginBottom: '2rem', borderBottom: '2px solid #1f2937', paddingBottom: '1rem' }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Booking Receipt</h1>
                    <p style={{ fontSize: '1rem', color: '#6b7280' }}>Reference: #{booking.id.slice(0, 8)}</p>
                </div>

                {/* Header */}
                <div className="header-wrapper no-print">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link
                            href="/admin/dashboard/bookings"
                            style={{ padding: '8px', color: '#6b7280', borderRadius: '50%', display: 'flex', textDecoration: 'none' }}
                        >
                            <ArrowLeft size={20} />
                        </Link>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                                <h1 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                                    Booking #{booking.id.slice(0, 8)}
                                </h1>
                                {isEditingMode && (
                                    <span style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '600' }}>
                                        Editing
                                    </span>
                                )}
                                {!isEditingMode && (
                                    <span style={{
                                        ...getStatusStyles(booking.status),
                                        padding: '0.3rem 0.7rem',
                                        borderRadius: '999px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.3rem',
                                        textTransform: 'capitalize'
                                    }}>
                                        {getStatusIcon(booking.status)}
                                        {booking.status}
                                    </span>
                                )}
                            </div>
                            <p style={{ color: '#6b7280', fontSize: '0.8rem', margin: 0 }}>
                                Created on {new Date(booking.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    {/* Header Actions */}
                    <div className="header-actions" style={{ display: 'flex', gap: '0.5rem' }}>
                        {isEditingMode ? (
                            <>
                                <button
                                    onClick={handleCancelEdit}
                                    disabled={isUpdating}
                                    style={{
                                        ...actionButtonBase,
                                        backgroundColor: 'white',
                                        color: '#374151',
                                        border: '1px solid #d1d5db'
                                    }}
                                >
                                    <X size={16} /> Cancel
                                </button>
                                <button
                                    onClick={handleSaveEdit}
                                    disabled={isUpdating}
                                    style={{
                                        ...actionButtonBase,
                                        backgroundColor: '#059669',
                                        color: 'white',
                                        opacity: isUpdating ? 0.6 : 1
                                    }}
                                >
                                    <Save size={16} /> {isUpdating ? 'Saving...' : 'Save Changes'}
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={() => window.print()}
                                    style={{
                                        ...actionButtonBase,
                                        backgroundColor: 'white',
                                        color: '#374151',
                                        border: '1px solid #d1d5db'
                                    }}
                                >
                                    <Printer size={16} /> Print
                                </button>
                                <button
                                    onClick={handleEditToggle}
                                    style={{
                                        ...actionButtonBase,
                                        backgroundColor: '#1e3a8a',
                                        color: 'white'
                                    }}
                                >
                                    <Edit size={16} /> Edit Details
                                </button>
                            </>
                        )}
                    </div>
                </div>

                <div className="booking-grid">
                    {/* Left Column - Trip Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Route Card */}
                        <div className="card" style={cardStyle}>
                            <div style={cardHeaderStyle}>
                                <h2 style={{ ...cardTitleStyle, color: '#1e3a8a' }}>
                                    <MapPin size={18} /> Trip Route
                                </h2>
                            </div>
                            <div style={{ padding: '1.5rem', position: 'relative' }}>
                                {/* Vertical Line */}
                                <div style={{
                                    position: 'absolute',
                                    left: '35px',
                                    top: '55px',
                                    bottom: '55px',
                                    width: '2px',
                                    backgroundColor: '#e5e7eb',
                                    borderLeft: '2px dashed #d1d5db'
                                }}></div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    {/* Pickup */}
                                    <div style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            backgroundColor: '#dcfce7',
                                            border: '2px solid #86efac',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            zIndex: 1
                                        }}>
                                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }}></div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p style={labelStyle}>Pickup Location</p>
                                            {isEditingMode ? (
                                                <input
                                                    type="text"
                                                    value={tempBooking.pickup_location}
                                                    onChange={(e) => handleInputChange('pickup_location', e.target.value)}
                                                    style={{ ...inputStyle, marginBottom: '0.5rem' }}
                                                />
                                            ) : (
                                                <a
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(displayData.pickup_location)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={{ ...valueStyle, fontSize: '1.1rem', marginBottom: '0.5rem', color: '#1e3a8a', textDecoration: 'none', display: 'block' }}
                                                    title="Open in Google Maps"
                                                >
                                                    {displayData.pickup_location}
                                                </a>
                                            )}
                                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                                {isEditingMode ? (
                                                    <>
                                                        <input
                                                            type="date"
                                                            value={tempBooking.pickup_date}
                                                            onChange={(e) => handleInputChange('pickup_date', e.target.value)}
                                                            style={{ ...inputStyle, width: 'auto', flex: '1', minWidth: '140px' }}
                                                        />
                                                        <input
                                                            type="time"
                                                            value={tempBooking.pickup_time}
                                                            onChange={(e) => handleInputChange('pickup_time', e.target.value)}
                                                            style={{ ...inputStyle, width: 'auto', flex: '1', minWidth: '100px' }}
                                                        />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#f3f4f6', padding: '0.35rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', color: '#4b5563' }}>
                                                            <Calendar size={14} /> {displayData.pickup_date}
                                                        </span>
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#f3f4f6', padding: '0.35rem 0.6rem', borderRadius: '6px', fontSize: '0.8rem', color: '#4b5563' }}>
                                                            <Clock size={14} /> {displayData.pickup_time}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dropoff */}
                                    <div style={{ display: 'flex', gap: '1rem', position: 'relative' }}>
                                        <div style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '50%',
                                            backgroundColor: '#fee2e2',
                                            border: '2px solid #fca5a5',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            zIndex: 1
                                        }}>
                                            <MapPin size={14} style={{ color: '#ef4444' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <p style={labelStyle}>Dropoff Location</p>
                                            {isEditingMode ? (
                                                <input
                                                    type="text"
                                                    value={tempBooking.dropoff_location}
                                                    onChange={(e) => handleInputChange('dropoff_location', e.target.value)}
                                                    style={inputStyle}
                                                />
                                            ) : (
                                                <a
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(displayData.dropoff_location)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    style={{ ...valueStyle, fontSize: '1.1rem', color: '#1e3a8a', textDecoration: 'none', display: 'block' }}
                                                    title="Open in Google Maps"
                                                >
                                                    {displayData.dropoff_location}
                                                </a>
                                            )}
                                            {displayData.distance_km && !isEditingMode && (
                                                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.5rem' }}>
                                                    Est. Distance: {displayData.distance_km} km
                                                    {displayData.duration_hours && ` • Duration: ${displayData.duration_hours} hrs`}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Customer & Vehicle */}
                        <div className="info-grid">
                            {/* Customer */}
                            <div className="card" style={cardStyle}>
                                <div style={cardHeaderStyle}>
                                    <h2 style={{ ...cardTitleStyle, color: '#7c3aed' }}>
                                        <User size={18} /> Customer
                                    </h2>
                                </div>
                                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div>
                                        <p style={labelStyle}>Full Name</p>
                                        {isEditingMode ? (
                                            <input
                                                type="text"
                                                value={tempBooking.customer_name}
                                                onChange={(e) => handleInputChange('customer_name', e.target.value)}
                                                style={inputStyle}
                                            />
                                        ) : (
                                            <p style={valueStyle}>{displayData.customer_name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p style={labelStyle}>Email</p>
                                        {isEditingMode ? (
                                            <input
                                                type="email"
                                                value={tempBooking.customer_email}
                                                onChange={(e) => handleInputChange('customer_email', e.target.value)}
                                                style={inputStyle}
                                            />
                                        ) : (
                                            <a href={`mailto:${displayData.customer_email}`} style={{ ...valueStyle, color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                                <Mail size={14} /> {displayData.customer_email}
                                            </a>
                                        )}
                                    </div>
                                    <div>
                                        <p style={labelStyle}>Phone</p>
                                        {isEditingMode ? (
                                            <input
                                                type="tel"
                                                value={tempBooking.customer_phone}
                                                onChange={(e) => handleInputChange('customer_phone', e.target.value)}
                                                style={inputStyle}
                                            />
                                        ) : (
                                            <a href={`tel:${displayData.customer_phone}`} style={{ ...valueStyle, color: '#1f2937', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                                <Phone size={14} /> {displayData.customer_phone}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle */}
                            <div className="card" style={cardStyle}>
                                <div style={cardHeaderStyle}>
                                    <h2 style={cardTitleStyle}>
                                        <Car size={18} /> Vehicle & Service
                                    </h2>
                                </div>
                                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div>
                                        <p style={labelStyle}>Vehicle Type</p>
                                        {isEditingMode ? (
                                            <select
                                                value={tempBooking.vehicle_type}
                                                onChange={(e) => handleInputChange('vehicle_type', e.target.value)}
                                                style={inputStyle}
                                            >
                                                <option value="Executive Sedans">Executive Sedans (1-3 pax)</option>
                                                <option value="Premium Sedans">Premium Sedans (1-3 pax)</option>
                                                <option value="Premium SUVs">Premium SUVs (1-3 pax)</option>
                                                <option value="People Movers">People Movers (1-6 pax)</option>
                                                <option value="Minibuses & Coaches">Minibuses & Coaches (1-14 pax)</option>
                                            </select>
                                        ) : (
                                            <p style={{ ...valueStyle, fontSize: '1.1rem' }}>{displayData.vehicle_type}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p style={labelStyle}>Service Type</p>
                                        {isEditingMode ? (
                                            <select
                                                value={tempBooking.service_type || 'Standard Transfer'}
                                                onChange={(e) => handleInputChange('service_type', e.target.value)}
                                                style={inputStyle}
                                            >
                                                <option value="Airport Transfer">Airport Transfer</option>
                                                <option value="Corporate Transfer">Corporate Transfer</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Hourly Chauffeur">Hourly Chauffeur</option>
                                                <option value="Standard Transfer">Standard Transfer</option>
                                            </select>
                                        ) : (
                                            <p style={{ ...valueStyle, textTransform: 'capitalize' }}>
                                                {String(displayData.service_type || 'Standard Transfer').replace(/_/g, ' ')}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="card" style={cardStyle}>
                            <div style={cardHeaderStyle}>
                                <h2 style={cardTitleStyle}>Notes</h2>
                            </div>
                            <div style={{ padding: '1.25rem' }}>
                                {isEditingMode ? (
                                    <textarea
                                        value={tempBooking.notes || ''}
                                        onChange={(e) => handleInputChange('notes', e.target.value)}
                                        placeholder="Add notes about this booking..."
                                        rows={4}
                                        style={{ ...inputStyle, resize: 'vertical' }}
                                    />
                                ) : (
                                    <p style={{ fontSize: '0.9rem', color: displayData.notes ? '#4b5563' : '#9ca3af', fontStyle: displayData.notes ? 'normal' : 'italic' }}>
                                        {displayData.notes || 'No notes added.'}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Actions & Payment */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Payment Summary */}
                        <div className="card" style={{ ...cardStyle, overflow: 'hidden' }}>
                            <div style={{ backgroundColor: '#1e3a8a', padding: '1.5rem', color: 'white' }}>
                                <p style={{ fontSize: '0.75rem', color: '#93c5fd', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Total Amount</p>
                                {isEditingMode ? (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$</span>
                                        <input
                                            type="text"
                                            value={tempBooking.amount}
                                            onChange={(e) => handleInputChange('amount', e.target.value)}
                                            style={{ ...inputStyle, fontSize: '1.5rem', fontWeight: 'bold', width: '120px', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}
                                        />
                                        <span style={{ fontSize: '1rem', color: '#93c5fd' }}>AUD</span>
                                    </div>
                                ) : (
                                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>
                                        ${displayData.amount} <span style={{ fontSize: '1rem', fontWeight: 'normal', color: '#93c5fd' }}>AUD</span>
                                    </h2>
                                )}
                            </div>
                            <div className="no-print" style={{ padding: '1.25rem' }}>
                                <button
                                    onClick={() => router.push(`/admin/dashboard/invoices?search=${encodeURIComponent(booking.customer_name)}`)}
                                    style={{
                                        width: '100%',
                                        ...actionButtonBase,
                                        backgroundColor: '#eff6ff',
                                        color: '#1e40af',
                                        border: '1px solid #bfdbfe'
                                    }}>
                                    <ArrowRight size={14} /> View Invoice
                                </button>
                            </div>
                        </div>

                        {/* Status Actions - Hidden when Editing */}
                        {!isEditingMode && (
                            <div className="card no-print" style={cardStyle}>
                                <div style={cardHeaderStyle}>
                                    <h2 style={{ ...cardTitleStyle, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Update Status</h2>
                                </div>
                                <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <button
                                        onClick={() => handleStatusUpdate('Confirmed')}
                                        disabled={isUpdating || booking.status === 'Confirmed'}
                                        style={{
                                            ...actionButtonBase,
                                            width: '100%',
                                            backgroundColor: booking.status === 'Confirmed' ? '#f3f4f6' : '#e0e7ff',
                                            color: booking.status === 'Confirmed' ? '#9ca3af' : '#3730a3',
                                            cursor: booking.status === 'Confirmed' ? 'not-allowed' : 'pointer',
                                            border: booking.status === 'Confirmed' ? '1px solid #e5e7eb' : '1px solid #c7d2fe'
                                        }}
                                    >
                                        <Check size={16} /> Confirm
                                    </button>
                                    <button
                                        onClick={() => handleStatusUpdate('In Progress')}
                                        disabled={isUpdating || booking.status === 'In Progress'}
                                        style={{
                                            ...actionButtonBase,
                                            width: '100%',
                                            backgroundColor: booking.status === 'In Progress' ? '#f3f4f6' : '#dbeafe',
                                            color: booking.status === 'In Progress' ? '#9ca3af' : '#1e40af',
                                            cursor: booking.status === 'In Progress' ? 'not-allowed' : 'pointer',
                                            border: booking.status === 'In Progress' ? '1px solid #e5e7eb' : '1px solid #bfdbfe'
                                        }}
                                    >
                                        <Play size={16} /> Start
                                    </button>
                                    <button
                                        onClick={() => handleStatusUpdate('Completed')}
                                        disabled={isUpdating || booking.status === 'Completed'}
                                        style={{
                                            ...actionButtonBase,
                                            width: '100%',
                                            backgroundColor: booking.status === 'Completed' ? '#f3f4f6' : '#d1fae5',
                                            color: booking.status === 'Completed' ? '#9ca3af' : '#065f46',
                                            cursor: booking.status === 'Completed' ? 'not-allowed' : 'pointer',
                                            border: booking.status === 'Completed' ? '1px solid #e5e7eb' : '1px solid #a7f3d0'
                                        }}
                                    >
                                        <CheckCircle size={16} /> Mark Completed
                                    </button>
                                    <button
                                        onClick={() => handleStatusUpdate('Cancelled')}
                                        disabled={isUpdating || booking.status === 'Cancelled'}
                                        style={{
                                            ...actionButtonBase,
                                            width: '100%',
                                            backgroundColor: booking.status === 'Cancelled' ? '#f3f4f6' : 'white',
                                            color: booking.status === 'Cancelled' ? '#9ca3af' : '#dc2626',
                                            cursor: booking.status === 'Cancelled' ? 'not-allowed' : 'pointer',
                                            border: booking.status === 'Cancelled' ? '1px solid #e5e7eb' : '1px solid #fecaca'
                                        }}
                                    >
                                        <X size={16} /> Cancel Booking
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Delete - Hidden when Editing */}
                        {!isEditingMode && (
                            <div className="card no-print" style={cardStyle}>
                                <div style={{ padding: '1rem' }}>
                                    <button
                                        onClick={handleDelete}
                                        disabled={isDeleting}
                                        style={{
                                            ...actionButtonBase,
                                            width: '100%',
                                            backgroundColor: '#dc2626',
                                            color: 'white',
                                            opacity: isDeleting ? 0.6 : 1,
                                            cursor: isDeleting ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        <Trash2 size={16} /> {isDeleting ? 'Deleting...' : 'Delete Booking'}
                                    </button>
                                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '0.5rem' }}>
                                        This action cannot be undone
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

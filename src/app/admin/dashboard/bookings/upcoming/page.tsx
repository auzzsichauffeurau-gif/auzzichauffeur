"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import {
    Clock,
    Calendar,
    MapPin,
    User,
    Eye,
    Car,
    Search,
    RefreshCw,
    ArrowRight,
    Users,
    Check,
    X
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
    driver_id?: string;
}

interface Driver {
    id: string;
    name: string;
    status: string; // Available, On Job, Offline
    phone: string;
}

export default function UpcomingBookingsPage() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Assign Driver Modal
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [selectedDriverId, setSelectedDriverId] = useState('');
    const [assigning, setAssigning] = useState(false);

    useEffect(() => {
        fetchUpcomingBookings();
        fetchDrivers();
    }, []);

    const fetchUpcomingBookings = async () => {
        setLoading(true);
        try {
            const today = new Date().toISOString().split('T')[0];

            // Join with drivers table to get driver name if assigned
            const { data, error } = await supabase
                .from('bookings')
                .select('*, drivers:driver_id(name)')
                .in('status', ['Confirmed', 'In Progress'])
                .gte('pickup_date', today)
                .order('pickup_date', { ascending: true });

            if (error) throw error;
            setBookings(data || []);
        } catch (error) {
            console.error('Error fetching upcoming bookings:', error);
            toast.error('Failed to load upcoming bookings');
        } finally {
            setLoading(false);
        }
    };

    const fetchDrivers = async () => {
        const { data } = await supabase.from('drivers').select('*');
        if (data) setDrivers(data);
    };

    const handleAssignClick = (booking: Booking) => {
        setSelectedBooking(booking);
        setSelectedDriverId(booking.driver_id || '');
        setShowAssignModal(true);
    };

    const handleConfirmAssign = async () => {
        if (!selectedBooking || !selectedDriverId) return;
        setAssigning(true);

        try {
            const { error } = await supabase
                .from('bookings')
                .update({ driver_id: selectedDriverId })
                .eq('id', selectedBooking.id);

            if (error) throw error;

            // Optional: Update driver status (e.g. to 'On Job' if needed)
            // await supabase.from('drivers').update({ status: 'On Job' }).eq('id', selectedDriverId);

            toast.success(`Driver assigned successfully to ${selectedBooking.customer_name}`);
            setShowAssignModal(false);
            fetchUpcomingBookings(); // Refresh list

            // Simulate sending notification
            console.log(`Notification sent to driver ID: ${selectedDriverId}`);

        } catch (error: any) {
            toast.error('Failed to assign driver: ' + error.message);
        } finally {
            setAssigning(false);
        }
    };

    const filteredBookings = bookings.filter(b =>
        b.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.pickup_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.pickup_date.includes(searchTerm)
    );

    const getStatusStyles = (status: string): React.CSSProperties => {
        switch (status?.toLowerCase()) {
            case 'confirmed': return { backgroundColor: '#e0e7ff', color: '#3730a3', border: '1px solid #c7d2fe' };
            case 'in progress': return { backgroundColor: '#dbeafe', color: '#1e40af', border: '1px solid #bfdbfe' };
            default: return { backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #e5e7eb' };
        }
    };

    const getDaysUntil = (dateStr: string) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const pickupDate = new Date(dateStr);
        const diffTime = pickupDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return { text: 'Today', color: '#dc2626', bg: '#fee2e2' };
        if (diffDays === 1) return { text: 'Tomorrow', color: '#ea580c', bg: '#ffedd5' };
        if (diffDays <= 7) return { text: `In ${diffDays} days`, color: '#ca8a04', bg: '#fef9c3' };
        return { text: `In ${diffDays} days`, color: '#059669', bg: '#d1fae5' };
    };

    // Styles
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

    return (
        <div>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={28} style={{ color: '#3b82f6' }} />
                                Upcoming Bookings
                            </span>
                        </h1>
                        <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                            Confirmed future trips • {bookings.length} scheduled
                        </p>
                    </div>
                    <button
                        onClick={fetchUpcomingBookings}
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
                        placeholder="Search by name, location, or date..."
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
                    Loading upcoming bookings...
                </div>
            ) : filteredBookings.length === 0 ? (
                <div style={{ ...cardStyle, padding: '3rem', textAlign: 'center' }}>
                    <Clock size={48} style={{ color: '#d1d5db', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                        No Upcoming Bookings
                    </h3>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        {searchTerm ? 'Try a different search term' : 'No confirmed future bookings found'}
                    </p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {filteredBookings.map((booking: any) => {
                        const daysInfo = getDaysUntil(booking.pickup_date);
                        const assignedDriverName = booking.drivers ? booking.drivers.name : null;

                        return (
                            <div key={booking.id} style={cardStyle}>
                                <div style={{ display: 'flex', alignItems: 'stretch' }}>
                                    {/* Days Counter */}
                                    <div style={{
                                        width: '100px',
                                        backgroundColor: daysInfo.bg,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1rem',
                                        flexShrink: 0
                                    }}>
                                        <Calendar size={24} style={{ color: daysInfo.color, marginBottom: '0.25rem' }} />
                                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: daysInfo.color, textAlign: 'center' }}>
                                            {daysInfo.text}
                                        </span>
                                    </div>

                                    {/* Main Content */}
                                    <div style={{ flex: 1, padding: '1rem 1.25rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>{booking.customer_name}</h3>
                                                    <span style={{
                                                        ...getStatusStyles(booking.status),
                                                        padding: '0.2rem 0.5rem',
                                                        borderRadius: '999px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: '600'
                                                    }}>
                                                        {booking.status}
                                                    </span>
                                                </div>
                                                <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                                                    {booking.pickup_date} at {booking.pickup_time}
                                                </p>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1e3a8a' }}>${booking.amount}</p>
                                            </div>
                                        </div>

                                        {/* Route */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#374151' }}>
                                                <MapPin size={14} style={{ color: '#22c55e' }} />
                                                <span style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {booking.pickup_location}
                                                </span>
                                            </div>
                                            <ArrowRight size={14} style={{ color: '#9ca3af' }} />
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: '#374151' }}>
                                                <MapPin size={14} style={{ color: '#ef4444' }} />
                                                <span style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                    {booking.dropoff_location}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Footer & Driver Assignment */}
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid #f3f4f6', paddingTop: '0.75rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#6b7280' }}>
                                                    <Car size={14} />
                                                    <span>{booking.vehicle_type}</span>
                                                </div>

                                                {/* Driver Indicator */}
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem' }}>
                                                    <User size={14} color={assignedDriverName ? '#059669' : '#d97706'} />
                                                    {assignedDriverName ? (
                                                        <span style={{ color: '#059669', fontWeight: '600' }}>Driver: {assignedDriverName}</span>
                                                    ) : (
                                                        <span style={{ color: '#d97706', fontWeight: '500' }}>No Driver Assigned</span>
                                                    )}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button
                                                    onClick={() => handleAssignClick(booking)}
                                                    style={{
                                                        ...buttonStyle,
                                                        backgroundColor: assignedDriverName ? 'white' : '#1e3a8a',
                                                        color: assignedDriverName ? '#1e3a8a' : 'white',
                                                        border: assignedDriverName ? '1px solid #1e3a8a' : 'none',
                                                        fontSize: '0.75rem',
                                                        padding: '0.4rem 0.75rem'
                                                    }}
                                                >
                                                    <Users size={14} /> {assignedDriverName ? 'Change Driver' : 'Assign Driver'}
                                                </button>
                                                <Link
                                                    href={`/admin/dashboard/bookings/${booking.id}`}
                                                    style={{ ...buttonStyle, backgroundColor: '#f3f4f6', color: '#374151', textDecoration: 'none', fontSize: '0.75rem', padding: '0.4rem 0.75rem' }}
                                                >
                                                    <Eye size={14} /> Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Assign Driver Modal */}
            {showAssignModal && selectedBooking && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', width: '500px', maxWidth: '95%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>Assign Driver</h3>
                            <button onClick={() => setShowAssignModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
                            <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '0.25rem' }}>Assignment for trip:</p>
                                <p style={{ fontWeight: '600', color: '#1f2937' }}>{selectedBooking.customer_name}</p>
                                <p style={{ fontSize: '0.85rem', color: '#374151' }}>{selectedBooking.pickup_date} @ {selectedBooking.pickup_time}</p>
                                <p style={{ fontSize: '0.85rem', color: '#374151' }}>{selectedBooking.vehicle_type}</p>
                            </div>

                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.75rem', color: '#374151' }}>Select Available Driver</label>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '300px', overflowY: 'auto' }}>
                                {drivers.length === 0 ? (
                                    <p style={{ color: '#6b7280', fontStyle: 'italic' }}>No drivers found in system.</p>
                                ) : (
                                    drivers.map(driver => (
                                        <div
                                            key={driver.id}
                                            onClick={() => setSelectedDriverId(driver.id)}
                                            style={{
                                                padding: '0.75rem',
                                                border: selectedDriverId === driver.id ? '2px solid #1e3a8a' : '1px solid #e5e7eb',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                backgroundColor: selectedDriverId === driver.id ? '#eff6ff' : 'white',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <div>
                                                <p style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.9rem' }}>{driver.name}</p>
                                                <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>Status: <span style={{ color: driver.status === 'Available' ? '#059669' : '#d97706' }}>{driver.status}</span></p>
                                            </div>
                                            {selectedDriverId === driver.id && <Check size={18} color="#1e3a8a" />}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>

                        <div style={{ padding: '1.25rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                            <button
                                onClick={() => setShowAssignModal(false)}
                                style={{ padding: '0.6rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontWeight: '500', cursor: 'pointer' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmAssign}
                                disabled={assigning || !selectedDriverId}
                                style={{
                                    padding: '0.6rem 1.25rem',
                                    border: 'none',
                                    borderRadius: '6px',
                                    backgroundColor: '#1e3a8a',
                                    color: 'white',
                                    fontWeight: '600',
                                    cursor: (assigning || !selectedDriverId) ? 'not-allowed' : 'pointer',
                                    opacity: (assigning || !selectedDriverId) ? 0.7 : 1
                                }}
                            >
                                {assigning ? 'Assigning...' : 'Confirm Assignment'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

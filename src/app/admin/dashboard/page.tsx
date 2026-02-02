"use client";

import { useState, useEffect } from 'react';
import {
    Calendar,
    Clock,
    MapPin,
    Car,
    Eye,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { addHours, isWithinInterval } from 'date-fns';

export default function DashboardPage() {
    const [stats, setStats] = useState({
        totalBookings: 0,
        pendingBookings: 0,
        confirmedBookings: 0,
        completedBookings: 0
    });
    const [recentBookings, setRecentBookings] = useState<any[]>([]);
    const [upcomingTrips, setUpcomingTrips] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        setLoading(true);

        // Fetch booking counts
        const { count: totalBookings } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).neq('status', 'Quote Request');
        const { count: pendingBookings } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'Pending');
        const { count: confirmedBookings } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'Confirmed');
        const { count: completedBookings } = await supabase.from('bookings').select('*', { count: 'exact', head: true }).eq('status', 'Completed');

        // Fetch recent bookings
        const { data: bookingsData } = await supabase
            .from('bookings')
            .select('*')
            .neq('status', 'Quote Request')
            .order('created_at', { ascending: false })
            .limit(5);

        // Fetch upcoming trips
        const { data: activeBookings } = await supabase
            .from('bookings')
            .select('*')
            .neq('status', 'Quote Request')
            .neq('status', 'Cancelled')
            .neq('status', 'Completed')
            .limit(100);

        if (activeBookings) {
            const now = new Date();
            const next48Hours = addHours(now, 48);

            const upcoming = activeBookings.filter(booking => {
                if (!booking.pickup_date) return false;

                try {
                    const dateTimeString = booking.pickup_time
                        ? `${booking.pickup_date}T${booking.pickup_time}`
                        : booking.pickup_date;

                    const tripDate = new Date(dateTimeString);
                    if (isNaN(tripDate.getTime())) return false;

                    return isWithinInterval(tripDate, { start: now, end: next48Hours });
                } catch (e) {
                    return false;
                }
            }).sort((a, b) => {
                const dateA = new Date(`${a.pickup_date}T${a.pickup_time || '00:00'}`);
                const dateB = new Date(`${b.pickup_date}T${b.pickup_time || '00:00'}`);
                return dateA.getTime() - dateB.getTime();
            });

            setUpcomingTrips(upcoming);
        }

        setStats({
            totalBookings: totalBookings || 0,
            pendingBookings: pendingBookings || 0,
            confirmedBookings: confirmedBookings || 0,
            completedBookings: completedBookings || 0
        });

        setRecentBookings(bookingsData || []);
        setLoading(false);
    };

    return (
        <div style={{ paddingBottom: '2rem' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                    Booking Dashboard
                </h1>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    Overview of all your bookings and upcoming trips
                </p>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {/* Total Bookings */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Total Bookings</p>
                            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginTop: '0.5rem' }}>{stats.totalBookings}</h3>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: '#eff6ff', borderRadius: '10px', color: '#3b82f6' }}>
                            <Calendar size={24} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '600' }}>Live</span>
                    </div>
                </div>

                {/* Pending */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Pending</p>
                            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginTop: '0.5rem' }}>{stats.pendingBookings}</h3>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: '#fef2f2', borderRadius: '10px', color: '#ef4444' }}>
                            <Clock size={24} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <span style={{ color: '#ef4444', fontWeight: '600' }}>Needs Action</span>
                    </div>
                </div>

                {/* Confirmed */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Confirmed</p>
                            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginTop: '0.5rem' }}>{stats.confirmedBookings}</h3>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: '#f0fdf4', borderRadius: '10px', color: '#10b981' }}>
                            <CheckCircle size={24} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <span style={{ color: '#10b981', fontWeight: '600' }}>Ready</span>
                    </div>
                </div>

                {/* Completed */}
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500' }}>Completed</p>
                            <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937', marginTop: '0.5rem' }}>{stats.completedBookings}</h3>
                        </div>
                        <div style={{ padding: '0.75rem', backgroundColor: '#f3f4f6', borderRadius: '10px', color: '#6b7280' }}>
                            <CheckCircle size={24} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        <span style={{ color: '#6b7280', fontWeight: '600' }}>Done</span>
                    </div>
                </div>
            </div>

            {/* Today's Reminders */}
            {upcomingTrips.some(t => {
                const today = new Date().toISOString().split('T')[0];
                return t.pickup_date === today;
            }) && (
                    <div style={{ marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#fff1f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ padding: '0.5rem', backgroundColor: '#fee2e2', borderRadius: '50%', color: '#ef4444' }}>
                                <AlertCircle size={20} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#991b1b' }}>Today's Trips</h3>
                        </div>
                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {upcomingTrips.filter(t => t.pickup_date === new Date().toISOString().split('T')[0]).map(trip => (
                                <div key={trip.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #fee2e2' }}>
                                    <div>
                                        <span style={{ fontWeight: '700', color: '#7f1d1d', marginRight: '10px' }}>{trip.pickup_time}</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{trip.customer_name}</span>
                                        <span style={{ color: '#6b7280', marginLeft: '10px', fontSize: '0.9rem' }}>{trip.pickup_location} → {trip.dropoff_location}</span>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        padding: '0.25rem 0.6rem',
                                        borderRadius: '999px',
                                        backgroundColor: trip.status === 'Pending' ? '#fff7ed' : '#f0fdf4',
                                        color: trip.status === 'Pending' ? '#c2410c' : '#15803d'
                                    }}>
                                        {trip.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            {/* Upcoming Trips Section */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', backgroundColor: '#e0e7ff', borderRadius: '8px', color: '#4f46e5' }}>
                        <Clock size={20} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>Upcoming Trips <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '400' }}>(Next 48 Hours)</span></h3>
                </div>

                {upcomingTrips.length === 0 ? (
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280' }}>
                        <p>No upcoming trips scheduled for the next 48 hours.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                        {upcomingTrips.map((trip) => (
                            <div key={trip.id} style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                border: '1px solid #e5e7eb',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <div style={{ padding: '1.25rem', borderBottom: '1px solid #f3f4f6', backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} color="#6b7280" />
                                        <span style={{ fontWeight: '600', color: '#374151' }}>
                                            {trip.pickup_date} <span style={{ color: '#9ca3af', fontWeight: '400' }}>at</span> {trip.pickup_time}
                                        </span>
                                    </div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        padding: '0.25rem 0.6rem',
                                        borderRadius: '999px',
                                        backgroundColor: trip.status === 'Pending' ? '#fff7ed' : '#f0fdf4',
                                        color: trip.status === 'Pending' ? '#c2410c' : '#15803d'
                                    }}>
                                        {trip.status}
                                    </span>
                                </div>
                                <div style={{ padding: '1.25rem', flex: 1 }}>
                                    <div style={{ marginBottom: '1rem' }}>
                                        <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.25rem' }}>Customer</p>
                                        <p style={{ fontWeight: '600', color: '#111827' }}>{trip.customer_name}</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <div style={{ marginTop: '0.25rem' }}><MapPin size={16} color="#4f46e5" /></div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '500' }}>PICKUP</p>
                                                <p style={{ color: '#374151', fontSize: '0.9rem' }}>{trip.pickup_location}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <div style={{ marginTop: '0.25rem' }}><MapPin size={16} color="#db2777" /></div>
                                            <div>
                                                <p style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: '500' }}>DROP OFF</p>
                                                <p style={{ color: '#374151', fontSize: '0.9rem' }}>{trip.dropoff_location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '1rem', borderTop: '1px solid #f3f4f6', backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Car size={16} color="#6b7280" />
                                        <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>{trip.vehicle_type || 'Executive Sedans'}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Recent Bookings Table */}
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1f2937' }}>Recent Bookings</h3>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', textAlign: 'left', color: '#6b7280' }}>
                                <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Customer</th>
                                <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Date</th>
                                <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Route</th>
                                <th style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentBookings.length === 0 ? (
                                <tr><td colSpan={4} style={{ padding: '1rem', textAlign: 'center', color: '#666' }}>No recent bookings</td></tr>
                            ) : (
                                recentBookings.map((booking) => (
                                    <tr key={booking.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500', color: '#1f2937' }}>{booking.customer_name}</td>
                                        <td style={{ padding: '1rem', color: '#6b7280' }}>{booking.pickup_date}</td>
                                        <td style={{ padding: '1rem', color: '#6b7280' }}>{booking.pickup_location} → {booking.dropoff_location}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                backgroundColor:
                                                    booking.status === 'Completed' ? '#d1fae5' :
                                                        booking.status === 'Pending' ? '#ffedd5' : '#e0e7ff',
                                                color:
                                                    booking.status === 'Completed' ? '#065f46' :
                                                        booking.status === 'Pending' ? '#9a3412' : '#3730a3',
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

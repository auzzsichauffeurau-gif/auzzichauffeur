"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths,
    parseISO,
    isToday
} from 'date-fns';
import {
    ChevronLeft,
    ChevronRight,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    User,
    Car,
    AlertCircle,
    X,
    Filter
} from 'lucide-react';
import { toast } from 'sonner';

interface Booking {
    id: string;
    customer_name: string;
    pickup_date: string;
    pickup_time: string;
    pickup_location: string;
    dropoff_location: string;
    status: string;
    vehicle_type: string;
    driver_id?: string;
}

export default function CalendarPage() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedDayBookings, setSelectedDayBookings] = useState<Booking[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Filters
    const [statusFilter, setStatusFilter] = useState('All');

    useEffect(() => {
        fetchBookings();
    }, [currentMonth]); // Refetch when month changes

    const fetchBookings = async () => {
        setLoading(true);
        const start = startOfMonth(currentMonth).toISOString();
        const end = endOfMonth(currentMonth).toISOString();

        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .gte('pickup_date', start)
            .lte('pickup_date', end);

        if (error) {
            console.error('Error fetching bookings:', error);
            toast.error('Failed to load calendar data');
        } else {
            setBookings(data || []);
        }
        setLoading(false);
    };

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
    const goToToday = () => setCurrentMonth(new Date());

    const handleDateClick = (date: Date) => {
        const daysBookings = bookings.filter(b => isSameDay(parseISO(b.pickup_date), date));
        setSelectedDate(date);
        setSelectedDayBookings(daysBookings);
        setIsSidebarOpen(true);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Confirmed': return '#10b981'; // Green
            case 'Pending': return '#f59e0b'; // Amber
            case 'Quote Sent': return '#3b82f6'; // Blue
            case 'Completed': return '#6b7280'; // Gray
            case 'Cancelled': return '#ef4444'; // Red
            default: return '#6b7280';
        }
    };

    // Calendar Grid Generation
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>Dispatch Calendar</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>Manage schedule and assignments</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '0.25rem' }}>
                        <button onClick={prevMonth} style={{ padding: '0.5rem', cursor: 'pointer', background: 'none', border: 'none', color: '#4b5563' }}>
                            <ChevronLeft size={20} />
                        </button>
                        <span style={{ padding: '0 1rem', fontWeight: '600', minWidth: '140px', textAlign: 'center' }}>
                            {format(currentMonth, 'MMMM yyyy')}
                        </span>
                        <button onClick={nextMonth} style={{ padding: '0.5rem', cursor: 'pointer', background: 'none', border: 'none', color: '#4b5563' }}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                    <button onClick={goToToday} style={{ padding: '0.6rem 1rem', backgroundColor: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                        Today
                    </button>
                </div>
            </div>

            {/* Main Calendar View */}
            <div style={{ display: 'flex', flex: 1, gap: '1.5rem', overflow: 'hidden' }}>

                {/* Calendar Grid */}
                <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                    {/* Weekday Headers */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
                        {weekDays.map(day => (
                            <div key={day} style={{ padding: '1rem', textAlign: 'center', fontWeight: '600', color: '#6b7280', fontSize: '0.9rem' }}>
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Days Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridAutoRows: '1fr', flex: 1 }}>
                        {days.map((day, dayIdx) => {
                            const dayBookings = bookings.filter(b => isSameDay(parseISO(b.pickup_date), day));
                            const isSelected = selectedDate && isSameDay(day, selectedDate);

                            // Sort needed to limit display
                            const displayBookings = dayBookings.slice(0, 3);
                            const moreCount = dayBookings.length > 3 ? dayBookings.length - 3 : 0;

                            return (
                                <div
                                    key={day.toString()}
                                    onClick={() => handleDateClick(day)}
                                    style={{
                                        borderRight: (dayIdx + 1) % 7 !== 0 ? '1px solid #e5e7eb' : 'none',
                                        borderBottom: '1px solid #e5e7eb',
                                        backgroundColor: !isSameMonth(day, currentMonth) ? '#f9fafb' : isSelected ? '#eff6ff' : 'white',
                                        padding: '0.5rem',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '0.5rem'
                                    }}>
                                        <span style={{
                                            fontWeight: isToday(day) ? 'bold' : 'normal',
                                            color: !isSameMonth(day, currentMonth) ? '#9ca3af' : isToday(day) ? '#2563eb' : '#374151',
                                            backgroundColor: isToday(day) ? '#dbeafe' : 'transparent',
                                            width: '28px',
                                            height: '28px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '50%',
                                            fontSize: '0.9rem'
                                        }}>
                                            {format(day, dateFormat)}
                                        </span>
                                        {dayBookings.length > 0 && (
                                            <span style={{ fontSize: '0.7rem', color: '#6b7280', fontWeight: '600' }}>
                                                {dayBookings.length} {dayBookings.length === 1 ? 'Trip' : 'Trips'}
                                            </span>
                                        )}
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        {displayBookings.map(booking => (
                                            <div key={booking.id} style={{
                                                fontSize: '0.75rem',
                                                padding: '2px 4px',
                                                borderRadius: '4px',
                                                backgroundColor: getStatusColor(booking.status) + '20', // 20% opacity
                                                color: getStatusColor(booking.status),
                                                borderLeft: `2px solid ${getStatusColor(booking.status)}`,
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis'
                                            }}>
                                                {booking.pickup_time.slice(0, 5)} {booking.customer_name}
                                            </div>
                                        ))}
                                        {moreCount > 0 && (
                                            <div style={{ fontSize: '0.75rem', color: '#6b7280', paddingLeft: '4px' }}>
                                                +{moreCount} more
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Side Panel: Selected Day Details */}
                {isSidebarOpen && selectedDate && (
                    <div style={{
                        width: '350px',
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '-4px 0 15px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>
                                    {format(selectedDate, 'EEEE, MMM d')}
                                </h2>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                    {selectedDayBookings.length} {selectedDayBookings.length === 1 ? 'Scheduled Trip' : 'Scheduled Trips'}
                                </p>
                            </div>
                            <button onClick={() => setIsSidebarOpen(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#9ca3af' }}>
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {selectedDayBookings.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af' }}>
                                    <CalendarIcon size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                                    <p>No trips scheduled for this date.</p>
                                </div>
                            ) : (
                                selectedDayBookings.map(booking => (
                                    <Link key={booking.id} href={`/admin/dashboard/bookings/${booking.id}`} style={{
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '8px',
                                        padding: '1rem',
                                        backgroundColor: '#f9fafb',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none',
                                        display: 'block',
                                        color: 'inherit'
                                    }}
                                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                padding: '2px 8px',
                                                borderRadius: '99px',
                                                backgroundColor: getStatusColor(booking.status) + '20',
                                                color: getStatusColor(booking.status)
                                            }}>
                                                {booking.status}
                                            </span>
                                            <span style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px',
                                                fontSize: '0.85rem',
                                                fontWeight: '600',
                                                color: '#374151'
                                            }}>
                                                <Clock size={14} /> {booking.pickup_time.slice(0, 5)}
                                            </span>
                                        </div>

                                        <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem' }}>{booking.customer_name}</h3>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                                                <MapPin size={14} style={{ color: '#22c55e', marginTop: '3px', flexShrink: 0 }} />
                                                <span style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.3' }}>{booking.pickup_location}</span>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                                                <MapPin size={14} style={{ color: '#ef4444', marginTop: '3px', flexShrink: 0 }} />
                                                <span style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.3' }}>{booking.dropoff_location}</span>
                                            </div>
                                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.25rem', paddingTop: '0.5rem', borderTop: '1px solid #e5e7eb' }}>
                                                <Car size={14} style={{ color: '#6b7280' }} />
                                                <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                                    {booking.vehicle_type} • {booking.driver_id ? <span style={{ color: '#059669', fontWeight: '500' }}>Driver Assigned</span> : <span style={{ color: '#d97706', fontWeight: '500' }}>No Driver</span>}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


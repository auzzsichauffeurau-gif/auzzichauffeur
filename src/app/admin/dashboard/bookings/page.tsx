"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, Download, ChevronLeft, ChevronRight, X, Plus, Trash2, Eye } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function BookingsPage() {
    const router = useRouter();
    const [bookings, setBookings] = useState<any[]>([]);
    const [filteredBookings, setFilteredBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [creating, setCreating] = useState(false);

    // Search & Filter State
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [dateFilter, setDateFilter] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Manual Booking State
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newBooking, setNewBooking] = useState({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        pickup_date: '',
        pickup_time: '',
        pickup_location: '',
        dropoff_location: '',
        vehicle_type: 'Executive Sedans',
        amount: '',
        notes: '',
        driver_id: '',
        vehicle_id: ''
    });

    // Drivers & Vehicles State
    const [drivers, setDrivers] = useState<any[]>([]);
    const [vehicles, setVehicles] = useState<any[]>([]);

    useEffect(() => {
        fetchBookings();
        fetchDrivers();
        fetchVehicles();
    }, []);

    useEffect(() => {
        filterBookings();
    }, [bookings, searchTerm, statusFilter, dateFilter]);

    const fetchBookings = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .neq('status', 'Quote Request')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching bookings:', error);
            toast.error('Failed to load bookings');
        } else {
            setBookings(data || []);
        }
        setLoading(false);
    };

    const fetchDrivers = async () => {
        const { data } = await supabase
            .from('drivers')
            .select('id, name, status')
            .eq('status', 'Available');
        setDrivers(data || []);
    };

    const fetchVehicles = async () => {
        const { data } = await supabase
            .from('fleet_vehicles')
            .select('id, make, model, status')
            .eq('status', 'Available');
        setVehicles(data || []);
    };

    const filterBookings = () => {
        let filtered = [...bookings];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(b =>
                b.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.customer_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.customer_phone?.includes(searchTerm) ||
                b.pickup_location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                b.dropoff_location?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter && statusFilter !== 'All') {
            filtered = filtered.filter(b => b.status === statusFilter);
        }

        // Date filter
        if (dateFilter) {
            filtered = filtered.filter(b => b.pickup_date === dateFilter);
        }

        setFilteredBookings(filtered);
        setCurrentPage(1);
    };

    const handleDeleteBooking = async (bookingId: string) => {
        if (!confirm('Are you sure you want to delete this booking? This action cannot be undone.')) return;

        // Use select() to confirm deletion (RLS might silently fail otherwise)
        const { error, data } = await supabase
            .from('bookings')
            .delete()
            .eq('id', bookingId)
            .select();

        if (error) {
            toast.error('Failed to delete booking: ' + error.message);
        } else if (!data || data.length === 0) {
            // If data is empty, deletion was blocked by RLS
            toast.error('Deletion failed: Permission denied or record not found.');
            // Refresh logic to restore UI state if it was optimistic
            fetchBookings();
        } else {
            toast.success('Booking deleted successfully');
            setBookings(bookings.filter(b => b.id !== bookingId));
        }
    };

    const handleCreateBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        setCreating(true);

        // Validate amount
        const amount = parseFloat(newBooking.amount);
        if (isNaN(amount) || amount <= 0) {
            toast.error('Please enter a valid amount');
            setCreating(false);
            return;
        }

        // 1. Sync Customer to 'customers' table
        try {
            const { data: existingCustomers } = await supabase
                .from('customers')
                .select('id')
                .eq('email', newBooking.customer_email);

            if (!existingCustomers || existingCustomers.length === 0) {
                const { error: customerError } = await supabase
                    .from('customers')
                    .insert([{
                        full_name: newBooking.customer_name,
                        email: newBooking.customer_email,
                        phone: newBooking.customer_phone,
                        status: 'Active',
                        notes: 'Created via New Booking'
                    }]);

                if (customerError && customerError.code !== '42P01') {
                    console.warn('Failed to auto-create customer:', customerError);
                }
            }
        } catch (err) {
            console.warn('Customer sync skipped:', err);
        }

        // 2. Create Booking Record
        const bookingPayload: any = {
            customer_name: newBooking.customer_name,
            customer_email: newBooking.customer_email,
            customer_phone: newBooking.customer_phone,
            pickup_date: newBooking.pickup_date,
            pickup_time: newBooking.pickup_time,
            pickup_location: newBooking.pickup_location,
            dropoff_location: newBooking.dropoff_location,
            vehicle_type: newBooking.vehicle_type,
            amount: amount.toFixed(2),
            status: 'Confirmed'
        };

        // Add driver/vehicle if selected
        if (newBooking.driver_id) bookingPayload.driver_id = newBooking.driver_id;
        if (newBooking.vehicle_id) bookingPayload.vehicle_id = newBooking.vehicle_id;
        if (newBooking.notes) bookingPayload.notes = newBooking.notes;

        const { data: bookingData, error: bookingError } = await supabase
            .from('bookings')
            .insert([bookingPayload])
            .select()
            .single();

        if (bookingError) {
            toast.error('Failed to create booking: ' + bookingError.message);
            setCreating(false);
            return;
        }

        // 3. Auto-Generate Invoice & SEND NOTIFICATIONS
        if (bookingData) {
            const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;

            const { error: invoiceError } = await supabase
                .from('invoices')
                .insert([{
                    booking_id: bookingData.id,
                    invoice_number: invoiceNumber,
                    total_amount: amount.toFixed(2),
                    payment_status: 'unpaid',
                    issue_date: new Date().toISOString(),
                    due_date: newBooking.pickup_date,
                    customer_name: newBooking.customer_name,
                    customer_email: newBooking.customer_email,
                    customer_phone: newBooking.customer_phone,
                    line_items: JSON.stringify([
                        {
                            description: `Chauffeur Service - ${newBooking.vehicle_type} (${newBooking.pickup_location} to ${newBooking.dropoff_location})`,
                            amount: amount.toFixed(2),
                            quantity: 1
                        }
                    ]),
                    subtotal: amount.toFixed(2),
                    tax_rate: 10,
                    tax_amount: 0
                }]);

            if (invoiceError) {
                console.warn('Invoice auto-creation failed:', invoiceError);
                toast.warning('Booking created, but invoice generation failed.');
            } else {
                // SUCCESS: Send Notifications (A to Z)
                try {
                    // 1. Customer Email
                    await fetch('/api/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            to: newBooking.customer_email,
                            subject: `Booking Confirmation - ${invoiceNumber}`,
                            html: `
                                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
                                    <h2 style="color: #1e3a8a;">Booking Approved</h2>
                                    <p>Dear ${newBooking.customer_name},</p>
                                    <p>Thank you for choosing Auzzie Chauffeur. Your booking has been successfully created and confirmed.</p>
                                    
                                    <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                                        <p><strong>Pickup:</strong> ${newBooking.pickup_date} at ${newBooking.pickup_time}</p>
                                        <p><strong>From:</strong> ${newBooking.pickup_location}</p>
                                        <p><strong>To:</strong> ${newBooking.dropoff_location}</p>
                                        <p><strong>Vehicle:</strong> ${newBooking.vehicle_type}</p>
                                        <p><strong>Total Amount:</strong> $${amount.toFixed(2)}</p>
                                    </div>

                                    <p>Your invoice ${invoiceNumber} has been generated.</p>
                                    <p>We will assign a driver shortly and you will receive another update with their details.</p>
                                    
                                    <p>Best regards,<br>Auzzie Chauffeur Team</p>
                                </div>
                            `
                        })
                    });

                    // 2. Admin Alert
                    await fetch('/api/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            from: 'Auzzie Chauffeur Bookings <booking@auzziechauffeur.com.au>',
                            replyTo: 'info@auzziechauffeur.com.au',
                            to: 'info@auzziechauffeur.com.au', // Fallback
                            subject: `New Admin Booking: ${newBooking.customer_name}`,
                            text: `New booking created manually in admin dashboard.\n\nCustomer: ${newBooking.customer_name}\nPhone: ${newBooking.customer_phone}\nDate: ${newBooking.pickup_date} ${newBooking.pickup_time}\nRoute: ${newBooking.pickup_location} -> ${newBooking.dropoff_location}\nAmount: $${amount.toFixed(2)}`
                        })
                    });

                    toast.success('Booking & Invoice Created! Emails Sent.');
                } catch (notifyError) {
                    console.error('Notification failed:', notifyError);
                    toast.warning('Booking created, invoice generated, but email notifications failed.');
                }
            }
        } else {
            toast.success('Booking Created Successfully!');
        }

        // 4. Reset & Refresh
        setCreating(false);
        setShowCreateModal(false);
        setNewBooking({
            customer_name: '',
            customer_email: '',
            customer_phone: '',
            pickup_date: '',
            pickup_time: '',
            pickup_location: '',
            dropoff_location: '',
            vehicle_type: 'Executive Sedans',
            amount: '',
            notes: '',
            driver_id: '',
            vehicle_id: ''
        });
        fetchBookings();
    };

    const exportToCSV = () => {
        const headers = ['Customer Name', 'Email', 'Phone', 'Pickup Date', 'Pickup Time', 'Pickup Location', 'Dropoff Location', 'Vehicle Type', 'Status', 'Amount'];
        const csvData = filteredBookings.map(b => [
            b.customer_name,
            b.customer_email,
            b.customer_phone,
            b.pickup_date,
            b.pickup_time,
            b.pickup_location,
            b.dropoff_location,
            b.vehicle_type,
            b.status,
            b.amount
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('Bookings exported successfully!');
    };

    // Pagination
    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
    const paginatedBookings = filteredBookings.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Bookings Management</h1>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                        {filteredBookings.length} booking{filteredBookings.length !== 1 ? 's' : ''} found
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setShowCreateModal(true)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500', boxShadow: '0 2px 4px rgba(30,58,138,0.2)' }}
                    >
                        <Plus size={16} /> New Booking
                    </button>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: showFilters ? '#f3f4f6' : 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer' }}
                    >
                        <Filter size={16} /> Filter
                    </button>
                    <button
                        onClick={exportToCSV}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #bfa15f', borderRadius: '6px', backgroundColor: '#bfa15f', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                    >
                        <Download size={16} /> Export
                    </button>
                </div>
            </div>

            {/* Search & Filters */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Search Bar */}
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by customer name, email, phone, or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '0.7rem 0.7rem 0.7rem 2.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                </div>

                {/* Filter Panel */}
                {showFilters && (
                    <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Status</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="All">All Statuses</option>
                                <option value="Pending">Pending</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Pickup Date</label>
                            <input
                                type="date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setStatusFilter('All');
                                    setDateFilter('');
                                }}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', textAlign: 'left', color: '#4b5563' }}>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Customer</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Vehicle</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Date & Time</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Route</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Status</th>
                                <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Amount</th>
                                <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'center' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading bookings...</td>
                                </tr>
                            ) : paginatedBookings.length === 0 ? (
                                <tr>
                                    <td colSpan={7} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                        {searchTerm || statusFilter !== 'All' || dateFilter ? 'No bookings match your filters.' : 'No bookings found.'}
                                    </td>
                                </tr>
                            ) : (
                                paginatedBookings.map((booking) => (
                                    <tr key={booking.id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
                                            {booking.customer_name}
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '400' }}>{booking.customer_phone}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>{booking.vehicle_type || 'Ex. Sedan'}</td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div>{booking.pickup_date}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{booking.pickup_time}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ fontWeight: '500', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={booking.pickup_location}>{booking.pickup_location}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={booking.dropoff_location}>to {booking.dropoff_location}</div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                backgroundColor:
                                                    booking.status === 'Completed' ? '#d1fae5' :
                                                        booking.status === 'In Progress' ? '#dbeafe' :
                                                            booking.status === 'Confirmed' ? '#e0e7ff' :
                                                                booking.status === 'Pending' ? '#ffedd5' : '#fee2e2',
                                                color:
                                                    booking.status === 'Completed' ? '#065f46' :
                                                        booking.status === 'In Progress' ? '#1e40af' :
                                                            booking.status === 'Confirmed' ? '#3730a3' :
                                                                booking.status === 'Pending' ? '#9a3412' : '#991b1b',
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#1f2937' }}>${booking.amount}</td>
                                        <td style={{ padding: '1rem', color: '#9ca3af', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                                <button
                                                    onClick={() => router.push(`/admin/dashboard/bookings/${booking.id}`)}
                                                    style={{ background: 'none', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px', fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}
                                                    title="View Details"
                                                >
                                                    <Eye size={14} /> View
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteBooking(booking.id)}
                                                    style={{ background: 'none', border: '1px solid #fee2e2', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px', color: '#dc2626' }}
                                                    title="Delete Booking"
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredBookings.length)} of {filteredBookings.length} bookings
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                style={{ padding: '0.5rem 0.75rem', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', opacity: currentPage === 1 ? 0.5 : 1 }}
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <span style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', fontWeight: '600', color: '#374151' }}>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages}
                                style={{ padding: '0.5rem 0.75rem', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', opacity: currentPage === totalPages ? 0.5 : 1 }}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Create Booking Modal */}
            {showCreateModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '700px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Create New Booking</h2>
                            <button onClick={() => setShowCreateModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>
                        <form onSubmit={handleCreateBooking} style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Customer Info */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Customer Information</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Customer Name *</label>
                                        <input required type="text" value={newBooking.customer_name} onChange={e => setNewBooking({ ...newBooking, customer_name: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Phone Number *</label>
                                        <input required type="tel" value={newBooking.customer_phone} onChange={e => setNewBooking({ ...newBooking, customer_phone: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Email Address *</label>
                                        <input required type="email" value={newBooking.customer_email} onChange={e => setNewBooking({ ...newBooking, customer_email: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Trip Info */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Trip Details</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Pickup Date *</label>
                                        <input required type="date" value={newBooking.pickup_date} onChange={e => setNewBooking({ ...newBooking, pickup_date: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Pickup Time *</label>
                                        <input required type="time" value={newBooking.pickup_time} onChange={e => setNewBooking({ ...newBooking, pickup_time: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Pickup Location *</label>
                                        <input required type="text" value={newBooking.pickup_location} onChange={e => setNewBooking({ ...newBooking, pickup_location: e.target.value })} placeholder="e.g. Sydney Airport" style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Dropoff Location *</label>
                                        <input required type="text" value={newBooking.dropoff_location} onChange={e => setNewBooking({ ...newBooking, dropoff_location: e.target.value })} placeholder="e.g. Hilton Hotel" style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle & Assignment */}
                            <div>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid #e5e7eb' }}>Vehicle & Assignment</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Vehicle Type *</label>
                                        <select value={newBooking.vehicle_type} onChange={e => setNewBooking({ ...newBooking, vehicle_type: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                                            <option value="Executive Sedans">Executive Sedans (1-3 pax)</option>
                                            <option value="Premium Sedans">Premium Sedans (1-3 pax)</option>
                                            <option value="Premium SUVs">Premium SUVs (1-3 pax)</option>
                                            <option value="People Movers">People Movers (1-6 pax)</option>
                                            <option value="Minibuses & Coaches">Minibuses & Coaches (1-14 pax)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Total Price ($) *</label>
                                        <input required type="number" step="0.01" min="0" value={newBooking.amount} onChange={e => setNewBooking({ ...newBooking, amount: e.target.value })} placeholder="150.00" style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Assign Driver (Optional)</label>
                                        <select value={newBooking.driver_id} onChange={e => setNewBooking({ ...newBooking, driver_id: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                                            <option value="">Select Driver</option>
                                            {drivers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Assign Vehicle (Optional)</label>
                                        <select value={newBooking.vehicle_id} onChange={e => setNewBooking({ ...newBooking, vehicle_id: e.target.value })} style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
                                            <option value="">Select Vehicle</option>
                                            {vehicles.map(v => <option key={v.id} value={v.id}>{v.make} {v.model}</option>)}
                                        </select>
                                    </div>
                                    <div style={{ gridColumn: 'span 2' }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Notes (Optional)</label>
                                        <textarea value={newBooking.notes} onChange={e => setNewBooking({ ...newBooking, notes: e.target.value })} rows={2} placeholder="Special requests or additional information..." style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', resize: 'vertical' }} />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" disabled={creating} style={{ marginTop: '0.5rem', width: '100%', padding: '0.8rem', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', opacity: creating ? 0.7 : 1 }}>
                                {creating ? 'Creating...' : 'Create Booking & Invoice'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

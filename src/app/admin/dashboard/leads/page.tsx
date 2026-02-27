"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Download, MoreHorizontal, X, Mail, Phone, MapPin, Calendar, Clock, DollarSign, User, MessageSquare, CheckCircle, Trash2, Eye, ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function LeadsPage() {
    const [leads, setLeads] = useState<any[]>([]);
    const [filteredLeads, setFilteredLeads] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLead, setSelectedLead] = useState<any>(null);
    const [isUpdating, setIsUpdating] = useState(false);

    // Search & Filter State
    const [searchTerm, setSearchTerm] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [vehicleFilter, setVehicleFilter] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Stats State
    const [stats, setStats] = useState({
        total: 0,
        today: 0,
        thisWeek: 0,
        avgAmount: 0
    });

    useEffect(() => {
        fetchLeads();
    }, []);

    useEffect(() => {
        filterLeads();
        calculateStats();
    }, [leads, searchTerm, dateFilter, vehicleFilter, sortBy]);

    const fetchLeads = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .eq('status', 'Quote Request')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching leads:', error);
            toast.error('Failed to load leads');
        } else {
            setLeads(data || []);
        }
        setLoading(false);
    };

    const filterLeads = () => {
        let filtered = [...leads];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(l =>
                l.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                l.customer_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                l.customer_phone?.includes(searchTerm) ||
                l.pickup_location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                l.dropoff_location?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Vehicle filter
        if (vehicleFilter && vehicleFilter !== 'All') {
            filtered = filtered.filter(l => l.vehicle_type === vehicleFilter);
        }

        // Date filter
        if (dateFilter) {
            filtered = filtered.filter(l => l.pickup_date === dateFilter);
        }

        // Sort
        if (sortBy === 'amount') {
            filtered.sort((a, b) => parseFloat(b.amount || '0') - parseFloat(a.amount || '0'));
        } else {
            filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        }

        setFilteredLeads(filtered);
        setCurrentPage(1);
    };

    const calculateStats = () => {
        const now = new Date();
        const today = now.toISOString().split('T')[0];
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const todayLeads = leads.filter(l => l.created_at?.startsWith(today));
        const weekLeads = leads.filter(l => new Date(l.created_at) >= weekAgo);
        const totalAmount = leads.reduce((sum, l) => sum + parseFloat(l.amount || '0'), 0);

        setStats({
            total: leads.length,
            today: todayLeads.length,
            thisWeek: weekLeads.length,
            avgAmount: leads.length > 0 ? totalAmount / leads.length : 0
        });
    };

    const handleConvertToBooking = async () => {
        if (!selectedLead) return;
        setIsUpdating(true);

        const { error, data } = await supabase
            .from('bookings')
            .update({ status: 'Pending' })
            .eq('id', selectedLead.id)
            .select();

        if (error) {
            toast.error('Error converting lead: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Error converting lead: Permission denied or record missing');
        } else {
            toast.success('Lead converted to booking successfully!');
            setLeads(leads.filter(l => l.id !== selectedLead.id));
            setSelectedLead(null);
        }
        setIsUpdating(false);
    };

    const handleDelete = async (leadId?: string) => {
        const idToDelete = leadId || selectedLead?.id;
        if (!idToDelete || !confirm('Are you sure you want to delete this lead?')) return;

        setIsUpdating(true);

        const { error, data } = await supabase
            .from('bookings')
            .delete()
            .eq('id', idToDelete)
            .select();

        if (error) {
            toast.error('Error deleting lead: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Error deleting lead: Permission denied or record in use');
        } else {
            toast.success('Lead deleted successfully');
            setLeads(leads.filter(l => l.id !== idToDelete));
            if (selectedLead?.id === idToDelete) {
                setSelectedLead(null);
            }
        }
        setIsUpdating(false);
    };

    const handleSendQuote = async () => {
        if (!selectedLead) return;

        // Mock email sending
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1500)),
            {
                loading: `Sending quote to ${selectedLead.customer_email}...`,
                success: 'Quote sent successfully!',
                error: 'Failed to send quote'
            }
        );
    };

    const exportToCSV = () => {
        const headers = ['Customer Name', 'Email', 'Phone', 'Pickup Date', 'Pickup Time', 'Pickup Location', 'Dropoff Location', 'Vehicle Type', 'Est. Price', 'Created At'];
        const csvData = filteredLeads.map(l => [
            l.customer_name,
            l.customer_email,
            l.customer_phone,
            l.pickup_date,
            l.pickup_time,
            l.pickup_location,
            l.dropoff_location,
            l.vehicle_type,
            l.amount,
            new Date(l.created_at).toLocaleString()
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('Leads exported successfully!');
    };

    // Pagination
    const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
    const paginatedLeads = filteredLeads.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Quote Requests (Leads)</h1>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                        {filteredLeads.length} lead{filteredLeads.length !== 1 ? 's' : ''} found
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
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

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Star size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Leads</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <TrendingUp size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Today</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>{stats.today}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Calendar size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>This Week</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#3b82f6' }}>{stats.thisWeek}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <DollarSign size={20} color="#8b5cf6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Avg. Quote</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5cf6' }}>${stats.avgAmount.toFixed(0)}</div>
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
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Vehicle Type</label>
                            <select
                                value={vehicleFilter}
                                onChange={(e) => setVehicleFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="All">All Vehicles</option>
                                <option value="Executive Sedans">Executive Sedans</option>
                                <option value="Premium Sedans">Premium Sedans</option>
                                <option value="Premium SUVs">Premium SUVs</option>
                                <option value="People Movers">People Movers</option>
                                <option value="Minibuses & Coaches">Minibuses & Coaches</option>
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
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'date' | 'amount')}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="date">Date (Newest First)</option>
                                <option value="amount">Amount (Highest First)</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setVehicleFilter('All');
                                    setDateFilter('');
                                    setSortBy('date');
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
                                <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Est. Price</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading leads...</td>
                                </tr>
                            ) : paginatedLeads.length === 0 ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                        {searchTerm || vehicleFilter !== 'All' || dateFilter ? 'No leads match your filters.' : 'No quote requests found.'}
                                    </td>
                                </tr>
                            ) : (
                                paginatedLeads.map((lead) => (
                                    <tr key={lead.id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#1f2937' }}>
                                            {lead.customer_name}
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: '400' }}>{lead.customer_phone}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>{lead.vehicle_type || 'Ex. Sedan'}</td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div>{lead.pickup_date}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{lead.pickup_time}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ fontWeight: '500', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={lead.pickup_location}>{lead.pickup_location}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af', maxWidth: '150px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={lead.dropoff_location}>to {lead.dropoff_location}</div>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#1f2937' }}>${lead.amount}</td>
                                        <td style={{ padding: '1rem', color: '#9ca3af', textAlign: 'center' }}>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button
                                                    onClick={() => setSelectedLead(lead)}
                                                    style={{ background: 'none', border: '1px solid #e5e7eb', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px', fontSize: '0.8rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}
                                                    title="View Details"
                                                >
                                                    <Eye size={14} /> View
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(lead.id)}
                                                    style={{ background: 'none', border: '1px solid #fee2e2', borderRadius: '4px', cursor: 'pointer', padding: '4px 8px', color: '#dc2626' }}
                                                    title="Delete Lead"
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
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredLeads.length)} of {filteredLeads.length} leads
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

            {/* Lead Details Modal */}
            {selectedLead && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '550px', maxWidth: '95%', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
                        {/* Header */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Quote Request Details</h2>
                            <button onClick={() => setSelectedLead(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Customer Details</label>
                                <div style={{ marginTop: '0.5rem', display: 'grid', gap: '0.8rem' }}>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af' }}>Name</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedLead.customer_name}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Mail size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedLead.customer_email}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Phone size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedLead.customer_phone}</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Trip Details</label>
                                <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={16} color="#4b5563" />
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedLead.pickup_date} at {selectedLead.pickup_time}</span>
                                    </div>
                                    <div style={{ paddingLeft: '1rem', borderLeft: '2px solid #e5e7eb', marginLeft: '7px' }}>
                                        <div style={{ marginBottom: '0.5rem' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>From</span>
                                            <span style={{ fontWeight: '500', color: '#374151' }}>{selectedLead.pickup_location}</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>To</span>
                                            <span style={{ fontWeight: '500', color: '#374151' }}>{selectedLead.dropoff_location}</span>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block' }}>Vehicle</span>
                                        <span style={{ fontWeight: '500', color: '#374151' }}>{selectedLead.vehicle_type}</span>
                                    </div>
                                    <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '6px', marginTop: '0.5rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: '#92400e', display: 'block' }}>Estimated Price</span>
                                        <span style={{ fontWeight: '700', color: '#78350f', fontSize: '1.5rem' }}>${selectedLead.amount}</span>
                                    </div>
                                    {selectedLead.notes && (
                                        <div style={{ marginTop: '0.5rem', backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '6px' }}>
                                            <span style={{ fontSize: '0.8rem', color: '#9ca3af', display: 'block', marginBottom: '0.25rem' }}>Notes</span>
                                            <span style={{ color: '#374151' }}>{selectedLead.notes}</span>
                                        </div>
                                    )}
                                    {selectedLead.created_at && (
                                        <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#9ca3af' }}>
                                            Received: {new Date(selectedLead.created_at).toLocaleString()}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <button
                                        disabled={isUpdating}
                                        onClick={handleSendQuote}
                                        style={{ width: '100%', padding: '0.8rem', border: '1px solid #3b82f6', background: '#3b82f6', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    >
                                        <Mail size={16} /> Send Quote via Email
                                    </button>
                                    <button
                                        disabled={isUpdating}
                                        onClick={handleConvertToBooking}
                                        style={{ width: '100%', padding: '0.8rem', border: '1px solid #10b981', background: '#10b981', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    >
                                        <CheckCircle size={16} /> Convert to Booking
                                    </button>
                                    <button
                                        disabled={isUpdating}
                                        onClick={() => handleDelete()}
                                        style={{ width: '100%', padding: '0.8rem', border: '1px solid #fee2e2', background: 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    >
                                        <Trash2 size={16} /> Delete Lead
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

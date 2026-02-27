"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import {
    Phone,
    Mail,
    MessageSquare,
    Calendar,
    Clock,
    CheckCircle,
    XCircle,
    AlertCircle,
    User,
    Search,
    Filter,
    Plus,
    Edit,
    Trash2,
    ChevronLeft,
    ChevronRight,
    FileText,
    TrendingUp
} from 'lucide-react';
import { toast } from 'sonner';

interface FollowUp {
    id: string;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    type: 'quote' | 'booking' | 'feedback' | 'general';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    status: 'pending' | 'completed' | 'cancelled';
    due_date: string;
    notes: string;
    booking_id?: string;
    created_at: string;
    completed_at?: string;
}

export default function FollowUpsPage() {
    const [followUps, setFollowUps] = useState<FollowUp[]>([]);
    const [filteredFollowUps, setFilteredFollowUps] = useState<FollowUp[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingFollowUp, setEditingFollowUp] = useState<FollowUp | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Form data
    const [formData, setFormData] = useState({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        type: 'quote' as 'quote' | 'booking' | 'feedback' | 'general',
        priority: 'medium' as 'low' | 'medium' | 'high' | 'urgent',
        status: 'pending' as 'pending' | 'completed' | 'cancelled',
        due_date: '',
        notes: ''
    });

    useEffect(() => {
        fetchFollowUps();
    }, []);

    useEffect(() => {
        filterFollowUps();
    }, [followUps, searchTerm, statusFilter, priorityFilter, typeFilter]);

    const fetchFollowUps = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('followups')
            .select('*')
            .order('due_date', { ascending: true });

        if (error) {
            console.error('Error fetching follow-ups:', error);
            if (error.code === '42P01') {
                toast.error("Table 'followups' missing. Creating sample data...");
                // You can create the table here or show instructions
            } else {
                toast.error('Failed to load follow-ups');
            }
        } else {
            setFollowUps(data || []);
        }
        setLoading(false);
    };

    const filterFollowUps = () => {
        let filtered = [...followUps];

        // Search
        if (searchTerm) {
            filtered = filtered.filter(f =>
                f.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                f.customer_email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                f.notes?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(f => f.status === statusFilter);
        }

        // Priority filter
        if (priorityFilter !== 'all') {
            filtered = filtered.filter(f => f.priority === priorityFilter);
        }

        // Type filter
        if (typeFilter !== 'all') {
            filtered = filtered.filter(f => f.type === typeFilter);
        }

        setFilteredFollowUps(filtered);
        setCurrentPage(1);
    };

    const openModal = (followUp?: FollowUp) => {
        if (followUp) {
            setEditingFollowUp(followUp);
            setFormData({
                customer_name: followUp.customer_name,
                customer_email: followUp.customer_email,
                customer_phone: followUp.customer_phone,
                type: followUp.type,
                priority: followUp.priority,
                status: followUp.status,
                due_date: followUp.due_date,
                notes: followUp.notes
            });
        } else {
            setEditingFollowUp(null);
            setFormData({
                customer_name: '',
                customer_email: '',
                customer_phone: '',
                type: 'quote',
                priority: 'medium',
                status: 'pending',
                due_date: '',
                notes: ''
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingFollowUp(null);
    };

    const handleSave = async () => {
        if (!formData.customer_name || !formData.due_date) {
            toast.error('Please fill in customer name and due date');
            return;
        }

        if (editingFollowUp) {
            // Update
            const { error, data } = await supabase
                .from('followups')
                .update({
                    ...formData,
                    completed_at: formData.status === 'completed' ? new Date().toISOString() : null
                })
                .eq('id', editingFollowUp.id)
                .select();

            if (error) {
                toast.error('Failed to update follow-up: ' + error.message);
            } else if (!data || data.length === 0) {
                toast.error('Failed to update follow-up: Permission denied or record missing');
            } else {
                toast.success('Follow-up updated successfully');
                closeModal();
                fetchFollowUps();
            }
        } else {
            // Create
            const { error } = await supabase
                .from('followups')
                .insert([formData]);

            if (error) {
                toast.error('Failed to create follow-up');
            } else {
                toast.success('Follow-up created successfully');
                closeModal();
                fetchFollowUps();
            }
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this follow-up?')) return;

        const { error, data } = await supabase
            .from('followups')
            .delete()
            .eq('id', id)
            .select();

        if (error) {
            toast.error('Failed to delete follow-up: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Failed to delete follow-up: Permission denied or record missing');
        } else {
            toast.success('Follow-up deleted successfully');
            fetchFollowUps();
        }
    };

    const markAsCompleted = async (followUp: FollowUp) => {
        const { error, data } = await supabase
            .from('followups')
            .update({
                status: 'completed',
                completed_at: new Date().toISOString()
            })
            .eq('id', followUp.id)
            .select();

        if (error) {
            toast.error('Failed to update status: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Failed to update status: Permission denied or record missing');
        } else {
            toast.success('Follow-up marked as completed');
            fetchFollowUps();
        }
    };

    // Pagination
    const totalPages = Math.ceil(filteredFollowUps.length / itemsPerPage);
    const paginatedFollowUps = filteredFollowUps.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Stats
    const stats = {
        total: followUps.length,
        pending: followUps.filter(f => f.status === 'pending').length,
        overdue: followUps.filter(f => f.status === 'pending' && new Date(f.due_date) < new Date()).length,
        completed: followUps.filter(f => f.status === 'completed').length
    };

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'urgent': return { bg: '#fef2f2', color: '#dc2626', border: '#fecaca' };
            case 'high': return { bg: '#fff7ed', color: '#ea580c', border: '#fed7aa' };
            case 'medium': return { bg: '#fef3c7', color: '#d97706', border: '#fde68a' };
            case 'low': return { bg: '#f0fdf4', color: '#16a34a', border: '#bbf7d0' };
            default: return { bg: '#f3f4f6', color: '#6b7280', border: '#e5e7eb' };
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'quote': return FileText;
            case 'booking': return Calendar;
            case 'feedback': return MessageSquare;
            default: return User;
        }
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Follow-up System</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        Track and manage customer follow-ups
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            backgroundColor: showFilters ? '#f3f4f6' : 'white',
                            color: '#374151',
                            fontSize: '0.9rem',
                            cursor: 'pointer'
                        }}
                    >
                        <Filter size={16} /> Filter
                    </button>
                    <button
                        onClick={() => openModal()}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1.2rem',
                            border: 'none',
                            borderRadius: '6px',
                            backgroundColor: '#1e3a8a',
                            color: 'white',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        <Plus size={18} /> New Follow-up
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FileText size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Follow-ups</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Clock size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Pending</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#f59e0b' }}>{stats.pending}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <AlertCircle size={20} color="#ef4444" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Overdue</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ef4444' }}>{stats.overdue}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <CheckCircle size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Completed</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>{stats.completed}</div>
                </div>
            </div>

            {/* Search */}
            <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by customer name, email, or notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '0.7rem 0.7rem 0.7rem 2.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                </div>
            </div>

            {/* Filters */}
            {showFilters && (
                <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Status</label>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Priority</label>
                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                        >
                            <option value="all">All Priorities</option>
                            <option value="urgent">Urgent</option>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Type</label>
                        <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                        >
                            <option value="all">All Types</option>
                            <option value="quote">Quote</option>
                            <option value="booking">Booking</option>
                            <option value="feedback">Feedback</option>
                            <option value="general">General</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setStatusFilter('all');
                                setPriorityFilter('all');
                                setTypeFilter('all');
                            }}
                            style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>
            )}

            {/* Follow-ups List */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    Loading follow-ups...
                </div>
            ) : paginatedFollowUps.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <AlertCircle size={48} color="#d1d5db" style={{ margin: '0 auto 1rem' }} />
                    <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        {searchTerm || statusFilter !== 'all' ? 'No follow-ups match your filters.' : 'No follow-ups found.'}
                    </p>
                    {!searchTerm && statusFilter === 'all' && (
                        <button
                            onClick={() => openModal()}
                            style={{ color: '#1e3a8a', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
                        >
                            Create your first follow-up
                        </button>
                    )}
                </div>
            ) : (
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    {paginatedFollowUps.map((followUp, index) => {
                        const TypeIcon = getTypeIcon(followUp.type);
                        const priorityColors = getPriorityColor(followUp.priority);
                        const isOverdue = followUp.status === 'pending' && new Date(followUp.due_date) < new Date();

                        return (
                            <div
                                key={followUp.id}
                                style={{
                                    padding: '1.5rem',
                                    borderBottom: index < paginatedFollowUps.length - 1 ? '1px solid #f3f4f6' : 'none',
                                    transition: 'background-color 0.2s',
                                    borderLeft: isOverdue ? '4px solid #ef4444' : 'none'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                            <div style={{ padding: '0.5rem', backgroundColor: '#f3f4f6', borderRadius: '6px' }}>
                                                <TypeIcon size={18} color="#6b7280" />
                                            </div>
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1f2937' }}>{followUp.customer_name}</h3>
                                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                                    {followUp.customer_email && (
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                            <Mail size={14} /> {followUp.customer_email}
                                                        </span>
                                                    )}
                                                    {followUp.customer_phone && (
                                                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                            <Phone size={14} /> {followUp.customer_phone}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {followUp.notes && (
                                            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                                                {followUp.notes}
                                            </p>
                                        )}

                                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: isOverdue ? '#ef4444' : '#6b7280' }}>
                                                <Calendar size={14} /> Due: {new Date(followUp.due_date).toLocaleDateString()}
                                                {isOverdue && <span style={{ fontWeight: '600', color: '#ef4444' }}>(Overdue)</span>}
                                            </span>
                                            <span style={{
                                                padding: '2px 8px',
                                                borderRadius: '99px',
                                                backgroundColor: priorityColors.bg,
                                                color: priorityColors.color,
                                                border: `1px solid ${priorityColors.border}`,
                                                fontWeight: '600',
                                                textTransform: 'capitalize'
                                            }}>
                                                {followUp.priority}
                                            </span>
                                            <span style={{
                                                padding: '2px 8px',
                                                borderRadius: '99px',
                                                backgroundColor: followUp.status === 'completed' ? '#d1fae5' : followUp.status === 'cancelled' ? '#fee2e2' : '#fef3c7',
                                                color: followUp.status === 'completed' ? '#065f46' : followUp.status === 'cancelled' ? '#991b1b' : '#92400e',
                                                fontWeight: '600',
                                                textTransform: 'capitalize'
                                            }}>
                                                {followUp.status}
                                            </span>
                                            <span style={{
                                                padding: '2px 8px',
                                                borderRadius: '99px',
                                                backgroundColor: '#f3f4f6',
                                                color: '#6b7280',
                                                fontWeight: '500',
                                                textTransform: 'capitalize'
                                            }}>
                                                {followUp.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                                        {followUp.status === 'pending' && (
                                            <button
                                                onClick={() => markAsCompleted(followUp)}
                                                style={{
                                                    padding: '0.5rem 0.75rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid #10b981',
                                                    backgroundColor: '#d1fae5',
                                                    color: '#065f46',
                                                    cursor: 'pointer',
                                                    fontSize: '0.8rem',
                                                    fontWeight: '600',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '4px'
                                                }}
                                            >
                                                <CheckCircle size={14} /> Complete
                                            </button>
                                        )}
                                        <button
                                            onClick={() => openModal(followUp)}
                                            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #e5e7eb', color: '#4b5563', backgroundColor: 'white', cursor: 'pointer', display: 'flex' }}
                                            title="Edit"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(followUp.id)}
                                            style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #fee2e2', color: '#ef4444', backgroundColor: '#fef2f2', cursor: 'pointer', display: 'flex' }}
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredFollowUps.length)} of {filteredFollowUps.length}
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
            )}

            {/* Modal */}
            {showModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', maxWidth: '600px', width: '100%', maxHeight: '90vh', overflow: 'auto' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                {editingFollowUp ? 'Edit Follow-up' : 'New Follow-up'}
                            </h2>
                        </div>

                        <div style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Customer Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.customer_name}
                                        onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.customer_email}
                                        onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.customer_phone}
                                        onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Due Date *
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.due_date}
                                        onChange={(e) => setFormData({ ...formData, due_date: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Type
                                    </label>
                                    <select
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option value="quote">Quote</option>
                                        <option value="booking">Booking</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="general">General</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Priority
                                    </label>
                                    <select
                                        value={formData.priority}
                                        onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                        Status
                                    </label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
                                    Notes
                                </label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows={4}
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem', resize: 'vertical' }}
                                    placeholder="Add any additional notes or context..."
                                />
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button
                                onClick={closeModal}
                                style={{ padding: '0.6rem 1.2rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                style={{ padding: '0.6rem 1.2rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', cursor: 'pointer', fontWeight: '600' }}
                            >
                                {editingFollowUp ? 'Update' : 'Create'} Follow-up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

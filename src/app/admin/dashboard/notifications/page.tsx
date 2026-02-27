"use client";

import { useState, useEffect } from 'react';
import {
    Bell,
    BellOff,
    Check,
    CheckCircle,
    Trash2,
    Filter,
    Search,
    Calendar,
    Car,
    FileText,
    MessageSquare,
    AlertCircle,
    Info,
    ChevronLeft,
    ChevronRight,
    X,
    Settings
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

type NotificationType = 'booking' | 'quote' | 'message' | 'system' | 'payment' | 'alert';

interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    message: string;
    is_read: boolean;
    created_at: string;
    related_id?: string;
    priority?: 'low' | 'medium' | 'high';
}

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState<string>('All');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [showFilters, setShowFilters] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState<Notification | null>(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    // Settings
    const [showSettings, setShowSettings] = useState(false);
    const [notificationSettings, setNotificationSettings] = useState({
        emailNotifications: true,
        pushNotifications: true,
        bookingAlerts: true,
        quoteAlerts: true,
        messageAlerts: true,
        systemAlerts: true
    });

    useEffect(() => {
        fetchNotifications();
    }, []);

    useEffect(() => {
        filterNotifications();
    }, [notifications, searchTerm, typeFilter, statusFilter]);

    const fetchNotifications = async () => {
        setLoading(true);

        try {
            const { data, error } = await supabase
                .from('notifications')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching notifications:', error);
                toast.error('Failed to load notifications');
            } else {
                setNotifications(data || []);
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
            toast.error('Failed to load notifications');
        }

        setLoading(false);
    };

    const filterNotifications = () => {
        let filtered = [...notifications];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(n =>
                n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                n.message.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Type filter
        if (typeFilter && typeFilter !== 'All') {
            filtered = filtered.filter(n => n.type === typeFilter);
        }

        // Status filter
        if (statusFilter === 'Unread') {
            filtered = filtered.filter(n => !n.is_read);
        } else if (statusFilter === 'Read') {
            filtered = filtered.filter(n => n.is_read);
        }

        setFilteredNotifications(filtered);
        setCurrentPage(1);
    };

    const markAsRead = async (id: string) => {
        const { error, data } = await supabase
            .from('notifications')
            .update({ is_read: true, read_at: new Date().toISOString() })
            .eq('id', id)
            .select();

        if (error || !data || data.length === 0) {
            toast.error('Failed to mark as read');
        } else {
            setNotifications(notifications.map(n =>
                n.id === id ? { ...n, is_read: true } : n
            ));
            toast.success('Marked as read');
        }
    };

    const markAllAsRead = async () => {
        const unreadIds = notifications.filter(n => !n.is_read).map(n => n.id);

        if (unreadIds.length === 0) {
            toast.info('No unread notifications');
            return;
        }

        const { error, data } = await supabase
            .from('notifications')
            .update({ is_read: true, read_at: new Date().toISOString() })
            .in('id', unreadIds)
            .select();

        if (error || !data || data.length === 0) {
            toast.error('Failed to mark all as read');
        } else {
            setNotifications(notifications.map(n => ({ ...n, is_read: true })));
            toast.success('All notifications marked as read');
        }
    };

    const deleteNotification = async (id: string) => {
        const { error, data } = await supabase
            .from('notifications')
            .delete()
            .eq('id', id)
            .select();

        if (error || !data || data.length === 0) {
            toast.error('Failed to delete notification');
        } else {
            setNotifications(notifications.filter(n => n.id !== id));
            toast.success('Notification deleted');
            if (selectedNotification?.id === id) {
                setSelectedNotification(null);
            }
        }
    };

    const deleteAllRead = async () => {
        if (!confirm('Delete all read notifications?')) return;

        const readIds = notifications.filter(n => n.is_read).map(n => n.id);

        if (readIds.length === 0) {
            toast.info('No read notifications to delete');
            return;
        }

        const { error, data } = await supabase
            .from('notifications')
            .delete()
            .in('id', readIds)
            .select();

        if (error || !data || data.length === 0) {
            toast.error('Failed to delete read notifications');
        } else {
            setNotifications(notifications.filter(n => !n.is_read));
            toast.success('Read notifications deleted');
        }
    };

    const getTypeIcon = (type: NotificationType) => {
        switch (type) {
            case 'booking': return <Car size={20} />;
            case 'quote': return <FileText size={20} />;
            case 'message': return <MessageSquare size={20} />;
            case 'payment': return <FileText size={20} />;
            case 'alert': return <AlertCircle size={20} />;
            case 'system': return <Info size={20} />;
            default: return <Bell size={20} />;
        }
    };

    const getTypeColor = (type: NotificationType) => {
        switch (type) {
            case 'booking': return '#3b82f6';
            case 'quote': return '#f59e0b';
            case 'message': return '#8b5cf6';
            case 'payment': return '#10b981';
            case 'alert': return '#ef4444';
            case 'system': return '#6b7280';
            default: return '#6b7280';
        }
    };

    const getPriorityColor = (priority?: string) => {
        switch (priority) {
            case 'high': return '#ef4444';
            case 'medium': return '#f59e0b';
            case 'low': return '#6b7280';
            default: return '#6b7280';
        }
    };

    // Pagination
    const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
    const paginatedNotifications = filteredNotifications.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Stats
    const stats = {
        total: notifications.length,
        unread: notifications.filter(n => !n.is_read).length,
        today: notifications.filter(n => {
            const today = new Date().toISOString().split('T')[0];
            return n.created_at.startsWith(today);
        }).length,
        high: notifications.filter(n => n.priority === 'high').length
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Notifications</h1>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                        {filteredNotifications.length} notification{filteredNotifications.length !== 1 ? 's' : ''} found
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
                        onClick={markAllAsRead}
                        disabled={stats.unread === 0}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: stats.unread === 0 ? 'not-allowed' : 'pointer', opacity: stats.unread === 0 ? 0.5 : 1 }}
                    >
                        <CheckCircle size={16} /> Mark All Read
                    </button>
                    <button
                        onClick={() => setShowSettings(true)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #1e3a8a', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                    >
                        <Settings size={16} /> Settings
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Bell size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <BellOff size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Unread</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#f59e0b' }}>{stats.unread}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Calendar size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Today</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>{stats.today}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <AlertCircle size={20} color="#ef4444" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>High Priority</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ef4444' }}>{stats.high}</div>
                </div>
            </div>

            {/* Search & Filters */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search notifications..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '0.7rem 0.7rem 0.7rem 2.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                </div>

                {showFilters && (
                    <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Type</label>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="All">All Types</option>
                                <option value="booking">Bookings</option>
                                <option value="quote">Quotes</option>
                                <option value="message">Messages</option>
                                <option value="payment">Payments</option>
                                <option value="alert">Alerts</option>
                                <option value="system">System</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Status</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="All">All Status</option>
                                <option value="Unread">Unread Only</option>
                                <option value="Read">Read Only</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setTypeFilter('All');
                                    setStatusFilter('All');
                                }}
                                style={{ flex: 1, padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Clear
                            </button>
                            <button
                                onClick={deleteAllRead}
                                style={{ flex: 1, padding: '0.6rem', border: '1px solid #fee2e2', borderRadius: '6px', backgroundColor: 'white', color: '#dc2626', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Delete Read
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Notifications List */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                {loading ? (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#6b7280' }}>Loading notifications...</div>
                ) : paginatedNotifications.length === 0 ? (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
                        {searchTerm || typeFilter !== 'All' || statusFilter !== 'All' ? 'No notifications match your filters.' : 'No notifications yet.'}
                    </div>
                ) : (
                    <div>
                        {paginatedNotifications.map((notification) => (
                            <div
                                key={notification.id}
                                style={{
                                    padding: '1rem',
                                    borderBottom: '1px solid #f3f4f6',
                                    backgroundColor: notification.is_read ? 'white' : '#f0f9ff',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = notification.is_read ? '#f9fafb' : '#e0f2fe'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = notification.is_read ? 'white' : '#f0f9ff'}
                                onClick={() => setSelectedNotification(notification)}
                            >
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: getTypeColor(notification.type) + '20',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: getTypeColor(notification.type),
                                        flexShrink: 0
                                    }}>
                                        {getTypeIcon(notification.type)}
                                    </div>

                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                                            <h3 style={{ fontSize: '0.95rem', fontWeight: notification.is_read ? '500' : '700', color: '#1f2937', margin: 0 }}>
                                                {notification.title}
                                            </h3>
                                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                                {notification.priority && (
                                                    <div style={{
                                                        width: '8px',
                                                        height: '8px',
                                                        borderRadius: '50%',
                                                        backgroundColor: getPriorityColor(notification.priority)
                                                    }} />
                                                )}
                                                <span style={{ fontSize: '0.75rem', color: '#9ca3af', whiteSpace: 'nowrap' }}>
                                                    {new Date(notification.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0 0 0.5rem 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {notification.message}
                                        </p>
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                padding: '0.15rem 0.5rem',
                                                borderRadius: '999px',
                                                backgroundColor: getTypeColor(notification.type) + '20',
                                                color: getTypeColor(notification.type),
                                                fontWeight: '600',
                                                textTransform: 'capitalize'
                                            }}>
                                                {notification.type}
                                            </span>
                                            <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                                                {new Date(notification.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                                        {!notification.is_read && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); markAsRead(notification.id); }}
                                                style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer', color: '#10b981' }}
                                                title="Mark as read"
                                            >
                                                <Check size={14} />
                                            </button>
                                        )}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); deleteNotification(notification.id); }}
                                            style={{ padding: '0.4rem', border: '1px solid #fee2e2', borderRadius: '4px', backgroundColor: 'white', cursor: 'pointer', color: '#ef4444' }}
                                            title="Delete"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredNotifications.length)} of {filteredNotifications.length}
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

            {/* Notification Details Modal */}
            {selectedNotification && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '550px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Notification Details</h2>
                            <button onClick={() => setSelectedNotification(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: getTypeColor(selectedNotification.type) + '20',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: getTypeColor(selectedNotification.type)
                                }}>
                                    {getTypeIcon(selectedNotification.type)}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.25rem' }}>
                                        {selectedNotification.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '999px',
                                            backgroundColor: getTypeColor(selectedNotification.type) + '20',
                                            color: getTypeColor(selectedNotification.type),
                                            fontWeight: '600',
                                            textTransform: 'capitalize'
                                        }}>
                                            {selectedNotification.type}
                                        </span>
                                        {selectedNotification.priority && (
                                            <span style={{
                                                fontSize: '0.75rem',
                                                padding: '0.2rem 0.6rem',
                                                borderRadius: '999px',
                                                backgroundColor: getPriorityColor(selectedNotification.priority) + '20',
                                                color: getPriorityColor(selectedNotification.priority),
                                                fontWeight: '600',
                                                textTransform: 'capitalize'
                                            }}>
                                                {selectedNotification.priority} priority
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Message</label>
                                <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '0.95rem' }}>
                                    {selectedNotification.message}
                                </p>
                            </div>

                            <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Details</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Date</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>
                                            {new Date(selectedNotification.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Time</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>
                                            {new Date(selectedNotification.created_at).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Status</span>
                                        <span style={{ fontWeight: '600', color: selectedNotification.is_read ? '#10b981' : '#f59e0b' }}>
                                            {selectedNotification.is_read ? 'Read' : 'Unread'}
                                        </span>
                                    </div>
                                    {selectedNotification.related_id && (
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Reference ID</span>
                                            <span style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.85rem' }}>
                                                {selectedNotification.related_id.substring(0, 8)}...
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {!selectedNotification.is_read && (
                                    <button
                                        onClick={() => { markAsRead(selectedNotification.id); setSelectedNotification({ ...selectedNotification, is_read: true }); }}
                                        style={{ flex: 1, padding: '0.75rem', border: '1px solid #10b981', background: '#10b981', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    >
                                        <Check size={16} /> Mark as Read
                                    </button>
                                )}
                                <button
                                    onClick={() => { deleteNotification(selectedNotification.id); }}
                                    style={{ flex: 1, padding: '0.75rem', border: '1px solid #fee2e2', background: 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Settings Modal */}
            {showSettings && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '500px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Notification Settings</h2>
                            <button onClick={() => setShowSettings(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {Object.entries(notificationSettings).map(([key, value]) => (
                                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '6px' }}>
                                        <span style={{ fontWeight: '500', color: '#374151', textTransform: 'capitalize' }}>
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
                                            <input
                                                type="checkbox"
                                                checked={value}
                                                onChange={(e) => setNotificationSettings({ ...notificationSettings, [key]: e.target.checked })}
                                                style={{ opacity: 0, width: 0, height: 0 }}
                                            />
                                            <span style={{
                                                position: 'absolute',
                                                cursor: 'pointer',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: value ? '#10b981' : '#d1d5db',
                                                transition: '0.4s',
                                                borderRadius: '24px'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    content: '',
                                                    height: '18px',
                                                    width: '18px',
                                                    left: value ? '28px' : '3px',
                                                    bottom: '3px',
                                                    backgroundColor: 'white',
                                                    transition: '0.4s',
                                                    borderRadius: '50%'
                                                }} />
                                            </span>
                                        </label>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => { toast.success('Settings saved!'); setShowSettings(false); }}
                                style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontWeight: '600', cursor: 'pointer' }}
                            >
                                Save Settings
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

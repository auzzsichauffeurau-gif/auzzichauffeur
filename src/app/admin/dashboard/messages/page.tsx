"use client";

import { useState, useEffect } from 'react';
import { Mail, Phone, Clock, X, Check, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function MessagesPage() {
    const [messages, setMessages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedMessage, setSelectedMessage] = useState<any>(null);
    const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');

    useEffect(() => {
        fetchMessages();
    }, [filter]);

    const fetchMessages = async () => {
        setLoading(true);
        let query = supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (filter === 'unread') {
            query = query.eq('is_read', false);
        } else if (filter === 'read') {
            query = query.eq('is_read', true);
        }

        const { data, error } = await query;

        if (!error && data) {
            setMessages(data);
        }
        setLoading(false);
    };

    const markAsRead = async (id: number) => {
        const { error, data } = await supabase
            .from('contact_messages')
            .update({ is_read: true })
            .eq('id', id)
            .select();

        if (error || !data || data.length === 0) {
            toast.error('Failed to mark message as read');
        } else {
            fetchMessages();
            if (selectedMessage?.id === id) {
                setSelectedMessage({ ...selectedMessage, is_read: true });
            }
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        const { error, data } = await supabase
            .from('contact_messages')
            .delete()
            .eq('id', id)
            .select();

        if (error || !data || data.length === 0) {
            toast.error('Failed to delete message');
        } else {
            toast.success('Message deleted successfully');
            fetchMessages();
            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }
        }
    };

    const openMessage = (message: any) => {
        setSelectedMessage(message);
        if (!message.is_read) {
            markAsRead(message.id);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Contact Messages</h1>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => setFilter('all')}
                        style={{ padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: filter === 'all' ? '#1e3a8a' : 'white', color: filter === 'all' ? 'white' : '#374151', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' }}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('unread')}
                        style={{ padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: filter === 'unread' ? '#1e3a8a' : 'white', color: filter === 'unread' ? 'white' : '#374151', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' }}
                    >
                        Unread
                    </button>
                    <button
                        onClick={() => setFilter('read')}
                        style={{ padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: filter === 'read' ? '#1e3a8a' : 'white', color: filter === 'read' ? 'white' : '#374151', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' }}
                    >
                        Read
                    </button>
                </div>
            </div>

            {/* Messages List */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb', textAlign: 'left', color: '#4b5563' }}>
                                <th style={{ padding: '1rem', fontWeight: '600', width: '40px' }}></th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Name</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Contact</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Subject</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Date</th>
                                <th style={{ padding: '1rem', fontWeight: '600' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading messages...</td>
                                </tr>
                            ) : messages.length === 0 ? (
                                <tr>
                                    <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>No messages found.</td>
                                </tr>
                            ) : (
                                messages.map((message) => (
                                    <tr
                                        key={message.id}
                                        onClick={() => openMessage(message)}
                                        style={{
                                            borderBottom: '1px solid #f3f4f6',
                                            cursor: 'pointer',
                                            backgroundColor: message.is_read ? 'white' : '#f0f9ff',
                                            transition: 'background-color 0.2s'
                                        }}
                                    >
                                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                                            {!message.is_read && (
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
                                            )}
                                        </td>
                                        <td style={{ padding: '1rem', fontWeight: message.is_read ? '500' : '700', color: '#1f2937' }}>
                                            {message.first_name} {message.last_name}
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ fontSize: '0.85rem' }}>{message.email}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{message.phone}</div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#4b5563' }}>
                                            <div style={{ maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {message.subject || 'No subject'}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.85rem' }}>
                                            {new Date(message.created_at).toLocaleDateString()}
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDelete(message.id);
                                                }}
                                                style={{ padding: '0.4rem', border: '1px solid #fca5a5', borderRadius: '4px', background: 'white', cursor: 'pointer' }}
                                            >
                                                <Trash2 size={14} color="#dc2626" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Message Detail Modal */}
            {selectedMessage && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '600px', maxWidth: '95%', overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Message Details</h2>
                            <button onClick={() => setSelectedMessage(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Contact Information</label>
                                <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <div>
                                        <span style={{ fontSize: '0.85rem', color: '#9ca3af', display: 'block' }}>Name</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedMessage.first_name} {selectedMessage.last_name}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Mail size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedMessage.email}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Phone size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedMessage.phone}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} color="#6b7280" />
                                        <span style={{ color: '#374151', fontSize: '0.85rem' }}>
                                            {new Date(selectedMessage.created_at).toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {selectedMessage.subject && (
                                <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                    <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Subject</label>
                                    <p style={{ marginTop: '0.5rem', color: '#1f2937', fontWeight: '600' }}>{selectedMessage.subject}</p>
                                </div>
                            )}

                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Message</label>
                                <p style={{ marginTop: '0.5rem', color: '#374151', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                                    {selectedMessage.message}
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <button
                                    onClick={() => window.location.href = `mailto:${selectedMessage.email}`}
                                    style={{ flex: 1, padding: '0.8rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', cursor: 'pointer', fontWeight: '600', color: 'white' }}
                                >
                                    Reply via Email
                                </button>
                                <button
                                    onClick={() => handleDelete(selectedMessage.id)}
                                    style={{ padding: '0.8rem 1.5rem', border: '1px solid #fca5a5', borderRadius: '6px', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#dc2626' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

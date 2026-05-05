"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';
import {
    Bell, CheckCircle, XCircle, Clock, RefreshCw,
    Mail, AlertCircle, Calendar, FileText, Play
} from 'lucide-react';

interface ReminderLog {
    id: string;
    reminder_type: 'booking_24h' | 'booking_2h' | 'invoice_3d';
    booking_id?: string;
    invoice_id?: string;
    customer_email: string;
    customer_name: string;
    status: 'sent' | 'failed';
    error_message?: string;
    sent_at: string;
}

const REMINDER_LABELS: Record<string, { label: string; icon: any; color: string; bg: string }> = {
    booking_24h: { label: '24h Pickup Reminder', icon: Calendar, color: '#3b82f6', bg: '#eff6ff' },
    booking_2h:  { label: '2h Pickup Reminder',  icon: Clock,    color: '#8b5cf6', bg: '#f5f3ff' },
    invoice_3d:  { label: 'Unpaid Invoice',       icon: FileText, color: '#f59e0b', bg: '#fffbeb' },
};

export default function RemindersPage() {
    const [logs, setLogs] = useState<ReminderLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [triggering, setTriggering] = useState<string | null>(null);
    const [typeFilter, setTypeFilter] = useState('all');

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('reminders_log')
            .select('*')
            .order('sent_at', { ascending: false })
            .limit(100);

        if (error) {
            toast.error('Failed to load reminder logs');
        } else {
            setLogs(data || []);
        }
        setLoading(false);
    };

    const triggerCron = async (cronPath: string, label: string) => {
        setTriggering(cronPath);
        try {
            const res = await fetch('/api/admin/trigger-cron', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cronPath })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed');
            toast.success(`${label}: ${data.processed} reminder(s) sent`);
            fetchLogs();
        } catch (e: any) {
            toast.error(`Failed to trigger ${label}: ${e.message}`);
        } finally {
            setTriggering(null);
        }
    };

    const stats = {
        total: logs.length,
        sent: logs.filter(l => l.status === 'sent').length,
        failed: logs.filter(l => l.status === 'failed').length,
        today: logs.filter(l => l.sent_at.startsWith(new Date().toISOString().split('T')[0])).length,
    };

    const filtered = typeFilter === 'all' ? logs : logs.filter(l => l.reminder_type === typeFilter);

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Automated Reminders</h1>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                        Cron jobs send reminders automatically — logs shown below
                    </p>
                </div>
                <button
                    onClick={fetchLogs}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', cursor: 'pointer', fontSize: '0.9rem' }}
                >
                    <RefreshCw size={16} /> Refresh
                </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {[
                    { label: 'Total Sent', value: stats.total, color: '#3b82f6', icon: Bell },
                    { label: 'Successful', value: stats.sent, color: '#10b981', icon: CheckCircle },
                    { label: 'Failed', value: stats.failed, color: '#ef4444', icon: XCircle },
                    { label: 'Today', value: stats.today, color: '#f59e0b', icon: Calendar },
                ].map(({ label, value, color, icon: Icon }) => (
                    <div key={label} style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <Icon size={18} color={color} />
                            <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{label}</span>
                        </div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color }}>{value}</div>
                    </div>
                ))}
            </div>

            {/* Manual Trigger Cards */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>Manual Trigger (Test)</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    {[
                        { path: 'booking-24h', label: '24h Pickup Reminder', desc: 'Sends to bookings with pickup in ~24 hours', color: '#3b82f6', bg: '#eff6ff' },
                        { path: 'booking-2h',  label: '2h Pickup Reminder',  desc: 'Sends to bookings with pickup in ~2 hours',  color: '#8b5cf6', bg: '#f5f3ff' },
                        { path: 'invoice-unpaid', label: 'Unpaid Invoice (3d)', desc: 'Sends to customers with invoices unpaid 3+ days', color: '#f59e0b', bg: '#fffbeb' },
                    ].map(({ path, label, desc, color, bg }) => (
                        <div key={path} style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                            <div style={{ padding: '0.75rem 1rem', backgroundColor: bg, borderBottom: '1px solid #e5e7eb' }}>
                                <span style={{ fontSize: '0.85rem', fontWeight: '700', color }}>{label}</span>
                            </div>
                            <div style={{ padding: '1rem' }}>
                                <p style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '1rem' }}>{desc}</p>
                                <button
                                    onClick={() => triggerCron(path, label)}
                                    disabled={triggering !== null}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.5rem 1rem', borderRadius: '6px', border: 'none',
                                        backgroundColor: color, color: 'white', fontWeight: '600',
                                        fontSize: '0.85rem', cursor: triggering ? 'wait' : 'pointer',
                                        opacity: triggering ? 0.7 : 1, width: '100%', justifyContent: 'center'
                                    }}
                                >
                                    <Play size={14} />
                                    {triggering === path ? 'Running...' : 'Run Now'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Schedule Info */}
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1rem', marginBottom: '2rem', display: 'flex', gap: '0.75rem' }}>
                <CheckCircle size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                    <p style={{ fontWeight: '700', color: '#15803d', marginBottom: '0.25rem' }}>Cron Schedule (Vercel Auto-runs)</p>
                    <p style={{ fontSize: '0.85rem', color: '#166534' }}>
                        24h Reminder: every hour &nbsp;|&nbsp; 2h Reminder: every 30 min &nbsp;|&nbsp; Invoice Reminder: daily at 9:00 AM UTC
                    </p>
                </div>
            </div>

            {/* Filter */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {['all', 'booking_24h', 'booking_2h', 'invoice_3d'].map(type => (
                    <button
                        key={type}
                        onClick={() => setTypeFilter(type)}
                        style={{
                            padding: '0.4rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '600',
                            border: '1px solid', cursor: 'pointer',
                            backgroundColor: typeFilter === type ? '#1e3a8a' : 'white',
                            color: typeFilter === type ? 'white' : '#374151',
                            borderColor: typeFilter === type ? '#1e3a8a' : '#e5e7eb'
                        }}
                    >
                        {type === 'all' ? 'All' : REMINDER_LABELS[type]?.label}
                    </button>
                ))}
            </div>

            {/* Logs Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                {loading ? (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#6b7280' }}>Loading logs...</div>
                ) : filtered.length === 0 ? (
                    <div style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
                        <Bell size={40} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                        <p>No reminder logs yet. Trigger one above or wait for the cron schedule.</p>
                    </div>
                ) : (
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb', textAlign: 'left', color: '#6b7280' }}>
                                <th style={{ padding: '0.875rem 1rem', fontWeight: '600' }}>Type</th>
                                <th style={{ padding: '0.875rem 1rem', fontWeight: '600' }}>Customer</th>
                                <th style={{ padding: '0.875rem 1rem', fontWeight: '600' }}>Email</th>
                                <th style={{ padding: '0.875rem 1rem', fontWeight: '600' }}>Status</th>
                                <th style={{ padding: '0.875rem 1rem', fontWeight: '600' }}>Sent At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(log => {
                                const meta = REMINDER_LABELS[log.reminder_type];
                                const Icon = meta?.icon || Bell;
                                return (
                                    <tr key={log.id} style={{ borderBottom: '1px solid #f3f4f6' }}
                                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
                                    >
                                        <td style={{ padding: '0.875rem 1rem' }}>
                                            <span style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                                padding: '0.25rem 0.6rem', borderRadius: '999px',
                                                backgroundColor: meta?.bg, color: meta?.color,
                                                fontSize: '0.75rem', fontWeight: '600'
                                            }}>
                                                <Icon size={12} /> {meta?.label}
                                            </span>
                                        </td>
                                        <td style={{ padding: '0.875rem 1rem', fontWeight: '600', color: '#1f2937' }}>{log.customer_name}</td>
                                        <td style={{ padding: '0.875rem 1rem', color: '#6b7280' }}>{log.customer_email}</td>
                                        <td style={{ padding: '0.875rem 1rem' }}>
                                            {log.status === 'sent' ? (
                                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#16a34a', fontWeight: '600', fontSize: '0.8rem' }}>
                                                    <CheckCircle size={14} /> Sent
                                                </span>
                                            ) : (
                                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#dc2626', fontWeight: '600', fontSize: '0.8rem' }} title={log.error_message || ''}>
                                                    <XCircle size={14} /> Failed
                                                </span>
                                            )}
                                        </td>
                                        <td style={{ padding: '0.875rem 1rem', color: '#6b7280' }}>
                                            {new Date(log.sent_at).toLocaleString()}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

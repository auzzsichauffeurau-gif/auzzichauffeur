"use client";

import { useState, useEffect } from 'react';
import { DollarSign, Edit, Plus, X, Save, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function PricingPage() {
    const [pricingRules, setPricingRules] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingRule, setEditingRule] = useState<any>(null);
    const [formData, setFormData] = useState({
        service_type: 'airport_transfer',
        vehicle_type: 'Executive Sedans',
        rate_per_km: 0,
        base_fare: 0,
        hourly_rate: 0,
        min_hours: 3,
        notes: ''
    });

    useEffect(() => {
        fetchPricingRules();
    }, []);

    const fetchPricingRules = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('pricing_rules')
            .select('*')
            .order('service_type', { ascending: true });

        if (error) {
            console.error('Error fetching pricing:', error);
            if (error.code === '42P01') {
                toast.error("Table 'pricing_rules' missing. Please create it.");
            }
        } else {
            setPricingRules(data || []);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (editingRule) {
            const { error, data } = await supabase
                .from('pricing_rules')
                .update(formData)
                .eq('id', editingRule.id)
                .select();

            if (error) {
                toast.error('Failed to update rule: ' + error.message);
            } else if (!data || data.length === 0) {
                toast.error('Failed to update rule: Permission denied or record missing');
            } else {
                toast.success('Pricing rule updated successfully!');
                fetchPricingRules();
                closeModal();
            }
        } else {
            const { error } = await supabase
                .from('pricing_rules')
                .insert([formData]);

            if (error) {
                toast.error('Failed to create rule: ' + error.message);
            } else {
                toast.success('Pricing rule created successfully!');
                fetchPricingRules();
                closeModal();
            }
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this pricing rule?')) return;

        const { error, data } = await supabase.from('pricing_rules').delete().eq('id', id).select();

        if (error) {
            toast.error('Failed to delete rule: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Deletion failed: Permission denied or record missing');
        } else {
            toast.success('Pricing rule deleted');
            fetchPricingRules();
        }
    };

    const openModal = (rule?: any) => {
        if (rule) {
            setEditingRule(rule);
            setFormData({
                service_type: rule.service_type,
                vehicle_type: rule.vehicle_type,
                rate_per_km: rule.rate_per_km,
                base_fare: rule.base_fare,
                hourly_rate: rule.hourly_rate,
                min_hours: rule.min_hours,
                notes: rule.notes || ''
            });
        } else {
            setEditingRule(null);
            setFormData({
                service_type: 'airport_transfer',
                vehicle_type: 'Executive Sedans',
                rate_per_km: 0,
                base_fare: 0,
                hourly_rate: 0,
                min_hours: 3,
                notes: ''
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingRule(null);
    };

    const groupedRules = pricingRules.reduce((acc, rule) => {
        if (!acc[rule.service_type]) {
            acc[rule.service_type] = [];
        }
        acc[rule.service_type].push(rule);
        return acc;
    }, {} as Record<string, any[]>);

    const serviceTypeLabels: Record<string, string> = {
        'airport_transfer': '✈️ Airport Transfers',
        'long_distance': '🚗 Long Distance',
        'hourly': '⏰ Hourly Chauffeur',
        'special_event': '🎉 Special Events'
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Pricing Management</h1>
                <button
                    onClick={() => openModal()}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                >
                    <Plus size={16} /> Add Pricing Rule
                </button>
            </div>

            {/* Pricing Cards by Service Type */}
            {loading ? (
                <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading pricing rules...</div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {Object.entries(groupedRules).map(([serviceType, rules]) => (
                        <div key={serviceType} style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>
                                    {serviceTypeLabels[serviceType] || serviceType}
                                </h2>
                            </div>

                            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
                                {(rules as any[]).map((rule: any) => (
                                    <div key={rule.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', backgroundColor: '#fafafa' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937' }}>{rule.vehicle_type}</h3>
                                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                                <button
                                                    onClick={() => openModal(rule)}
                                                    style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer' }}
                                                >
                                                    <Edit size={14} color="#6b7280" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(rule.id)}
                                                    style={{ padding: '0.4rem', border: '1px solid #fee2e2', borderRadius: '4px', background: '#fef2f2', cursor: 'pointer' }}
                                                >
                                                    <Trash2 size={14} color="#ef4444" />
                                                </button>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                            {rule.rate_per_km > 0 && (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                    <span style={{ color: '#6b7280' }}>Per KM:</span>
                                                    <span style={{ fontWeight: '600', color: '#10b981' }}>${rule.rate_per_km}</span>
                                                </div>
                                            )}

                                            {rule.base_fare > 0 && (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                    <span style={{ color: '#6b7280' }}>Base Fare:</span>
                                                    <span style={{ fontWeight: '600', color: '#3b82f6' }}>${rule.base_fare}</span>
                                                </div>
                                            )}

                                            {rule.hourly_rate > 0 && (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                    <span style={{ color: '#6b7280' }}>Hourly Rate:</span>
                                                    <span style={{ fontWeight: '600', color: '#f59e0b' }}>${rule.hourly_rate}/hr</span>
                                                </div>
                                            )}

                                            {rule.min_hours > 0 && (
                                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                                                    <span style={{ color: '#6b7280' }}>Min Hours:</span>
                                                    <span style={{ fontWeight: '600', color: '#374151' }}>{rule.min_hours}h</span>
                                                </div>
                                            )}

                                            {rule.notes && (
                                                <div style={{ marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid #e5e7eb' }}>
                                                    <p style={{ fontSize: '0.8rem', color: '#9ca3af', fontStyle: 'italic' }}>{rule.notes}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', padding: '0', borderRadius: '8px', width: '500px', maxWidth: '95%', overflow: 'hidden' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{editingRule ? 'Edit Pricing Rule' : 'Add Pricing Rule'}</h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Service Type</label>
                                    <select
                                        value={formData.service_type}
                                        onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option value="airport_transfer">Airport Transfer</option>
                                        <option value="long_distance">Long Distance</option>
                                        <option value="hourly">Hourly</option>
                                        <option value="special_event">Special Event</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Vehicle Type</label>
                                    <select
                                        value={formData.vehicle_type}
                                        onChange={(e) => setFormData({ ...formData, vehicle_type: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option value="Executive Sedans">Executive Sedans (1-3 pax)</option>
                                        <option value="Premium Sedans">Premium Sedans (1-3 pax)</option>
                                        <option value="Premium SUVs">Premium SUVs (1-3 pax)</option>
                                        <option value="People Movers">People Movers (1-6 pax)</option>
                                        <option value="Minibuses & Coaches">Minibuses & Coaches (1-14 pax)</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Rate per KM ($)</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={formData.rate_per_km}
                                        onChange={(e) => setFormData({ ...formData, rate_per_km: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Base Fare ($)</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={formData.base_fare}
                                        onChange={(e) => setFormData({ ...formData, base_fare: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Hourly Rate ($)</label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={formData.hourly_rate}
                                        onChange={(e) => setFormData({ ...formData, hourly_rate: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Min Hours</label>
                                    <input
                                        type="number"
                                        value={formData.min_hours}
                                        onChange={(e) => setFormData({ ...formData, min_hours: parseInt(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Notes</label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows={3}
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem', resize: 'vertical' }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button type="button" onClick={closeModal} style={{ flex: 1, padding: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#374151' }}>
                                    Cancel
                                </button>
                                <button type="submit" style={{ flex: 1, padding: '0.8rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', cursor: 'pointer', fontWeight: '600', color: 'white' }}>
                                    <Save size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                    {editingRule ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

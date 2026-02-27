"use client";

import { useState, useEffect } from 'react';
import { Tag, Plus, Edit, Trash2, X, Save, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function PromosPage() {
    const [promoCodes, setPromoCodes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingPromo, setEditingPromo] = useState<any>(null);
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        discount_type: 'percentage',
        discount_value: 0,
        max_discount_amount: 0,
        valid_from: new Date().toISOString().split('T')[0],
        valid_until: '',
        is_active: true,
        max_uses: null as number | null,
        max_uses_per_customer: 1,
        min_booking_amount: 0
    });

    useEffect(() => {
        fetchPromoCodes();
    }, []);

    const fetchPromoCodes = async () => {
        setLoading(true);
        // Simplified query to avoid relationship errors if tables aren't fully linked yet
        const { data, error } = await supabase
            .from('promo_codes')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching promo codes:', error);
            if (error.code === '42P01') {
                toast.error("Table 'promo_codes' missing. Please ask admin to create it.");
            } else {
                toast.error('Failed to load promo codes');
            }
        } else {
            setPromoCodes(data || []);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const promoData = {
            ...formData,
            code: formData.code.toUpperCase(),
            max_uses: formData.max_uses || null,
            max_discount_amount: formData.discount_type === 'percentage' ? formData.max_discount_amount : null
        };

        if (editingPromo) {
            const { error, data } = await supabase
                .from('promo_codes')
                .update(promoData)
                .eq('id', editingPromo.id)
                .select();

            if (!error && data && data.length > 0) {
                toast.success('Promo code updated successfully');
                fetchPromoCodes();
                closeModal();
            } else if (!data || data.length === 0) {
                toast.error('Error updating promo code: Permission denied or record missing');
            } else {
                toast.error('Error updating promo code: ' + error.message);
            }
        } else {
            const { error } = await supabase
                .from('promo_codes')
                .insert([promoData]);

            if (!error) {
                toast.success('Promo code created successfully');
                fetchPromoCodes();
                closeModal();
            } else {
                toast.error('Error creating promo code: ' + error.message);
            }
        }
    };

    const deletePromo = async (id: string) => {
        if (!confirm('Are you sure you want to delete this promo code?')) return;

        const { error, data } = await supabase
            .from('promo_codes')
            .delete()
            .eq('id', id)
            .select();

        if (!error && data && data.length > 0) {
            toast.success('Promo code deleted');
            fetchPromoCodes();
        } else if (!data || data.length === 0) {
            toast.error('Failed to delete promo code: Permission denied or record in use');
        } else {
            toast.error('Failed to delete promo code: ' + error.message);
        }
    };

    const toggleActive = async (id: string, currentStatus: boolean) => {
        const { error, data } = await supabase
            .from('promo_codes')
            .update({ is_active: !currentStatus })
            .eq('id', id)
            .select();

        if (!error && data && data.length > 0) {
            toast.success(`Promo code ${!currentStatus ? 'activated' : 'deactivated'}`);
            fetchPromoCodes();
        } else if (!data || data.length === 0) {
            toast.error('Failed to update status: Permission denied or record missing');
        } else {
            toast.error('Failed to update status: ' + error.message);
        }
    };

    const openModal = (promo?: any) => {
        if (promo) {
            setEditingPromo(promo);
            setFormData({
                code: promo.code,
                description: promo.description || '',
                discount_type: promo.discount_type,
                discount_value: promo.discount_value,
                max_discount_amount: promo.max_discount_amount || 0,
                valid_from: promo.valid_from ? promo.valid_from.split('T')[0] : '',
                valid_until: promo.valid_until ? promo.valid_until.split('T')[0] : '',
                is_active: promo.is_active,
                max_uses: promo.max_uses,
                max_uses_per_customer: promo.max_uses_per_customer,
                min_booking_amount: promo.min_booking_amount || 0
            });
        } else {
            setEditingPromo(null);
            setFormData({
                code: '',
                description: '',
                discount_type: 'percentage',
                discount_value: 0,
                max_discount_amount: 0,
                valid_from: new Date().toISOString().split('T')[0],
                valid_until: '',
                is_active: true,
                max_uses: null,
                max_uses_per_customer: 1,
                min_booking_amount: 0
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingPromo(null);
    };

    const getDiscountDisplay = (promo: any) => {
        if (promo.discount_type === 'percentage') {
            return `${promo.discount_value}% off${promo.max_discount_amount ? ` (max $${promo.max_discount_amount})` : ''}`;
        } else {
            return `$${promo.discount_value} off`;
        }
    };

    const isExpired = (validUntil: string) => {
        if (!validUntil) return false;
        return new Date(validUntil) < new Date();
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Promo Codes</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                        Create and manage discount codes
                    </p>
                </div>
                <button
                    onClick={() => openModal()}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                >
                    <Plus size={16} /> Create Promo Code
                </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Tag size={20} color="#6b7280" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Codes</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{promoCodes.length}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <TrendingUp size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Active Codes</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>
                        {promoCodes.filter(p => p.is_active && !isExpired(p.valid_until)).length}
                    </div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Users size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Uses</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#3b82f6' }}>
                        {promoCodes.reduce((sum, p) => sum + (p.current_uses || 0), 0)}
                    </div>
                </div>
            </div>

            {/* Promo Codes Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1' }}>
                        Loading promo codes...
                    </div>
                ) : promoCodes.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1' }}>
                        No promo codes found. Create one to get started!
                    </div>
                ) : (
                    promoCodes.map((promo) => (
                        <div
                            key={promo.id}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                border: `2px solid ${promo.is_active && !isExpired(promo.valid_until) ? '#10b981' : '#e5e7eb'}`,
                                padding: '1.5rem',
                                position: 'relative'
                            }}
                        >
                            {/* Status Badge */}
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                {isExpired(promo.valid_until) ? (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#fee2e2', color: '#991b1b' }}>
                                        EXPIRED
                                    </span>
                                ) : promo.is_active ? (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#d1fae5', color: '#065f46' }}>
                                        ACTIVE
                                    </span>
                                ) : (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#6b7280' }}>
                                        INACTIVE
                                    </span>
                                )}
                            </div>

                            {/* Code */}
                            <div style={{ marginBottom: '1rem' }}>
                                <div style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: '#1e3a8a',
                                    fontFamily: 'monospace',
                                    letterSpacing: '2px'
                                }}>
                                    {promo.code}
                                </div>
                                {promo.description && (
                                    <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                        {promo.description}
                                    </div>
                                )}
                            </div>

                            {/* Discount */}
                            <div style={{
                                padding: '1rem',
                                backgroundColor: '#f0fdf4',
                                borderRadius: '6px',
                                marginBottom: '1rem',
                                border: '1px solid #bbf7d0'
                            }}>
                                <div style={{ fontSize: '0.75rem', color: '#15803d', marginBottom: '0.25rem' }}>DISCOUNT</div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d' }}>
                                    {getDiscountDisplay(promo)}
                                </div>
                            </div>

                            {/* Details */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
                                {promo.min_booking_amount > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#6b7280' }}>Min. Amount:</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>${promo.min_booking_amount}</span>
                                    </div>
                                )}
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#6b7280' }}>Uses:</span>
                                    <span style={{ fontWeight: '600', color: '#1f2937' }}>
                                        {promo.current_uses || 0}{promo.max_uses ? ` / ${promo.max_uses}` : ' / ∞'}
                                    </span>
                                </div>
                                {promo.valid_until && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: '#6b7280' }}>Valid Until:</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>
                                            {new Date(promo.valid_until).toLocaleDateString()}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                                <button
                                    onClick={() => toggleActive(promo.id, promo.is_active)}
                                    style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer',
                                        fontSize: '0.8rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    {promo.is_active ? 'Deactivate' : 'Activate'}
                                </button>
                                <button
                                    onClick={() => openModal(promo)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Edit size={14} />
                                </button>
                                <button
                                    onClick={() => deletePromo(promo.id)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #fee2e2',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer',
                                        color: '#dc2626'
                                    }}
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '600px', maxWidth: '95%', maxHeight: '90vh', overflow: 'auto' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                {editingPromo ? 'Edit Promo Code' : 'Create Promo Code'}
                            </h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Promo Code *
                                </label>
                                <input
                                    type="text"
                                    value={formData.code}
                                    onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                                    required
                                    placeholder="e.g., SAVE20"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem', textTransform: 'uppercase' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={2}
                                    placeholder="Brief description of the promo"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem', resize: 'vertical' }}
                                />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Discount Type *
                                    </label>
                                    <select
                                        value={formData.discount_type}
                                        onChange={(e) => setFormData({ ...formData, discount_type: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    >
                                        <option value="percentage">Percentage</option>
                                        <option value="fixed_amount">Fixed Amount</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Discount Value *
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={formData.discount_value}
                                        onChange={(e) => setFormData({ ...formData, discount_value: parseFloat(e.target.value) || 0 })}
                                        required
                                        placeholder={formData.discount_type === 'percentage' ? '10' : '20'}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            {formData.discount_type === 'percentage' && (
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Max Discount Amount ($)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={formData.max_discount_amount}
                                        onChange={(e) => setFormData({ ...formData, max_discount_amount: parseFloat(e.target.value) || 0 })}
                                        placeholder="Leave 0 for no limit"
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            )}

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Valid From
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.valid_from}
                                        onChange={(e) => setFormData({ ...formData, valid_from: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Valid Until
                                    </label>
                                    <input
                                        type="date"
                                        value={formData.valid_until}
                                        onChange={(e) => setFormData({ ...formData, valid_until: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Min. Booking ($)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={formData.min_booking_amount}
                                        onChange={(e) => setFormData({ ...formData, min_booking_amount: parseFloat(e.target.value) || 0 })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Max Uses
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.max_uses || ''}
                                        onChange={(e) => setFormData({ ...formData, max_uses: e.target.value ? parseInt(e.target.value) : null })}
                                        placeholder="Unlimited"
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Per Customer
                                    </label>
                                    <input
                                        type="number"
                                        value={formData.max_uses_per_customer}
                                        onChange={(e) => setFormData({ ...formData, max_uses_per_customer: parseInt(e.target.value) || 1 })}
                                        min="1"
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type="checkbox"
                                    checked={formData.is_active}
                                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                                    id="is_active"
                                    style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
                                />
                                <label htmlFor="is_active" style={{ fontSize: '0.9rem', color: '#374151', cursor: 'pointer' }}>
                                    Active
                                </label>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    style={{ flex: 1, padding: '0.8rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', cursor: 'pointer', fontWeight: '600', color: '#374151' }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{ flex: 1, padding: '0.8rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <Save size={16} />
                                    {editingPromo ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    Plus,
    MoreHorizontal,
    Mail,
    Phone,
    User,
    Edit,
    Trash,
    Save,
    X
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function CustomersPage() {
    const [customers, setCustomers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        status: 'Active',
        notes: ''
    });

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('customers')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching customers:', error);
            if (error.code === '42P01') {
                toast.error("Table 'customers' missing. Please ask admin to create it.");
            } else {
                toast.error('Failed to load customers');
            }
        } else {
            setCustomers(data || []);
        }
        setLoading(false);
    };

    const handleCreateOrUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedCustomer) {
            // Update
            const { error, data } = await supabase
                .from('customers')
                .update(formData)
                .eq('id', selectedCustomer.id)
                .select();

            if (error) {
                toast.error('Failed to update: ' + error.message);
            } else if (!data || data.length === 0) {
                toast.error('Update failed: Permission denied or record missing.');
            } else {
                toast.success('Customer updated!');
                fetchCustomers();
                closeModal();
            }
        } else {
            // Create
            const { error } = await supabase
                .from('customers')
                .insert([formData]);

            if (error) {
                toast.error('Failed to create: ' + error.message);
            } else {
                toast.success('Customer created!');
                fetchCustomers();
                closeModal();
            }
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this customer?')) return;

        const { error, data } = await supabase
            .from('customers')
            .delete()
            .eq('id', id)
            .select();

        if (error) {
            toast.error('Failed to delete: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Deletion failed: Permission denied or record in use.');
        } else {
            toast.success('Customer deleted');
            fetchCustomers();
        }
    };

    const openModal = (customer?: any) => {
        if (customer) {
            setSelectedCustomer(customer);
            setFormData({
                full_name: customer.full_name,
                email: customer.email,
                phone: customer.phone,
                status: customer.status || 'Active',
                notes: customer.notes || ''
            });
        } else {
            setSelectedCustomer(null);
            setFormData({
                full_name: '',
                email: '',
                phone: '',
                status: 'Active',
                notes: ''
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedCustomer(null);
    };

    const filteredCustomers = customers.filter(c =>
        c.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Customers</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                        View and manage your client base
                    </p>
                </div>
                <button
                    onClick={() => openModal()}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 1rem', backgroundColor: '#1e3a8a',
                        color: 'white', border: 'none', borderRadius: '6px',
                        cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem'
                    }}
                >
                    <Plus size={16} /> Add Customer
                </button>
            </div>

            {/* Filter Bar */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                    <Search size={20} color="#9ca3af" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                    <input
                        type="text"
                        placeholder="Search customers by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem 0.75rem 2.5rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '6px',
                            fontSize: '0.9rem',
                            outline: 'none'
                        }}
                    />
                </div>
            </div>

            {/* Customers Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Name</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Contact</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Status</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Joined</th>
                            <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    Loading customers...
                                </td>
                            </tr>
                        ) : filteredCustomers.length === 0 ? (
                            <tr>
                                <td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    No customers found.
                                </td>
                            </tr>
                        ) : (
                            filteredCustomers.map((customer) => (
                                <tr key={customer.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3730a3', fontWeight: '600', fontSize: '0.85rem' }}>
                                                {customer.full_name?.charAt(0).toUpperCase()}
                                            </div>
                                            <span style={{ fontWeight: '600', color: '#1f2937', fontSize: '0.9rem' }}>{customer.full_name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4b5563' }}>
                                                <Mail size={14} /> {customer.email}
                                            </div>
                                            {customer.phone && (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#4b5563' }}>
                                                    <Phone size={14} /> {customer.phone}
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            borderRadius: '99px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600',
                                            backgroundColor: customer.status === 'Active' ? '#dcfce7' : '#f3f4f6',
                                            color: customer.status === 'Active' ? '#166534' : '#374151'
                                        }}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.85rem' }}>
                                        {new Date(customer.created_at).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                                            <button
                                                onClick={() => openModal(customer)}
                                                style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', color: '#6b7280' }}
                                            >
                                                <Edit size={14} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(customer.id)}
                                                style={{ padding: '0.4rem', border: '1px solid #fee2e2', borderRadius: '4px', background: '#fef2f2', cursor: 'pointer', color: '#ef4444' }}
                                            >
                                                <Trash size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '500px', maxWidth: '95%' }}>
                        <div style={{ padding: '1.25rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{selectedCustomer ? 'Edit Customer' : 'New Customer'}</h2>
                            <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}><X size={20} /></button>
                        </div>
                        <form onSubmit={handleCreateOrUpdate} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.25rem' }}>Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.full_name}
                                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.25rem' }}>Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.25rem' }}>Phone</label>
                                <input
                                    type="text"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.25rem' }}>Status</label>
                                <select
                                    value={formData.status}
                                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Blocked">Blocked</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '500', marginBottom: '0.25rem' }}>Notes</label>
                                <textarea
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    rows={3}
                                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', resize: 'vertical' }}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <button type="button" onClick={closeModal} style={{ flex: 1, padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', background: 'white', fontWeight: '600' }}>Cancel</button>
                                <button type="submit" style={{ flex: 1, padding: '0.75rem', border: 'none', borderRadius: '6px', background: '#1e3a8a', color: 'white', fontWeight: '600', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                    <Save size={16} /> Save Customer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

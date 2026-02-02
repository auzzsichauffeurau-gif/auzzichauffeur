"use client";

import { useState, useEffect } from 'react';
import {
    Search,
    Plus,
    Phone,
    User,
    Mail,
    Car,
    CheckCircle,
    XCircle,
    Clock,
    Upload,
    Edit,
    Trash2,
    Filter,
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    Users,
    UserCheck,
    Briefcase,
    Star,
    MapPin,
    Calendar
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function DriversPage() {
    const [drivers, setDrivers] = useState<any[]>([]);
    const [filteredDrivers, setFilteredDrivers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [selectedDriver, setSelectedDriver] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    // Filter State
    const [statusFilter, setStatusFilter] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState<'name' | 'status'>('name');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        license_number: '',
        status: 'Offline',
        image_url: '',
        address: '',
        emergency_contact: '',
        notes: ''
    });

    useEffect(() => {
        fetchDrivers();
    }, []);

    useEffect(() => {
        filterDrivers();
    }, [drivers, searchTerm, statusFilter, sortBy]);

    const fetchDrivers = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('drivers')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching drivers:', error);
            if (error.code === '42P01') {
                toast.error("Table 'drivers' missing. Please create it.");
            } else {
                toast.error('Failed to load drivers');
            }
        } else {
            setDrivers(data || []);
        }
        setLoading(false);
    };

    const filterDrivers = () => {
        let filtered = [...drivers];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(d =>
                d.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                d.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                d.phone?.includes(searchTerm) ||
                d.license_number?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter && statusFilter !== 'All') {
            filtered = filtered.filter(d => d.status === statusFilter);
        }

        // Sort
        if (sortBy === 'name') {
            filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        } else {
            const statusOrder = { 'Available': 1, 'On Job': 2, 'Offline': 3 };
            filtered.sort((a, b) => (statusOrder[a.status as keyof typeof statusOrder] || 99) - (statusOrder[b.status as keyof typeof statusOrder] || 99));
        }

        setFilteredDrivers(filtered);
        setCurrentPage(1);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        setUploading(true);
        const { error: uploadError } = await supabase.storage
            .from('driver-profiles')
            .upload(filePath, file);

        if (uploadError) {
            toast.error('Error uploading image: ' + uploadError.message);
            setUploading(false);
            return;
        }

        const { data } = supabase.storage
            .from('driver-profiles')
            .getPublicUrl(filePath);

        setFormData(prev => ({ ...prev, image_url: data.publicUrl }));
        setUploading(false);
        toast.success('Image uploaded successfully!');
    };

    const handleSaveDriver = async () => {
        if (!formData.name || !formData.phone) {
            toast.error('Name and Phone are required');
            return;
        }

        if (editingId) {
            const { error } = await supabase
                .from('drivers')
                .update(formData)
                .eq('id', editingId);

            if (error) {
                toast.error('Failed to update driver: ' + error.message);
            } else {
                toast.success('Driver updated successfully!');
                closeModal();
                fetchDrivers();
            }
        } else {
            const { error } = await supabase
                .from('drivers')
                .insert([formData]);

            if (error) {
                toast.error('Failed to add driver: ' + error.message);
            } else {
                toast.success('Driver added successfully!');
                closeModal();
                fetchDrivers();
            }
        }
    };

    const deleteDriver = async (id: string) => {
        if (!confirm('Are you sure you want to delete this driver? This action cannot be undone.')) return;

        const { error } = await supabase.from('drivers').delete().eq('id', id);
        if (error) {
            toast.error('Error deleting: ' + error.message);
        } else {
            toast.success('Driver deleted successfully');
            fetchDrivers();
            if (selectedDriver?.id === id) {
                setSelectedDriver(null);
            }
        }
    };

    const updateDriverStatus = async (id: string, newStatus: string) => {
        const { error } = await supabase
            .from('drivers')
            .update({ status: newStatus })
            .eq('id', id);

        if (error) {
            toast.error('Failed to update status');
        } else {
            toast.success(`Status updated to ${newStatus}`);
            fetchDrivers();
            if (selectedDriver?.id === id) {
                setSelectedDriver({ ...selectedDriver, status: newStatus });
            }
        }
    };

    const openModal = (driver?: any) => {
        if (driver) {
            setEditingId(driver.id);
            setFormData({
                name: driver.name || '',
                email: driver.email || '',
                phone: driver.phone || '',
                license_number: driver.license_number || '',
                status: driver.status || 'Offline',
                image_url: driver.image_url || '',
                address: driver.address || '',
                emergency_contact: driver.emergency_contact || '',
                notes: driver.notes || ''
            });
        } else {
            setEditingId(null);
            setFormData({
                name: '',
                email: '',
                phone: '',
                license_number: '',
                status: 'Offline',
                image_url: '',
                address: '',
                emergency_contact: '',
                notes: ''
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingId(null);
    };

    const exportToCSV = () => {
        const headers = ['Name', 'Email', 'Phone', 'License Number', 'Status', 'Address', 'Emergency Contact'];
        const csvData = filteredDrivers.map(d => [
            d.name,
            d.email,
            d.phone,
            d.license_number,
            d.status,
            d.address,
            d.emergency_contact
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `drivers-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('Drivers exported successfully!');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Available': return '#10b981';
            case 'On Job': return '#f59e0b';
            case 'Offline': return '#9ca3af';
            default: return '#9ca3af';
        }
    };

    // Pagination
    const totalPages = Math.ceil(filteredDrivers.length / itemsPerPage);
    const paginatedDrivers = filteredDrivers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Stats
    const stats = {
        total: drivers.length,
        available: drivers.filter(d => d.status === 'Available').length,
        onJob: drivers.filter(d => d.status === 'On Job').length,
        offline: drivers.filter(d => d.status === 'Offline').length
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Drivers Management</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        {filteredDrivers.length} driver{filteredDrivers.length !== 1 ? 's' : ''} found
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
                    <button
                        onClick={() => openModal()}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' }}
                    >
                        <Plus size={18} /> Add Driver
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Users size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Drivers</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <UserCheck size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Available Now</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>{stats.available}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Briefcase size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>On Job</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#f59e0b' }}>{stats.onJob}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Clock size={20} color="#9ca3af" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Offline</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#9ca3af' }}>{stats.offline}</div>
                </div>
            </div>

            {/* Search & Filters */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by name, email, phone, or license number..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ width: '100%', padding: '0.7rem 0.7rem 0.7rem 2.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                </div>

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
                                <option value="Available">Available</option>
                                <option value="On Job">On Job</option>
                                <option value="Offline">Offline</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'name' | 'status')}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="name">Name (A-Z)</option>
                                <option value="status">Status</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setStatusFilter('All');
                                    setSortBy('name');
                                }}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Drivers Grid */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>Loading drivers...</div>
            ) : paginatedDrivers.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af' }}>
                    {searchTerm || statusFilter !== 'All' ? 'No drivers match your filters.' : 'No drivers found. Add your first driver to get started.'}
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {paginatedDrivers.map((driver) => (
                        <div key={driver.id} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', transition: 'transform 0.2s, box-shadow 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)'; }}>
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {driver.image_url ? (
                                        <div style={{
                                            width: '48px', height: '48px', borderRadius: '50%',
                                            border: `2px solid ${getStatusColor(driver.status)}`,
                                            backgroundImage: `url(${driver.image_url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}></div>
                                    ) : (
                                        <div style={{
                                            width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            border: `2px solid ${getStatusColor(driver.status)}`
                                        }}>
                                            <User size={24} color="#4b5563" />
                                        </div>
                                    )}

                                    <div>
                                        <h3 style={{ fontWeight: '600', color: '#1f2937', fontSize: '1.1rem' }}>{driver.name}</h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem', color: '#6b7280', fontSize: '0.85rem' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: getStatusColor(driver.status) }}></div>
                                            {driver.status}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => openModal(driver)}
                                        title="Edit Driver"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button
                                        onClick={() => deleteDriver(driver.id)}
                                        title="Delete Driver"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563', fontSize: '0.9rem' }}>
                                        <Phone size={16} color="#9ca3af" /> {driver.phone}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563', fontSize: '0.9rem' }}>
                                        <Mail size={16} color="#9ca3af" /> {driver.email || 'No email'}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4b5563', fontSize: '0.9rem' }}>
                                        <Car size={16} color="#9ca3af" /> License: {driver.license_number || 'N/A'}
                                    </div>
                                </div>

                                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => setSelectedDriver(driver)}
                                        style={{ flex: 1, padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.85rem', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                    >
                                        <Eye size={14} /> View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredDrivers.length)} of {filteredDrivers.length} drivers
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

            {/* Add/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '550px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                {editingId ? 'Edit Driver' : 'Add New Driver'}
                            </h2>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Image Upload */}
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                                    margin: '0 auto 1rem', overflow: 'hidden', position: 'relative',
                                    backgroundImage: formData.image_url ? `url(${formData.image_url})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    {!formData.image_url && <User size={40} color="#9ca3af" />}
                                </div>
                                <label style={{
                                    cursor: 'pointer', padding: '0.5rem 1rem', border: '1px solid #d1d5db',
                                    borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500', color: '#374151',
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                                }}>
                                    {uploading ? 'Uploading...' : 'Upload Photo'}
                                    <input type="file" hidden accept="image/*" onChange={handleImageUpload} disabled={uploading} />
                                    <Upload size={14} />
                                </label>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Full Name *</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="e.g. John Smith"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="driver@example.com"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Phone Number *</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="+61 400 ..."
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>License Number</label>
                                    <input
                                        type="text"
                                        value={formData.license_number}
                                        onChange={(e) => setFormData({ ...formData, license_number: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="ABC123456"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                    >
                                        <option value="Available">Available</option>
                                        <option value="Offline">Offline</option>
                                        <option value="On Job">On Job</option>
                                    </select>
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Address</label>
                                    <input
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="123 Main St, Sydney"
                                    />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Emergency Contact</label>
                                    <input
                                        type="text"
                                        value={formData.emergency_contact}
                                        onChange={(e) => setFormData({ ...formData, emergency_contact: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="+61 400 ... (Name)"
                                    />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Notes</label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        rows={2}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px', resize: 'vertical' }}
                                        placeholder="Additional information..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '1rem', backgroundColor: '#f9fafb' }}>
                            <button
                                onClick={handleSaveDriver}
                                disabled={uploading}
                                style={{ flex: 1, padding: '0.75rem', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', opacity: uploading ? 0.7 : 1 }}
                            >
                                {editingId ? 'Update Driver' : 'Create Driver'}
                            </button>
                            <button
                                onClick={closeModal}
                                style={{ flex: 1, padding: '0.75rem', backgroundColor: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* View Details Modal */}
            {selectedDriver && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '550px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Driver Details</h2>
                            <button onClick={() => setSelectedDriver(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '1.5rem' }}>×</button>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            {/* Profile Section */}
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                {selectedDriver.image_url ? (
                                    <div style={{
                                        width: '100px', height: '100px', borderRadius: '50%',
                                        border: `3px solid ${getStatusColor(selectedDriver.status)}`,
                                        backgroundImage: `url(${selectedDriver.image_url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        margin: '0 auto 1rem'
                                    }}></div>
                                ) : (
                                    <div style={{
                                        width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#f3f4f6',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: `3px solid ${getStatusColor(selectedDriver.status)}`,
                                        margin: '0 auto 1rem'
                                    }}>
                                        <User size={50} color="#4b5563" />
                                    </div>
                                )}
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>{selectedDriver.name}</h3>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '999px', backgroundColor: getStatusColor(selectedDriver.status) + '20', color: getStatusColor(selectedDriver.status), fontSize: '0.85rem', fontWeight: '600' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: getStatusColor(selectedDriver.status) }}></div>
                                    {selectedDriver.status}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Contact Information</label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Phone size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedDriver.phone}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <Mail size={16} color="#6b7280" />
                                        <span style={{ color: '#374151' }}>{selectedDriver.email || 'No email provided'}</span>
                                    </div>
                                    {selectedDriver.address && (
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <MapPin size={16} color="#6b7280" />
                                            <span style={{ color: '#374151' }}>{selectedDriver.address}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* License & Emergency */}
                            <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Professional Details</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>License Number</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedDriver.license_number || 'N/A'}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Emergency Contact</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedDriver.emergency_contact || 'N/A'}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Notes */}
                            {selectedDriver.notes && (
                                <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                    <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Notes</label>
                                    <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.5' }}>{selectedDriver.notes}</p>
                                </div>
                            )}

                            {/* Status Update Actions */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>Update Status</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => updateDriverStatus(selectedDriver.id, 'Available')}
                                        style={{ padding: '0.75rem', border: '1px solid #10b981', background: selectedDriver.status === 'Available' ? '#ecfdf5' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#065f46', fontSize: '0.85rem' }}
                                    >
                                        Available
                                    </button>
                                    <button
                                        onClick={() => updateDriverStatus(selectedDriver.id, 'On Job')}
                                        style={{ padding: '0.75rem', border: '1px solid #f59e0b', background: selectedDriver.status === 'On Job' ? '#fffbeb' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#92400e', fontSize: '0.85rem' }}
                                    >
                                        On Job
                                    </button>
                                    <button
                                        onClick={() => updateDriverStatus(selectedDriver.id, 'Offline')}
                                        style={{ padding: '0.75rem', border: '1px solid #9ca3af', background: selectedDriver.status === 'Offline' ? '#f9fafb' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}
                                    >
                                        Offline
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={() => { setSelectedDriver(null); openModal(selectedDriver); }}
                                    style={{ flex: 1, padding: '0.75rem', border: '1px solid #3b82f6', background: '#3b82f6', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <Edit size={16} /> Edit Profile
                                </button>
                                <button
                                    onClick={() => { deleteDriver(selectedDriver.id); }}
                                    style={{ flex: 1, padding: '0.75rem', border: '1px solid #fee2e2', background: 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

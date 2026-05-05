"use client";

import { useState, useEffect } from 'react';
import {
    Plus,
    Car,
    Settings,
    AlertCircle,
    CheckCircle,
    Upload,
    Edit,
    Trash2,
    Search,
    Filter,
    Download,
    Eye,
    ChevronLeft,
    ChevronRight,
    Gauge,
    Calendar,
    Wrench,
    X
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function FleetPage() {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [filteredVehicles, setFilteredVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

    // Filter State
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState<'make' | 'year'>('make');

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        plate_number: '',
        year: new Date().getFullYear().toString(),
        color: 'Black',
        category: 'Executive Sedans',
        status: 'Active',
        image_url: '',
        mileage: '',
        last_service: '',
        notes: ''
    });

    useEffect(() => {
        fetchVehicles();
    }, []);

    useEffect(() => {
        filterVehicles();
    }, [vehicles, searchTerm, statusFilter, categoryFilter, sortBy]);

    const fetchVehicles = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('fleet_vehicles')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching fleet:', error);
            if (error.code === '42P01') {
                toast.error("Table 'fleet_vehicles' missing. Please create it.");
            } else {
                toast.error('Failed to load fleet');
            }
        } else {
            setVehicles(data || []);
        }
        setLoading(false);
    };

    const filterVehicles = () => {
        let filtered = [...vehicles];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(v =>
                v.make?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.model?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.plate_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                v.color?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter && statusFilter !== 'All') {
            filtered = filtered.filter(v => v.status === statusFilter);
        }

        // Category filter
        if (categoryFilter && categoryFilter !== 'All') {
            filtered = filtered.filter(v => v.category === categoryFilter);
        }

        // Sort
        if (sortBy === 'make') {
            filtered.sort((a, b) => (a.make || '').localeCompare(b.make || ''));
        } else {
            filtered.sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'));
        }

        setFilteredVehicles(filtered);
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
            .from('fleet-images')
            .upload(filePath, file);

        if (uploadError) {
            toast.error('Error uploading image: ' + uploadError.message);
            setUploading(false);
            return;
        }

        const { data } = supabase.storage
            .from('fleet-images')
            .getPublicUrl(filePath);

        setFormData(prev => ({ ...prev, image_url: data.publicUrl }));
        setUploading(false);
        toast.success('Image uploaded successfully!');
    };

    const handleSaveVehicle = async () => {
        if (!formData.make || !formData.plate_number) {
            toast.error('Make and Plate Number are required');
            return;
        }

        if (editingId) {
            const { error, data } = await supabase
                .from('fleet_vehicles')
                .update(formData)
                .eq('id', editingId)
                .select();

            if (error) {
                toast.error('Failed to update vehicle: ' + error.message);
            } else if (!data || data.length === 0) {
                toast.error('Failed to update vehicle: Permission denied or record missing');
            } else {
                toast.success('Vehicle updated successfully!');
                closeModal();
                fetchVehicles();
            }
        } else {
            const { error } = await supabase
                .from('fleet_vehicles')
                .insert([formData]);

            if (error) {
                toast.error('Failed to add vehicle: ' + error.message);
            } else {
                toast.success('Vehicle added successfully!');
                closeModal();
                fetchVehicles();
            }
        }
    };

    const deleteVehicle = async (id: string) => {
        if (!confirm('Are you sure you want to delete this vehicle? This action cannot be undone.')) return;

        const { error, data } = await supabase.from('fleet_vehicles').delete().eq('id', id).select();
        if (error) {
            toast.error('Error deleting: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Deletion failed: Permission denied or record in use');
        } else {
            toast.success('Vehicle deleted successfully');
            fetchVehicles();
            if (selectedVehicle?.id === id) {
                setSelectedVehicle(null);
            }
        }
    };

    const updateVehicleStatus = async (id: string, newStatus: string) => {
        const { error, data } = await supabase
            .from('fleet_vehicles')
            .update({ status: newStatus })
            .eq('id', id)
            .select();

        if (error) {
            toast.error('Failed to update status: ' + error.message);
        } else if (!data || data.length === 0) {
            toast.error('Update failed: Permission denied or record missing');
        } else {
            toast.success(`Status updated to ${newStatus}`);
            fetchVehicles();
            if (selectedVehicle?.id === id) {
                setSelectedVehicle({ ...selectedVehicle, status: newStatus });
            }
        }
    };

    const openModal = (vehicle?: any) => {
        if (vehicle) {
            setEditingId(vehicle.id);
            setFormData({
                make: vehicle.make || '',
                model: vehicle.model || '',
                plate_number: vehicle.plate_number || '',
                year: vehicle.year || new Date().getFullYear().toString(),
                color: vehicle.color || 'Black',
                category: vehicle.category || 'Executive Sedans',
                status: vehicle.status || 'Active',
                image_url: vehicle.image_url || '',
                mileage: vehicle.mileage || '',
                last_service: vehicle.last_service || '',
                notes: vehicle.notes || ''
            });
        } else {
            setEditingId(null);
            setFormData({
                make: '',
                model: '',
                plate_number: '',
                year: new Date().getFullYear().toString(),
                color: 'Black',
                category: 'Executive Sedans',
                status: 'Active',
                image_url: '',
                mileage: '',
                last_service: '',
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
        const headers = ['Make', 'Model', 'Plate Number', 'Year', 'Color', 'Category', 'Status', 'Mileage'];
        const csvData = filteredVehicles.map(v => [
            v.make,
            v.model,
            v.plate_number,
            v.year,
            v.color,
            v.category,
            v.status,
            v.mileage
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fleet-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('Fleet exported successfully!');
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'Active': return <span style={{ backgroundColor: '#dcfce7', color: '#166534', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600' }}>Active</span>;
            case 'On Job': return <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600' }}>On Job</span>;
            case 'Maintenance': return <span style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600' }}>Maintenance</span>;
            default: return <span style={{ backgroundColor: '#f3f4f6', color: '#374151', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600' }}>{status}</span>;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return '#10b981';
            case 'On Job': return '#3b82f6';
            case 'Maintenance': return '#ef4444';
            default: return '#6b7280';
        }
    };

    // Pagination
    const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
    const paginatedVehicles = filteredVehicles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Stats
    const stats = {
        total: vehicles.length,
        active: vehicles.filter(v => v.status === 'Active').length,
        onJob: vehicles.filter(v => v.status === 'On Job').length,
        maintenance: vehicles.filter(v => v.status === 'Maintenance').length
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Fleet Management</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? 's' : ''} found
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
                        <Plus size={18} /> Add Vehicle
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Car size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Fleet</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <CheckCircle size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Active</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>{stats.active}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Gauge size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>On Job</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#3b82f6' }}>{stats.onJob}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Wrench size={20} color="#ef4444" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Maintenance</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ef4444' }}>{stats.maintenance}</div>
                </div>
            </div>

            {/* Search & Filters */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by make, model, plate number, or color..."
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
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="On Job">On Job</option>
                                <option value="Maintenance">Maintenance</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Category</label>
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="All">All Categories</option>
                                <option value="Executive Sedans">Executive Sedans</option>
                                <option value="Premium Sedans">Premium Sedans</option>
                                <option value="Premium SUVs">Premium SUVs</option>
                                <option value="People Movers">People Movers</option>
                                <option value="Minibuses & Coaches">Minibuses & Coaches</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'make' | 'year')}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="make">Make (A-Z)</option>
                                <option value="year">Year (Newest)</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setStatusFilter('All');
                                    setCategoryFilter('All');
                                    setSortBy('make');
                                }}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Vehicles Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Vehicle</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Plate Number</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Category</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Year/Color</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Status</th>
                            <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>Loading fleet...</td></tr>
                        ) : paginatedVehicles.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: '#9ca3af' }}>
                                    {searchTerm || statusFilter !== 'All' || categoryFilter !== 'All' ? 'No vehicles match your filters.' : 'No vehicles added yet.'}
                                </td>
                            </tr>
                        ) : (
                            paginatedVehicles.map((car) => (
                                <tr key={car.id} style={{ borderBottom: '1px solid #f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            {car.image_url ? (
                                                <div style={{
                                                    width: '50px', height: '50px', borderRadius: '8px',
                                                    backgroundImage: `url(${car.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center',
                                                    border: '1px solid #e5e7eb'
                                                }}></div>
                                            ) : (
                                                <div style={{ width: '50px', height: '50px', borderRadius: '8px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Car size={24} color="#4b5563" />
                                                </div>
                                            )}

                                            <div>
                                                <div style={{ fontWeight: '600', color: '#1f2937' }}>{car.make}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{car.model}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '500', color: '#374151' }}>
                                        <span style={{ border: '1px solid #d1d5db', padding: '0.25rem 0.5rem', borderRadius: '4px', backgroundColor: '#f9fafb', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                                            {car.plate_number}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#4b5563' }}>{car.category}</td>
                                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>{car.year} • {car.color}</td>
                                    <td style={{ padding: '1rem' }}>{getStatusBadge(car.status)}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                            <button
                                                onClick={() => setSelectedVehicle(car)}
                                                title="View Details"
                                                style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', color: '#6b7280' }}
                                            >
                                                <Eye size={14} />
                                            </button>
                                            <button
                                                onClick={() => openModal(car)}
                                                title="Edit"
                                                style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', color: '#6b7280' }}
                                            >
                                                <Edit size={14} />
                                            </button>
                                            <button
                                                onClick={() => deleteVehicle(car.id)}
                                                title="Delete"
                                                style={{ padding: '0.4rem', border: '1px solid #fee2e2', borderRadius: '4px', background: '#fef2f2', cursor: 'pointer', color: '#ef4444' }}
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredVehicles.length)} of {filteredVehicles.length}
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

            {/* Add/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '550px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                {editingId ? 'Edit Vehicle' : 'Add New Vehicle'}
                            </h2>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {/* Image Upload */}
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <div style={{
                                    width: '120px', height: '80px', borderRadius: '8px', backgroundColor: '#f3f4f6',
                                    margin: '0 auto 1rem', overflow: 'hidden',
                                    backgroundImage: formData.image_url ? `url(${formData.image_url})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    border: '2px dashed #d1d5db'
                                }}>
                                    {!formData.image_url && <Car size={40} color="#9ca3af" />}
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
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Make *</label>
                                    <input
                                        type="text"
                                        value={formData.make}
                                        onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="e.g. Mercedes-Benz"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Model</label>
                                    <input
                                        type="text"
                                        value={formData.model}
                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="e.g. S-Class"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Plate Number *</label>
                                    <input
                                        type="text"
                                        value={formData.plate_number}
                                        onChange={(e) => setFormData({ ...formData, plate_number: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="ABC123"
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Year</label>
                                    <input
                                        type="number"
                                        value={formData.year}
                                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Color</label>
                                    <input
                                        type="text"
                                        value={formData.color}
                                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                    >
                                        <option value="Executive Sedans">Executive Sedans (1-3 pax)</option>
                                        <option value="Premium Sedans">Premium Sedans (1-3 pax)</option>
                                        <option value="Premium SUVs">Premium SUVs (1-3 pax)</option>
                                        <option value="People Movers">People Movers (1-6 pax)</option>
                                        <option value="Minibuses & Coaches">Minibuses & Coaches (1-14 pax)</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Status</label>
                                    <select
                                        value={formData.status}
                                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="On Job">On Job</option>
                                        <option value="Maintenance">Maintenance</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Mileage (km)</label>
                                    <input
                                        type="number"
                                        value={formData.mileage}
                                        onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
                                        placeholder="50000"
                                    />
                                </div>
                                <div style={{ gridColumn: 'span 2' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.25rem' }}>Last Service Date</label>
                                    <input
                                        type="date"
                                        value={formData.last_service}
                                        onChange={(e) => setFormData({ ...formData, last_service: e.target.value })}
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
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
                                onClick={handleSaveVehicle}
                                disabled={uploading}
                                style={{ flex: 1, padding: '0.75rem', backgroundColor: '#1e3a8a', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: 'pointer', opacity: uploading ? 0.7 : 1 }}
                            >
                                {editingId ? 'Update Vehicle' : 'Add Vehicle'}
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
            {selectedVehicle && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '550px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>Vehicle Details</h2>
                            <button onClick={() => setSelectedVehicle(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '1.5rem' }}>×</button>
                        </div>

                        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
                            {/* Vehicle Image */}
                            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                {selectedVehicle.image_url ? (
                                    <div style={{
                                        width: '100%', height: '200px', borderRadius: '8px',
                                        backgroundImage: `url(${selectedVehicle.image_url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        border: '1px solid #e5e7eb'
                                    }}></div>
                                ) : (
                                    <div style={{
                                        width: '100%', height: '200px', borderRadius: '8px', backgroundColor: '#f3f4f6',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: '1px solid #e5e7eb'
                                    }}>
                                        <Car size={80} color="#9ca3af" />
                                    </div>
                                )}
                            </div>

                            {/* Vehicle Info */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem', textAlign: 'center' }}>
                                    {selectedVehicle.make} {selectedVehicle.model}
                                </h3>
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                                    {getStatusBadge(selectedVehicle.status)}
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.75rem' }}>Vehicle Information</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Plate Number</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937', fontFamily: 'monospace' }}>{selectedVehicle.plate_number}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Category</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.category}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Year</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.year}</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Color</span>
                                        <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.color}</span>
                                    </div>
                                    {selectedVehicle.mileage && (
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Mileage</span>
                                            <span style={{ fontWeight: '600', color: '#1f2937' }}>{selectedVehicle.mileage} km</span>
                                        </div>
                                    )}
                                    {selectedVehicle.last_service && (
                                        <div>
                                            <span style={{ display: 'block', fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Last Service</span>
                                            <span style={{ fontWeight: '600', color: '#1f2937' }}>{new Date(selectedVehicle.last_service).toLocaleDateString()}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Notes */}
                            {selectedVehicle.notes && (
                                <div style={{ marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                    <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Notes</label>
                                    <p style={{ color: '#374151', fontSize: '0.9rem', lineHeight: '1.5' }}>{selectedVehicle.notes}</p>
                                </div>
                            )}

                            {/* Status Update Actions */}
                            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
                                <label style={{ fontSize: '0.85rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600', display: 'block', marginBottom: '1rem' }}>Update Status</label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => updateVehicleStatus(selectedVehicle.id, 'Active')}
                                        style={{ padding: '0.75rem', border: '1px solid #10b981', background: selectedVehicle.status === 'Active' ? '#ecfdf5' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#065f46', fontSize: '0.85rem' }}
                                    >
                                        Active
                                    </button>
                                    <button
                                        onClick={() => updateVehicleStatus(selectedVehicle.id, 'On Job')}
                                        style={{ padding: '0.75rem', border: '1px solid #3b82f6', background: selectedVehicle.status === 'On Job' ? '#eff6ff' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#1e40af', fontSize: '0.85rem' }}
                                    >
                                        On Job
                                    </button>
                                    <button
                                        onClick={() => updateVehicleStatus(selectedVehicle.id, 'Maintenance')}
                                        style={{ padding: '0.75rem', border: '1px solid #ef4444', background: selectedVehicle.status === 'Maintenance' ? '#fef2f2' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#991b1b', fontSize: '0.85rem' }}
                                    >
                                        Maintenance
                                    </button>
                                    <button
                                        onClick={() => updateVehicleStatus(selectedVehicle.id, 'Inactive')}
                                        style={{ padding: '0.75rem', border: '1px solid #9ca3af', background: selectedVehicle.status === 'Inactive' ? '#f9fafb' : 'white', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}
                                    >
                                        Inactive
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={() => { setSelectedVehicle(null); openModal(selectedVehicle); }}
                                    style={{ flex: 1, padding: '0.75rem', border: '1px solid #3b82f6', background: '#3b82f6', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                                >
                                    <Edit size={16} /> Edit Vehicle
                                </button>
                                <button
                                    onClick={() => { deleteVehicle(selectedVehicle.id); }}
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

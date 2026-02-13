"use client";

import { useState, useEffect } from 'react';
import {
    FileText,
    Download,
    Send,
    DollarSign,
    Calendar,
    User,
    Mail,
    Phone,
    Plus,
    Eye,
    Check,
    X,
    Search,
    Filter,
    Trash2,
    Edit,
    ChevronLeft,
    ChevronRight,
    TrendingUp,
    AlertCircle
} from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from 'sonner';

export default function InvoicesPage() {
    const [invoices, setInvoices] = useState<any[]>([]);
    const [filteredInvoices, setFilteredInvoices] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [dateFilter, setDateFilter] = useState('');

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Edit mode
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState<any>(null);

    useEffect(() => {
        fetchInvoices();
    }, []);

    useEffect(() => {
        filterInvoices();
    }, [invoices, filter, searchTerm, dateFilter]);

    const fetchInvoices = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('invoices')
            .select('*, bookings(pickup_location, dropoff_location)')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setInvoices(data);
        } else if (error) {
            toast.error('Failed to load invoices');
        }
        setLoading(false);
    };

    const filterInvoices = () => {
        let filtered = [...invoices];

        // Status filter
        if (filter !== 'all') {
            filtered = filtered.filter(inv => inv.payment_status === filter);
        }

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(inv =>
                inv.invoice_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inv.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                inv.customer_email?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Date filter
        if (dateFilter) {
            filtered = filtered.filter(inv =>
                inv.issue_date?.startsWith(dateFilter)
            );
        }

        setFilteredInvoices(filtered);
        setCurrentPage(1);
    };

    const markAsPaid = async (invoiceId: string, amount: number) => {
        const paymentMethod = prompt('Payment method (e.g., Cash, Card, Bank Transfer):');
        if (!paymentMethod) return;

        const { error } = await supabase
            .from('invoices')
            .update({
                payment_status: 'paid',
                payment_method: paymentMethod,
                paid_at: new Date().toISOString()
            })
            .eq('id', invoiceId);

        if (!error) {
            fetchInvoices();
            toast.success('Invoice marked as paid!');
        } else {
            toast.error('Failed to mark as paid: ' + error.message);
        }
    };

    const deleteInvoice = async (id: string) => {
        if (!confirm('Are you sure you want to delete this invoice? This action cannot be undone.')) return;

        const { error } = await supabase
            .from('invoices')
            .delete()
            .eq('id', id);

        if (error) {
            toast.error('Failed to delete invoice');
        } else {
            toast.success('Invoice deleted successfully');
            fetchInvoices();
            if (selectedInvoice?.id === id) {
                setShowModal(false);
            }
        }
    };

    const handleEmailInvoice = async () => {
        if (!selectedInvoice) return;

        const loadingToast = toast.loading(`Sending invoice to ${selectedInvoice.customer_email}...`);

        try {
            // 1. Fetch template
            const { data: template, error: tError } = await supabase
                .from('email_templates')
                .select('*')
                .eq('template_name', 'invoice_sent')
                .eq('is_active', true)
                .single();

            if (tError || !template) throw new Error('Invoice email template not found or inactive');

            // 2. Populate Template
            let subject = template.subject;
            let body = template.body_html;

            const lineItems = typeof selectedInvoice.line_items === 'string'
                ? JSON.parse(selectedInvoice.line_items)
                : selectedInvoice.line_items || [];

            const service_description = lineItems[0]?.description || 'Chauffeur Service';

            const variables: Record<string, string> = {
                customer_name: selectedInvoice.customer_name || '',
                invoice_number: selectedInvoice.invoice_number || '',
                issue_date: selectedInvoice.issue_date ? new Date(selectedInvoice.issue_date).toLocaleDateString() : '',
                due_date: selectedInvoice.due_date ? new Date(selectedInvoice.due_date).toLocaleDateString() : '',
                service_description: service_description,
                total_amount: `$${parseFloat(selectedInvoice.total_amount || 0).toFixed(2)}`,
                invoice_id: selectedInvoice.id
            };

            Object.entries(variables).forEach(([key, value]) => {
                const regex = new RegExp(`{${key}}`, 'g');
                subject = subject.replace(regex, value);
                body = body.replace(regex, value);
            });

            // 3. Send Email via API
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: selectedInvoice.customer_email,
                    subject: subject,
                    html: body
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.details || 'Email API responded with an error');
            }

            toast.success('Invoice emailed successfully!', { id: loadingToast });
        } catch (error: any) {
            console.error('Email error:', error);
            toast.error('Failed to send invoice: ' + error.message, { id: loadingToast });
        }
    };

    const exportToCSV = () => {
        const headers = ['Invoice #', 'Customer', 'Email', 'Issue Date', 'Due Date', 'Amount', 'Status'];
        const csvData = filteredInvoices.map(inv => [
            inv.invoice_number,
            inv.customer_name,
            inv.customer_email,
            new Date(inv.issue_date).toLocaleDateString(),
            new Date(inv.due_date).toLocaleDateString(),
            inv.total_amount,
            inv.payment_status
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `invoices-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('Invoices exported successfully!');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid': return '#10b981';
            case 'partial': return '#f59e0b';
            case 'overdue': return '#ef4444';
            default: return '#6b7280';
        }
    };

    const getStatusBadge = (status: string) => {
        const color = getStatusColor(status);
        return (
            <span style={{
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '600',
                backgroundColor: color + '20',
                color: color,
                textTransform: 'uppercase'
            }}>
                {status}
            </span>
        );
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setEditForm({
            ...selectedInvoice,
            line_items: typeof selectedInvoice.line_items === 'string' ? JSON.parse(selectedInvoice.line_items) : selectedInvoice.line_items,
            tax_rate: selectedInvoice.tax_rate || 10
        });
    };

    const handleSaveInvoice = async () => {
        if (!editForm) return;

        const subtotal = editForm.line_items.reduce((sum: number, item: any) => sum + parseFloat(item.amount || 0), 0);
        const taxRate = parseFloat(editForm.tax_rate || 0);
        const taxAmount = (subtotal * taxRate) / 100;
        const total = subtotal + taxAmount;

        const updates = {
            customer_name: editForm.customer_name,
            customer_email: editForm.customer_email,
            customer_phone: editForm.customer_phone,
            issue_date: editForm.issue_date,
            due_date: editForm.due_date,
            line_items: JSON.stringify(editForm.line_items),
            subtotal: subtotal,
            tax_amount: taxAmount,
            total_amount: total,
            tax_rate: taxRate
        };

        const { error } = await supabase
            .from('invoices')
            .update(updates)
            .eq('id', selectedInvoice.id);

        if (error) {
            toast.error('Failed to update invoice: ' + error.message);
        } else {
            toast.success('Invoice updated successfully!');
            setIsEditing(false);
            setEditForm(null);
            fetchInvoices();
            setSelectedInvoice({ ...selectedInvoice, ...updates });
        }
    };

    const updateLineItem = (index: number, field: string, value: any) => {
        const newItems = [...editForm.line_items];
        newItems[index] = { ...newItems[index], [field]: value };
        setEditForm({ ...editForm, line_items: newItems });
    };

    // Pagination
    const totalPages = Math.ceil(filteredInvoices.length / itemsPerPage);
    const paginatedInvoices = filteredInvoices.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Stats
    const stats = {
        total: invoices.length,
        totalAmount: invoices.reduce((sum, inv) => sum + parseFloat(inv.total_amount || 0), 0),
        paid: invoices.filter(i => i.payment_status === 'paid').reduce((sum, inv) => sum + parseFloat(inv.total_amount || 0), 0),
        unpaid: invoices.filter(i => i.payment_status === 'unpaid').reduce((sum, inv) => sum + parseFloat(inv.total_amount || 0), 0),
        overdue: invoices.filter(i => i.payment_status === 'overdue').length
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Invoices</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        {filteredInvoices.length} invoice{filteredInvoices.length !== 1 ? 's' : ''} found
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
                        <FileText size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Invoices</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <TrendingUp size={20} color="#8b5cf6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Amount</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>${stats.totalAmount.toFixed(2)}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Check size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Paid</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>${stats.paid.toFixed(2)}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <AlertCircle size={20} color="#ef4444" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Unpaid</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#ef4444' }}>${stats.unpaid.toFixed(2)}</div>
                </div>
            </div>

            {/* Search & Filters */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by invoice #, customer name, or email..."
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
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="all">All Status</option>
                                <option value="unpaid">Unpaid</option>
                                <option value="paid">Paid</option>
                                <option value="partial">Partial</option>
                                <option value="overdue">Overdue</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Issue Date</label>
                            <input
                                type="date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setFilter('all');
                                    setDateFilter('');
                                }}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Invoices Table */}
            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Invoice #</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Customer</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Date</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Amount</th>
                            <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Status</th>
                            <th style={{ padding: '1rem', textAlign: 'right', fontWeight: '600', color: '#4b5563', fontSize: '0.85rem' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    Loading invoices...
                                </td>
                            </tr>
                        ) : paginatedInvoices.length === 0 ? (
                            <tr>
                                <td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                                    {searchTerm || filter !== 'all' || dateFilter ? 'No invoices match your filters.' : 'No invoices found'}
                                </td>
                            </tr>
                        ) : (
                            paginatedInvoices.map((invoice) => (
                                <tr key={invoice.id} style={{ borderBottom: '1px solid #f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}>
                                    <td style={{ padding: '1rem', fontWeight: '600', color: '#1e3a8a' }}>
                                        {invoice.invoice_number}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ fontWeight: '600', color: '#1f2937' }}>{invoice.customer_name}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{invoice.customer_email}</div>
                                    </td>
                                    <td style={{ padding: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
                                        {new Date(invoice.issue_date).toLocaleDateString()}
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '700', color: '#1f2937', fontSize: '1.05rem' }}>
                                        ${parseFloat(invoice.total_amount).toFixed(2)}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {getStatusBadge(invoice.payment_status)}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                            <button
                                                onClick={() => {
                                                    setSelectedInvoice(invoice);
                                                    setIsEditing(false);
                                                    setShowModal(true);
                                                }}
                                                style={{ padding: '0.4rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', color: '#6b7280' }}
                                                title="View"
                                            >
                                                <Eye size={14} />
                                            </button>
                                            {invoice.payment_status !== 'paid' && (
                                                <button
                                                    onClick={() => markAsPaid(invoice.id, invoice.total_amount)}
                                                    style={{ padding: '0.4rem', border: 'none', borderRadius: '4px', background: '#10b981', color: 'white', cursor: 'pointer' }}
                                                    title="Mark as Paid"
                                                >
                                                    <Check size={14} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => deleteInvoice(invoice.id)}
                                                style={{ padding: '0.4rem', border: '1px solid #fee2e2', borderRadius: '4px', background: '#fef2f2', cursor: 'pointer', color: '#ef4444' }}
                                                title="Delete"
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
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredInvoices.length)} of {filteredInvoices.length}
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

            {/* Invoice Detail Modal & Print View */}
            {showModal && selectedInvoice && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '800px', maxWidth: '95%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>

                        {/* Modal Header */}
                        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {!isEditing ? (
                                    <>
                                        <button
                                            onClick={() => {
                                                const printContent = document.getElementById('printable-invoice');
                                                const windowUrl = 'about:blank';
                                                const uniqueName = new Date().getTime();
                                                const windowName = 'Print' + uniqueName;
                                                const printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000,width=0,height=0');

                                                if (printWindow && printContent) {
                                                    printWindow.document.write(`
                                                        <html>
                                                            <head>
                                                                <title>Invoice ${selectedInvoice.invoice_number}</title>
                                                                <style>
                                                                    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; }
                                                                    .invoice-box { max-width: 800px; margin: auto; padding: 30px; border: 1px solid #eee; box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); font-size: 16px; line-height: 24px; color: #555; }
                                                                    .invoice-box table { width: 100%; line-height: inherit; text-align: left; }
                                                                    .invoice-box table td { padding: 5px; vertical-align: top; }
                                                                    .invoice-box table tr td:nth-child(2) { text-align: right; }
                                                                    .invoice-box table tr.top table td { padding-bottom: 20px; }
                                                                    .invoice-box table tr.top table td.title { font-size: 45px; line-height: 45px; color: #333; }
                                                                    .invoice-box table tr.information table td { padding-bottom: 40px; }
                                                                    .invoice-box table tr.heading td { background: #eee; border-bottom: 1px solid #ddd; font-weight: bold; }
                                                                    .invoice-box table tr.details td { padding-bottom: 20px; }
                                                                    .invoice-box table tr.item td { border-bottom: 1px solid #eee; }
                                                                    .invoice-box table tr.item.last td { border-bottom: none; }
                                                                    .invoice-box table tr.total td:nth-child(2) { border-top: 2px solid #eee; font-weight: bold; }
                                                                </style>
                                                            </head>
                                                            <body>
                                                                ${printContent.innerHTML}
                                                                <script>
                                                                    setTimeout(function(){ window.print(); window.close(); }, 500);
                                                                </script>
                                                            </body>
                                                        </html>
                                                    `);
                                                    printWindow.document.close();
                                                    printWindow.focus();
                                                }
                                            }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            <Download size={16} /> Print / PDF
                                        </button>
                                        <button
                                            onClick={handleEditClick}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', color: '#b45309', border: '1px solid #fbbf24', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            <Edit size={16} /> Edit Invoice
                                        </button>
                                        <button
                                            onClick={handleEmailInvoice}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            <Send size={16} /> Email
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={handleSaveInvoice}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#059669', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            <Check size={16} /> Save Changes
                                        </button>
                                        <button
                                            onClick={() => { setIsEditing(false); setEditForm(null); }}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'white', color: '#ef4444', border: '1px solid #fecaca', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}
                                        >
                                            <X size={16} /> Cancel
                                        </button>
                                    </>
                                )}
                            </div>
                            <button onClick={() => setShowModal(false)} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                                <X size={24} color="#6b7280" />
                            </button>
                        </div>

                        {/* Printable Area / Edit Area */}
                        <div id="printable-invoice" style={{ overflowY: 'auto', padding: '2rem', backgroundColor: isEditing ? '#f3f4f6' : '#525659' }}>
                            <div className="invoice-box" style={{ backgroundColor: 'white', minHeight: '1000px', padding: '40px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                                <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
                                    <tbody>
                                        <tr className="top">
                                            <td colSpan={2} style={{ paddingBottom: '20px' }}>
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td className="title" style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e3a8a' }}>
                                                                AUZZSI CHAUFFEUR
                                                            </td>
                                                            <td style={{ textAlign: 'right' }}>
                                                                Invoice #: {selectedInvoice.invoice_number}<br />
                                                                {isEditing ? (
                                                                    <>
                                                                        <div style={{ marginBottom: '5px' }}>Created: <input type="date" value={editForm.issue_date?.split('T')[0]} onChange={(e) => setEditForm({ ...editForm, issue_date: e.target.value })} style={{ padding: '2px 5px' }} /></div>
                                                                        <div>Due: <input type="date" value={editForm.due_date?.split('T')[0]} onChange={(e) => setEditForm({ ...editForm, due_date: e.target.value })} style={{ padding: '2px 5px' }} /></div>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        Created: {new Date(selectedInvoice.issue_date).toLocaleDateString()}<br />
                                                                        Due: {new Date(selectedInvoice.due_date).toLocaleDateString()}
                                                                    </>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr className="information">
                                            <td colSpan={2} style={{ paddingBottom: '40px' }}>
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ verticalAlign: 'top' }}>
                                                                <strong>Pay To:</strong><br />
                                                                Auzzsi Chauffeur Services<br />
                                                                123 Luxury Lane<br />
                                                                Sydney, NSW 2000
                                                            </td>
                                                            <td style={{ textAlign: 'right', verticalAlign: 'top' }}>
                                                                <strong>Bill To:</strong><br />
                                                                {isEditing ? (
                                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end' }}>
                                                                        <input type="text" placeholder="Name" value={editForm.customer_name} onChange={(e) => setEditForm({ ...editForm, customer_name: e.target.value })} style={{ padding: '4px', width: '200px', textAlign: 'right' }} />
                                                                        <input type="text" placeholder="Email" value={editForm.customer_email} onChange={(e) => setEditForm({ ...editForm, customer_email: e.target.value })} style={{ padding: '4px', width: '200px', textAlign: 'right' }} />
                                                                        <input type="text" placeholder="Phone" value={editForm.customer_phone} onChange={(e) => setEditForm({ ...editForm, customer_phone: e.target.value })} style={{ padding: '4px', width: '200px', textAlign: 'right' }} />
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        {selectedInvoice.customer_name}<br />
                                                                        {selectedInvoice.customer_email}<br />
                                                                        {selectedInvoice.customer_phone}
                                                                    </>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr className="heading">
                                            <td style={{ background: '#eee', borderBottom: '1px solid #ddd', fontWeight: 'bold', padding: '10px' }}>Item Description</td>
                                            <td style={{ background: '#eee', borderBottom: '1px solid #ddd', fontWeight: 'bold', padding: '10px', textAlign: 'right' }}>Price ($)</td>
                                        </tr>

                                        {isEditing ? (
                                            editForm.line_items.map((item: any, idx: number) => (
                                                <tr key={idx} className="item" style={{ borderBottom: '1px solid #eee' }}>
                                                    <td style={{ padding: '10px' }}>
                                                        <input
                                                            type="text"
                                                            value={item.description}
                                                            onChange={(e) => updateLineItem(idx, 'description', e.target.value)}
                                                            style={{ width: '100%', padding: '5px' }}
                                                        />
                                                    </td>
                                                    <td style={{ padding: '10px', textAlign: 'right' }}>
                                                        <input
                                                            type="number"
                                                            value={item.amount}
                                                            onChange={(e) => updateLineItem(idx, 'amount', e.target.value)}
                                                            style={{ width: '80px', padding: '5px', textAlign: 'right' }}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            JSON.parse(selectedInvoice.line_items || '[]').map((item: any, idx: number) => (
                                                <tr key={idx} className="item" style={{ borderBottom: '1px solid #eee' }}>
                                                    <td style={{ padding: '10px' }}>{item.description}</td>
                                                    <td style={{ padding: '10px', textAlign: 'right' }}>${parseFloat(item.amount).toFixed(2)}</td>
                                                </tr>
                                            ))
                                        )}

                                        <tr className="total">
                                            <td style={{ padding: '10px' }}>
                                                {isEditing && (
                                                    <button
                                                        onClick={() => setEditForm({ ...editForm, line_items: [...editForm.line_items, { description: 'New Item', amount: '0' }] })}
                                                        style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#1e3a8a', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600' }}
                                                    >
                                                        <Plus size={14} /> Add Item
                                                    </button>
                                                )}
                                            </td>
                                            <td style={{ padding: '10px', textAlign: 'right', borderTop: '2px solid #eee' }}>
                                                {isEditing ? (
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
                                                        <div>Subtotal: ${(editForm.line_items.reduce((s: number, i: any) => s + parseFloat(i.amount || 0), 0)).toFixed(2)}</div>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                            Tax Rate (%):
                                                            <input
                                                                type="number"
                                                                value={editForm.tax_rate || 0}
                                                                onChange={(e) => setEditForm({ ...editForm, tax_rate: e.target.value })}
                                                                style={{ width: '50px', padding: '2px' }}
                                                            />
                                                        </div>
                                                        <strong>Total: ${(
                                                            (editForm.line_items.reduce((s: number, i: any) => s + parseFloat(i.amount || 0), 0)) * (1 + (parseFloat(editForm.tax_rate || 0) / 100))
                                                        ).toFixed(2)}</strong>
                                                    </div>
                                                ) : (
                                                    <>
                                                        Subtotal: ${parseFloat(selectedInvoice.subtotal || selectedInvoice.total_amount).toFixed(2)}<br />
                                                        Tax: ${parseFloat(selectedInvoice.tax_amount || 0).toFixed(2)}<br />
                                                        <strong>Total: ${parseFloat(selectedInvoice.total_amount).toFixed(2)}</strong>
                                                    </>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee', fontSize: '14px', color: '#777', textAlign: 'center' }}>
                                    <p>Payment due by {new Date(selectedInvoice.due_date).toLocaleDateString()}.<br />
                                        Thank you for choosing Auzzsi Chauffeur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

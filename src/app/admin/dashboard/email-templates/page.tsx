"use client";

import React, { useState, useEffect } from 'react';
import { Mail, Plus, Edit, Eye, Copy, Send, X, Save, Code, FileText } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function EmailTemplatesPage() {
    const [templates, setTemplates] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [editingTemplate, setEditingTemplate] = useState<any>(null);
    const [previewTemplate, setPreviewTemplate] = useState<any>(null);
    const [viewMode, setViewMode] = useState<'visual' | 'code'>('visual');

    const [formData, setFormData] = useState({
        template_name: '',
        subject: '',
        body_html: '',
        body_text: '',
        variables: [] as string[],
        is_active: true
    });
    // ... (lines 25-555 skipped for brevity in prompt, but I need to be careful with replace_file_content)

    // Actually, I should use multi_replace for this file as I need to touch the top and the middle.


    useEffect(() => {
        fetchTemplates();
    }, []);

    const fetchTemplates = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('email_templates')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setTemplates(data);
        }
        setLoading(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const templateData = {
            ...formData,
            variables: JSON.stringify(formData.variables)
        };

        if (editingTemplate) {
            const { error } = await supabase
                .from('email_templates')
                .update(templateData)
                .eq('id', editingTemplate.id);

            if (!error) {
                fetchTemplates();
                closeModal();
            } else {
                alert('Error updating template: ' + error.message);
            }
        } else {
            const { error } = await supabase
                .from('email_templates')
                .insert([templateData]);

            if (!error) {
                fetchTemplates();
                closeModal();
            } else {
                alert('Error creating template: ' + error.message);
            }
        }
    };

    const openModal = (template?: any) => {
        if (template) {
            setEditingTemplate(template);
            setFormData({
                template_name: template.template_name,
                subject: template.subject,
                body_html: template.body_html,
                body_text: template.body_text || '',
                variables: Array.isArray(template.variables) ? template.variables : JSON.parse(template.variables || '[]'),
                is_active: template.is_active
            });
        } else {
            setEditingTemplate(null);
            setFormData({
                template_name: '',
                subject: '',
                body_html: '',
                body_text: '',
                variables: [],
                is_active: true
            });
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditingTemplate(null);
        setViewMode('visual');
    };

    const openPreview = (template: any) => {
        setPreviewTemplate(template);
        setShowPreview(true);
    };

    const addVariable = () => {
        const varName = prompt('Enter variable name (e.g., customer_name):');
        if (varName && !formData.variables.includes(varName)) {
            setFormData({
                ...formData,
                variables: [...formData.variables, varName]
            });
        }
    };

    const removeVariable = (varName: string) => {
        setFormData({
            ...formData,
            variables: formData.variables.filter(v => v !== varName)
        });
    };

    const insertVariable = (varName: string) => {
        const variable = `{${varName}}`;
        // Insert into subject or body based on current focus
        // For simplicity, we'll just copy to clipboard
        navigator.clipboard.writeText(variable);
        alert(`Variable ${variable} copied to clipboard!`);
    };

    const duplicateTemplate = async (template: any) => {
        const newName = prompt('Enter new template name:', template.template_name + '_copy');
        if (!newName) return;

        const { error } = await supabase
            .from('email_templates')
            .insert([{
                template_name: newName,
                subject: template.subject,
                body_html: template.body_html,
                body_text: template.body_text,
                variables: template.variables,
                is_active: false
            }]);

        if (!error) {
            fetchTemplates();
            alert('Template duplicated successfully!');
        }
    };

    const toggleActive = async (id: string, currentStatus: boolean) => {
        const { error } = await supabase
            .from('email_templates')
            .update({ is_active: !currentStatus })
            .eq('id', id);

        if (!error) {
            fetchTemplates();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Email Templates</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                        Create and manage email templates for automated communications
                    </p>
                </div>
                <button
                    onClick={() => openModal()}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1rem', border: 'none', borderRadius: '6px', backgroundColor: '#1e3a8a', color: 'white', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                >
                    <Plus size={16} /> Create Template
                </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Mail size={20} color="#6b7280" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Templates</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{templates.length}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FileText size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Active Templates</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>
                        {templates.filter(t => t.is_active).length}
                    </div>
                </div>
            </div>

            {/* Templates Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                {loading ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1' }}>
                        Loading templates...
                    </div>
                ) : templates.length === 0 ? (
                    <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1' }}>
                        No templates found. Create one to get started!
                    </div>
                ) : (
                    templates.map((template) => (
                        <div
                            key={template.id}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                border: `2px solid ${template.is_active ? '#10b981' : '#e5e7eb'}`,
                                padding: '1.5rem',
                                position: 'relative'
                            }}
                        >
                            {/* Status Badge */}
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                                {template.is_active ? (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#d1fae5', color: '#065f46' }}>
                                        ACTIVE
                                    </span>
                                ) : (
                                    <span style={{ padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#6b7280' }}>
                                        INACTIVE
                                    </span>
                                )}
                            </div>

                            {/* Template Info */}
                            <div style={{ marginBottom: '1rem', paddingRight: '80px' }}>
                                <div style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    color: '#1f2937',
                                    marginBottom: '0.5rem'
                                }}>
                                    {template.template_name.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                                </div>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                    <Mail size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                                    {template.subject}
                                </div>
                            </div>

                            {/* Variables */}
                            {/* Variables */}
                            {(() => {
                                let variables = [];
                                try {
                                    if (Array.isArray(template.variables)) {
                                        variables = template.variables;
                                    } else if (typeof template.variables === 'string') {
                                        variables = JSON.parse(template.variables || '[]');
                                    }
                                } catch (e) {
                                    // Fallback if parsing fails or invalid json
                                    variables = [];
                                    console.error('Failed to parse variables for template', template.id, e);
                                }

                                return variables.length > 0 && (
                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: '600' }}>VARIABLES:</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                            {variables.slice(0, 4).map((variable: string, idx: number) => (
                                                <span
                                                    key={idx}
                                                    style={{
                                                        padding: '0.2rem 0.5rem',
                                                        backgroundColor: '#eff6ff',
                                                        color: '#1e40af',
                                                        borderRadius: '4px',
                                                        fontSize: '0.7rem',
                                                        fontFamily: 'monospace'
                                                    }}
                                                >
                                                    {`{${variable}}`}
                                                </span>
                                            ))}
                                            {variables.length > 4 && (
                                                <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                                                    +{variables.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })()}

                            {/* Actions */}
                            <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                                <button
                                    onClick={() => openPreview(template)}
                                    style={{
                                        flex: 1,
                                        padding: '0.5rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer',
                                        fontSize: '0.8rem',
                                        fontWeight: '500',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.25rem'
                                    }}
                                >
                                    <Eye size={14} /> Preview
                                </button>
                                <button
                                    onClick={() => openModal(template)}
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
                                    onClick={() => duplicateTemplate(template)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: 'white',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Copy size={14} />
                                </button>
                                <button
                                    onClick={() => toggleActive(template.id, template.is_active)}
                                    style={{
                                        padding: '0.5rem 0.75rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '4px',
                                        background: template.is_active ? '#fee2e2' : '#d1fae5',
                                        cursor: 'pointer',
                                        color: template.is_active ? '#991b1b' : '#065f46'
                                    }}
                                    title={template.is_active ? 'Deactivate' : 'Activate'}
                                >
                                    {template.is_active ? '✕' : '✓'}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Create/Edit Modal */}
            {showModal && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '2rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '900px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                {editingTemplate ? 'Edit Template' : 'Create Template'}
                            </h2>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <button
                                    onClick={() => setViewMode(viewMode === 'visual' ? 'code' : 'visual')}
                                    style={{ padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                >
                                    {viewMode === 'visual' ? <><Code size={14} /> Code</> : <><FileText size={14} /> Visual</>}
                                </button>
                                <button onClick={closeModal} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflow: 'auto', flex: 1 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                        Template Name * (lowercase_with_underscores)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.template_name}
                                        onChange={(e) => setFormData({ ...formData, template_name: e.target.value.toLowerCase().replace(/\s+/g, '_') })}
                                        required
                                        placeholder="e.g., booking_confirmation"
                                        style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                            Status
                                        </label>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem' }}>
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
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Email Subject *
                                </label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required
                                    placeholder="e.g., Booking Confirmation - {booking_id}"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                                />
                            </div>

                            {/* Variables Section */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>
                                        Variables
                                    </label>
                                    <button
                                        type="button"
                                        onClick={addVariable}
                                        style={{ padding: '0.3rem 0.6rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: 'white', cursor: 'pointer', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                                    >
                                        <Plus size={12} /> Add Variable
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '6px', minHeight: '3rem' }}>
                                    {formData.variables.length === 0 ? (
                                        <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>No variables added yet</span>
                                    ) : (
                                        formData.variables.map((variable, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    padding: '0.4rem 0.6rem',
                                                    backgroundColor: '#eff6ff',
                                                    color: '#1e40af',
                                                    borderRadius: '6px',
                                                    fontSize: '0.8rem',
                                                    fontFamily: 'monospace',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem'
                                                }}
                                            >
                                                <span onClick={() => insertVariable(variable)} style={{ cursor: 'pointer' }} title="Click to copy">
                                                    {`{${variable}}`}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => removeVariable(variable)}
                                                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#dc2626', padding: 0, fontSize: '0.9rem' }}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                    Click on a variable to copy it, then paste in subject or body
                                </div>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151' }}>
                                        Email Body (HTML) *
                                    </label>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (confirm('This will overwrite current HTML with a Premium Template. Continue?')) {
                                                setFormData({
                                                    ...formData, body_html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]-->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap');
        body { margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Lato', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        table { border-collapse: collapse; width: 100%; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f4f4f5; padding-bottom: 40px; }
        .main-table { background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; font-family: 'Lato', Helvetica, Arial, sans-serif; color: #333333; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        .header { background-color: #0f172a; padding: 40px 0; text-align: center; }
        .logo-text { color: #c5a467; font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; }
        .hero { padding: 40px 40px 20px; text-align: center; }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: 32px; color: #1e3a8a; margin: 0 0 10px; font-weight: 700; }
        .hero p { font-size: 16px; color: #64748b; line-height: 1.6; margin: 0; }
        .details-box { padding: 30px 40px; background-color: #ffffff; }
        .grid-table { width: 100%; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; }
        .grid-cell { padding: 20px; width: 50%; vertical-align: top; border-bottom: 1px solid #e2e8f0; }
        .grid-cell:last-child { border-right: none; }
        .grid-row:last-child .grid-cell { border-bottom: none; }
        .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-weight: 700; margin-bottom: 5px; display: block; }
        .value { font-size: 15px; color: #1e293b; font-weight: 600; line-height: 1.4; display: block; }
        .cta-section { padding: 30px 40px 40px; text-align: center; }
        .btn { display: inline-block; background-color: #c5a467; color: #ffffff !important; padding: 14px 32px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; border-radius: 4px; transition: background 0.3s; }
        .footer { background-color: #1e293b; padding: 40px; text-align: center; color: #94a3b8; font-size: 13px; line-height: 1.6; }
        .social-links { margin-bottom: 20px; }
        .copyright { margin-top: 20px; border-top: 1px solid #334155; padding-top: 20px; font-size: 12px; }
        .footer-link { color: #cbd5e1; text-decoration: none; margin: 0 10px; }
        
        @media only screen and (max-width: 600px) {
            .main-table { width: 100% !important; }
            .hero, .details-box, .cta-section, .footer { padding: 20px !important; }
            .hero h1 { font-size: 26px !important; }
            .grid-cell { display: block; width: 100% !important; border-right: none !important; box-sizing: border-box; }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main-table">
            <tr>
                <td class="header">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <img src="https://auzziechauffeur.com.au/logo.png" alt="Auzzie Chauffeur" style="width: 150px; height: auto;" />
                    </div>
                    <a href="https://auzziechauffeur.com.au" class="logo-text">Auzzie Chauffeur</a>
                </td>
            </tr>

            <!-- Hero Section -->
            <tr>
                <td class="hero">
                    <h1>Booking Confirmed</h1>
                    <p>Dear {customer_name},<br>Your luxury chauffeur experience is secured.</p>
                </td>
            </tr>

            <!-- Booking Details Grid -->
            <tr>
                <td class="details-box">
                    <table class="grid-table" cellspacing="0" cellpadding="0">
                        <tr class="grid-row">
                            <td class="grid-cell" style="border-right: 1px solid #e2e8f0;">
                                <span class="label">Date & Time</span>
                                <span class="value">{pickup_date}<br>{pickup_time}</span>
                            </td>
                            <td class="grid-cell">
                                <span class="label">Service Type</span>
                                <span class="value">{service_type}</span>
                            </td>
                        </tr>
                        <tr class="grid-row">
                            <td class="grid-cell" style="border-right: 1px solid #e2e8f0;">
                                <span class="label">Pickup Location</span>
                                <span class="value">{pickup_location}</span>
                            </td>
                            <td class="grid-cell">
                                <span class="label">Destination</span>
                                <span class="value">{dropoff_location}</span>
                            </td>
                        </tr>
                        <tr class="grid-row">
                            <td class="grid-cell" colspan="2">
                                <span class="label">Vehicle Class</span>
                                <span class="value">{vehicle_type}</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

            <!-- CTA -->
            <tr>
                <td class="cta-section">
                    <p style="margin-bottom: 25px; color: #64748b;">Our professional chauffeur will arrive 15 minutes prior to departure. You can manage your booking or view live status below.</p>
                    <a href="https://auzziechauffeur.com.au/book" class="btn">Manage My Booking</a>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td class="footer">
                    <div style="margin-bottom: 20px;">
                        <span style="display: block; color: #ffffff; font-weight: bold; margin-bottom: 5px;">Auzzie Chauffeur</span>
                        <span>Luxury Travel Redefined</span>
                    </div>
                    
                    <p>
                        Contact: <a href="mailto:info@auzziechauffeur.com.au" style="color: #c5a467; text-decoration: none;">info@auzziechauffeur.com.au</a> | 0415 673 786
                    </p>

                    <div class="copyright">
                        &copy; 2026 Auzzie Chauffeur. All rights reserved.<br>
                        <a href="https://auzziechauffeur.com.au/privacy-policy" class="footer-link">Privacy Policy</a> | <a href="https://auzziechauffeur.com.au/terms-conditions" class="footer-link">Terms of Service</a>
                    </div>
                    <p style="margin-top: 15px;"><a href="https://auzziechauffeur.com.au" style="color: #64748b; text-decoration: none;">www.auzziechauffeur.com.au</a></p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>`
                                                });
                                            }
                                        }}
                                        style={{ padding: '0.3rem 0.6rem', border: '1px solid #e5e7eb', borderRadius: '4px', background: '#eff6ff', color: '#1d4ed8', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '500' }}
                                    >
                                        Extract Premium Template
                                    </button>
                                </div>
                                <textarea
                                    value={formData.body_html}
                                    onChange={(e) => setFormData({ ...formData, body_html: e.target.value })}
                                    required
                                    rows={viewMode === 'code' ? 15 : 10}
                                    placeholder="Enter HTML content..."
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.85rem', resize: 'vertical', fontFamily: viewMode === 'code' ? 'monospace' : 'inherit' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                    Plain Text Version (Optional)
                                </label>
                                <textarea
                                    value={formData.body_text}
                                    onChange={(e) => setFormData({ ...formData, body_text: e.target.value })}
                                    rows={4}
                                    placeholder="Plain text version for email clients that don't support HTML"
                                    style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.85rem', resize: 'vertical' }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
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
                                    {editingTemplate ? 'Update Template' : 'Create Template'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Preview Modal */}
            {showPreview && previewTemplate && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: '2rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', width: '800px', maxWidth: '95%', maxHeight: '90vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f9fafb' }}>
                            <div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>
                                    Preview: {previewTemplate.template_name}
                                </h2>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>
                                    Subject: {previewTemplate.subject}
                                </p>
                            </div>
                            <button onClick={() => setShowPreview(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#6b7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <div style={{ padding: '2rem', overflow: 'auto', flex: 1, backgroundColor: '#f3f4f6' }}>
                            <div
                                style={{ backgroundColor: 'white', borderRadius: '8px', padding: '1rem' }}
                                dangerouslySetInnerHTML={{ __html: previewTemplate.body_html }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

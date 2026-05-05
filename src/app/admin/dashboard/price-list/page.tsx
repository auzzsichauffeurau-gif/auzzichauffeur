"use client";

import { useState } from 'react';
import { FileText, Download, Upload, RefreshCw } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function PriceListPage() {
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState('');

    // ECC Price List - Based on your PDF
    const eccPriceList = {
        airport_transfers: {
            title: '✈️ Airport Transfers',
            rates: [
                { vehicle: 'S-Class', rate: 3.5, description: 'Mercedes S-Class - Premium luxury' },
                { vehicle: 'E-Class', rate: 3.0, description: 'Mercedes E-Class - Executive comfort' },
                { vehicle: 'Sprinter', rate: 4.0, description: 'Mercedes Sprinter - Group travel' },
            ]
        },
        long_distance: {
            title: '🚗 Long Distance Travel',
            rates: [
                { vehicle: 'S-Class', rate: 3.0, description: 'Mercedes S-Class - Long journeys' },
                { vehicle: 'E-Class', rate: 2.5, description: 'Mercedes E-Class - Comfortable travel' },
                { vehicle: 'Sprinter', rate: 3.5, description: 'Mercedes Sprinter - Group long distance' },
            ]
        },
        hourly: {
            title: '⏰ Hourly Chauffeur Service',
            rates: [
                { vehicle: 'S-Class', hourly_rate: 120, min_hours: 3, description: 'Mercedes S-Class - 3 hour minimum' },
                { vehicle: 'E-Class', hourly_rate: 100, min_hours: 3, description: 'Mercedes E-Class - 3 hour minimum' },
                { vehicle: 'Sprinter', hourly_rate: 150, min_hours: 3, description: 'Mercedes Sprinter - 3 hour minimum' },
            ]
        },
        special_events: {
            title: '🎉 Special Events',
            description: 'Custom quotes for weddings, corporate events, and special occasions',
            note: 'Please contact us for personalized pricing'
        }
    };

    const updatePricingFromECC = async () => {
        setUpdating(true);
        setMessage('Updating pricing rules from ECC Price List...');

        try {
            // Update Airport Transfers
            for (const item of eccPriceList.airport_transfers.rates) {
                await supabase
                    .from('pricing_rules')
                    .upsert({
                        service_type: 'airport_transfer',
                        vehicle_type: item.vehicle,
                        rate_per_km: item.rate,
                        base_fare: 0,
                        notes: item.description,
                        is_active: true
                    }, {
                        onConflict: 'service_type,vehicle_type'
                    });
            }

            // Update Long Distance
            for (const item of eccPriceList.long_distance.rates) {
                await supabase
                    .from('pricing_rules')
                    .upsert({
                        service_type: 'long_distance',
                        vehicle_type: item.vehicle,
                        rate_per_km: item.rate,
                        base_fare: 0,
                        notes: item.description,
                        is_active: true
                    }, {
                        onConflict: 'service_type,vehicle_type'
                    });
            }

            // Update Hourly
            for (const item of eccPriceList.hourly.rates) {
                await supabase
                    .from('pricing_rules')
                    .upsert({
                        service_type: 'hourly',
                        vehicle_type: item.vehicle,
                        rate_per_km: 0,
                        base_fare: 0,
                        hourly_rate: item.hourly_rate,
                        min_hours: item.min_hours,
                        notes: item.description,
                        is_active: true
                    }, {
                        onConflict: 'service_type,vehicle_type'
                    });
            }

            setMessage('✅ Pricing rules updated successfully from ECC Price List!');
        } catch (error) {
            console.error('Error updating pricing:', error);
            setMessage('❌ Error updating pricing rules. Please try again.');
        } finally {
            setUpdating(false);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                    ECC Price List
                </h1>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    View and manage your official pricing structure
                </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <a
                    href="/ECC PRICE LIST.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1rem',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        backgroundColor: 'white',
                        color: '#1f2937',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        fontWeight: '500',
                        textDecoration: 'none'
                    }}
                >
                    <FileText size={16} /> View PDF
                </a>

                <a
                    href="/ECC PRICE LIST.pdf"
                    download
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1rem',
                        border: '1px solid #e5e7eb',
                        borderRadius: '6px',
                        backgroundColor: 'white',
                        color: '#1f2937',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        fontWeight: '500',
                        textDecoration: 'none'
                    }}
                >
                    <Download size={16} /> Download PDF
                </a>

                <button
                    onClick={updatePricingFromECC}
                    disabled={updating}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.6rem 1rem',
                        border: 'none',
                        borderRadius: '6px',
                        backgroundColor: '#1e3a8a',
                        color: 'white',
                        fontSize: '0.9rem',
                        cursor: updating ? 'not-allowed' : 'pointer',
                        fontWeight: '500',
                        opacity: updating ? 0.6 : 1
                    }}
                >
                    <RefreshCw size={16} className={updating ? 'animate-spin' : ''} />
                    {updating ? 'Updating...' : 'Sync to Database'}
                </button>
            </div>

            {message && (
                <div style={{
                    padding: '1rem',
                    borderRadius: '6px',
                    backgroundColor: message.includes('✅') ? '#d1fae5' : '#fee2e2',
                    color: message.includes('✅') ? '#065f46' : '#991b1b',
                    marginBottom: '2rem',
                    fontSize: '0.9rem'
                }}>
                    {message}
                </div>
            )}

            {/* Price List Display */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Airport Transfers */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f0f9ff' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1e3a8a' }}>
                            {eccPriceList.airport_transfers.title}
                        </h2>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Vehicle Type</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Rate per KM</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eccPriceList.airport_transfers.rates.map((item, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: '600', color: '#1f2937' }}>{item.vehicle}</td>
                                        <td style={{ padding: '0.75rem', color: '#10b981', fontWeight: '700', fontSize: '1.1rem' }}>${item.rate}/km</td>
                                        <td style={{ padding: '0.75rem', color: '#6b7280', fontSize: '0.85rem' }}>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Long Distance */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#fef3c7' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#92400e' }}>
                            {eccPriceList.long_distance.title}
                        </h2>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Vehicle Type</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Rate per KM</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eccPriceList.long_distance.rates.map((item, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: '600', color: '#1f2937' }}>{item.vehicle}</td>
                                        <td style={{ padding: '0.75rem', color: '#f59e0b', fontWeight: '700', fontSize: '1.1rem' }}>${item.rate}/km</td>
                                        <td style={{ padding: '0.75rem', color: '#6b7280', fontSize: '0.85rem' }}>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Hourly */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f3e8ff' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#6b21a8' }}>
                            {eccPriceList.hourly.title}
                        </h2>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Vehicle Type</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Hourly Rate</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Minimum</th>
                                    <th style={{ padding: '0.75rem', textAlign: 'left', color: '#6b7280', fontWeight: '600', fontSize: '0.85rem' }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {eccPriceList.hourly.rates.map((item, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '0.75rem', fontWeight: '600', color: '#1f2937' }}>{item.vehicle}</td>
                                        <td style={{ padding: '0.75rem', color: '#8b5cf6', fontWeight: '700', fontSize: '1.1rem' }}>${item.hourly_rate}/hr</td>
                                        <td style={{ padding: '0.75rem', color: '#6b7280', fontWeight: '600' }}>{item.min_hours} hours</td>
                                        <td style={{ padding: '0.75rem', color: '#6b7280', fontSize: '0.85rem' }}>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Special Events */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#fce7f3' }}>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#9f1239' }}>
                            {eccPriceList.special_events.title}
                        </h2>
                    </div>
                    <div style={{ padding: '2rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                            {eccPriceList.special_events.description}
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#9ca3af', fontStyle: 'italic' }}>
                            {eccPriceList.special_events.note}
                        </p>
                    </div>
                </div>
            </div>

            {/* PDF Viewer */}
            <div style={{ marginTop: '3rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937' }}>
                        📄 Official ECC Price List PDF
                    </h2>
                </div>
                <div style={{ padding: '1rem' }}>
                    <iframe
                        src="/ECC PRICE LIST.pdf"
                        style={{ width: '100%', height: '800px', border: 'none', borderRadius: '4px' }}
                        title="ECC Price List PDF"
                    />
                </div>
            </div>
        </div>
    );
}

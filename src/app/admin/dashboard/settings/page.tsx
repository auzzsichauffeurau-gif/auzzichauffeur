"use client";

import { useState, useEffect } from 'react';
import { Bell, Save, User, Lock, Mail, Phone } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [saving, setSaving] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Admin User',
        email: 'info@auzziechauffeur.com.au',
        phone: '0415 673 786',
        company: 'Auzzie Chauffeur Service'
    });

    const [notificationSettings, setNotificationSettings] = useState({
        emailBookings: true,
        emailQuotes: true,
        emailMessages: true,
        soundNotifications: true,
        desktopNotifications: false
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleSaveProfile = async () => {
        setSaving(true);
        // Simulate save
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Profile updated successfully!');
        setSaving(false);
    };

    const handleSaveNotifications = async () => {
        setSaving(true);
        // Save to localStorage or database
        localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
        await new Promise(resolve => setTimeout(resolve, 500));
        alert('Notification settings saved!');
        setSaving(false);
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        setSaving(true);
        // Simulate password change
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Password changed successfully!');
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setSaving(false);
    };

    return (
        <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '2rem' }}>Settings</h1>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '1rem', borderBottom: '2px solid #e5e7eb', marginBottom: '2rem' }}>
                <button
                    onClick={() => setActiveTab('profile')}
                    style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        color: activeTab === 'profile' ? '#1e3a8a' : '#6b7280',
                        borderBottom: activeTab === 'profile' ? '2px solid #1e3a8a' : 'none',
                        marginBottom: '-2px'
                    }}
                >
                    Profile
                </button>
                <button
                    onClick={() => setActiveTab('notifications')}
                    style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        color: activeTab === 'notifications' ? '#1e3a8a' : '#6b7280',
                        borderBottom: activeTab === 'notifications' ? '2px solid #1e3a8a' : 'none',
                        marginBottom: '-2px'
                    }}
                >
                    Notifications
                </button>
                <button
                    onClick={() => setActiveTab('security')}
                    style={{
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontWeight: '600',
                        color: activeTab === 'security' ? '#1e3a8a' : '#6b7280',
                        borderBottom: activeTab === 'security' ? '2px solid #1e3a8a' : 'none',
                        marginBottom: '-2px'
                    }}
                >
                    Security
                </button>
            </div>

            {/* Profile Tab */}
            {activeTab === 'profile' && (
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Profile Information</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                <User size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={profileData.name}
                                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                <Mail size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={profileData.email}
                                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                <Phone size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={profileData.phone}
                                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                Company Name
                            </label>
                            <input
                                type="text"
                                value={profileData.company}
                                onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>

                        <button
                            onClick={handleSaveProfile}
                            disabled={saving}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem',
                                border: 'none',
                                borderRadius: '6px',
                                background: '#1e3a8a',
                                color: 'white',
                                cursor: saving ? 'not-allowed' : 'pointer',
                                fontWeight: '600',
                                opacity: saving ? 0.6 : 1
                            }}
                        >
                            <Save size={16} />
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Notification Preferences</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div>
                                <p style={{ fontWeight: '600', color: '#1f2937' }}>Email - New Bookings</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Receive email when a new booking is created</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notificationSettings.emailBookings}
                                onChange={(e) => setNotificationSettings({ ...notificationSettings, emailBookings: e.target.checked })}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div>
                                <p style={{ fontWeight: '600', color: '#1f2937' }}>Email - Quote Requests</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Receive email for new quote requests</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notificationSettings.emailQuotes}
                                onChange={(e) => setNotificationSettings({ ...notificationSettings, emailQuotes: e.target.checked })}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div>
                                <p style={{ fontWeight: '600', color: '#1f2937' }}>Email - Contact Messages</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Receive email for contact form submissions</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notificationSettings.emailMessages}
                                onChange={(e) => setNotificationSettings({ ...notificationSettings, emailMessages: e.target.checked })}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div>
                                <p style={{ fontWeight: '600', color: '#1f2937' }}>Sound Notifications</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Play sound for new bookings</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notificationSettings.soundNotifications}
                                onChange={(e) => setNotificationSettings({ ...notificationSettings, soundNotifications: e.target.checked })}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
                            <div>
                                <p style={{ fontWeight: '600', color: '#1f2937' }}>Desktop Notifications</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>Show browser notifications</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={notificationSettings.desktopNotifications}
                                onChange={(e) => setNotificationSettings({ ...notificationSettings, desktopNotifications: e.target.checked })}
                                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                            />
                        </div>

                        <button
                            onClick={handleSaveNotifications}
                            disabled={saving}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem',
                                border: 'none',
                                borderRadius: '6px',
                                background: '#1e3a8a',
                                color: 'white',
                                cursor: saving ? 'not-allowed' : 'pointer',
                                fontWeight: '600',
                                opacity: saving ? 0.6 : 1
                            }}
                        >
                            <Save size={16} />
                            {saving ? 'Saving...' : 'Save Preferences'}
                        </button>
                    </div>
                </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
                <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e5e7eb', maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Change Password</h2>

                    <form onSubmit={handleChangePassword} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                <Lock size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Current Password
                            </label>
                            <input
                                type="password"
                                value={passwordData.currentPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                <Lock size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                New Password
                            </label>
                            <input
                                type="password"
                                value={passwordData.newPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                required
                                minLength={8}
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>Minimum 8 characters</p>
                        </div>

                        <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>
                                <Lock size={14} style={{ display: 'inline', marginRight: '0.5rem' }} />
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                value={passwordData.confirmPassword}
                                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                required
                                style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={saving}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.75rem',
                                border: 'none',
                                borderRadius: '6px',
                                background: '#dc2626',
                                color: 'white',
                                cursor: saving ? 'not-allowed' : 'pointer',
                                fontWeight: '600',
                                opacity: saving ? 0.6 : 1
                            }}
                        >
                            <Lock size={16} />
                            {saving ? 'Updating...' : 'Update Password'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

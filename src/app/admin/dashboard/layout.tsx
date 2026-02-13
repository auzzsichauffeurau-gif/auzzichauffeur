"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    LayoutDashboard,
    Calendar,
    CalendarCheck,
    Users,
    Settings,
    LogOut,
    Car,
    Bell,
    Search,
    ChevronDown,
    Menu,
    X,
    Newspaper,
    Mail,
    FileText,
    DollarSign,
    Receipt,
    UserCircle,
    Tag,
    Clock3,
    CheckCircle,
    ChevronRight
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

import { useBookingNotifications } from '@/hooks/useBookingNotifications'; // Import hook

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notifications, setNotifications] = useState(0);
    const [notificationList, setNotificationList] = useState<any[]>([]);
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({ 'Bookings': true });

    const toggleSubmenu = (name: string) => {
        setOpenSubmenus(prev => ({ ...prev, [name]: !prev[name] }));
    };

    // ... (rest of state items: sidebarOpen, etc)
    const prevNotificationsRef = useRef(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize System Notifications
    const { requestPermission } = useBookingNotifications();

    const playNotificationSound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => console.log("Audio play failed (user interaction needed first):", e));
        }
    };

    const fetchNotifications = async () => {
        // Parallel Fetching for better performance
        const [bookingsRes, messagesRes] = await Promise.all([
            supabase
                .from('bookings')
                .select('id, customer_name, status, created_at')
                .in('status', ['Pending', 'Quote Request'])
                .order('created_at', { ascending: false })
                .limit(10),

            supabase
                .from('contact_messages')
                .select('id, first_name, last_name, created_at')
                .order('created_at', { ascending: false })
                .limit(5)
        ]);

        const newNotifications: any[] = [];

        // Process Bookings
        bookingsRes.data?.forEach((booking: any) => {
            const isQuote = booking.status === 'Quote Request';
            newNotifications.push({
                id: booking.id,
                type: isQuote ? 'quote' : 'booking',
                title: isQuote ? 'New Quote Request' : 'New Booking',
                message: `${booking.customer_name} submitted a request.`,
                time: booking.created_at,
                href: '/admin/dashboard/bookings'
            });
        });

        // Process Messages
        messagesRes.data?.forEach((msg: any) => {
            newNotifications.push({
                id: msg.id,
                type: 'message',
                title: 'New Contact Message',
                message: `${msg.first_name} ${msg.last_name} sent a message.`,
                time: msg.created_at,
                href: '/admin/dashboard/messages'
            });
        });

        // Sort by Date (Newest First)
        newNotifications.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());

        // Update State
        setNotificationList(newNotifications);
        setNotifications(newNotifications.length);

        // Sound Logic
        if (newNotifications.length > prevNotificationsRef.current) {
            playNotificationSound();
        }
        prevNotificationsRef.current = newNotifications.length;
    };

    // Helper to format time (e.g. "5 mins ago")
    const timeAgo = (dateStr: string) => {
        const diff = new Date().getTime() - new Date(dateStr).getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'Just now';
        if (mins < 60) return `${mins}m ago`;
        const hours = Math.floor(mins / 60);
        if (hours < 24) return `${hours}h ago`;
        return `${Math.floor(hours / 24)}d ago`;
    };

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Calendar / Dispatch', href: '/admin/dashboard/calendar', icon: Calendar },
        {
            name: 'Bookings',
            icon: CalendarCheck,
            subItems: [
                { name: 'All Bookings', href: '/admin/dashboard/bookings' },
                { name: 'Quotations', href: '/admin/dashboard/quotations' },
                { name: 'Upcoming', href: '/admin/dashboard/bookings/upcoming' },
                { name: 'Completed', href: '/admin/dashboard/bookings/completed' }
            ]
        },
        { name: 'Leads', href: '/admin/dashboard/leads', icon: FileText },
        { name: 'Customers', href: '/admin/dashboard/customers', icon: UserCircle },
        { name: 'Drivers', href: '/admin/dashboard/drivers', icon: Users },
        { name: 'Fleet', href: '/admin/dashboard/fleet', icon: Car },
        { name: 'Invoices', href: '/admin/dashboard/invoices', icon: Receipt },
        { name: 'Pricing', href: '/admin/dashboard/pricing', icon: DollarSign },
        { name: 'Price List', href: '/admin/dashboard/price-list', icon: FileText },
        { name: 'Promos', href: '/admin/dashboard/promos', icon: Tag },
        { name: 'Email Templates', href: '/admin/dashboard/email-templates', icon: Mail },
        { name: 'Blog', href: '/admin/dashboard/blog', icon: Newspaper },
        { name: 'Messages', href: '/admin/dashboard/messages', icon: Mail },
        { name: 'Settings', href: '/admin/dashboard/settings', icon: Settings },
    ];

    useEffect(() => {
        // Initialize Audio with a simple base64 notification sound (short beep/ding)
        // ... (existing audio setup)
        audioRef.current = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...");
        // ... 

        fetchNotifications();
        const interval = setInterval(fetchNotifications, 10000);
        return () => clearInterval(interval);
    }, []);

    // ... (existing helper functions)

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'sans-serif' }}>
            <audio ref={audioRef} src="/notification.mp3" preload="auto" />

            {/* Sidebar */}
            <aside style={{
                width: '260px',
                backgroundColor: '#1e3a8a', // Hughes Navy
                color: 'white',
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                transition: 'transform 0.3s ease',
                transform: mobileMenuOpen ? 'translateX(0)' : (sidebarOpen ? 'translateX(0)' : 'translateX(-260px)'),
                zIndex: 50,
                display: 'flex',
                flexDirection: 'column'
            }} className={`${mobileMenuOpen ? 'mobile-open' : ''} sidebar-check`}>

                <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '2px solid #c5a467',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            color: '#c5a467'
                        }}>A</div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '1px' }}>AUZZSI ADMIN</span>
                    </div>
                </div>

                <nav style={{ flex: 1, padding: '1.5rem 1rem', overflowY: 'auto' }}>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navItems.map((item: any) => {
                            const isActive = pathname === item.href;
                            const hasSubItems = item.subItems && item.subItems.length > 0;
                            const isOpen = openSubmenus[item.name];

                            // Check if any child is active to highlight parent
                            const isChildActive = hasSubItems && item.subItems.some((sub: any) => pathname === sub.href);

                            return (
                                <li key={item.name}>
                                    {hasSubItems ? (
                                        <div>
                                            <div
                                                onClick={() => toggleSubmenu(item.name)}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '6px',
                                                    color: isActive || isChildActive || isOpen ? '#c5a467' : '#e2e8f0',
                                                    backgroundColor: isActive || isChildActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                                    cursor: 'pointer',
                                                    fontWeight: isActive || isChildActive || isOpen ? '600' : '400',
                                                    transition: 'all 0.2s'
                                                }}
                                            >
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                    <item.icon size={20} />
                                                    {item.name}
                                                </div>
                                                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                            </div>
                                            {isOpen && (
                                                <ul style={{ listStyle: 'none', paddingLeft: '1rem', marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                                    {item.subItems.map((sub: any) => {
                                                        const isSubActive = pathname === sub.href;
                                                        return (
                                                            <li key={sub.name}>
                                                                <Link
                                                                    href={sub.href}
                                                                    style={{
                                                                        display: 'block',
                                                                        padding: '0.5rem 0.75rem',
                                                                        borderRadius: '6px',
                                                                        color: isSubActive ? 'white' : '#94a3b8',
                                                                        textDecoration: 'none',
                                                                        fontSize: '0.85rem',
                                                                        backgroundColor: isSubActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                                                        borderLeft: isSubActive ? '2px solid #c5a467' : '2px solid transparent'
                                                                    }}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.75rem',
                                                padding: '0.75rem 1rem',
                                                borderRadius: '6px',
                                                color: isActive ? '#c5a467' : '#e2e8f0',
                                                backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                                                textDecoration: 'none',
                                                fontWeight: isActive ? '600' : '400',
                                                transition: 'all 0.2s'
                                            }}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <item.icon size={20} />
                                            {item.name}
                                            {item.name === 'Bookings' && notifications > 0 && (
                                                <span style={{
                                                    marginLeft: 'auto',
                                                    backgroundColor: '#ef4444',
                                                    color: 'white',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 'bold',
                                                    padding: '2px 6px',
                                                    borderRadius: '99px'
                                                }}>
                                                    {notifications}
                                                </span>
                                            )}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Link href="/admin" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        color: '#ef4444',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                    }}>
                        <LogOut size={18} />
                        Sign Out
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div style={{
                flex: 1,
                marginLeft: sidebarOpen ? '260px' : '0',
                transition: 'margin-left 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0
            }} className="main-content-wrapper">

                {/* Header */}
                <header style={{
                    height: '70px',
                    backgroundColor: 'white',
                    borderBottom: '1px solid #e5e7eb',
                    padding: '0 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    zIndex: 40
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={() => window.innerWidth > 768 ? setSidebarOpen(!sidebarOpen) : setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}
                        >
                            <Menu size={24} />
                        </button>
                        <h2 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1f2937' }}>Dashboard Overview</h2>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <div
                                className={notifications > 0 ? 'bell-shake' : ''}
                                style={{ cursor: 'pointer', position: 'relative', zIndex: 105 }}
                                onClick={() => {
                                    setShowNotificationDropdown(!showNotificationDropdown);
                                    if (notifications > prevNotificationsRef.current) {
                                        // Acknowledge read? usually we mark read, but for now just toggle
                                        playNotificationSound(); // Optional feedback
                                    }
                                }}
                                title="Notifications"
                            >
                                <Bell size={20} color="#6b7280" />
                            </div>
                            {notifications > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    minWidth: '18px',
                                    height: '18px',
                                    backgroundColor: '#ef4444',
                                    borderRadius: '50%',
                                    border: '2px solid white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    padding: '2px',
                                    pointerEvents: 'none'
                                }}>{notifications > 99 ? '99+' : notifications}</span>
                            )}

                            {/* Dropdown Menu */}
                            {showNotificationDropdown && (
                                <>
                                    <div
                                        style={{ position: 'fixed', inset: 0, zIndex: 100 }}
                                        onClick={() => setShowNotificationDropdown(false)}
                                    ></div>
                                    <div style={{
                                        position: 'absolute',
                                        right: '-10px',
                                        top: '40px',
                                        width: '320px',
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        border: '1px solid #e5e7eb',
                                        zIndex: 106,
                                        overflow: 'hidden'
                                    }}>
                                        <div style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <h3 style={{ fontWeight: '600', color: '#1f2937' }}>Notifications</h3>
                                            <span style={{ fontSize: '0.75rem', color: '#6b7280', cursor: 'pointer' }}>Mark all read</span>
                                        </div>
                                        <div style={{ maxHeight: '350px', overflowY: 'auto' }}>
                                            {notificationList.length === 0 ? (
                                                <div style={{ padding: '2rem', textAlign: 'center', color: '#9ca3af', fontSize: '0.9rem' }}>
                                                    No new notifications
                                                </div>
                                            ) : (
                                                notificationList.map((item) => (
                                                    <Link
                                                        href={item.href}
                                                        key={item.id}
                                                        onClick={() => setShowNotificationDropdown(false)}
                                                        style={{
                                                            display: 'flex',
                                                            gap: '0.75rem',
                                                            padding: '1rem',
                                                            borderBottom: '1px solid #f3f4f6',
                                                            textDecoration: 'none',
                                                            transition: 'background-color 0.2s',
                                                            backgroundColor: 'white'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                                                    >
                                                        <div style={{ marginTop: '0.25rem' }}>
                                                            {item.type === 'message' ? (
                                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                                                            ) : item.type === 'quote' ? (
                                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }}></div>
                                                            ) : (
                                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                                                            )}
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#374151', marginBottom: '0.1rem' }}>{item.title}</p>
                                                            <p style={{ fontSize: '0.8rem', color: '#6b7280' }}>{item.message}</p>
                                                            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.4rem' }}>{timeAgo(item.time)}</p>
                                                        </div>
                                                    </Link>
                                                ))
                                            )}
                                        </div>
                                        <div style={{ padding: '0.75rem', textAlign: 'center', borderTop: '1px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
                                            <Link href="/admin/dashboard/notifications" style={{ fontSize: '0.8rem', color: '#4f46e5', fontWeight: '500', textDecoration: 'none' }}>View All Activity</Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: '#c5a467',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.8rem'
                            }}>AD</div>
                            <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#374151', display: 'none' }} className="user-name">Admin User</span>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
                    {children}
                </main>
            </div>

            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 45 }}
                />
            )}

            {/* Mobile Responsive Style Injection */}
            <style jsx global>{`
                @media (max-width: 1024px) {
                    .sidebar-check {
                        transform: translateX(-260px) !important;
                    }
                    .sidebar-check.mobile-open {
                        transform: translateX(0) !important;
                    }
                    .main-content-wrapper {
                        margin-left: 0 !important;
                    }
                    .user-name {
                        display: none !important;
                    }
                }
                
                @keyframes bellShake {
                    0% { transform: rotate(0); }
                    15% { transform: rotate(5deg); }
                    30% { transform: rotate(-5deg); }
                    45% { transform: rotate(4deg); }
                    60% { transform: rotate(-4deg); }
                    75% { transform: rotate(2deg); }
                    85% { transform: rotate(-2deg); }
                    100% { transform: rotate(0); }
                }
                
                .bell-shake {
                    animation: bellShake 2s infinite;
                    transform-origin: top center;
                }
            `}</style>
        </div>
    );
}

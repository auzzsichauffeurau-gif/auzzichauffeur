"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import {
    Edit,
    Trash2,
    Plus,
    Eye,
    Calendar,
    Search,
    Filter,
    Download,
    ChevronLeft,
    ChevronRight,
    FileText,
    TrendingUp,
    Users,
    Clock,
    Tag,
    Image as ImageIcon
} from 'lucide-react';
import { toast } from 'sonner';

export default function BlogListPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        filterPosts();
    }, [posts, searchTerm, statusFilter, sortBy]);

    const fetchPosts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('posts')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching posts:', error);
            if (error.code === '42P01') {
                toast.error("Table 'posts' missing. Please create it.");
            } else {
                toast.error('Failed to load blog posts');
            }
        } else {
            setPosts(data || []);
        }
        setLoading(false);
    };

    const filterPosts = () => {
        let filtered = [...posts];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(post =>
                post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.slug?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Status filter
        if (statusFilter === 'published') {
            filtered = filtered.filter(post => post.is_published === true);
        } else if (statusFilter === 'draft') {
            filtered = filtered.filter(post => post.is_published === false);
        }

        // Sort
        if (sortBy === 'title') {
            filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        } else {
            filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        }

        setFilteredPosts(filtered);
        setCurrentPage(1);
    };

    const deletePost = async (id: string) => {
        if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return;

        const { error } = await supabase
            .from('posts')
            .delete()
            .eq('id', id);

        if (error) {
            toast.error('Failed to delete post');
        } else {
            toast.success('Post deleted successfully');
            fetchPosts();
        }
    };

    const togglePublishStatus = async (post: any) => {
        const newStatus = !post.is_published;
        const { error } = await supabase
            .from('posts')
            .update({ is_published: newStatus })
            .eq('id', post.id);

        if (error) {
            toast.error('Failed to update post status');
        } else {
            toast.success(`Post ${newStatus ? 'published' : 'unpublished'} successfully`);
            fetchPosts();
        }
    };

    const exportToCSV = () => {
        const headers = ['Title', 'Slug', 'Status', 'Created Date', 'Author'];
        const csvData = filteredPosts.map(post => [
            post.title,
            post.slug,
            post.is_published ? 'Published' : 'Draft',
            new Date(post.created_at).toLocaleDateString(),
            post.author || 'Admin'
        ]);

        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell || ''}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `blog-posts-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
        toast.success('Posts exported successfully!');
    };

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Stats
    const stats = {
        total: posts.length,
        published: posts.filter(p => p.is_published).length,
        drafts: posts.filter(p => !p.is_published).length,
        thisMonth: posts.filter(p => {
            const postDate = new Date(p.created_at);
            const now = new Date();
            return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear();
        }).length
    };

    return (
        <div>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Blog Posts</h1>
                    <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                        {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
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
                    <Link href="/admin/dashboard/blog/new" style={{
                        backgroundColor: '#1e3a8a',
                        color: 'white',
                        textDecoration: 'none',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem'
                    }}>
                        <Plus size={18} /> New Post
                    </Link>
                </div>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <FileText size={20} color="#3b82f6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Total Posts</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1f2937' }}>{stats.total}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <TrendingUp size={20} color="#10b981" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Published</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#10b981' }}>{stats.published}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Clock size={20} color="#f59e0b" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>Drafts</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#f59e0b' }}>{stats.drafts}</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Calendar size={20} color="#8b5cf6" />
                        <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>This Month</span>
                    </div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#8b5cf6' }}>{stats.thisMonth}</div>
                </div>
            </div>

            {/* Search & Filters */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ position: 'relative' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search by title, excerpt, or slug..."
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
                                <option value="all">All Posts</option>
                                <option value="published">Published</option>
                                <option value="draft">Drafts</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: '#374151', marginBottom: '0.5rem' }}>Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem' }}
                            >
                                <option value="date">Date (Newest)</option>
                                <option value="title">Title (A-Z)</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setStatusFilter('all');
                                    setSortBy('date');
                                }}
                                style={{ width: '100%', padding: '0.6rem', border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: 'white', color: '#374151', fontSize: '0.9rem', cursor: 'pointer', fontWeight: '500' }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Posts List */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    Loading posts...
                </div>
            ) : paginatedPosts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                    <FileText size={48} color="#d1d5db" style={{ margin: '0 auto 1rem' }} />
                    <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        {searchTerm || statusFilter !== 'all' ? 'No posts match your filters.' : 'No blog posts found.'}
                    </p>
                    {!searchTerm && statusFilter === 'all' && (
                        <Link href="/admin/dashboard/blog/new" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none' }}>
                            Create your first post
                        </Link>
                    )}
                </div>
            ) : (
                <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'grid', gap: '0' }}>
                        {paginatedPosts.map((post, index) => (
                            <div
                                key={post.id}
                                style={{
                                    padding: '1.5rem',
                                    borderBottom: index < paginatedPosts.length - 1 ? '1px solid #f3f4f6' : 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    transition: 'background-color 0.2s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                            >
                                <div style={{ flex: 1, display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    {/* Featured Image Thumbnail */}
                                    {post.image_url ? (
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '8px',
                                            backgroundImage: `url(${post.image_url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            border: '1px solid #e5e7eb',
                                            flexShrink: 0
                                        }}></div>
                                    ) : (
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '8px',
                                            backgroundColor: '#f3f4f6',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: '1px solid #e5e7eb',
                                            flexShrink: 0
                                        }}>
                                            <ImageIcon size={32} color="#9ca3af" />
                                        </div>
                                    )}

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                            {post.title}
                                        </h3>
                                        {post.excerpt && (
                                            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                                                {post.excerpt.substring(0, 120)}{post.excerpt.length > 120 ? '...' : ''}
                                            </p>
                                        )}
                                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#9ca3af', flexWrap: 'wrap' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <Calendar size={14} /> {new Date(post.created_at).toLocaleDateString()}
                                            </span>
                                            {post.slug && (
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <Tag size={14} /> {post.slug}
                                                </span>
                                            )}
                                            <span style={{
                                                padding: '2px 8px',
                                                borderRadius: '99px',
                                                backgroundColor: post.is_published ? '#d1fae5' : '#f3f4f6',
                                                color: post.is_published ? '#065f46' : '#6b7280',
                                                fontWeight: '600'
                                            }}>
                                                {post.is_published ? 'Published' : 'Draft'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                                    <a
                                        href={`/news/${post.slug}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #e5e7eb', color: '#4b5563', display: 'flex', textDecoration: 'none' }}
                                        title="View Live"
                                    >
                                        <Eye size={18} />
                                    </a>
                                    <Link
                                        href={`/admin/dashboard/blog/${post.id}/edit`}
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #e5e7eb', color: '#4b5563', display: 'flex', textDecoration: 'none' }}
                                        title="Edit"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <button
                                        onClick={() => togglePublishStatus(post)}
                                        style={{
                                            padding: '0.5rem 0.75rem',
                                            borderRadius: '4px',
                                            border: post.is_published ? '1px solid #fbbf24' : '1px solid #10b981',
                                            backgroundColor: post.is_published ? '#fef3c7' : '#d1fae5',
                                            color: post.is_published ? '#92400e' : '#065f46',
                                            cursor: 'pointer',
                                            fontSize: '0.8rem',
                                            fontWeight: '600'
                                        }}
                                        title={post.is_published ? 'Unpublish' : 'Publish'}
                                    >
                                        {post.is_published ? 'Unpublish' : 'Publish'}
                                    </button>
                                    <button
                                        onClick={() => deletePost(post.id)}
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #fee2e2', color: '#ef4444', backgroundColor: '#fef2f2', cursor: 'pointer', display: 'flex' }}
                                        title="Delete"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredPosts.length)} of {filteredPosts.length}
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
            )}
        </div>
    );
}

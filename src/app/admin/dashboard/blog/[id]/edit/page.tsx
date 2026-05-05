"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { ArrowLeft, Save, Upload, X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import RichTextEditor from '../../_components/RichTextEditor';
import SchemaBuilder, { FAQItem } from '../../_components/SchemaBuilder';
import styles from '../../admin.module.css';

export default function EditPostPage() {
    const router = useRouter();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [uploading, setUploading] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); // This will now hold HTML
    const [excerpt, setExcerpt] = useState('');
    const [slug, setSlug] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [isPublished, setIsPublished] = useState(false);
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [scheduledAt, setScheduledAt] = useState('');

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (id) {
            fetchPost();
        }
    }, [id]);

    const fetchPost = async () => {
        try {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            if (data) {
                setTitle(data.title || '');
                setContent(data.content || '');
                setExcerpt(data.excerpt || '');
                setSlug(data.slug || '');
                setCoverImage(data.image_url || '');
                setIsPublished(data.is_published || false);

                // Load metadata if available
                if (data.meta) {
                    if (data.meta.faqs) setFaqs(data.meta.faqs);
                    if (data.meta.scheduledAt) setScheduledAt(data.meta.scheduledAt);
                }
            }
        } catch (error: any) {
            console.error('Error fetching post:', error);
            toast.error('Failed to load post');
            router.push('/admin/dashboard/blog');
        } finally {
            setFetching(false);
        }
    };

    const generateSlug = (text: string) => {
        return text.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        setUploading(true);

        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('blog-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('blog-images')
                .getPublicUrl(filePath);

            setCoverImage(publicUrl);
            toast.success('Cover image uploaded');
        } catch (error: any) {
            console.error('Error uploading image:', error);
            toast.error('Failed to upload image: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (publishStatus: boolean) => {
        if (!title.trim()) return toast.error('Title is required');
        if (!slug.trim()) return toast.error('Slug is required');

        setLoading(true);
        try {
            // Prepare metadata (Schema, Author, FAQs)
            const meta = {
                faqs,
                schemaType: 'Article',
                author: {
                    name: 'James Sterling',
                    url: 'https://auzziechauffeur.com.au/about-us'
                },
                scheduledAt: scheduledAt || null
            };

            const postData = {
                title,
                slug,
                content,
                excerpt,
                image_url: coverImage,
                is_published: publishStatus,
                updated_at: new Date().toISOString(),
                meta: meta
            };

            const { error } = await supabase
                .from('posts')
                .update(postData)
                .eq('id', id);

            if (error) {
                if (error.message?.includes('column "meta" of relation "posts" does not exist') || error.message?.includes('meta')) {
                    // Retry without meta
                    const { error: retryError } = await supabase
                        .from('posts')
                        .update({
                            title,
                            slug,
                            content,
                            excerpt,
                            image_url: coverImage,
                            is_published: publishStatus,
                            updated_at: new Date().toISOString()
                        })
                        .eq('id', id);

                    if (retryError) throw retryError;

                    toast.warning("Post updated, but 'meta' column missng. Schema data not saved.");
                } else {
                    throw error;
                }
            } else {
                toast.success('Post updated successfully!');
            }

            router.push('/admin/dashboard/blog');
        } catch (error: any) {
            console.error('Update error:', error);
            toast.error('Error updating post: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Loader2 className="animate-spin" size={48} color="#1e3a8a" />
            </div>
        );
    }

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => router.back()}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', color: '#4b5563' }}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className={styles.headerTitle}>Edit Post</h1>
                        <p className={styles.headerSubtitle}>Update your content</p>
                    </div>
                </div>
                <div className={styles.actions}>
                    <button
                        onClick={() => handleSubmit(false)}
                        disabled={loading}
                        className={styles.btnSecondary}
                    >
                        Save as Draft
                    </button>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                        {scheduledAt && (
                            <span style={{ fontSize: '0.75rem', color: '#bfa15f' }}>
                                Scheduled: {new Date(scheduledAt).toLocaleString()}
                            </span>
                        )}
                        <button
                            onClick={() => handleSubmit(true)}
                            disabled={loading}
                            className={styles.btnPrimary}
                            style={{ backgroundColor: isPublished ? '#16a34a' : '#1e3a8a' }}
                        >
                            {loading ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                            {isPublished ? 'Update' : (scheduledAt ? 'Schedule' : 'Publish')}
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {/* Main Editor Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Title Input */}
                    <div className={styles.card}>
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Post Title"
                            className={styles.inputTitle}
                        />
                    </div>

                    {/* Rich Text Editor */}
                    <RichTextEditor content={content} onChange={setContent} />

                    {/* Schema / SEO Section */}
                    <SchemaBuilder faqs={faqs} onChange={setFaqs} />

                </div>

                {/* Sidebar Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Scheduling Options */}
                    <div className={styles.card}>
                        <h3 className={styles.label}>Publishing Options</h3>

                        <div>
                            <label className={styles.label} style={{ marginBottom: '0.25rem' }}>Schedule Publication</label>
                            <input
                                type="datetime-local"
                                value={scheduledAt}
                                onChange={(e) => setScheduledAt(e.target.value)}
                                className={styles.inputField}
                                style={{ color: '#374151' }}
                            />
                            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>
                                Leave blank to publish immediately.
                            </p>
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className={styles.card}>
                        <h3 className={styles.label}>Cover Image</h3>
                        <div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: 'none' }}
                            />

                            {coverImage ? (
                                <div className={styles.coverImagePreview}>
                                    <img
                                        src={coverImage}
                                        alt="Cover"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <button
                                        onClick={() => setCoverImage('')}
                                        className={styles.removeImageBtn}
                                        title="Remove Image"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={styles.uploadBox}
                                >
                                    <div style={{ marginBottom: '0.75rem', color: '#6b7280', display: 'flex', justifyContent: 'center' }}>
                                        {uploading ? <Loader2 className="animate-spin" size={24} /> : <Upload size={24} />}
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
                                        {uploading ? 'Uploading...' : 'Click to upload cover'}
                                    </p>
                                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>PNG, JPG up to 5MB</p>
                                </div>
                            )}

                            {/* URL Input Fallback */}
                            {!coverImage && (
                                <div style={{ marginTop: '0.75rem' }}>
                                    <input
                                        type="text"
                                        placeholder="Or paste image URL..."
                                        className={styles.inputField}
                                        style={{ fontSize: '0.75rem' }}
                                        onBlur={(e) => e.target.value && setCoverImage(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className={styles.card}>
                        <h3 className={styles.label}>Post Details</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label className={styles.label} style={{ marginBottom: '0.25rem' }}>Slug (URL)</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: '#9ca3af', fontSize: '0.75rem', marginRight: '4px' }}>/news/</span>
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(generateSlug(e.target.value))}
                                        className={styles.inputField}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={styles.label} style={{ marginBottom: '0.25rem' }}>Excerpt (Meta Description)</label>
                                <textarea
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    rows={4}
                                    className={styles.inputField}
                                    placeholder="Write a brief summary for SEO..."
                                    style={{ resize: 'vertical' }}
                                />
                                <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', textAlign: 'right', color: excerpt.length > 160 ? '#ef4444' : '#9ca3af' }}>
                                    {excerpt.length}/160
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tips Card */}
                    <div className={styles.tipsCard}>
                        <h3 style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.75rem' }}>
                            💡 SEO Tips
                        </h3>
                        <ul className={styles.tipsList}>
                            <li>Check your slug is clean.</li>
                            <li>Ensure content has H2 headings.</li>
                            <li>Fill out the FAQs for better visibility.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import {
    ArrowLeft, Save, Upload, Image as ImageIcon, X,
    Bold, Italic, List, Link as LinkIcon, Heading1, Heading2, Quote
} from 'lucide-react';
import { toast } from 'sonner';

export default function NewPostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [previewMode, setPreviewMode] = useState(false);

    // Form State
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [slug, setSlug] = useState('');
    const [coverImage, setCoverImage] = useState('');

    const fileInputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const generateSlug = (text: string) => {
        return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        if (!slug) {
            setSlug(generateSlug(e.target.value));
        }
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
            toast.success('Image uploaded successfully');
        } catch (error: any) {
            console.error('Error uploading image:', error);
            toast.error('Failed to upload image: ' + error.message);
        } finally {
            setUploading(false);
        }
    };

    const insertMarkdown = (prefix: string, suffix: string = '') => {
        if (!textareaRef.current) return;

        const start = textareaRef.current.selectionStart;
        const end = textareaRef.current.selectionEnd;
        const text = textareaRef.current.value;
        const before = text.substring(0, start);
        const selection = text.substring(start, end);
        const after = text.substring(end);

        const newText = before + prefix + selection + suffix + after;
        setContent(newText);

        setTimeout(() => {
            if (textareaRef.current) {
                textareaRef.current.focus();
                textareaRef.current.setSelectionRange(
                    start + prefix.length,
                    end + prefix.length
                );
            }
        }, 0);
    };

    const handleSubmit = async (publish: boolean) => {
        if (!title.trim()) return toast.error('Title is required');
        if (!slug.trim()) return toast.error('Slug is required');

        setLoading(true);
        try {
            const { error } = await supabase.from('posts').insert({
                title,
                slug,
                content,
                excerpt,
                image_url: coverImage,
                is_published: publish
            });

            if (error) throw error;

            toast.success(publish ? 'Post published successfully!' : 'Draft saved successfully!');
            router.push('/admin/dashboard/blog');
        } catch (error: any) {
            toast.error('Error saving post: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const toolbarButtonStyle: React.CSSProperties = {
        padding: '8px',
        background: 'none',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        color: '#4b5563',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '3rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => router.back()}
                        style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', borderRadius: '50%' }}
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Create New Post</h1>
                        <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>Share news and updates with your audience</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                        onClick={() => handleSubmit(false)}
                        disabled={loading}
                        style={{
                            padding: '0.6rem 1.2rem',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            color: '#374151',
                            backgroundColor: 'white',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.6 : 1
                        }}
                    >
                        Save Draft
                    </button>
                    <button
                        onClick={() => handleSubmit(true)}
                        disabled={loading}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1.2rem',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: 'white',
                            backgroundColor: '#1e3a8a',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            opacity: loading ? 0.6 : 1,
                            boxShadow: '0 2px 4px rgba(30,58,138,0.2)'
                        }}
                    >
                        <Save size={16} /> Publish
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
                {/* Main Editor Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Title Input */}
                    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Post Title"
                            style={{
                                width: '100%',
                                fontSize: '1.75rem',
                                fontWeight: 'bold',
                                color: '#1f2937',
                                border: 'none',
                                outline: 'none',
                                padding: 0,
                                background: 'transparent'
                            }}
                        />
                    </div>

                    {/* Content Editor */}
                    <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', minHeight: '500px' }}>
                        {/* Toolbar */}
                        <div style={{
                            borderBottom: '1px solid #e5e7eb',
                            padding: '0.75rem 1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#f9fafb',
                            borderTopLeftRadius: '12px',
                            borderTopRightRadius: '12px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <button onClick={() => insertMarkdown('**', '**')} style={toolbarButtonStyle} title="Bold"><Bold size={18} /></button>
                                <button onClick={() => insertMarkdown('*', '*')} style={toolbarButtonStyle} title="Italic"><Italic size={18} /></button>
                                <div style={{ width: '1px', height: '20px', backgroundColor: '#d1d5db', margin: '0 8px' }}></div>
                                <button onClick={() => insertMarkdown('# ')} style={toolbarButtonStyle} title="Heading 1"><Heading1 size={18} /></button>
                                <button onClick={() => insertMarkdown('## ')} style={toolbarButtonStyle} title="Heading 2"><Heading2 size={18} /></button>
                                <div style={{ width: '1px', height: '20px', backgroundColor: '#d1d5db', margin: '0 8px' }}></div>
                                <button onClick={() => insertMarkdown('> ')} style={toolbarButtonStyle} title="Quote"><Quote size={18} /></button>
                                <button onClick={() => insertMarkdown('- ')} style={toolbarButtonStyle} title="List"><List size={18} /></button>
                                <div style={{ width: '1px', height: '20px', backgroundColor: '#d1d5db', margin: '0 8px' }}></div>
                                <button onClick={() => insertMarkdown('[', '](url)')} style={toolbarButtonStyle} title="Link"><LinkIcon size={18} /></button>
                                <button onClick={() => insertMarkdown('![alt text](', ')')} style={toolbarButtonStyle} title="Image"><ImageIcon size={18} /></button>
                            </div>
                            <div style={{ display: 'flex', backgroundColor: '#e5e7eb', borderRadius: '6px', padding: '3px' }}>
                                <button
                                    onClick={() => setPreviewMode(false)}
                                    style={{
                                        padding: '6px 12px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        backgroundColor: !previewMode ? 'white' : 'transparent',
                                        color: !previewMode ? '#1e3a8a' : '#6b7280',
                                        boxShadow: !previewMode ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                                    }}
                                >
                                    Write
                                </button>
                                <button
                                    onClick={() => setPreviewMode(true)}
                                    style={{
                                        padding: '6px 12px',
                                        fontSize: '0.75rem',
                                        fontWeight: '600',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        backgroundColor: previewMode ? 'white' : 'transparent',
                                        color: previewMode ? '#1e3a8a' : '#6b7280',
                                        boxShadow: previewMode ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                                    }}
                                >
                                    Preview
                                </button>
                            </div>
                        </div>

                        {/* Editor Area */}
                        <div style={{ flex: 1, position: 'relative' }}>
                            {!previewMode ? (
                                <textarea
                                    ref={textareaRef}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Write your amazing content here... (Markdown supported)"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        minHeight: '400px',
                                        padding: '1.5rem',
                                        fontSize: '1rem',
                                        lineHeight: '1.75',
                                        color: '#374151',
                                        border: 'none',
                                        outline: 'none',
                                        resize: 'none',
                                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                                        backgroundColor: 'transparent'
                                    }}
                                />
                            ) : (
                                <div style={{ padding: '1.5rem', minHeight: '400px', overflowY: 'auto' }}>
                                    {content ? (
                                        content.split('\n').map((line, i) => {
                                            if (line.startsWith('# ')) return <h1 key={i} style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>{line.replace('# ', '')}</h1>;
                                            if (line.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '0.75rem', marginTop: '1.5rem', color: '#1f2937' }}>{line.replace('## ', '')}</h2>;
                                            if (line.startsWith('> ')) return <blockquote key={i} style={{ borderLeft: '4px solid #d1d5db', paddingLeft: '1rem', fontStyle: 'italic', color: '#6b7280', margin: '1rem 0' }}>{line.replace('> ', '')}</blockquote>;
                                            if (line.startsWith('- ')) return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem', color: '#374151' }}>{line.replace('- ', '')}</li>;
                                            if (line.trim() === '') return <br key={i} />;
                                            return <p key={i} style={{ marginBottom: '0.75rem', color: '#374151', lineHeight: '1.75' }}>{line}</p>;
                                        })
                                    ) : (
                                        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>Nothing to preview yet.</div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div style={{ backgroundColor: '#f9fafb', padding: '0.5rem 1rem', fontSize: '0.75rem', color: '#9ca3af', borderTop: '1px solid #f3f4f6', textAlign: 'right', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}>
                            {content.length} characters
                        </div>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Cover Image */}
                    <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cover Image</h3>
                        <div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                accept="image/*"
                                onChange={handleImageUpload}
                            />

                            {coverImage ? (
                                <div style={{ position: 'relative', aspectRatio: '16/9', width: '100%', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                                    <img
                                        src={coverImage}
                                        alt="Cover"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <button
                                        onClick={() => setCoverImage('')}
                                        style={{
                                            position: 'absolute',
                                            top: '8px',
                                            right: '8px',
                                            padding: '6px',
                                            backgroundColor: '#dc2626',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            cursor: 'pointer',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                        }}
                                        title="Remove Image"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    style={{
                                        border: '2px dashed #d1d5db',
                                        borderRadius: '8px',
                                        padding: '2rem',
                                        textAlign: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 0.75rem',
                                        color: '#6b7280'
                                    }}>
                                        {uploading ? '...' : <Upload size={20} />}
                                    </div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151', margin: 0 }}>
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
                                        style={{
                                            width: '100%',
                                            fontSize: '0.75rem',
                                            padding: '0.5rem',
                                            backgroundColor: '#f9fafb',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '6px',
                                            outline: 'none'
                                        }}
                                        onBlur={(e) => e.target.value && setCoverImage(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.02)' }}>
                        <h3 style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Post Details</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Slug (URL)</label>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: '#9ca3af', fontSize: '0.75rem', marginRight: '4px' }}>/blog/</span>
                                    <input
                                        type="text"
                                        value={slug}
                                        onChange={(e) => setSlug(generateSlug(e.target.value))}
                                        style={{
                                            flex: 1,
                                            fontSize: '0.875rem',
                                            padding: '0.5rem',
                                            backgroundColor: '#f9fafb',
                                            border: '1px solid #e5e7eb',
                                            borderRadius: '6px',
                                            outline: 'none'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', color: '#374151', marginBottom: '0.25rem' }}>Excerpt</label>
                                <textarea
                                    value={excerpt}
                                    onChange={(e) => setExcerpt(e.target.value)}
                                    rows={4}
                                    style={{
                                        width: '100%',
                                        fontSize: '0.875rem',
                                        padding: '0.5rem',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '6px',
                                        outline: 'none',
                                        resize: 'vertical'
                                    }}
                                    placeholder="Write a brief summary..."
                                />
                                <p style={{ fontSize: '0.7rem', color: '#9ca3af', marginTop: '0.25rem', textAlign: 'right' }}>{excerpt.length}/160</p>
                            </div>
                        </div>
                    </div>

                    {/* Tips Card */}
                    <div style={{ backgroundColor: '#eff6ff', padding: '1.25rem', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                        <h3 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.75rem' }}>
                            💡 Tips for Great Posts
                        </h3>
                        <ul style={{ fontSize: '0.75rem', color: '#1e40af', margin: 0, paddingLeft: '1.25rem', lineHeight: '1.8' }}>
                            <li>Use specific, descriptive titles.</li>
                            <li>Add subheadings (H2) to break up text.</li>
                            <li>Include at least one image.</li>
                            <li>Keep paragraphs short (2-3 sentences).</li>
                            <li>Add internal links to your services.</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

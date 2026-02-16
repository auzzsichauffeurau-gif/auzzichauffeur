import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../news.module.css";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { Calendar, User, Clock } from "lucide-react";
import AuthorBio from "@/components/AuthorBio";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ArticleSchema from "@/components/ArticleSchema";
import FAQSchema from "@/components/FAQSchema";
import type { Metadata } from 'next';

// Utility to strip HTML tags for plain text (for meta description)
const stripHtml = (html: string) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim();
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const baseUrl = 'https://auzziechauffeur.com.au';
    const { slug } = await params;

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!post) return { title: "Post Not Found | Auzzie Chauffeur" };

    const description = post.excerpt || stripHtml(post.content).substring(0, 160);

    return {
        title: { absolute: `${post.title} | Auzzie Chauffeur` },
        description: description,
        alternates: {
            canonical: `${baseUrl}/news/${slug}`,
        },
        openGraph: {
            title: post.title,
            description: description,
            url: `${baseUrl}/news/${slug}`,
            images: post.image_url ? [{ url: post.image_url }] : [],
            type: 'article',
            publishedTime: post.created_at,
            authors: ['James Sterling']
        }
    };
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!post) {
        return (
            <main className={styles.pageWrapper}>
                <Navbar />
                <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1>Post Not Found</h1>
                    <Link href="/news" style={{ color: '#c5a467', marginTop: '1rem' }}>Back to News</Link>
                </div>
                <Footer />
            </main>
        );
    }

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "News", url: "/news" },
        { name: post.title, url: `/news/${post.slug}` }
    ];

    // Extract Metadata/Schema info
    // post.meta might be null if not using the new column yet
    const meta = post.meta || {};
    const faqs = meta.faqs || [];
    const authorName = meta.author?.name || "James Sterling";
    const authorUrl = meta.author?.url || "https://auzziechauffeur.com.au/about-us";

    // Estimate read time
    const wordCount = stripHtml(post.content || '').split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200) || 1;

    // Use dangerouslySetInnerHTML for content since it's now HTML
    // We assume admin content is safe (sanitization could be added if needed)

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />

            <ArticleSchema
                headline={post.title}
                image={post.image_url ? [post.image_url] : []}
                datePublished={post.created_at}
                dateModified={post.updated_at || post.created_at}
                authorName={authorName}
                authorUrl={authorUrl}
                description={post.excerpt || stripHtml(post.content).substring(0, 160)}
            />

            {/* Inject FAQ Schema if FAQs exist */}
            {faqs.length > 0 && <FAQSchema pairs={faqs} />}

            {/* Hero Section */}
            <section className={styles.hero} style={{ minHeight: '300px' }}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/news">News</Link> <span>&gt;</span> {post.title}
                    </div>
                    <h1 className={styles.heroTitle} style={{ fontSize: '2.5rem' }}>{post.title}</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container} style={{ maxWidth: '900px' }}>
                    <div className="blog-content-wrapper" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #eee' }}>

                        {/* Meta */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: '#666', fontSize: '0.9rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} /> <span style={{ fontWeight: 'bold' }}>Published:</span> {new Date(post.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={16} /> {authorName}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} /> {readTime} min read
                            </span>
                        </div>

                        {/* Image */}
                        {post.image_url && (
                            <div style={{ marginBottom: '2rem', borderRadius: '8px', overflow: 'hidden', position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                                <Image
                                    src={post.image_url}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 900px) 100vw, 900px"
                                    priority
                                />
                            </div>
                        )}

                        {/* Content utilizing Tiptap HTML output */}
                        {/* We add a custom class 'prose' for Tailwind typography or handle styles inline if Tailwind typography is not available */}
                        {/* Since user said 'style is not good', we should ensure headings are styled */}
                        <div
                            className={styles.blogContent}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* FAQ Section Display */}
                        {faqs.length > 0 && (
                            <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>
                                    Frequently Asked Questions
                                </h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {faqs.map((faq: any, idx: number) => (
                                        <div key={idx} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                                            <h4 itemProp="name" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#111', marginBottom: '0.5rem' }}>{faq.question}</h4>
                                            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                                                <div itemProp="text" style={{ color: '#4b5563', lineHeight: '1.6' }}>{faq.answer}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Author Bio for EEAT */}
                        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
                            <AuthorBio author={{
                                name: authorName,
                                role: "Senior Chauffeur & Travel Coordinator",
                                description: "James has been driving for Auzzie Chauffeur for over 12 years. He specializes in high-profile corporate logistics and knows every back lane in Sydney and Melbourne.",
                                imageUrl: "/tile-driver.png"
                            }} />
                        </div>

                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link href="/news" style={{ display: 'inline-block', padding: '0.8rem 2rem', backgroundColor: '#1e3a8a', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                            Back to All News
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

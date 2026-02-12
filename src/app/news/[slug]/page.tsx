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
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const baseUrl = 'https://auzziechauffeur.com.au';
    const { slug } = await params;
    const { data: post } = await supabase
        .from('posts')
        .select('title, content')
        .eq('slug', slug)
        .single();

    if (!post) return { title: "Post Not Found | Auzzie Chauffeur" };

    // Strip HTML tags and entities for a clean meta description
    const cleanDescription = post.content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/&nbsp;/g, ' ')
        .substring(0, 160)
        .trim();

    return {
        title: post.title,
        description: cleanDescription,
        alternates: {
            canonical: `${baseUrl}/news/${slug}`,
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

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <ArticleSchema
                headline={post.title}
                image={post.image_url ? [post.image_url] : []}
                datePublished={post.created_at}
                dateModified={post.updated_at || post.created_at}
                authorName="James Sterling"
                description={post.content.substring(0, 160)}
            />

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
                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #eee' }}>

                        {/* Meta */}
                        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', color: '#666', fontSize: '0.9rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} /> <span style={{ fontWeight: 'bold' }}>Published:</span> {new Date(post.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={16} /> Admin
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={16} /> 5 min read
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
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div style={{ lineHeight: '1.8', color: '#333', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            {post.content.split('\n').map((paragraph: string, idx: number) => (
                                <p key={idx} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Author Bio for EEAT */}
                        <AuthorBio author={{
                            name: "James Sterling",
                            role: "Senior Chauffeur & Travel Coordinator",
                            description: "James has been driving for Auzzie Chauffeur for over 12 years. He specializes in high-profile corporate logistics and knows every back lane in Sydney and Melbourne.",
                            imageUrl: "/tile-driver.png"
                        }} />

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

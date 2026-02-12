"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./news.module.css";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function NewsPage() {
    const [newsItems, setNewsItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true);
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false });

            if (!error && data) {
                setNewsItems(data);
            }
            setLoading(false);
        }
        fetchPosts();
    }, []);

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> News
                    </div>
                    <h1 className={styles.heroTitle}>Latest News</h1>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div className={styles.sectionTitleWrapper}>
                        <h2 className={styles.sectionTitle}>Auzzie Chauffeur News</h2>
                    </div>

                    <div className={styles.layout}>
                        {/* Main Content */}
                        <div className={styles.mainContent}>
                            <div className={styles.newsGrid}>
                                {loading ? (
                                    <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '2rem' }}>Loading news...</div>
                                ) : newsItems.length === 0 ? (
                                    <div style={{ gridColumn: 'span 2', textAlign: 'center', padding: '2rem' }}>No news posts found.</div>
                                ) : (
                                    newsItems.map((item) => (
                                        <article key={item.id} className={styles.newsCard}>
                                            <div className={styles.imageWrapper} style={{ position: 'relative', height: '200px' }}>
                                                <Image
                                                    src={item.image_url || "/tile-audi.png"}
                                                    alt={item.title}
                                                    fill
                                                    style={{ objectFit: 'cover' }}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            </div>
                                            <div className={styles.cardContent}>
                                                <h3 className={styles.title}>{item.title}</h3>
                                                <div className={styles.metaRow}>
                                                    <span className={styles.date} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                        <Calendar size={12} /> <span style={{ fontWeight: '500' }}>Published:</span> {new Date(item.created_at).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                    </span>
                                                </div>
                                                <p className={styles.excerpt}>{item.excerpt || item.content?.substring(0, 100) + '...'}</p>
                                                <Link href={`/news/${item.slug}`} className={styles.readMore} aria-label={`Read more about ${item.title}`}>
                                                    Read More
                                                </Link>
                                            </div>
                                        </article>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className={styles.sidebar}>
                            <div className={styles.sidebarWidget}>
                                <div className={styles.searchBox}>
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.sidebarWidget}>
                                <h4 className={styles.widgetTitle}>Trending in Luxury Travel</h4>
                                <ul className={styles.categoryList} style={{ fontSize: '0.9rem' }}>
                                    <li style={{ borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
                                        <div style={{ color: '#bfa15f', fontWeight: 'bold' }}>Increasing:</div>
                                        <div>Sustainable Chauffeur Options (Tesla)</div>
                                    </li>
                                    <li style={{ borderBottom: '1px solid #eee', paddingBottom: '0.5rem', paddingTop: '0.5rem' }}>
                                        <div style={{ color: '#bfa15f', fontWeight: 'bold' }}>Trending:</div>
                                        <div>Melbourne Grand Prix Transfers 2026</div>
                                    </li>
                                    <li style={{ borderBottom: '1px solid #eee', paddingBottom: '0.5rem', paddingTop: '0.5rem' }}>
                                        <div style={{ color: '#bfa15f', fontWeight: 'bold' }}>Seasonal:</div>
                                        <div>Hunter Valley Wine Tours</div>
                                    </li>
                                    <li style={{ paddingTop: '0.5rem' }}>
                                        <div style={{ color: '#bfa15f', fontWeight: 'bold' }}>New:</div>
                                        <div>Luxury Airport Concierge Services</div>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.sidebarWidget}>
                                <h4 className={styles.widgetTitle}>Categories</h4>
                                <ul className={styles.categoryList}>
                                    <li><Link href="/news?category=all">All Articles</Link></li>
                                    <li><Link href="/news?category=airport">Airport Transfers</Link></li>
                                    <li><Link href="/news?category=corporate">Corporate Car Hire</Link></li>
                                    <li><Link href="/news?category=events">Event Transport</Link></li>
                                    <li><Link href="/news?category=fleet">The Fleet</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
                <div className={styles.container} style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid #eee', color: '#6b7280', fontSize: '0.9rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#374151', marginBottom: '1rem', fontWeight: 'bold' }}>Editorial Transparency</h3>
                    <p style={{ lineHeight: '1.6', maxWidth: '800px' }}>
                        At Auzzie Chauffeur, our news and travel guides are produced by local Australian travel experts and senior chauffeurs. We create this content to help our community navigate Australian cities with ease and stay informed about luxury travel trends. We do not use bulk automation to mass-produce articles; every piece is reviewed for factual accuracy and first-hand expertise to ensure you receive the most reliable information for your journey.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}

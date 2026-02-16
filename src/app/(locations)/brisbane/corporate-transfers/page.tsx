import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import {
    ShieldCheck, Users, Star, Car, BatteryCharging, Bus, Smile,
    Clock, MapPin, Briefcase, FileText, CheckCircle, Globe, Award, ChevronDown
} from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
    title: { absolute: "Corporate Transfers Brisbane | Executive Chauffeur Service | Auzzie Chauffeur" },
    description: "Experience the best in Brisbane corporate transfers. QLD Government Accredited, extensive luxury fleet (Sedans, SUVs, Vans), 24/7 support, and trusted by multinationals.",
};

export default function BrisbaneCorporatePage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Brisbane" service="Corporate Transfers" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Corporate Transfers Brisbane"
                    subtitle="Take care of business while Auzzie Chauffeur takes care of your transport. Experience the difference with our reliable, accredited, and premium service."
                    showStats={false}
                />
            </div>

            {/* TRUST BADGE STRIP (from Executive Transfers) */}
            <section style={{ backgroundColor: '#1e3a8a', padding: '1.5rem', color: 'white', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Award color="#c5a467" size={24} />
                        <span style={{ fontWeight: '600', fontSize: '1.1rem', letterSpacing: '0.5px' }}>QLD GOVERNMENT ACCREDITED OPERATOR</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Clock color="#c5a467" size={24} />
                        <span style={{ fontWeight: '600', fontSize: '1.1rem', letterSpacing: '0.5px' }}>24/7 CUSTOMER SUPPORT</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Star color="#c5a467" size={24} />
                        <span style={{ fontWeight: '600', fontSize: '1.1rem', letterSpacing: '0.5px' }}>5 STAR RATED SERVICE</span>
                    </div>
                </div>
            </section>

            {/* INTRO BLOCK - WELCOME & STRESS REDUCTION (Merged Narrative) */}
            <section style={{ backgroundColor: '#fff', padding: '5rem 2rem' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Welcome To Executive Corporate Transfers</h2>

                    {/* Stress Reduction (Executive Transfers) */}
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '2rem' }}>
                        Driving in congested areas can be stressful—especially when you’re not familiar with the city.
                        Traveling on business should be about focusing on your work, not worrying about navigation.
                        <strong>Reduce your stress</strong> by hiring a premium limousine service for your airport transfers and corporate travel needs.
                    </p>

                    {/* Service Overview (Surf City & Hughes) */}
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#334155', marginBottom: '2rem' }}>
                        We provide a professional and reliable service to get you to and from the airport quickly and hassle-free.
                        Auzzie Chauffeur is the transport provider of choice for leading Australian and multinational organisations.
                        Whether you’re travelling from <strong>Brisbane to the Gold Coast</strong>, attending a conference, or need a private driver for weeks on end, we’ve got you covered.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <Link href="/booking" style={{
                            background: '#c5a467', color: 'white', padding: '1rem 3rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none'
                        }}>
                            BOOK NOW
                        </Link>
                        <Link href="/contact" style={{
                            border: '1px solid #1e3a8a', color: '#1e3a8a', padding: '1rem 3rem', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none'
                        }}>
                            INSTANT QUOTE
                        </Link>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES GRID (Merged AAA, Hughes, Executive) */}
            <section style={{ backgroundColor: '#f8fafc', padding: '5rem 2rem' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Auzzie Corporate Transfers?</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                        {/* On Time Oath (AAA) */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: '4px solid #1e40af' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Clock size={32} color="#1e40af" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>On Time Oath</h3>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                For important occasions, punctuality is paramount. Our chauffeurs track your flight and wait for you at the terminal. Be on time and worry-free.
                            </p>
                        </div>

                        {/* Work on the Go (Executive) */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: '4px solid #c5a467' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <FileText size={32} color="#c5a467" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#b45309' }}>Work on the Go</h3>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                Turn commute time into productive time. Review documents, make calls, and prepare for meetings in the quiet comfort of our luxury vehicles.
                            </p>
                        </div>

                        {/* Corporate Accounts (Executive) */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: '4px solid #15803d' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Briefcase size={32} color="#15803d" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#14532d' }}>Corporate Accounts</h3>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                We offer tailored transport plans for companies. Enjoy simplified booking, flexible payment options, and detailed itinerary management for your team.
                            </p>
                        </div>

                        {/* Customer Care (Surf City) */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: '4px solid #1e40af' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Smile size={32} color="#1e40af" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>Old-Fashioned Care</h3>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                Detailed itineraries with driver contact numbers, SMS reminders the night before, and genuine hospitality. We keep you informed every step of the way.
                            </p>
                        </div>

                        {/* Global Reach (Hughes) */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: '4px solid #c5a467' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Globe size={32} color="#c5a467" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#b45309' }}>Australia Wide</h3>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                Not just Brisbane—we connect you across Australia, New Zealand & Singapore using our extensive affiliate network. One booking, nationwide coverage.
                            </p>
                        </div>

                        {/* Safety (Surf City) */}
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderTop: '4px solid #15803d' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <ShieldCheck size={32} color="#15803d" />
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#14532d' }}>Safe & Private</h3>
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.6' }}>
                                Travel with peace of mind in immaculate, sanitized vehicles. Enjoy a private, door-to-door transfer with no sharing and full GPS tracking.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CUSTOMER JOURNEY (AAA) */}
            <section style={{ backgroundColor: '#1e3a8a', padding: '5rem 2rem', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem', color: 'white' }}>Our Customer Journey</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '4rem', opacity: 0.9 }}>A seamless experience from booking to destination.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                                <MapPin size={40} color="#c5a467" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>1. Book Your Ride</h3>
                            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>Enter pick-up/drop-off details or book hourly. Get an instant quote.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                                <CheckCircle size={40} color="#c5a467" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>2. Confirmation</h3>
                            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>Receive email/SMS updates including driver details and ETA.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
                                <Smile size={40} color="#c5a467" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>3. Enjoy The Journey</h3>
                            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>Sit back and relax in luxury while we handle the driving.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXTENDED SERVICES LIST (Executive & Surf City merged) */}
            <section style={{ padding: '5rem 2rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Provide Our Best Services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Gold Coast Airport Transfers", desc: "Your Gold Coast Airport (OOL) expert – smooth, stress-free journeys." },
                            { title: "Brisbane Airport Transfers", desc: "Stress-free rides to/from Domestic & International terminals (BNE)." },
                            { title: "Corporate Transfers", desc: "Reliable, comfortable travel for meetings, events & executives." },
                            { title: "Conference Transfers", desc: "Handling large groups? We ensure every delegate arrives on time & relaxed." },
                            { title: "FIFO Airport Transfers", desc: "Seamless, punctual travel for shift workers, always on time, every time." },
                            { title: "Theme Park Transfers", desc: "Family fun made easy with reliable transfers to all major attractions." },
                            { title: "Wedding & Special Hire", desc: "Meticulous service for your special day with our pristine luxury fleet." },
                            { title: "Sporting Event Transfers", desc: "Skip the parking chaos and arrive at the stadium in style." }
                        ].map((svc, idx) => (
                            <div key={idx} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid #c5a467', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e3a8a' }}>{svc.title}</h3>
                                <p style={{ color: '#475569' }}>{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FLEET SECTION - DETAILED GRID (Merged Surf City & Hughes) */}
            <section style={{ padding: '5rem 2rem', background: '#fff', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Premium Car Fleet</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto' }}>
                        A vehicle to suit every traveller. From eco-friendly electric options to spacious people movers and executive sedans.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>

                        {/* Executive Sedan */}
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Executive Sedan</h3>
                                <Car size={32} color="#1e3a8a" />
                            </div>
                            <p style={{ fontWeight: '600', color: '#475569' }}>Mercedes E-Class, Genesis</p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <span>3 Passengers</span> • <span>2 Luggage</span>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Sophisticated comfort perfect for solo executives or couples.</p>
                            <Link href="/booking" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.75rem', background: '#1e3a8a', color: 'white', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>BOOK EXECUTIVE</Link>
                        </div>

                        {/* Premium Sedan */}
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Premium Sedan</h3>
                                <Star size={32} color="#c5a467" />
                            </div>
                            <p style={{ fontWeight: '600', color: '#475569' }}>BMW 7 Series, Audi A8, S-Class</p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <span>3 Passengers</span> • <span>2 Luggage</span>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>The ultimate in luxury. Top of the line features for VIPs.</p>
                            <Link href="/booking" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.75rem', background: '#c5a467', color: 'white', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>BOOK PREMIUM</Link>
                        </div>

                        {/* Luxury Electric */}
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Luxury Electric</h3>
                                <BatteryCharging size={32} color="#15803d" />
                            </div>
                            <p style={{ fontWeight: '600', color: '#475569' }}>Tesla Model Y</p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <span>3 Passengers</span> • <span>2 Luggage</span>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Go green in style. Quiet, modern comfort with zero emissions.</p>
                            <Link href="/booking" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.75rem', background: '#15803d', color: 'white', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>BOOK ELECTRIC</Link>
                        </div>

                        {/* Large MPV */}
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Large MPV</h3>
                                <Users size={32} color="#1e3a8a" />
                            </div>
                            <p style={{ fontWeight: '600', color: '#475569' }}>Mercedes V-Class</p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <span>7 Passengers</span> • <span>4 Luggage</span>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Roomy rides made easy. Perfect for teams and families.</p>
                            <Link href="/booking" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.75rem', background: '#1e3a8a', color: 'white', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>BOOK MPV</Link>
                        </div>

                        {/* Luxury SUV */}
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Luxury SUV</h3>
                                <Car size={32} color="#1e3a8a" />
                            </div>
                            <p style={{ fontWeight: '600', color: '#475569' }}>Audi Q7</p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <span>3 Passengers</span> • <span>3 Luggage</span>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>First-class style built for extra comfort and luggage space.</p>
                            <Link href="/booking" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.75rem', background: '#1e3a8a', color: 'white', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>BOOK SUV</Link>
                        </div>

                        {/* Minibus */}
                        <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fcfcfc' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a' }}>Executive Minibus</h3>
                                <Bus size={32} color="#1e3a8a" />
                            </div>
                            <p style={{ fontWeight: '600', color: '#475569' }}>Mercedes Sprinter</p>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                                <span>11 Passengers</span> • <span>11 Luggage</span>
                            </div>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.5' }}>Group travel sorted. Reliable comfort for larger parties.</p>
                            <Link href="/booking" style={{ marginTop: 'auto', display: 'block', textAlign: 'center', padding: '0.75rem', background: '#1e3a8a', color: 'white', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>BOOK MINIBUS</Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* STATS STRIP (from AAA) */}
            <section style={{ backgroundColor: '#1e3a8a', padding: '3rem 2rem', color: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#c5a467', marginBottom: '0.5rem' }}>5 Star</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>Rating</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#c5a467', marginBottom: '0.5rem' }}>20+</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>Years Experience</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#c5a467', marginBottom: '0.5rem' }}>240+</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>Happy Customers</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#c5a467', marginBottom: '0.5rem' }}>350K</div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>Kilometers Driven</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (Surf City) */}
            <section style={{ padding: '5rem 2rem', background: '#f8fafc' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className={styles.sectionTitle} style={{ marginBottom: '3rem' }}>Client Testimonials</h2>
                    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {[
                            { quote: "I couldn’t speak more highly about the transfer service. Friendly, reliable and reasonably priced.", author: "Gary U.", role: "Regular Traveller" },
                            { quote: "Karen and the team have been a pleasure to work with. They facilitated a shuttle service for a FIFO program at short notice. Flexible and smooth.", author: "Duncan", role: "FIFO Manager" },
                            { quote: "Debbie was a great driver and a very helpful and kind person. Amazed she has been doing this for 48 years!", author: "Bipin Salunke", role: "Managing Director" },
                            { quote: "This was the first time we used this company. 5 big bags, 4 smaller bags nothing was a problem. Immaculate vehicle.", author: "David N.", role: "Family Traveller" },
                            { quote: "Fantastic service, prompt, polite and excellent service. Great communication, comfortable trip.", author: "Tony Cameron", role: "General Manager" }
                        ].map((t, idx) => (
                            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'left', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#334155', marginBottom: '1rem' }}>“{t.quote}”</p>
                                <div>
                                    <strong style={{ color: '#0f172a' }}>{t.author}</strong>
                                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{t.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', borderRadius: '12px' }}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        {
                            q: "How much does your chauffeur service cost?",
                            a: "Our rates are competitive and transparent. Costs vary based on vehicle type (Sedan, SUV, Van) and distance. Contact us for a fixed price instant quote."
                        },
                        {
                            q: "What types of vehicles do you offer?",
                            a: "We offer a premium fleet including Executive Sedans (Mercedes E-Class), Premium Sedans (BMW 7 Series), Luxury Electric (Tesla), and People Movers (Mercedes V-Class, Sprinter)."
                        },
                        {
                            q: "Are your chauffeurs professionally trained?",
                            a: "Yes, all chauffeurs are QLD Government Accredited, background-checked, and trained in hygiene, fatigue management, and professional etiquette."
                        },
                        {
                            q: "Do you facilitate FIFO transfers?",
                            a: "Yes, we specialise in reliable FIFO airport transfers for shift workers, ensuring you are always on time for your charter or commercial flight."
                        }
                    ].map((item, idx) => (
                        <details key={idx} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                            <summary style={{ padding: '1.5rem', cursor: 'pointer', fontWeight: 'bold', color: '#1e3a8a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {item.q}
                                <ChevronDown size={20} color="#c5a467" />
                            </summary>
                            <div style={{ padding: '0 1.5rem 1.5rem', color: '#475569', lineHeight: '1.7' }}>
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* SEO / BUYING GUIDE SECTION - DARK MODE */}
            <section style={{ backgroundColor: '#111827', color: '#e2e8f0', padding: '5rem 2rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: 'white' }}>The Best Executive Transfer Services in Brisbane</h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c5a467' }}>Assess Their Vehicles and Drivers</h3>
                            <p style={{ lineHeight: '1.7', opacity: 0.8 }}>
                                It’s important to assess the type of vehicles offered. Ask about capacity, features, and amenities.
                                Our drivers are highly trained chauffeurs with specialist training in hygiene, fatigue management, and professional etiquette.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c5a467' }}>Check Their Reputation</h3>
                            <p style={{ lineHeight: '1.7', opacity: 0.8 }}>
                                Check ratings and reviews on credible websites. Verify that they are legally compliant and accredited.
                                This gives you peace of mind that you are dealing with a trusted and experienced professional chauffeur service provider.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#c5a467' }}>Check You Have Enough Space</h3>
                            <p style={{ lineHeight: '1.7', opacity: 0.8 }}>
                                Check if the vehicle is suitable for all passengers and luggage. The right executive transfers service will work with
                                you to find the right vehicle, whether it&apos;s an upgrade or a specific configuration like a People Mover.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

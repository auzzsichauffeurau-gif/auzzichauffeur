import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Users, Calendar, MapPin, Clock, Award, Briefcase, CheckCircle, Car } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Conference Transfers Sydney | ICC & Olympic Park Events | Auzzie Chauffeur" },
    description: "Reliable group transport for Sydney conferences and events. Chauffeur services for ICC Sydney, Qudos Bank Arena, and corporate functions. Book vans & sedans.",
};

export default function SydneyEventsPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Sydney" service="Conferences & Special Events" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Sydney Conference & Event Transfers"
                    subtitle="Seamless group transport for major events at ICC Sydney, Olympic Park, and beyond. We coordinate logistics so you don't have to."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#eff6ff', padding: '3rem 1rem', borderBottom: '3px solid #3b82f6' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#dbeafe', padding: '1rem', borderRadius: '50%', color: '#3b82f6', flexShrink: 0 }}>
                        <Calendar size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '0.5rem' }}>
                            How much does event transport cost in Sydney?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            For corporate events and conferences in Sydney, our <strong>Mercedes V-Class vans (7 pax)</strong> start from <strong>$120 per hour</strong> with a 3-hour minimum. Airport transfers for guest speakers or VIPs to the CBD range from <strong>$110 - $145</strong> depending on vehicle class.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Volume discounts available for multi-vehicle bookings.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Event Logistics Made Easy</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Group Coordination", desc: "We manage multiple vehicles to ensure hundreds of delegates arrive on time.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "Venue Experience", desc: "Familiar with load zones at ICC Sydney, The Star, and Olympic Park.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "On-Site Dispatch", desc: "For large events, we can provide a coordinator on the ground to manage vehicle flow.", icon: <Briefcase size={28} color="#3b82f6" /> },
                            { title: "VIP Transfers", desc: "Luxury sedans for keynote speakers and executives who need privacy.", icon: <Award size={28} color="#3b82f6" /> },
                            { title: "Flexible Hourly Hire", desc: "Keep vehicles on standby for shuttle runs between hotels and venues.", icon: <Clock size={28} color="#3b82f6" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e0f2fe', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1e3a8a' }}>{item.title}</h3>
                                    <p style={{ color: '#475569', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Venues Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Common Event Routes</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route / Service</th>
                                    <th style={{ padding: '1rem' }}>Vehicle Type</th>
                                    <th style={{ padding: '1rem' }}>Capacity</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Sydney Airport -> ICC Sydney", veh: "Mercedes V-Class", cap: "7 Pax + Bags", price: "$140 - $160" },
                                    { route: "CBD Hotel -> Olympic Park", veh: "Luxury Sedan", cap: "4 Pax", price: "$90 - $110" },
                                    { route: "Event Shuttle Service", veh: "People Mover", cap: "7 Pax", price: "$120 / hour" },
                                    { route: "VIP Guest Transfer", veh: "European Sedan", cap: "3 Pax", price: "$110 / transfer" },
                                    { route: "Full Day Disposal (8hrs)", veh: "Any Vehicle", cap: "Varies", price: "From $900" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1e3a8a' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#475569' }}>{row.cap}</td>
                                        <td style={{ padding: '1.25rem', color: '#3b82f6', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Venue Info */}
                <div style={{ marginBottom: '5rem', background: '#f0f9ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Major Sydney Venues</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>ICC Sydney</h3>
                            <p style={{ color: '#475569' }}>Located in Darling Harbour. We utilize the specialized drop-off zones for exhibition and convention guests to minimize walking distance.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Olympic Park</h3>
                            <p style={{ color: '#475569' }}>Home to Qudos Bank Arena and Accor Stadium. Event traffic can be heavy; our drivers know the best alternative routes for entry and exit.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Event Transport FAQs</h2>
                    <LocationFAQ city="Sydney" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Flawless Execution</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “Auzzie Chauffeur managed the transport for our annual sales kickoff. 40 delegates moved between the airport, hotel, and ICC without a single delay.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— Sarah J., Event Manager</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Event:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Explore our <Link href="/the-fleet" className={styles.inlineLink}>fleet options</Link>.
                        Contact our events team via <Link href="/contact-us" className={styles.inlineLink}>email or phone</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}

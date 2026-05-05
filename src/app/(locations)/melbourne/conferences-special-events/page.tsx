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
    title: { absolute: "Melbourne Conference Chauffeur | MCEC & Marvel Stadium Events | Auzzie Chauffeur" },
    description: "Group transfers for Melbourne Convention Centre (MCEC). Chauffeur services for Spring Racing Carnival, F1 Grand Prix, and corporate events.",
};

export default function MelbourneEventsPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Melbourne" service="Conferences & Special Events" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Melbourne Event Chauffeur"
                    subtitle="Premium transport for the Melbourne Convention Centre, F1 Grand Prix, and major corporate functions."
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
                            What is the cost for event transfers in Melbourne?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            We offer competitive rates for <strong>corporate event transfers</strong>. A <strong>Mercedes V-Class people mover</strong> starts from <strong>$110 per hour</strong> (min 3 hours), perfect for moving small teams. Executive sedan transfers between Melbourne Airport and MCEC or CBD hotels range from <strong>$100 - $135</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Special packages available for Spring Racing Carnival & F1.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Melbourne's Event Experts</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Major Events", desc: "Expert navigation during high-traffic periods like the Australian Open and Grand Prix.", icon: <Calendar size={28} color="#3b82f6" /> },
                            { title: "Group Logistics", desc: "Coordinate arrivals for 10 to 100+ delegates with our scalable fleet.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "MCEC Access", desc: "Direct drop-off at the Convention Centre doors, avoiding public transport hassels.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Corporate Accounts", desc: "Streamlined billing and reporting for event organizers.", icon: <Briefcase size={28} color="#3b82f6" /> },
                            { title: "Hourly Hire", desc: "Flexible standby service for dinner transfers and after-parties.", icon: <Clock size={28} color="#3b82f6" /> }
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
                                    <th style={{ padding: '1rem' }}>Route / Destination</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Capacity</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Tullamarine -> MCEC (South Wharf)", veh: "Mercedes V-Class", cap: "7 Pax", price: "$130 - $150" },
                                    { route: "CBD Hotel -> Flemington (Races)", veh: "Luxury Sedan", cap: "4 Pax", price: "$95 - $120" },
                                    { route: "Hourly Standby (Events)", veh: "Executive Sedan", cap: "4 Pax", price: "$95 / hour" },
                                    { route: "Airport -> Albert Park (F1)", veh: "Premium SUV", cap: "4 Pax + Luggage", price: "$140 - $180" },
                                    { route: "Full Day Delegate Move", veh: "Multiple Vans", cap: "10-50 Pax", price: "Custom Quote" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Melbourne Venues</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>MCEC</h3>
                            <p style={{ color: '#475569' }}>The Melbourne Convention and Exhibition Centre is Australia's largest. We use the Clarendon St entrance for conventions and the Exhibition Centre loading zones for trade shows.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Flemington Racecourse</h3>
                            <p style={{ color: '#475569' }}>During the Melbourne Cup Carnival, access is restricted. Book early to secure accredited vehicles that can access the member drop-off points.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Corporate Event FAQs</h2>
                    <LocationFAQ city="Melbourne" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#eff6ff', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '2rem' }}>Client Praise</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#1e40af' }}>
                        “Handled our international board members impeccably during the Grand Prix week. The drivers knew all the back roads to avoid traffic.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#3b82f6' }}>— James P., Global Director</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Secure Your Transport:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>executive vehicles</Link>.
                        Request a quote via <Link href="/contact-us" className={styles.inlineLink}>our form</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}

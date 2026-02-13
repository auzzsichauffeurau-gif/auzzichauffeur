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
    title: { absolute: "Conference Transport Perth | PCEC & Crown Events | Auzzie Chauffeur" },
    description: "Executive group transfers in Perth for conferences, mining expos, and corporate events at PCEC and Crown Perth. Reliable van and sedan hire.",
};

export default function PerthEventsPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Perth" service="Conferences & Special Events" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Perth Event & Conference Logistics"
                    subtitle="Reliable transfers for mining expos, corporate functions, and events at PCEC and Crown Perth."
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
                            Cost for Perth conference transfers?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1e3a8a' }}>
                            We specialize in <strong>corporate event transport</strong> for Perth's business sector. Our <strong>Mercedes V-Class (7 pax)</strong> hire starts from <strong>$120 per hour</strong>. Transfers from <strong>Perth Airport to PCEC</strong> or Crown Typically range from <strong>$95 - $130</strong> depending on the vehicle type.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#60a5fa', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Experienced with mining delegation logistics.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>West Coast Event Specialists</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Mining & Resources", desc: "Decades of experience handling transport for oil, gas, and mining executives.", icon: <Briefcase size={28} color="#3b82f6" /> },
                            { title: "Crown Perth Access", desc: "Priority drop-off at Crown Towers and Convention Centre entrances.", icon: <MapPin size={28} color="#3b82f6" /> },
                            { title: "Optus Stadium", desc: "Navigate event day traffic with ease for corporate box guests.", icon: <Award size={28} color="#3b82f6" /> },
                            { title: "Delegation Shuttles", desc: "Efficient movement of large groups between the airport and city hotels.", icon: <Users size={28} color="#3b82f6" /> },
                            { title: "24/7 Operations", desc: "We operate around the clock to match any flight schedule or event timing.", icon: <Clock size={28} color="#3b82f6" /> }
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

                {/* Popular Routes Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Event Itineraries</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1e40af', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Route / Location</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Capacity</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Perth Airport -> PCEC (City)", veh: "Mercedes V-Class", cap: "7 Pax", price: "$120 - $140" },
                                    { route: "CBD -> Crown Perth (Burswood)", veh: "Luxury Sedan", cap: "4 Pax", price: "$65 - $85" },
                                    { route: "Event Shuttle (Hourly)", veh: "People Mover", cap: "7 Pax", price: "$120 / hour" },
                                    { route: "Airport -> Optus Stadium", veh: "Premium SUV", cap: "4 Pax", price: "$100 - $130" },
                                    { route: "Fremantle Day Tour (Guests)", veh: "Any Vehicle", cap: "Varies", price: "Enquire" }
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
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Key Perth Venues</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>PCEC</h3>
                            <p style={{ color: '#475569' }}>Located on the Swan River foreshore. The main entrance is easily accessible for sedans, while vans can utilize the dedicated group drop-off zones.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e40af', marginBottom: '1rem' }}>Crown Perth</h3>
                            <p style={{ color: '#475569' }}>A massive complex in Burswood. We ensure guests are dropped at the correct hotel lobby (Towers, Metropol, Promenade) or the Convention Centre entrance.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Perth Logistics FAQs</h2>
                    <LocationFAQ city="Perth" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Organize Your Event:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>fleet options</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>transport plan</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}

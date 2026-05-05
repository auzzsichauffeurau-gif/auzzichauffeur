import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Wine, Map, Sun, Camera, Users, Clock, Navigation, CheckCircle } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Luxury Private Tours Cairns & Port Douglas | Daintree & Tablelands | Auzzie Chauffeur" },
    description: "Private chauffeur tours of Tropical North Queensland. Visit the Daintree Rainforest, Atherton Tablelands, and Mossman Gorge in air-conditioned luxury.",
};

export default function CairnsToursPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" service="Luxury Tours" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Luxury Private Tours Cairns & Port Douglas"
                    subtitle="Experience the Rainforest and Reef region. Private day trips to the Daintree, Mossman Gorge, and the waterfall circuit."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fcf4ff', padding: '3rem 1rem', borderBottom: '3px solid #86198f' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#fae8ff', padding: '1rem', borderRadius: '50%', color: '#86198f', flexShrink: 0 }}>
                        <Map size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#581c87', marginBottom: '0.5rem' }}>
                            Private tour prices in Cairns?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#581c87' }}>
                            A full-day (8-9 hour) private tour to the <strong>Daintree Rainforest & Cape Tribulation</strong> from Cairns or Port Douglas typically costs between <strong>$850 - $1,100</strong>. This reflects the longer distances and rugged terrain. A day trip to the <strong>Atherton Tablelands (Waterfalls)</strong> is generally <strong>$750 - $900</strong> for a luxury SUV.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#a21caf', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Essential to book air-conditioned transport in the tropics.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tropical Discovery</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Daintree Rainforest", desc: "The oldest rainforest in the world. Cross the river ferry and see where the forest meets the reef.", icon: <Sun size={28} color="#86198f" /> },
                            { title: "Waterfall Circuit", desc: "Millaa Millaa, Zillie, and Ellinjaa Falls on the cool Atherton Tablelands.", icon: <Camera size={28} color="#86198f" /> },
                            { title: "Mossman Gorge", desc: "Swim in crystal clear waters and learn about Kuku Yalanji culture.", icon: <Map size={28} color="#86198f" /> },
                            { title: "Coffee & Food", desc: "Taste local coffee, chocolate, and cheese on a food trail tour.", icon: <Wine size={28} color="#86198f" /> },
                            { title: "Cool Comfort", desc: "Retreat to your premium air-conditioned car after every tropical walk.", icon: <CheckCircle size={28} color="#86198f" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #f5d0fe', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#581c87' }}>{item.title}</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Itineraries Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Tropical Tour Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#581c87', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Destination</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Est. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { dest: "Daintree & Cape Tribulation", time: "9-10 Hours", veh: "Luxury SUV", price: "$900 - $1,100" },
                                    { dest: "Atherton Tablelands", time: "8 Hours", veh: "Luxury SUV", price: "$750 - $900" },
                                    { dest: "Mossman Gorge & Port Douglas", time: "5 Hours", veh: "Sedan / SUV", price: "$500 - $650" },
                                    { dest: "Kuranda & Skyrail Transfer", time: "Multiple", veh: "Sedan / SUV", price: "Custom Quote" },
                                    { dest: "Group Rainforest Tour", time: "9 Hours", veh: "V-Class (7 Pax)", price: "$1,000 - $1,200" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.dest}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.time}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#86198f', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Region Info */}
                <div style={{ marginBottom: '5rem', background: '#fcf4ff', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Local Highlights</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Rex Lookout</h3>
                            <p style={{ color: '#4b5563' }}>The perfect photo stop on the Captain Cook Highway between Cairns and Port Douglas.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#581c87', marginBottom: '1rem' }}>Lake Eacham</h3>
                            <p style={{ color: '#4b5563' }}>A stunning volcanic crater lake on the Tablelands. Perfect for a cooling swim.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Top End FAQs</h2>
                    <LocationFAQ city="Cairns & Port Douglas" />
                </div>

                {/* Testimonials */}
                <div style={{ background: '#fdf2f8', padding: '4rem 2rem', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#831843', marginBottom: '2rem' }}>Tropical Paradise</h2>
                    <blockquote style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', fontStyle: 'italic', color: '#9d174d' }}>
                        “The drive to Daintree is long, but our driver made it effortless. We saw cassowaries and swam in the gorge. A perfect day.”
                    </blockquote>
                    <cite style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold', color: '#be185d' }}>— The Morris Family, UK</cite>
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Plan Your Safari:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        View our <Link href="/the-fleet" className={styles.inlineLink}>SUVs</Link>.
                        Contact us for a <Link href="/contact-us" className={styles.inlineLink}>Daintree quote</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}

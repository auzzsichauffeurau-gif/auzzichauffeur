import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "../../shared-airport.module.css";
import Link from "next/link";
import { Clock, MapPin, Camera, Coffee, Star, Shield, Car, Navigation } from "lucide-react";
import type { Metadata } from 'next';
import Breadcrumbs from "@/components/Breadcrumbs";
import LocationFAQ from "@/components/LocationFAQ";

export const metadata: Metadata = {
    title: { absolute: "Hourly Chauffeur Cairns | Daintree Rainforest & Port Douglas Private Tours" },
    description: "Private driver hire in Cairns & Port Douglas. Hourly chauffeur service for Daintree Rainforest tours, Kuranda, and Palm Cove day trips.",
};

export default function CairnsHourlyPage() {
    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <Breadcrumbs city="Cairns & Port Douglas" service="Hourly Chauffeur" />

            {/* HERO SECTION */}
            <div style={{ position: 'relative' }}>
                <Hero
                    title="Hourly Private Driver Cairns & Port Douglas"
                    subtitle="Explore the Daintree, Kuranda, and the Tablelands in cool, air-conditioned comfort. Your private tropical itinerary."
                    showStats={false}
                />
            </div>

            {/* AI OVERVIEW BLOCK */}
            <section style={{ backgroundColor: '#fffbeb', padding: '3rem 1rem', borderBottom: '3px solid #f59e0b' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '50%', color: '#d97706', flexShrink: 0 }}>
                        <Clock size={32} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#78350f', marginBottom: '0.5rem' }}>
                            Cost for a private driver in Cairns?
                        </h2>
                        <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#78350f' }}>
                            <strong>Hourly chauffeur rates</strong> in Far North Queensland start from <strong>$90 - $110 per hour</strong>. A full-day <strong>Daintree Rainforest tour</strong> (approx 9-10 hours) including the ferry crossing and Cape Tribulation typically starts from <strong>$950 - $1200</strong>. Shorter trips to <strong>Kuranda Skyrail</strong> or <strong>Palm Cove</strong> (4-5 hours) are available from <strong>$450 - $600</strong>.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#b45309', marginTop: '0.5rem', fontStyle: 'italic' }}>
                            *Vehicles are meticulously detailed and air-conditioned.
                        </p>
                    </div>
                </div>
            </section>

            {/* SERVICE DETAILS */}
            <section className={styles.contentSection} style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>

                {/* Why Choose Us */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>Tropical Sightseeing</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: "Daintree Rainforest", desc: "The oldest rainforest in the world. Cross the river and spot cassowaries in the wild.", icon: <Camera size={28} color="#f59e0b" /> },
                            { title: "Atherton Tablelands", desc: "Chasing waterfalls? Visit Millaa Millaa Falls and the Curtain Fig Tree.", icon: <MapPin size={28} color="#f59e0b" /> },
                            { title: "Kuranda Village", desc: "Drop-off at the Skyrail terminal. We can meet you at the train station for the return journey.", icon: <Navigation size={28} color="#f59e0b" /> },
                            { title: "Port Douglas", desc: "Enjoy lunch on Macrossan Street and a walk on Four Mile Beach.", icon: <Coffee size={28} color="#f59e0b" /> },
                            { title: "Palm Cove", desc: "Dinner transfers to Nu Nu or Vivo. Enjoy your meal without worrying about the drive back.", icon: <Star size={28} color="#f59e0b" /> }
                        ].map((item, idx) => (
                            <div key={idx} style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #fef3c7', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div>{item.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#78350f' }}>{item.title}</h3>
                                    <p style={{ color: '#4b5563', fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Itineraries Table */}
                <div style={{ marginBottom: '5rem' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Cairns Tour Rates</h2>
                    <div style={{ overflowX: 'auto', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                            <thead style={{ background: '#1f2937', color: 'white' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Hire Type / Tour</th>
                                    <th style={{ padding: '1rem' }}>Vehicle</th>
                                    <th style={{ padding: '1rem' }}>Duration</th>
                                    <th style={{ padding: '1rem' }}>Est. Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { route: "Hourly As Directed (FNQ)", veh: "People Mover", cap: "Min 3 Hours", price: "$90 - $110 / hr" },
                                    { route: "Daintree & Cape Tribulation", veh: "SUV or Van", cap: "10 Hours", price: "$1000 - $1200" },
                                    { route: "Atherton Tablelands (Waterfalls)", veh: "Mercedes V-Class", cap: "8 Hours", price: "$850 - $950" },
                                    { route: "Kuranda & Skyrail (Transfer & Wait)", veh: "Van / SUV", cap: "6 Hours", price: "$600 - $700" },
                                    { route: "Port Douglas Dinner Transfer", veh: "Luxury Sedan", cap: "4 Hours", price: "$400 - $500" }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>{row.route}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.veh}</td>
                                        <td style={{ padding: '1.25rem', color: '#4b5563' }}>{row.cap}</td>
                                        <td style={{ padding: '1.25rem', color: '#d97706', fontWeight: 'bold' }}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Venue Info */}
                <div style={{ marginBottom: '5rem', background: '#fffbeb', padding: '3rem', borderRadius: '16px' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Natural Wonders</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>The Daintree</h3>
                            <p style={{ color: '#4b5563' }}>Where the rainforest meets the reef. A UNESCO World Heritage site that demands a full day to explore.</p>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#92400e', marginBottom: '1rem' }}>Tablelands</h3>
                            <p style={{ color: '#4b5563' }}>Rolling green hills, dairy farms, and spectacular waterfalls. A cooler alternative to the coast.</p>
                        </div>
                    </div>
                </div>

                {/* FAQs */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>Touring FAQs</h2>
                    <LocationFAQ city="Cairns & Port Douglas" />
                </div>

                {/* Internal Links */}
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Book Your Adventure:</p>
                    <p style={{ color: '#4b5563', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        See our <Link href="/the-fleet" className={styles.inlineLink}>spacious vans</Link>.
                        Email us for a <Link href="/contact-us" className={styles.inlineLink}>tour plan</Link>.
                    </p>
                </div>

            </section>

            <Footer />
        </main>
    );
}

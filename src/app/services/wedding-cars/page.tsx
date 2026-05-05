import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Heart, Star, Camera, Clock, Award, ShieldCheck, MapPin, Gift, CheckCircle, XCircle, DollarSign, Lock } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: { absolute: "Luxury Wedding Cars | Auzzie Chauffeur | Book Your Dream Ride" },
    description: "Premium wedding car hire in Sydney, Melbourne & Nationwide. European luxury sedans, white ribbons & red carpet service. Request a quote.",
};

export default function WeddingServicesPage() {
    const faqs = [
        {
            question: "How much does wedding car hire cost in Australia?",
            answer: "Wedding car hire in Australia starts from $450 for a 4-hour package. This includes luxury vehicle, professional chauffeur, red carpet service, and champagne on ice. Full-day packages (8+ hours) are also available."
        },
        {
            question: "How far in advance should I book wedding cars?",
            answer: "We recommend booking 6-12 months in advance, especially for peak wedding season (September-May). However, we can accommodate last-minute bookings subject to availability. Book early for peace of mind."
        },
        {
            question: "What's included in wedding car hire?",
            answer: "Our wedding packages include luxury vehicle, professional chauffeur in formal attire, red carpet service, white ribbons, champagne on ice, and unlimited photos with the vehicle. We also provide complimentary water and mints."
        },
        {
            question: "Can we have the car for the whole day?",
            answer: "Yes! We offer full-day wedding packages (8+ hours) for couples who want the vehicle available throughout their special day. This includes ceremony, photos, reception, and departure."
        },
        {
            question: "Do you provide cars for bridal parties?",
            answer: "Absolutely. We can provide Mercedes V-Class people movers for bridal parties and guests, along with a luxury S-Class for the bride and groom. We specialize in coordinating multiple vehicles for weddings."
        },
        {
            question: "What happens if the ceremony runs late?",
            answer: "We build flexibility into our wedding packages. Minor delays are included at no extra charge. For significant extensions, we charge a reasonable hourly rate. Your chauffeur will stay as long as needed."
        },
        {
            question: "Which Cities Do You Service?",
            answer: "We offer wedding car hire in all major Australian cities including Sydney, Melbourne, Brisbane, Adelaide, Hobart, Gold Coast, and Cairns."
        },
        {
            question: "How Far In Advance Should I Book?",
            answer: "We recommend booking 6-12 months in advance, especially for spring and autumn weddings, to ensure availability of your preferred vehicles."
        },
        {
            question: "Do You Offer Packages For Bridal Parties?",
            answer: "Yes, we can tailor packages including a lead car for the bride and groom (e.g., S-Class) and people movers (e.g., V-Class) for the bridal party and guests."
        },
        {
            question: "Are Wedding Ribbons Included?",
            answer: "Yes, complimentary white satin ribbons and tulle are included with every wedding booking. Custom colors can be arranged on request."
        }
    ];

    const vehicles = [
        {
            category: 'Bridal Cars',
            name: 'Mercedes-Benz S-Class',
            desc: 'The gold standard in wedding transport. Unmatched luxury, spacious rear seating, and elegant styling.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Groomsmen',
            name: 'Audi A8L / Q7',
            desc: 'Sophisticated and spacious. Perfect for the groom and groomsmen to arrive relaxed and on time.',
            passengers: 4,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Guest Transfer',
            name: 'Mercedes V-Class',
            desc: 'Luxury people movers for transporting family members and guests between venues.',
            passengers: 7,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Wedding Cars", url: "/services/wedding-cars" }
    ];

    const faqPairs = faqs.map(f => ({ question: f.question, answer: f.answer }));

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <FAQSchema pairs={faqPairs} />
            <ServiceSchema
                name="Luxury Wedding Cars Australia"
                description="Premium wedding car hire with European luxury sedans, white ribbons and red carpet service across Australia."
                url="/services/wedding-cars"
            />

            {/* HERO SECTION */}
            <Hero
                title="Luxury Wedding Car Hire Australia"
                subtitle="Arrive in style on your special day. Premium chauffeur services available nationwide."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Luxury <strong>wedding car hire</strong> across Australia. <strong>Packages from $450</strong> including <strong>Mercedes-Benz S-Class</strong>, <strong>red carpet service</strong>, <strong>champagne on ice</strong>, and <strong>white ribbons</strong>. Available in Sydney, Melbourne, Brisbane, and all major cities. <strong>Book 6-12 months ahead</strong> for peak season.
                    </p>
                </div>
            </section>

            {/* Luxury wedding car hire chauffeur service bridal transport Australia */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Your Perfect Day Deserves The Perfect Journey</h2>
                <div className={styles.textBlock}>
                    <p>
                        At <Link href="/" className={styles.inlineLink}>Auzzie Chauffeur</Link>, we understand that your <Link href="/services/wedding-cars" className={styles.inlineLink}>wedding day</Link> is one of the most significant moments of your life.
                        Our nationwide fleet of immaculate <Link href="/the-fleet" className={styles.inlineLink}>luxury vehicles</Link> ensures that you arrive at your ceremony and reception with grace, elegance, and peace of mind.
                        <br /><br />
                        From the iconic Harbour Bridge in <Link href="/sydney/wedding-cars" className={styles.inlineLink}>Sydney</Link> to the vineyards of the <Link href="/melbourne/wedding-cars" className={styles.inlineLink}>Yarra Valley</Link>, our <Link href="/about-us/chauffeur-services" className={styles.inlineLink}>professional chauffeurs</Link> provide a seamless experience, allowing you to focus on the moments that matter. Whether you need a <Link href="/the-fleet/executive-sedans" className={styles.inlineLink}>luxury sedan</Link> or <Link href="/the-fleet/luxury-suvs" className={styles.inlineLink}>premium SUV</Link>, we have the perfect vehicle for your special day.
                    </p>
                </div>
            </section>

            {/* Wedding Pricing Table */}
            <section style={{ maxWidth: '1200px', margin: '0 auto 4rem', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Wedding Car Packages</h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Transparent package pricing for your special day. All packages include white ribbons, red carpet service, and champagne on ice.
                </p>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Package Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Starting From</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Includes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Silver (Getaway)</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$250</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Point-to-point transfer</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>End of night hotel / airport</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Gold (Half Day)</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$550</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>4 Hours continuous hire</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Ceremony & photos</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Ribbons & Champagne</span>
                                    </div>
                                </td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Platinum (Full Day)</strong></td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$1100</td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>8 Hours continuous hire</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Start to finish service</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <CheckCircle size={14} color="#16a34a" />
                                        <span>Multiple locations</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Wedding chauffeur Sydney Melbourne Brisbane Adelaide Gold Coast nationwide */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 2rem 4rem 2rem'
            }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: '#111'
                }}>Nationwide Wedding Service</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney", link: "/sydney/wedding-cars", desc: "Harbour & Northern Beaches" },
                        { city: "Melbourne", link: "/melbourne/wedding-cars", desc: "CBD, Yarra Valley & Dandenongs" },
                        { city: "Brisbane", link: "/brisbane/wedding-cars", desc: "City & Hinterland" },
                        { city: "Perth", link: "/perth/wedding-cars", desc: "City & Swan Valley" },
                        { city: "Adelaide", link: "/adelaide/wedding-cars", desc: "Barossa, Hahndorf & City" },
                        { city: "Gold Coast", link: "/gold-coast/wedding-cars", desc: "Surfers Paradise & Byron Bay" },
                        { city: "Hobart", link: "/hobart/wedding-cars", desc: "Waterfront & Historic Battery Point" },
                        { city: "Cairns", link: "/cairns-port-douglas/wedding-cars", desc: "Tropical Weddings & Port Douglas" },
                    ].map((loc, idx) => (
                        <a href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Heart size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city} Weddings
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Details <svg width="16" height="16" style={{ marginLeft: '4px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* FEATURES ICONS */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><MapPin size={28} /></div>
                        <span className={styles.featureLabel}>National<br />Coverage</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Heart size={28} /></div>
                        <span className={styles.featureLabel}>White<br />Ribbons</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Star size={28} /></div>
                        <span className={styles.featureLabel}>Red Carpet<br />Treatment</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Clock size={28} /></div>
                        <span className={styles.featureLabel}>On Time<br />Guarantee</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Award size={28} /></div>
                        <span className={styles.featureLabel}>Immaculate<br />Fleet</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Gift size={28} /></div>
                        <span className={styles.featureLabel}>Refreshments<br />Included</span>
                    </div>
                </div>
            </section>

            {/* VEHICLE FLEET */}
            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Wedding Fleet</h2>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: '#666', marginBottom: '2rem' }}>
                    Select from Australia's finest range of luxury chauffer vehicles.
                </p>
                <VehicleTabs vehicles={vehicles} />
            </section>

            {/* FAQ SECTION */}
            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Wedding Service FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

            {/* CONTACT HELP SECTION */}
            <section className={styles.contactSection}>
                <div className={styles.contactImage}>
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    }}></div>
                </div>
                <ServiceContactForm
                    title="Get a Wedding Quote"
                    subtitle="Contact our events team to discuss your wedding transport requirements."
                    detailsLabel="Wedding Details (City, Venues, Dates)"
                />
            </section>

            <Footer />
        </main>
    );
}

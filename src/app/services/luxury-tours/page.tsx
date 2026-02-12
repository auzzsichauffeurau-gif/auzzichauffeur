import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Camera, Map, Sun, Wine, Navigation, Users, CheckCircle, Star } from "lucide-react";
import VehicleTabs from "@/components/ServicePage/VehicleTabs";
import FaqAccordion from "@/components/ServicePage/FaqAccordion";
import ServiceContactForm from "@/components/ServicePage/ServiceContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
import ServiceSchema from "@/components/ServiceSchema";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Luxury Private Tours | Auzzie Chauffeur | Custom Itineraries Now",
    description: "Custom private tours of Australia's best regions. Winery tours (Hunter, Yarra, Barossa) & sightseeing in luxury comfort. Create your itinerary.",
    alternates: {
        canonical: '/services/luxury-tours',
    },
};

export default function LuxuryToursPage() {
    const faqs = [
        {
            question: "How much do luxury private tours cost in Australia?",
            answer: "Luxury private tours start from $95/hour with a 4-5 hour minimum for regional tours. Full-day wine tours (8 hours) typically cost $720-$800. This includes luxury vehicle, professional chauffeur, and fuel. Tasting fees and meals are separate."
        },
        {
            question: "What are the best wine regions for tours in Australia?",
            answer: "Top wine regions include Hunter Valley (NSW), Yarra Valley (VIC), Barossa Valley (SA), McLaren Vale (SA), and Margaret River (WA). Each offers unique varietals and stunning scenery. We can recommend the best region based on your preferences."
        },
        {
            question: "Can we customize our tour itinerary?",
            answer: "Absolutely. Start at 10am instead of 8am? Stay longer at a winery you love? It's your tour. Our chauffeurs are flexible and will tailor the day to your preferences."
        },
        {
            question: "How many wineries can we visit in one day?",
            answer: "Most wine tours visit 3-4 wineries in a full day (8 hours). This allows time for tastings, lunch, and enjoying the scenery without feeling rushed. We can adjust based on your pace and interests."
        },
        {
            question: "Do you provide tour guides or just drivers?",
            answer: "Our chauffeurs are knowledgeable about the regions and can provide recommendations, but they're not certified tour guides. We focus on safe, comfortable transport while you enjoy the experience at your own pace."
        },
        {
            question: "Can we book tours for special occasions?",
            answer: "Absolutely! We specialize in birthday celebrations, anniversaries, corporate team building, and hens/bucks parties. We can arrange champagne, decorations, and special touches to make your day memorable."
        },
        {
            question: "Do you offer winery tours?",
            answer: "Yes, we specialize in private wine tours to regions like the Hunter Valley (NSW), Yarra Valley (VIC), Barossa Valley (SA), and Margaret River (WA). We can recommend cellar doors or drive to your chosen list."
        },
        {
            question: "Are entry fees and meals included?",
            answer: "Our pricing typically covers the vehicle and chauffeur service. Tasting fees, entry tickets, and meals are payable by you directly, giving you the freedom to choose where and what you eat."
        },
        {
            question: "Can you accommodate large groups?",
            answer: "Yes, we can arrange multiple vehicles or luxury coaches for larger groups. Our Mercedes V-Class is perfect for smaller groups of up to 7 people."
        }
    ];

    const vehicles = [
        {
            category: 'Touring Sedan',
            name: 'European Sedan',
            desc: 'Comfortable touring for couples.',
            passengers: 3,
            luggage: 2,
            bags: 2,
            image: '/tile-audi.png'
        },
        {
            category: 'Touring SUV',
            name: 'Audi Q7 / Similar',
            desc: 'Elevated views and superior comfort for long drives.',
            passengers: 4,
            luggage: 4,
            bags: 4,
            image: '/tile-driver.png'
        },
        {
            category: 'Group Tourer',
            name: 'Mercedes V-Class',
            desc: 'Social seating and panoramic windows for groups.',
            passengers: 7,
            luggage: 6,
            bags: 6,
            image: '/tile-driver.png'
        }
    ];

    const breadcrumbs = [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: "Luxury Tours", url: "/services/luxury-tours" }
    ];

    const faqPairs = faqs.map(f => ({ question: f.question, answer: f.answer }));

    return (
        <main className={styles.pageWrapper}>
            <Navbar />
            <BreadcrumbSchema items={breadcrumbs} />
            <FAQSchema pairs={faqPairs} />
            <ServiceSchema
                name="Luxury Private Tours Australia"
                description="Custom private tours of Australia's best regions including winery tours and sightseeing in luxury comfort."
                url="/services/luxury-tours"
            />

            <Hero
                title="Luxury Private Tours"
                subtitle="Experience Australia's iconic landscapes in private comfort."
                showStats={false}
            />

            {/* AI Overview - Quick service summary for search engines */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 1rem', borderBottom: '3px solid #c5a467' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#1f2937', fontWeight: '500' }}>
                        Luxury <strong>private tours</strong> across Australia. <strong>Wine tours from $720</strong> for full-day experiences. Visit <strong>Hunter Valley</strong>, <strong>Yarra Valley</strong>, <strong>Barossa Valley</strong>, and <strong>Margaret River</strong>. <strong>Fully customizable itineraries</strong>, <strong>3-4 wineries per day</strong>, and <strong>luxury vehicles</strong>. Perfect for special occasions and corporate events.
                    </p>
                </div>
            </section>

            {/* Private luxury tours wine country Blue Mountains Yarra Valley chauffeur driven */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>Discover Australia Your Way</h2>
                <div className={styles.textBlock}>
                    <p>
                        Forget crowded buses and rigid schedules. Explore Australia's breathtaking scenery at your own pace with a <Link href="/services/luxury-tours" className={styles.inlineLink}>private chauffeur tour</Link>.
                        <br /><br />
                        From the rugged <Link href="/sydney" className={styles.inlineLink}>Blue Mountains</Link> to the vineyards of the <Link href="/adelaide" className={styles.inlineLink}>Barossa</Link>, our <Link href="/about-us/chauffeur-services" className={styles.inlineLink}>experienced drivers</Link> act as your knowledgeable local guides.
                        Stop for photos whenever you want, linger over a long lunch, and enjoy the journey as much as the destination. Perfect for <Link href="/melbourne" className={styles.inlineLink}>Yarra Valley wine tours</Link>, <Link href="/gold-coast" className={styles.inlineLink}>coastal drives</Link>, or <Link href="/services/hourly-chauffeur" className={styles.inlineLink}>custom itineraries</Link>.
                    </p>
                </div>
            </section>

            {/* Tours Pricing Table */}
            <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1rem' }}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '1rem' }}>Private Tour Pricing</h2>
                <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Transparent daily rates for private touring. Includes luxury vehicle, fuel, and professional chauffeur.
                </p>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#1f2937', color: 'white' }}>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Region / Tour Type</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Time</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>Sedan Rate</th>
                                <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600' }}>V-Class Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Yarra Valley (VIC)</strong></td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>8 Hours</td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$750 - $850</td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>$850 - $950</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Hunter Valley (NSW)</strong></td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>10-12 Hours</td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$1,100+</td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>$1,300+</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '1rem' }}><strong>Barossa Valley (SA)</strong></td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>8 Hours</td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$720 - $850</td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>$850 - $950</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                                <td style={{ padding: '1rem' }}><strong>Margaret River (WA)</strong></td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>Multi-Day</td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>Custom</td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>Custom</td>
                            </tr>
                            <tr style={{ backgroundColor: '#fff' }}>
                                <td style={{ padding: '1rem' }}><strong>City Sightseeing</strong></td>
                                <td style={{ padding: '1rem', fontSize: '0.9rem' }}>4 Hours</td>
                                <td style={{ padding: '1rem', color: '#c5a467', fontWeight: 'bold', fontSize: '1.1rem' }}>$380 - $450</td>
                                <td style={{ padding: '1rem', fontWeight: 'bold' }}>$450 - $550</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


            {/* Scenic chauffeur tours Blue Mountains Barossa Valley Great Ocean Road */}
            <section style={{ backgroundColor: '#f9fafb', padding: '2rem 0' }}>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Camera size={28} /></div>
                        <span className={styles.featureLabel}>Scenic<br />Drives</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Wine size={28} /></div>
                        <span className={styles.featureLabel}>Winery<br />Estates</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Map size={28} /></div>
                        <span className={styles.featureLabel}>Local<br />Knowledge</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Sun size={28} /></div>
                        <span className={styles.featureLabel}>Coastal<br />Routes</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Navigation size={28} /></div>
                        <span className={styles.featureLabel}>Flexible<br />Stops</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><Users size={28} /></div>
                        <span className={styles.featureLabel}>Private<br />Groups</span>
                    </div>
                </div>
            </section>

            {/* Luxury tours Sydney Melbourne Brisbane Adelaide Perth */}
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
                }}>Australia's Best Driving Holidays</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {[
                        { city: "Sydney Tours", link: "/sydney/luxury-tours", desc: "Hunter Valley, Blue Mountains & City" },
                        { city: "Melbourne Tours", link: "/melbourne/luxury-tours", desc: "Yarra Valley, Mornington & GOR" },
                        { city: "Adelaide Tours", link: "/adelaide/luxury-tours", desc: "Barossa Valley, McLaren Vale & Hills" },
                        { city: "Perth Tours", link: "/perth/luxury-tours", desc: "Swan Valley, Pinnacles & Margaret River" },
                        { city: "Brisbane Tours", link: "/brisbane/luxury-tours", desc: "Mt Tamborine, Australia Zoo & Byron" },
                        { city: "Gold Coast Tours", link: "/gold-coast/luxury-tours", desc: "Hinterland & Theme Park Transfers" },
                        { city: "Hobart Tours", link: "/hobart/luxury-tours", desc: "MONA, Port Arthur & Huon Valley" },
                        { city: "Cairns Tours", link: "/cairns-port-douglas/luxury-tours", desc: "Daintree, Atherton Tablelands & Coast" },
                    ].map((loc, idx) => (
                        <Link href={loc.link} key={idx} style={{ textDecoration: 'none' }}>
                            <div className={styles.serviceCard} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ marginBottom: '1rem', color: '#c5a467' }}><Wine size={32} /></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {loc.city}
                                </h3>
                                <p style={{ color: '#6b7280', marginBottom: '1.5rem', flex: 1 }}>
                                    {loc.desc}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#1e3a8a', fontWeight: 'bold' }}>
                                    View Itineraries <Navigation size={16} style={{ marginLeft: '4px' }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <section className={styles.fleetSection}>
                <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Touring In Style</h2>
                <VehicleTabs vehicles={vehicles} />
            </section>

            <section className={styles.faqSection}>
                <img src="/au-map.png" className={styles.mapBackground} alt="Australia Map" />
                <div className={styles.faqContainer}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        Touring FAQs
                    </h2>
                    <FaqAccordion faqs={faqs} />
                </div>
            </section>

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
                    title="Design Your Tour"
                    subtitle="Tell us where you want to go, and we'll handle the driving."
                    detailsLabel="Tour Ideas (Destination, Date, Pax)"
                />
            </section>

            <Footer />
        </main>
    );
}

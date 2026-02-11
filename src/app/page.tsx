import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";
import Link from "next/link";
import { Calculator, Plane, UserCheck, Shield, Clock, CheckCircle, XCircle, MapPin, Star, Building, Users } from "lucide-react";
import type { Metadata } from 'next';

// Lazy load below-the-fold components
const NationalCoverage = dynamic(() => import("@/components/NationalCoverage"), { ssr: true });
const ImageTiles = dynamic(() => import("@/components/ImageTiles"), { ssr: true });
const TrustedBy = dynamic(() => import("@/components/TrustedBy"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const ContactHelp = dynamic(() => import("@/components/ContactHelp"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export const metadata: Metadata = {
  title: "Top-Rated Chauffeur Service Australia | Auzzie Chauffeur",
  description: "Looking for a reliable chauffeur? Book premium airport transfers, corporate cars, & luxury tours in Sydney, Melbourne, Brisbane & Perth. 24/7 Service. Get a Quote Now.",
  alternates: {
    canonical: 'https://www.auzziechauffeur.com.au/',
  },
};

export default function Home() {
  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      {/* 1. HERO SECTION */}
      <Hero
        title="Top-Rated Chauffeur Service in Australia"
        subtitle="Experience the difference with Australia's most trusted private car service. From Sydney Opera House to the Melbourne Cricket Ground, we get you there in style."
        showStats={true}
      />

      {/* 2. INTRO / AI OVERVIEW */}
      <section className={styles.sectionAlt}>
        <div className={styles.introText}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1f2937' }}>
            Trusted Chauffeurs Across Australia
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Tired of unreliable rideshares and waiting in long taxi queues at the airport? Whether you need a seamless <strong>airport transfer in Sydney</strong>, a <strong>corporate car in Melbourne</strong>, or a <strong>luxury tour of the Gold Coast</strong>, Auzzie Chauffeur is your local expert. We specialize in providing punctual, comfortable, and flat-rate transport for executives, families, and travelers nationwide.
          </p>
        </div>

        {/* AI Cost Overview */}
        <div className={styles.aiContainer}>
          <div className={styles.aiIcon}>
            <Calculator size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
              How much does a chauffeur cost in Australia?
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#374151' }}>
              <strong>Chauffeur rates in Australia</strong> typically start from <strong>$90 - $110</strong> for standard airport transfers in major cities like Sydney and Melbourne. Hourly hire usually ranges from <strong>$80 - $120 per hour</strong> depending on the vehicle class (Sedan, SUV, or Van). Unlike rideshare apps, our prices are fixed with <strong>no surge pricing</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. KEY SERVICES */}
      <ServiceFeatures />

      {/* 4. COMPARISON CHART (EEAT) */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Why Choose Auzzie vs. Others?</h2>
        <div className={styles.comparisonWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Feature</th>
                <th style={{ background: '#c5a467' }}>Auzzie Chauffeur</th>
                <th>Rideshare Apps</th>
                <th>Standard Taxi</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Fixed Price (No Surge)", us: true, other1: false, other2: true },
                { feature: "Flight Monitoring", us: true, other1: false, other2: false },
                { feature: "Meet & Greet Service", us: true, other1: false, other2: false },
                { feature: "Professional Chauffeurs", us: true, other1: false, other2: true },
                { feature: "Luxury Vehicle Guarantee", us: true, other1: false, other2: false },
                { feature: "60-Min Free Wait Time", us: true, other1: false, other2: false },
              ].map((row, idx) => (
                <tr key={idx}>
                  <td style={{ textAlign: 'left', fontWeight: '600', color: '#334155' }}>{row.feature}</td>
                  <td><CheckCircle size={24} className={styles.checkIcon} style={{ margin: '0 auto' }} /></td>
                  <td>{row.other1 ? <CheckCircle size={24} className={styles.checkIcon} style={{ margin: '0 auto' }} /> : <XCircle size={24} className={styles.xIcon} style={{ margin: '0 auto' }} />}</td>
                  <td>{row.other2 ? <CheckCircle size={24} className={styles.checkIcon} style={{ margin: '0 auto' }} /> : <XCircle size={24} className={styles.xIcon} style={{ margin: '0 auto' }} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className={styles.sectionAlt} style={{ textAlign: 'center' }}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.processGrid}>
          {[
            { step: "1", title: "Book Online", desc: "Enter your pickup & dropoff details. Get an instant fixed-price quote." },
            { step: "2", title: "We Track You", desc: "We monitor your flight or schedule. Your driver adjusts for delays automatically." },
            { step: "3", title: "Enjoy the Ride", desc: "Meet your chauffeur, relax in a premium car, and arrive refreshed." }
          ].map((item, idx) => (
            <div key={idx}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>{item.title}</h3>
              <p style={{ color: '#4b5563', maxWidth: '300px', margin: '0 auto' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaBox}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>Ready to Book?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>Get a quote in less than 60 seconds.</p>
          <Link href="/book" className={styles.ctaBtn}>
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* 6. SERVICE AREA */}
      <NationalCoverage />

      {/* 7. EEAT STATS */}
      <section className={styles.eeatSection}>
        <div className={styles.eeatGrid}>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Years Experience</div>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Serving Australians since 2010</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>50k+</div>
            <div className={styles.statLabel}>Happy Travelers</div>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Rated 4.9/5 stars</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Licensed & Insured</div>
            <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Commercial Operator Accreditation</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <TrustedBy />
        </div>
      </section>

      {/* 8. TESTIMONIALS + IMAGES */}
      <Testimonials />
      <ImageTiles />

      {/* 9. FAQs */}
      <FAQ />

      {/* 10. MAP & NAP */}
      <section className={styles.sectionAlt}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>

          {/* NAP Details */}
          <div>
            <h2 className={styles.sectionTitle} style={{ textAlign: 'left', margin: '0 0 1.5rem 0' }}>Find Us</h2>
            <h2 className={styles.sectionTitle} style={{ display: 'none' }}>Find Us</h2> {/* Hidden duplicate for structure match, fixing align */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: '#e0f2fe', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                  <MapPin size={24} color="#0284c7" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Service Area</h3>
                  <p style={{ color: '#4b5563' }}>Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast & Canberra.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: '#e0f2fe', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                  <Building size={24} color="#0284c7" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Headquarters</h3>
                  <p style={{ color: '#4b5563' }}>Sydney, NSW, Australia<br />(Serving All Major Airports)</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: '#e0f2fe', padding: '0.8rem', borderRadius: '50%', height: 'fit-content' }}>
                  <Clock size={24} color="#0284c7" />
                </div>
                <div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Hours</h3>
                  <p style={{ color: '#4b5563' }}>Mon - Sun: 24 Hours<br />Customer Support: 24/7</p>
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/contact-us" className={styles.ctaBtn} style={{ marginTop: 0 }}>
                  Contact Support
                </Link>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.846506300067!2d151.2092953152109!3d-33.86881968065619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1645564747248!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Auzzie Chauffeur Service Area Map"
            ></iframe>
          </div>

        </div>
      </section>

      {/* 11. CONTACT FORM */}
      <ContactHelp />

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Auzzie Chauffeur",
            "image": "https://www.auzziechauffeur.com.au/logo.png",
            "telephone": "1300 465 374",
            "url": "https://www.auzziechauffeur.com.au",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -33.8688,
              "longitude": 151.2093
            },
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            ]
          })
        }}
      />

      <Footer />
    </main>
  );
}

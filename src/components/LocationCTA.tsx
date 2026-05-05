import Link from 'next/link';

interface LocationCTAProps {
    city: string;
}

export default function LocationCTA({ city }: LocationCTAProps) {
    return (
        <section style={{
            position: 'relative',
            backgroundColor: '#1f2937',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: 'white',
            overflow: 'hidden',
            borderRadius: '12px',
            margin: '4rem 0'
        }}>
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                backgroundSize: '24px 24px',
                opacity: 0.5
            }}></div>

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ffffff' }}>
                    Ready to Experience {city} in Luxury?
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '2rem', lineHeight: '1.6' }}>
                    Book your premium chauffeur service in {city} today. Whether for business, airport transfers, or special events, we ensure you arrive in style and comfort.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/book" style={{
                        backgroundColor: '#c5a467',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        transition: 'background 0.3s',
                        border: '2px solid #c5a467'
                    }}>
                        Book Your {city} Chauffeur
                    </Link>
                    <Link href="/quote" style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        borderRadius: '6px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        transition: 'background 0.3s',
                        border: '2px solid rgba(255,255,255,0.2)'
                    }}>
                        Get a Quote
                    </Link>
                </div>
            </div>
        </section>
    );
}

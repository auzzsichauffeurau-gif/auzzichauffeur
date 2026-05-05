"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import styles from "./components.module.css";

interface CityIntroProps {
    city: string;
}

export default function CityIntro({ city }: CityIntroProps) {
    const [intro, setIntro] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchIntro() {
            try {
                // Use standard Wikipedia API with proper User-Agent header
                const res = await fetch(
                    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(city)}`,
                    {
                        headers: {
                            'User-Agent': 'AuzzieChauffeurWeb/1.0 (info@auzziechauffeur.com.au)',
                            'Api-User-Agent': 'AuzzieChauffeurWeb/1.0 (info@auzziechauffeur.com.au)'
                        }
                    }
                );

                if (!res.ok) throw new Error('Failed to fetch');

                const data = await res.json();
                setIntro(data.extract);
            } catch (error) {
                console.error("Failed to fetch city intro:", error);
                // Fallback or just show nothing on error
            } finally {
                setLoading(false);
            }
        }

        if (city) {
            fetchIntro();
        }
    }, [city]);

    if (loading) return <div style={{ height: '5rem', background: '#f3f4f6', borderRadius: '0.5rem', margin: '2rem 0' }}></div>;
    if (!intro) return null;

    return (
        <div className={styles.introBox}>
            <h3 className={styles.introTitle}>
                About {city}
                <a
                    href={`https://en.wikipedia.org/wiki/${encodeURIComponent(city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#9ca3af', display: 'flex', alignItems: 'center' }}
                    aria-label={`Read more about ${city} on Wikipedia`}
                >
                    <ExternalLink size={14} />
                </a>
            </h3>
            <p className={styles.introText}>
                {intro}
            </p>
            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#9ca3af', textAlign: 'right' }}>
                Source: Wikipedia
            </div>
        </div>
    );
}

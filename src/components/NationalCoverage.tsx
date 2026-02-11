'use client';

import { useState } from 'react';
import styles from './NationalCoverage.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface City {
    name: string;
    link: string;
}

interface CoverageData {
    [key: string]: City[];
}

export default function NationalCoverage() {
    const [activeState, setActiveState] = useState('New South Wales');

    const coverageData: CoverageData = {
        'New South Wales': [
            { name: 'Sydney', link: '/sydney' },
        ],
        'Victoria': [
            { name: 'Melbourne', link: '/melbourne' },
        ],
        'Queensland': [
            { name: 'Brisbane', link: '/brisbane' },
            { name: 'Cairns', link: '/cairns-port-douglas' },
            { name: 'Gold Coast', link: '/gold-coast' },
        ],
        'South Australia': [
            { name: 'Adelaide', link: '/adelaide' },
        ],
        'Tasmania': [
            { name: 'Hobart', link: '/hobart' },
        ],
        'Western Australia': [
            { name: 'Perth', link: '/perth' },
        ]
    };

    const states = Object.keys(coverageData);

    return (
        <section className={styles.section}>
            {/* Background Map Image */}
            <div className={styles.mapBackground}>
                <Image src="/au-map.webp" alt="Auzzie Chauffeur National Coverage Map Australia" className={styles.mapImage} width={800} height={800} />
                {/* Decorative dots loosely positioned for visual effect */}
                <div className={styles.mapDot} style={{ top: '65%', right: '25%' }}></div> {/* Sydneyish */}
                <div className={styles.mapDot} style={{ top: '70%', right: '30%' }}></div> {/* Melbourneish */}
                <div className={styles.mapDot} style={{ top: '50%', right: '20%' }}></div> {/* Brisbaneish */}
                <div className={styles.mapDot} style={{ top: '50%', left: '20%' }}></div> {/* Perthish */}
            </div>

            <div className={styles.container}>
                <h2 className={styles.title}>
                    Australia&apos;s Oldest And Only Nationwide<br />
                    Chauffeur Service
                </h2>

                <p className={styles.description}>
                    With offices around Australia, we keep you moving across the country. Alongside our <Link href="/services/airport-transfers" style={{ color: 'inherit' }}>luxury airport</Link> and <Link href="/services/corporate-transfers" style={{ color: 'inherit' }}>A to B transfers</Link>,
                    we offer <Link href="/services/luxury-tours" style={{ color: 'inherit' }}>tour services</Link> to see the sights in style, using one of our <Link href="/city-guides" style={{ color: 'inherit' }}>suggested itineraries</Link> or choosing your own adventure.
                    <br /><br />
                    Find out more about our <Link href="/locations" style={{ color: 'inherit' }}>locations</Link> and the services on offer.
                </p>

                <div className={styles.contentWrapper}>
                    <div className={styles.sidebar}>
                        <ul className={styles.stateList}>
                            {states.map((state) => (
                                <li
                                    key={state}
                                    className={`${styles.stateItem} ${activeState === state ? styles.stateItemActive : ''}`}
                                    onClick={() => setActiveState(state)}
                                >
                                    {state}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.mainContent}>
                        <div className={styles.cityList}>
                            {coverageData[activeState]?.map((city, index) => (
                                <div key={index} className={styles.cityItem}>
                                    <span className={styles.cityName}>{city.name}</span>
                                    <a href={city.link} className={styles.readMore}>Read More</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

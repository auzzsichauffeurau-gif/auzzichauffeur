'use client';

import { useState } from 'react';
import styles from './NationalCoverage.module.css';

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
            { name: 'Sydney', link: '/sydney/airport-transfers' },
        ],
        'Victoria': [
            { name: 'Melbourne', link: '/melbourne/airport-transfers' },
        ],
        'Queensland': [
            { name: 'Brisbane', link: '/brisbane/airport-transfers' },
            { name: 'Cairns', link: '/cairns-port-douglas/airport-transfers' },
            { name: 'Gold Coast', link: '/gold-coast/airport-transfers' },
        ],
        'South Australia': [
            { name: 'Adelaide', link: '/adelaide/airport-transfers' },
        ],
        'Tasmania': [
            { name: 'Hobart', link: '/hobart/airport-transfers' },
        ],
        'Western Australia': [
            { name: 'Perth', link: '/perth/airport-transfers' },
        ]
    };

    const states = Object.keys(coverageData);

    return (
        <section className={styles.section}>
            {/* Background Map Image */}
            <div className={styles.mapBackground}>
                <img src="/au-map.png" alt="Australia Map" className={styles.mapImage} />
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
                    With offices around Australia, we keep you moving across the country. Alongside our luxury airport and A to B transfers,
                    we offer tour services to see the sights in style, using one of our suggested itineraries or choosing your own adventure.
                    <br /><br />
                    Find out more about our locations and the services on offer.
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

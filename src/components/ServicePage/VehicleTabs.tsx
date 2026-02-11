"use client";

import { useState } from "react";
import styles from "@/app/(locations)/shared-airport.module.css";
import Link from "next/link";
import { Users, Briefcase } from "lucide-react";

interface Vehicle {
    category: string;
    name: string;
    desc: string;
    passengers: number;
    luggage: number;
    bags?: number;
    image: string;
}

interface VehicleTabsProps {
    vehicles: Vehicle[];
}

export default function VehicleTabs({ vehicles }: VehicleTabsProps) {
    // Get unique categories and set the first one as initial active state
    // Use optional chaining or fallback if vehicles is empty to prevent crashes
    const categories = Array.from(new Set(vehicles.map(v => v.category)));
    const [activeVehicle, setActiveVehicle] = useState(categories[0] || '');

    return (
        <>
            <div className={styles.fleetTabs}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`${styles.tabBtn} ${activeVehicle === cat ? styles.active : ''}`}
                        onClick={() => setActiveVehicle(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.vehicleCard}>
                {vehicles.filter(v => v.category === activeVehicle).map((v, idx) => (
                    <div key={idx} style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                        <div className={styles.vehicleImage}>
                            <img src={v.image} alt={v.name} />
                        </div>
                        <div className={styles.vehicleInfo}>
                            <h3 className={styles.vehicleTitle}>{v.name}</h3>
                            <p className={styles.vehicleDesc}>{v.desc}</p>

                            <div className={styles.vehicleStats}>
                                <div className={styles.stat}><Users size={18} /> {v.passengers} Passengers</div>
                                <div className={styles.stat}><Briefcase size={18} /> {v.luggage} Suitcases</div>
                            </div>

                            <Link href="/book">
                                <button className={styles.btnGold} style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}>
                                    Check Availability
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

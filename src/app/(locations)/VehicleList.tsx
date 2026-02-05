"use client";

import { useState } from 'react';
import styles from './locations.module.css';
import { User, Briefcase, ShoppingBag } from 'lucide-react'; // Using icons for passengers/luggage

const vehicles = {
    "Sedans": [
        {
            name: "Executive Sedans",
            image: "/tile-audi.png",
            price: "From $110",
            desc: "Ideal for 1-3 passengers with minimal luggage, our executive sedans offer comfort and style for your journey. Perfect for airport transfers.",
            passengers: 3,
            luggage: 2,
            handLuggage: 2
        },
        {
            name: "Premium Sedans",
            image: "/tile-meeting-2.png",
            price: "From $145",
            desc: "Experience the ultimate in luxury with our premium European sedans. Features extended legroom and superior comfort.",
            passengers: 3,
            luggage: 2,
            handLuggage: 2
        }
    ],
    "People Movers": [
        {
            name: "See People Movers",
            image: "/corporate-transfer.png",
            price: "From $165",
            desc: "Perfect for groups and families. Spacious interiors with ample room for luggage.",
            passengers: 7,
            luggage: 5,
            handLuggage: 5
        }
    ],
    "SUVs": [
        {
            name: "Luxury SUVs",
            image: "/tile-steering.png",
            price: "From $155",
            desc: "Commanding presence and space. Great for executive travel or small groups.",
            passengers: 4,
            luggage: 4,
            handLuggage: 3
        }
    ]
};

export default function VehicleList() {
    const [activeTab, setActiveTab] = useState("Sedans");

    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabsHeader}>
                {Object.keys(vehicles).map((type) => (
                    <button
                        key={type}
                        className={`${styles.tabBtn} ${activeTab === type ? styles.active : ''}`}
                        onClick={() => setActiveTab(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className={styles.tabsContent}>
                {vehicles[activeTab as keyof typeof vehicles].map((car, idx) => (
                    <div key={idx} className={styles.vehicleCard}>
                        <img src={car.image} alt={car.name} className={styles.vehicleImage} />
                        <div className={styles.vehicleInfo}>
                            <h3 className={styles.vehicleTitle}>{car.name}</h3>
                            <div className={styles.vehiclePrice}>{car.price}</div>
                            <p className={styles.vehicleDesc}>{car.desc}</p>

                            <div className={styles.vehicleMeta}>
                                <div className={styles.metaItem}><User size={16} /> {car.passengers} Passengers</div>
                                <div className={styles.metaItem}><Briefcase size={16} /> {car.luggage} Suitcases</div>
                                <div className={styles.metaItem}><ShoppingBag size={16} /> {car.handLuggage} Carry-on</div>
                            </div>
                        </div>
                        <a href="/book" className={styles.bookBtnSmall}>Book Now</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

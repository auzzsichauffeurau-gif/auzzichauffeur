"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './BookingWidget.module.css';
import { MapPin, Calendar, Clock, ChevronDown } from 'lucide-react';

export default function BookingWidget() {
    const [activeTab, setActiveTab] = useState('Build Your Journey');
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    return (
        <div className={styles.widgetContainer}>
            <div className={styles.tabs}>
                <div
                    className={`${styles.tab} ${activeTab === 'Build Your Journey' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('Build Your Journey')}
                >
                    One Way / Return
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'Hourly Hire' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('Hourly Hire')}
                >
                    Hourly Hire
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'Tours' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('Tours')}
                >
                    Tours
                </div>
                <div
                    className={`${styles.tab} ${activeTab === 'Events' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('Events')}
                >
                    Events
                </div>
            </div>

            <form className={styles.formGrid} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Pick Up Location</label>
                    <div className={styles.inputWrapper}>
                        <MapPin size={18} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Enter airport, hotel or address"
                            className={styles.input}
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Drop Off Location</label>
                    <div className={styles.inputWrapper}>
                        <MapPin size={18} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Enter destination"
                            className={styles.input}
                            value={dropoff}
                            onChange={(e) => setDropoff(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Date</label>
                    <div className={styles.inputWrapper}>
                        <Calendar size={18} className={styles.icon} />
                        <input
                            type="date"
                            className={styles.input}
                            style={{ paddingRight: '1rem' }}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Time</label>
                    <div className={styles.inputWrapper}>
                        <Clock size={18} className={styles.icon} />
                        <input
                            type="time"
                            className={styles.input}
                            style={{ paddingRight: '1rem' }}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                </div>

                <Link
                    href={{
                        pathname: '/quote',
                        query: { pickup, dropoff, date, time }
                    }}
                    className={styles.submitBtn}
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    Get Quote
                </Link>
            </form>
        </div>
    );
}

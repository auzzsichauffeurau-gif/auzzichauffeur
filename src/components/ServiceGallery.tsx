'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './ServiceGallery.module.css';
import { GraduationCap, Plane, Ship, User, Calendar, Briefcase, MapPin } from 'lucide-react';

export default function ServiceGallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const services = [
        {
            title: "International Student Transfers",
            image: "/student-transfer.png",
            icon: <GraduationCap size={28} strokeWidth={2} />,
            content: "Safe and reliable transport for students arriving in a new country. We ensure peace of mind for parents and universities with our meet & greet service."
        },
        {
            title: "Airport Transfers",
            image: "/airport-transfer.png",
            icon: <Plane size={28} strokeWidth={2} />,
            content: "Start your journey in luxury. Our chauffeurs track your flight to ensure they are there precisely when you land, assisting with luggage and transport."
        },
        {
            title: "Cruise Ship Transfers",
            image: "/cruise-transfer.png",
            icon: <Ship size={28} strokeWidth={2} />,
            content: "Seamless transfers to and from all major cruise terminals. Start your holiday the moment you leave your front door with our spacious vehicles."
        },
        {
            title: "Corporate Transfers",
            image: "/corporate-transfer.png",
            icon: <User size={28} strokeWidth={2} />,
            content: "Professional, discreet, and punctual service for business executives. Work on the go with our comfortable, Wi-Fi enabled luxury fleet."
        },
        {
            title: "Conferences & Events",
            image: "/conference-event.png",
            icon: <Calendar size={28} strokeWidth={2} />,
            content: "Logistical expertise for large scale events. We manage complex itineraries effectively ensuring all delegates arrive on time and in style."
        },
        {
            title: "Luxury Tours",
            image: "/luxury-tour.png",
            icon: <Briefcase size={28} strokeWidth={2} />,
            content: "Explore the country's finest destinations with our knowledgeable chauffeurs. Custom itineraries tailored to your interests and time."
        },
        {
            title: "Point to Point",
            image: "/tile-steering.png",
            icon: <MapPin size={28} strokeWidth={2} />,
            content: "Direct transfers from A to B with the highest level of comfort. Perfect for dinner dates, theatre trips, or just getting around the city."
        }
    ];

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Moving You In Comfort And Style</h2>
            <h2 className={styles.title}>Wherever You Need To Go</h2>

            <p className={styles.description}>
                Whether you are looking to get to and from the airport, rushing between business meetings, travelling with the family, or simply looking for reliable, comfortable transport for your everyday needs, Auzzie has you covered. Our fleet of luxury sedans, SUVs, people movers, minibuses and coaches and professional, discreet and experienced drivers are available nationwide.
            </p>

            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.emblaSlide}>
                            <div className={styles.card}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className={styles.cardImage}
                                />
                                <div className={styles.overlay}></div>
                                <div className={styles.cardContent}>
                                    <div className={styles.icon}>{service.icon}</div>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.hoverText}>{service.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.dots}>
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import styles from './ImageTiles.module.css';
import { Users, BookOpen, Clock, Car } from 'lucide-react';

export default function ImageTiles() {
    const tiles = [
        {
            image: "/tile-meeting-1.png",
            title: "Join Our Team",
            description: "Become part of Australia's premier chauffeur service. We are always looking for professional drivers to join our fleet.",
            buttonText: "Careers",
            href: "/about-us/careers",
            alt: "Professional Auzzie chauffeurs discussing logistics for a large-scale corporate event transport",
            icon: <Users size={48} strokeWidth={1} />
        },
        {
            image: "/tile-driver.png",
            title: "Book Now",
            description: "Ready to travel in style? Book your luxury transfer today and experience the Auzzie difference.",
            buttonText: "Book A Ride",
            href: "/book",
            alt: "Licensed Auzzie chauffeur in professional silver-service uniform ready for passenger pickup",
            icon: <Car size={48} strokeWidth={1} />
        },
        {
            image: "/tile-woman-phone.png",
            title: "History of Auzzie",
            description: "Discover our heritage. Serving Australia for over 20 years, we have a story of reliability and trust.",
            buttonText: "Our Story",
            href: "/about-us/our-history",
            alt: "Luxury passenger using the Auzzie Chauffeur booking platform on her smartphone",
            icon: <Clock size={48} strokeWidth={1} />
        },
        {
            image: "/tile-audi.png",
            title: "Our Fleet",
            description: "Explore our range of luxury vehicles, from executive sedans to spacious people movers and coaches.",
            buttonText: "View Fleet",
            href: "/the-fleet",
            alt: "Executive Audi sedan showcasing the high standards of the Auzzie Chauffeur luxury fleet",
            icon: <BookOpen size={48} strokeWidth={1} />
        }
    ];

    return (
        <section className={styles.section}>
            {tiles.map((tile, index) => (
                <div key={index} className={styles.column}>
                    <div className={styles.imageWrapper} style={{ position: 'relative', width: '100%', height: '400px' }}>
                        <Image
                            src={tile.image}
                            alt={tile.alt}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>{tile.icon}</div>
                        <h3 className={styles.title}>{tile.title}</h3>
                        <p className={styles.description}>{tile.description}</p>
                        <Link href={tile.href} style={{ textDecoration: 'none' }}>
                            <button className={styles.button}>{tile.buttonText}</button>
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
}

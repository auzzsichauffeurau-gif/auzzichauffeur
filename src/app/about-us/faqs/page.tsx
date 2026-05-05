"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./faqs.module.css";
import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ChevronRight } from "lucide-react";

// Types for FAQ Data
type FaqItem = {
    question: string;
    answer: string;
};

type FaqCategory = {
    id: string; // for scrolling anchor
    title: string;
    items: FaqItem[];
};

// Data based on the image provided
const faqData: FaqCategory[] = [
    {
        id: "booking",
        title: "Booking With Auzzie Chauffeur",
        items: [
            {
                question: "How Do I Book With Auzzie?",
                answer: "Book online here or download the Auzzie App on your Apple or Android devices. You can also manage your booking on the go."
            },
            {
                question: "How Do I Make Changes To My Booking?",
                answer: "You can make changes to your booking via our online portal, the mobile app, or by contacting our 24/7 support team."
            },
            {
                question: "Does Auzzie Charge Cancellation Fees?",
                answer: "Cancellation fees may apply depending on how close to the pickup time the cancellation is made. Please refer to our full terms and conditions for detailed policy information."
            },
            {
                question: "How Far In Advance Can I Book With Auzzie?",
                answer: "You can book as far in advance as you like. We recommend booking early to secure your preferred vehicle."
            },
            {
                question: "Can I Speak To Someone About My Booking?",
                answer: "Yes, our team is available 24/7. Call us on info@auzziechauffeur.com.au for assistance."
            },
            {
                question: "How Is Auzzie Different From A Taxi Or Rideshare Service?",
                answer: "Auzzie provides a luxury, pre-booked chauffeur service with professional drivers, late-model vehicles, and a guarantee of quality and reliability that typical rideshare services cannot match."
            },
            {
                question: "What Are Your Terms And Conditions?",
                answer: "Our terms and conditions outline our service agreement, cancellation policies, and passenger responsibilities. You can view them on our website."
            }
        ]
    },
    {
        id: "luggage",
        title: "Travelling With Luggage",
        items: [
            {
                question: "How Much Luggage Can I Bring In My Auzzie Vehicle?",
                answer: "Luggage capacity depends on the vehicle class selected. Sedans typically hold 2 large suitcases, while our People Movers can accommodate more. Please check vehicle specifications when booking."
            },
            {
                question: "Does A Charge Apply For My Luggage?",
                answer: "Standard luggage is included. Excess luggage may require a larger vehicle or trailer, which could incur additional costs."
            }
        ]
    },
    {
        id: "children",
        title: "Travelling With Children",
        items: [
            {
                question: "Does Auzzie Offer Child Seats?",
                answer: "Yes, child seats are available upon request. Please specify your requirements when booking."
            },
            {
                question: "What Age Requirements Apply?",
                answer: "Children under 7 years old generally require an appropriate child restraint in Australia. We adhere to all local safety laws."
            },
            {
                question: "Is There A Fee For Car Seats?",
                answer: "A small fee may apply for the provision and installation of child seats. This will be shown during the booking process."
            }
        ]
    },
    {
        id: "charges",
        title: "Changes, Cancellations And Surcharges",
        items: [
            {
                question: "How Do I Make Changes To My Booking?",
                answer: "Changes can be made through your online account or by calling our support line."
            },
            {
                question: "Does Auzzie Charge Cancellation Fees?",
                answer: "Cancellation fees apply for late cancellations. The specific window depends on the vehicle type and location."
            },
            {
                question: "Will My Driver Charge Me To Wait If I Am Late To The Pick-Up Point?",
                answer: "Waiting time charges may apply if the delay exceeds the complimentary waiting period (usually 10-15 minutes for non-airport pickups)."
            },
            {
                question: "Does Auzzie Charge A Public Holiday Surcharge?",
                answer: "Surcharges may apply on major public holidays. These are included in your quote."
            },
            {
                question: "Does Auzzie Charge An After-Hours Surcharge?",
                answer: "Some bookings between midnight and 5am may incur a surcharge. This will be transparently quoted before you book."
            }
        ]
    },
    {
        id: "lost-property",
        title: "Lost Property",
        items: [
            {
                question: "What Should I Do If I Think I Left An Item In A Auzzie Vehicle?",
                answer: "Please contact us immediately on info@auzziechauffeur.com.au. We will check with the chauffeur and arrange for the return of your item if found."
            }
        ]
    }
];

export default function FaqsPage() {
    // State to track which item is open. Key: "categoryId-itemIndex"
    const [openItem, setOpenItem] = useState<string | null>("booking-0");

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link> <span>&gt;</span> <Link href="/about-us">About Us</Link> <span>&gt;</span> FAQs
                    </div>
                    <h1 className={styles.heroTitle}>FAQs</h1>
                    <p className={styles.heroSubtitle}>
                        Whether you are advising on your goals and beliefs or simply have a quick question,
                        browse our frequently asked questions for guidance.
                    </p>
                    <button className={styles.bookBtn}>Book Now</button>
                </div>
            </section>

            {/* Main Content */}
            <div className={styles.mainSection}>

                {/* Sidebar Navigation */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Navigation</h3>
                    <nav>
                        {faqData.map((cat) => (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                onClick={(e) => scrollToSection(e, cat.id)}
                                className={styles.navLink}
                            >
                                {cat.title}
                            </a>
                        ))}
                        <a href="#policies" className={styles.navLink}>Our Policies</a>
                    </nav>
                </aside>

                {/* FAQ Categories */}
                <div className={styles.contentArea}>
                    {faqData.map((category) => (
                        <section key={category.id} id={category.id} className={styles.categorySection}>
                            <h2 className={styles.categoryTitle}>{category.title}</h2>

                            <div className={styles.accordions}>
                                {category.items.map((item, index) => {
                                    const itemId = `${category.id}-${index}`;
                                    const isOpen = openItem === itemId;

                                    return (
                                        <div key={index} className={styles.accordionItem}>
                                            <button
                                                className={styles.accordionHeader}
                                                onClick={() => toggleItem(itemId)}
                                                aria-expanded={isOpen}
                                            >
                                                <span className={styles.question}>{item.question}</span>
                                                {/* Circle with Plus icon from image reference */}
                                                <div className={styles.icon}>
                                                    {isOpen ? <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '2px' }}><Minus size={16} /></div> : <div style={{ border: '1px solid #ccc', borderRadius: '50%', padding: '2px' }}><Plus size={16} /></div>}
                                                </div>
                                            </button>
                                            <div className={`${styles.accordionBody} ${isOpen ? styles.open : ''}`}>
                                                <div className={styles.answer}>
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}

                    {/* Policies Section */}
                    <section id="policies" className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>Our Policies</h2>
                        <p className={styles.answer}>
                            <a href="/about-us/our-policies" className={styles.policiesLink}>Conditions of Carriage</a> and <a href="#" className={styles.policiesLink}>Extended Terms</a>
                        </p>
                    </section>

                </div>
            </div>

            <Footer />
        </main>
    );
}

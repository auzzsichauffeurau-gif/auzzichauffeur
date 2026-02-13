import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHelp from "@/components/ContactHelp";
import styles from "../fleet.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: { absolute: `${title} | Auzzie Chauffeur | Explore Our Fleet` },
        description: `Premium ${title} chauffeur service in Australia. Luxury vehicles for airport transfers, corporate travel, and special events.`,
        alternates: {
            canonical: `/the-fleet/${slug}`,
        },
    };
}

// Define the shape of our fleet data
type FleetCategoryData = {
    title: string;
    subtitle: string;
    descriptionTitle: string;
    description: string[];
    images: string[];
    heroImage?: string;
};

// Mock database of fleet info
const fleetData: Record<string, FleetCategoryData> = {
    "premium-sedans": {
        title: "Premium Sedans",
        subtitle: "Experience the ultimate in European luxury and performance.",
        descriptionTitle: "Premium Sedans: Sophistication and Style",
        description: [
            "Our Premium European Sedans offer the highest level of comfort and class. Ideal for executive travel, weddings, and special occasions where making an impression matters.",
            "Featuring top-of-the-line models from Mercedes-Benz, BMW, and Audi, these vehicles are equipped with plush leather interiors, advanced climate control, and superior sound isolation to ensure a peaceful journey.",
            "Driven by our most experienced chauffeurs, you can expect a seamless and professional service. Whether it's a transfer to a crucial meeting or a red-carpet arrival, our Premium Sedans set the standard for luxury transport."
        ],
        images: ["/tile-audi.png", "/tile-meeting-1.png", "/tile-driver.png"],
        heroImage: "/hero-bg.png"
    },
    "suvs": {
        title: "Luxury SUVs",
        subtitle: "Spacious, powerful, and refined. Perfect for groups or extra luggage.",
        descriptionTitle: "Luxury SUVs: Comfort on a Grand Scale",
        description: [
            "Travel with commanding presence in our Luxury SUVs. These vehicles combine the elegance of a limousine with the versatility and space of a large vehicle.",
            "Perfect for small groups, families, or travelers with significant luggage requirements who refuse to compromise on luxury. Our SUVs feature generous legroom, elevated seating views, and premium amenities.",
            "From airport transfers to countryside tours, our SUVs provide a safe, smooth, and stylish ride in any condition. Experience the perfect blend of utility and luxury."
        ],
        images: ["/tile-steering.png", "/tile-meeting-2.png", "/tile-woman-phone.png"],
        heroImage: "/tile-steering.png"
    },
    "people-movers": {
        title: "People Movers",
        subtitle: "Group travel made elegant and easy.",
        descriptionTitle: "People Movers: Luxury for the Whole Team",
        description: [
            "Our People Movers are the ideal solution for corporate groups, large families, or delegation transfers. Move up to 7 passengers in absolute comfort without splitting the group.",
            "Say goodbye to cramped shuttle buses. Our luxury people movers offer individual executive seating, privacy glass, and ample space for luggage, ensuring everyone arrives refreshed.",
            "Coordinating group travel can be stressful, but with our professional chauffeurs and spacious vehicles, it becomes a pleasure. Reliable, punctual, and spacious."
        ],
        images: ["/cruise-transfer.png", "/corporate-transfer.png", "/airport-transfer.png"],
        heroImage: "/tile-meeting-1.png"
    }
    // Add more as needed
};

// Helper to format title if not in DB (fallback)
const formatTitle = (slug: string) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default async function FleetCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Try to get specific data, or fallback to generic data based on slug
    let data = fleetData[slug];

    if (!data) {
        // Fallback generator for unknown slugs so the page still works with the new layout
        const title = formatTitle(slug);
        data = {
            title: title,
            subtitle: `Explore our premium range of ${title}.`,
            descriptionTitle: `${title}: Excellence in Motion`,
            description: [
                `Discover the comfort and style of our ${title}. We offer the best in class vehicles for your journey.`,
                "Our fleet is meticulously maintained and driven by professional chauffeurs to ensure your safety and satisfaction.",
                `Book your ${title} today for a seamless travel experience.`
            ],
            images: ["/tile-steering.png", "/tile-audi.png", "/tile-driver.png"], // Generic images
            heroImage: "/hero-bg.png"
        };
    }

    return (
        <main className={styles.pageWrapper}>
            <Navbar />

            {/* HERO SECTION */}
            <section className={styles.hero} style={{ backgroundImage: `url('${data.heroImage || '/hero-bg.png'}')` }}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link> &gt; <Link href="/the-fleet">The Fleet</Link> &gt; {data.title}
                    </div>
                    <h1 className={styles.heroTitle}>{data.title}</h1>
                    <p className={styles.heroSubtitle}>
                        {data.subtitle}
                    </p>
                    <div className={styles.heroButtons}>
                        <Link href="/book" className={styles.btnGold}>Book Now</Link>
                        <Link href="/quote" className={styles.btnTransparent}>Instant Quote</Link>
                    </div>
                </div>
            </section>

            {/* INTRO CONTENT */}
            <section className={styles.introSection}>
                <div className={styles.twoColumnLayout}>
                    <h2 className={styles.introHeading}>
                        {data.descriptionTitle}
                    </h2>
                    <div className={styles.introText}>
                        {data.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p>
                            <Link href="/book" className={styles.highlight}>Book a {data.title.toLowerCase()} today</Link> and redefine your journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* IMAGE GALLERY */}
            <section className={styles.gallerySection}>
                {data.images.slice(0, 3).map((img, index) => (
                    <img key={index} src={img} alt={`${data.title} gallery ${index + 1}`} className={styles.galleryImage} />
                ))}
            </section>

            {/* RANGE OF VEHICLES */}
            <section className={styles.rangeSection}>
                <h2 className={styles.rangeTitle}>Our Range Of Vehicles</h2>
                <div className={styles.rangeText}>
                    <p>
                        Whether you are looking for a luxury limousine or a spacious people mover. Hughes has a vehicle to suit you. With vehicle types available for any occasion, all driven by professional, experienced chauffeurs.
                    </p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                        Not sure what vehicle suits your needs? Contact our friendly team via email at <a href="mailto:info@auzziechauffeur.com.au" style={{ color: '#1a2b4b' }}>info@auzziechauffeur.com.au</a>.
                    </p>
                </div>
                <Link href="/book" className={styles.btnBlue}>Book Now</Link>
            </section>

            {/* CONTACT SECTION */}
            <ContactHelp />

            <Footer />
        </main>
    );
}

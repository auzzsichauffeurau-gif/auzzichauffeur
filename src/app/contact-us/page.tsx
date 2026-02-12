import { Metadata } from "next";
import ContactUsContent from "@/components/ContactUsContent";

export const metadata: Metadata = {
    title: "Contact Our 24/7 Support Team",
    description: "Connect with the Auzzie Chauffeur team. 24/7 customer support available nationwide for bookings, corporate accounts, and airport transfer enquiries.",
    alternates: {
        canonical: '/contact-us',
    },
};

export default function ContactPage() {
    return <ContactUsContent />;
}

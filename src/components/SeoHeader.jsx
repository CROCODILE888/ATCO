import { Helmet } from "react-helmet";
import data from "../data/data.json";

function SeoHeader() {
    const contact = data.Contact;
    const about = data.About.paragraph;
    const name = data.SeoRelated.headerTitle;
    const url = data.SeoRelated["Live-Url"];
    const openingHours = data.SeoRelated.openingHours;
    const availableLanguages = data.SeoRelated.availableLanguages;
    const socialLinks = [
        contact.whatsapp,
        contact.facebook,
        contact.instagram,
    ].filter(Boolean);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HardwareStore",
        name: name,
        description: about,
        url: url,
        telephone: contact.phone,
        email: contact.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: contact.address.split(",")[0],
            addressLocality: "Pune",
            addressRegion: "MH",
            postalCode: "411002",
            addressCountry: "IN",
        },
        sameAs: socialLinks,
        openingHours: openingHours,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: contact.phone,
            contactType: "Customer Support",
            areaServed: "IN",
            availableLanguage: availableLanguages,
        }
    };

    return (
        <Helmet>
            <title>{name}</title>
            <meta name="description" content={about} />
            <meta property="og:title" content={`${name} | Hardware Store`} />
            <meta property="og:type" content="business.business" />
            <meta property="og:description" content={about} />
            <meta property="og:url" content={url} />
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}

export default SeoHeader;

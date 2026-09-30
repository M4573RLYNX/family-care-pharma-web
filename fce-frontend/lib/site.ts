// Single source for business details shown across the site.
// Source: "Fharmily Care Enterprise Co Ltd Profile" company profile.
export const site = {
    name: "Family Care Pharmacy",
    legalName: "Fharmily Care Enterprise Co Ltd",
    shortName: "FCE Co Ltd",
    location: "Honiara, Solomon Islands",
    email: "famcarepharma@gmail.com",
    phones: ["7470344", "7593550", "7717748"],
    nav: [
        { href: "/services", label: "Services" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ],
};

export const telHref = (phone: string) => `tel:+677${phone}`;

// "7470344" -> "747 0344"
export const formatPhone = (phone: string) => `${phone.slice(0, 3)} ${phone.slice(3)}`;

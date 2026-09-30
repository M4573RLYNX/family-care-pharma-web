// Services, products and people, taken from the company profile.

export type Service = { name: string; text: string };

export const retailServices: Service[] = [
    { name: "Prescription filling", text: "Quick and accurate dispensing of prescription medications." },
    { name: "Medication management", text: "Help managing multiple prescriptions, including potential drug interactions." },
    { name: "Compounding", text: "Customised medication formulations for specific patient needs." },
    { name: "Over-the-counter medicines", text: "A wide selection of non-prescription medicines and health products." },
    { name: "Health screenings", text: "Blood pressure monitoring, cholesterol testing and glucose checks." },
    { name: "Patient counselling", text: "Clear advice on your medications, side effects and proper use." },
    { name: "Delivery", text: "Medication delivery for patients who can't visit the pharmacy." },
    { name: "Wellness products", text: "Supplements, vitamins and health-related products." },
];

export const wholesaleServices: Service[] = [
    { name: "Bulk medication supply", text: "Medicines and pharmaceutical products for healthcare providers, clinics and pharmacies." },
    { name: "Inventory management", text: "Help managing stock levels, with timely delivery of products." },
    { name: "Competitive pricing", text: "Competitive rates across a wide range of pharmaceutical products." },
    { name: "Specialty medications", text: "Access to hard-to-find specialty drugs for specific conditions." },
    { name: "Regulatory compliance", text: "All products meet the necessary regulations and standards." },
    { name: "Professional support", text: "Dedicated support for healthcare professionals' questions and issues." },
];

export const additionalServices: Service[] = [
    { name: "Patient education", text: "Workshops and seminars on health topics." },
    { name: "Healthcare partnerships", text: "Working with local doctors and clinics for integrated care." },
];

export const products = [
    "Pharmaceuticals",
    "Medical devices",
    "Medical equipment",
    "Medical consumables, accessories and reagents",
    "Rapid test kits",
];

export const people = [
    "Pharmacists",
    "Pharmacy technicians",
    "Nurses",
    "Doctors",
    "Procurement specialists",
    "Supply chain and logistics specialists",
    "Cold chain personnel",
];

import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { CheckCircle, Truck, ShoppingBag, Microscope } from "lucide-react";

const services = [
    {
        title: "Retail Pharmacy Services",
        icon: <ShoppingBag className="text-blue-600" />,
        items: ["Prescription Filling", "Patient Counseling", "OTC Medications", "Health Supplements"]
    },
    {
        title: "Wholesale Distribution",
        icon: <Truck className="text-green-600" />,
        items: ["Bulk Medical Supplies", "Clinic Inventory Management", "Cold Chain Logistics", "Government Tenders"]
    }
];

export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-slate-600 mb-12 text-lg">Comprehensive healthcare solutions for individuals and institutions.</p>

            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <Card key={index} className="p-4 shadow-sm border border-slate-100">
                        <CardHeader className="flex gap-3">
                            {service.icon}
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                        </CardHeader>
                        <Divider />
                        <CardBody className="py-6">
                            <ul className="space-y-4">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle size={18} className="text-blue-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}
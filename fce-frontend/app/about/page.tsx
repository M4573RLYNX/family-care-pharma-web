import { Image } from "@heroui/react";

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl font-bold mb-6">About FCE Co Ltd</h1>
                    <p className="text-lg text-slate-600 mb-4">
                        Family Care Pharmacy (FCE Co Ltd) is a premier healthcare provider based in Honiara, Solomon Islands.
                        We are dedicated to bridging the gap between clinical excellence and reliable medical logistics.
                    </p>
                    <p className="text-lg text-slate-600 mb-6">
                        Our team is comprised of highly qualified pharmacists, medical doctors, nursing staff, and logistics
                        experts who work together to ensure that our community has access to high-quality pharmaceuticals
                        and medical equipment.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-bold text-blue-700 text-xl">100%</h4>
                            <p className="text-sm text-blue-600">Regulatory Compliant</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-bold text-green-700 text-xl">24/7</h4>
                            <p className="text-sm text-green-600">Support for Clinics</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 rounded-3xl h-96 flex items-center justify-center italic text-slate-400">
                    [Team or Storefront Image]
                </div>
            </div>
        </div>
    );
}
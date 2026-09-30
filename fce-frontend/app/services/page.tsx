import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { additionalServices, retailServices, wholesaleServices, type Service } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, PageHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Services" };

const sections: { id: string; label: string; title: string; text: string; items: Service[]; cta?: string }[] = [
    {
        id: "retail",
        label: "For patients and families",
        title: "Retail pharmacy",
        text: "Visit us for prescriptions, advice and everyday health products.",
        items: retailServices,
        cta: "Ask a pharmacist",
    },
    {
        id: "wholesale",
        label: "For clinics and pharmacies",
        title: "Wholesale distribution",
        text: "Supply and support for healthcare providers, clinics and other pharmacies.",
        items: wholesaleServices,
        cta: "Start a wholesale enquiry",
    },
    {
        id: "more",
        label: "In the community",
        title: "Additional offerings",
        text: "Working beyond the counter for better community health.",
        items: additionalServices,
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                eyebrow="Services"
                title="Retail and wholesale pharmacy, under one roof."
                intro="A trusted partner for families who need care and for providers who need reliable supply."
            />

            <Container>
                {sections.map((s, i) => (
                    <section
                        key={s.id}
                        id={s.id}
                        className={`grid scroll-mt-20 gap-8 py-14 md:grid-cols-[1fr_1.6fr] md:gap-16 md:py-20 ${i > 0 ? "border-t border-line" : ""}`}
                    >
                        <div className="md:sticky md:top-28 md:self-start">
                            <Eyebrow>{s.label}</Eyebrow>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight">{s.title}</h2>
                            <p className="mt-3 max-w-sm leading-relaxed text-muted">{s.text}</p>
                            {s.cta && (
                                <ButtonLink href="/contact" variant="secondary" className="mt-8">
                                    {s.cta} <ArrowRight size={16} />
                                </ButtonLink>
                            )}
                        </div>
                        <dl className="grid content-start gap-x-10 border-t border-line sm:grid-cols-2">
                            {s.items.map((item) => (
                                <div key={item.name} className="border-b border-line py-5">
                                    <dt className="font-semibold">{item.name}</dt>
                                    <dd className="mt-1 text-[15px] leading-relaxed text-muted">{item.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                ))}
            </Container>
        </>
    );
}

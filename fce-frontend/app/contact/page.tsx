import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, telHref, formatPhone } from "@/lib/site";
import { Container, PageHeader } from "@/components/ui";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
    return (
        <>
            <PageHeader
                eyebrow="Contact"
                title="Get in touch"
                intro="Questions about a prescription or a wholesale order? Call for the quickest answer, or send us a message."
            />

            <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
                <div className="space-y-10">
                    <section>
                        <h2 className="flex items-center gap-2 font-semibold">
                            <Phone size={17} className="text-brand" /> Call
                        </h2>
                        <ul className="mt-3 space-y-1">
                            {site.phones.map((phone) => (
                                <li key={phone}>
                                    <a href={telHref(phone)} className="text-lg tabular-nums hover:text-brand">+677 {formatPhone(phone)}</a>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <h2 className="flex items-center gap-2 font-semibold">
                            <Mail size={17} className="text-brand" /> Email
                        </h2>
                        <a href={`mailto:${site.email}`} className="mt-3 block break-all hover:text-brand">{site.email}</a>
                    </section>
                    <section>
                        <h2 className="flex items-center gap-2 font-semibold">
                            <MapPin size={17} className="text-brand" /> Visit
                        </h2>
                        <p className="mt-3">{site.location}</p>
                    </section>
                </div>

                <ContactForm />
            </Container>
        </>
    );
}

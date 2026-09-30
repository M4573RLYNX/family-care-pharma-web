import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { people } from "@/lib/content";
import { Container, Eyebrow, PageHeader } from "@/components/ui";
import counter from "@/public/images/pharmacy-counter.jpg";
import warehouse from "@/public/images/warehouse.jpg";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
    return (
        <>
            <PageHeader
                eyebrow="About us"
                title="A pharmacy that truly cares."
                intro={`${site.legalName} (${site.shortName}), trading as ${site.name}.`}
            />

            <Container className="grid gap-14 py-16 md:grid-cols-[1.4fr_1fr] md:gap-20 md:py-20">
                <div className="space-y-5 text-lg leading-relaxed">
                    <p className="text-2xl font-medium leading-snug tracking-tight">
                        We believe that healthcare starts at home.
                    </p>
                    <p className="text-muted">
                        Our mission is to provide personalised, compassionate service to every member of your family. With a
                        wide range of medications, health products and wellness services, we are dedicated to supporting your
                        health and wellbeing.
                    </p>
                    <p className="text-muted">
                        Our knowledgeable pharmacists are here to offer expert advice, answer your questions and make sure you
                        receive the best care possible, because your family&apos;s health is our top priority.
                    </p>
                </div>

                <div>
                    <Eyebrow>Our people</Eyebrow>
                    <p className="mt-3 text-muted">Highly skilled and qualified staff, including:</p>
                    <ul className="mt-4 border-t border-line">
                        {people.map((role) => (
                            <li key={role} className="border-b border-line py-3">{role}</li>
                        ))}
                    </ul>
                </div>
            </Container>

            <Container className="grid gap-4 pb-20 sm:grid-cols-2">
                <figure>
                    <Image src={counter} alt="The counter and shelves inside Family Care Pharmacy" className="aspect-[4/3] w-full rounded-2xl object-cover" sizes="(min-width: 640px) 50vw, 100vw" placeholder="blur" />
                    <figcaption className="mt-3 text-sm text-muted">Retail pharmacy</figcaption>
                </figure>
                <figure>
                    <Image src={warehouse} alt="Boxed stock on shelving in the FCE wholesale store" className="aspect-[4/3] w-full rounded-2xl object-cover" sizes="(min-width: 640px) 50vw, 100vw" placeholder="blur" />
                    <figcaption className="mt-3 text-sm text-muted">Wholesale store</figcaption>
                </figure>
            </Container>
        </>
    );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { site, telHref, formatPhone } from "@/lib/site";
import { people, products, retailServices, wholesaleServices } from "@/lib/content";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import counter from "@/public/images/pharmacy-counter.jpg";
import warehouse from "@/public/images/warehouse.jpg";
import stockroom from "@/public/images/stockroom.jpg";

const audiences = [
  {
    id: "retail",
    label: "For patients and families",
    title: "Retail pharmacy",
    text: "Personalised, compassionate care from pharmacists who take the time to answer your questions.",
    items: retailServices.slice(0, 4),
  },
  {
    id: "wholesale",
    label: "For clinics and pharmacies",
    title: "Wholesale supply",
    text: "A dependable supply partner for healthcare providers, with support from people who know the stock.",
    items: wholesaleServices.slice(0, 4),
  },
];

const highlights = [
  { value: "Retail & wholesale", label: "One supplier for patients and providers" },
  { value: "Cold chain", label: "Dedicated staff for temperature-sensitive stock" },
  { value: "Qualified team", label: "Pharmacists, nurses and doctors" },
];

export default function Home() {
  return (
    <>
      {/* Hero: fills the viewport below the 4rem sticky header */}
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-line">
        {/* Soft gradient glows behind the text */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_-10%_-10%,#dbe8ff_0%,transparent_60%),radial-gradient(40rem_30rem_at_45%_110%,#e6f0ff_0%,transparent_65%)]" />

        {/* Full-bleed image on the right (desktop) */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 hidden w-[56%] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_38%)] lg:block"
        >
          <Image
            src={counter}
            alt=""
            fill
            sizes="56vw"
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            className="hero-zoom object-cover"
          />
          {/* The mask fades the left edge into the page; this adds a blue tint towards the bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-brand/55 via-brand/10 to-transparent mix-blend-multiply" />
        </div>

        <Container className="relative grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <div className="max-w-xl">
            <div className="hero-in" style={{ ["--delay" as string]: "0ms" }}>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-brand ring-1 ring-inset ring-brand/15 backdrop-blur">
                <span className="size-1.5 rounded-full bg-brand" /> {site.name} · Honiara
              </p>
            </div>
            <h1
              className="hero-in mt-6 text-[3rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl xl:text-[5.5rem]"
              style={{ ["--delay" as string]: "120ms" }}
            >
              Healthcare starts{" "}
              <span className="bg-linear-to-r from-brand via-blue-500 to-sky-400 bg-clip-text pb-2 text-transparent">at home.</span>
            </h1>
            <p
              className="hero-in mt-7 text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
              style={{ ["--delay" as string]: "240ms" }}
            >
              Personalised, compassionate pharmacy care for every member of your family, and reliable wholesale supply for
              clinics and pharmacies across the Solomon Islands.
            </p>
            <div className="hero-in mt-10 flex flex-wrap gap-3" style={{ ["--delay" as string]: "360ms" }}>
              <ButtonLink href={telHref(site.phones[0])} className="shadow-[0_10px_30px_-10px_rgba(29,78,216,0.7)]">
                <Phone size={16} /> Call {formatPhone(site.phones[0])}
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Wholesale enquiry <ArrowRight size={16} />
              </ButtonLink>
            </div>

            <dl className="hero-in mt-14 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3" style={{ ["--delay" as string]: "480ms" }}>
              {highlights.map((h) => (
                <div key={h.value}>
                  <dt className="font-semibold">{h.value}</dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">{h.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mobile/tablet: image below the text */}
          <div className="relative overflow-hidden rounded-2xl lg:hidden">
            <Image
              src={counter}
              alt="The counter and shelves inside Family Care Pharmacy"
              className="aspect-[4/3] w-full object-cover"
              sizes="100vw"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand/50 to-transparent mix-blend-multiply" />
          </div>

          {/* Desktop: floating card over the photo */}
          <div className="relative hidden items-end justify-end lg:flex">
            <figure
              className="hero-in float-slow flex w-72 items-center gap-4 rounded-2xl bg-white/80 p-3 pr-5 shadow-[0_20px_50px_-20px_rgba(11,27,58,0.5)] ring-1 ring-white/60 backdrop-blur-md"
              style={{ ["--delay" as string]: "700ms" }}
            >
              <Image src={warehouse} alt="Boxed stock in the FCE wholesale store" className="size-16 shrink-0 rounded-xl object-cover" sizes="64px" placeholder="blur" />
              <figcaption className="text-sm leading-snug">
                <span className="block font-semibold">Wholesale store</span>
                <span className="text-muted">Supplying clinics and pharmacies nationwide</span>
              </figcaption>
            </figure>
          </div>
        </Container>

        <a
          href="#what-we-do"
          aria-label="Scroll to services"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce rounded-full bg-white/80 p-2 text-muted shadow ring-1 ring-line backdrop-blur hover:text-brand motion-reduce:animate-none lg:block"
        >
          <ChevronDown size={18} />
        </a>
      </section>

      {/* Retail / wholesale */}
      <section id="what-we-do" aria-label="What we do" className="scroll-mt-16">
        <Container className="grid md:grid-cols-2 md:divide-x md:divide-line">
          {audiences.map((a, i) => (
            <Reveal key={a.id} delay={i * 120} className={`py-14 md:py-20 ${i === 0 ? "md:pr-12" : "border-t border-line md:border-t-0 md:pl-12"}`}>
              <Eyebrow>{a.label}</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">{a.title}</h2>
              <p className="mt-3 max-w-md leading-relaxed text-muted">{a.text}</p>
              <ul className="mt-8 border-t border-line">
                {a.items.map((item) => (
                  <li key={item.name} className="border-b border-line py-4">
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-0.5 text-[15px] text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
              <Link href={`/services#${a.id}`} className="mt-6 inline-flex items-center gap-1 font-medium text-brand hover:text-brand-hover">
                All {a.title.toLowerCase()} services <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Products */}
      <section className="border-t border-line bg-linear-to-b from-subtle to-white">
        <Container className="grid gap-12 py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Our products</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Stocked for patients and healthcare providers.</h2>
            <ol className="mt-8 border-t border-line">
              {products.map((p, i) => (
                <li key={p} className="flex items-baseline gap-5 border-b border-line py-4 text-lg">
                  <span className="w-6 text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-muted">Can&apos;t see what you need? Ask us about specialty and hard-to-find medicines.</p>
          </Reveal>
          <Reveal delay={150} className="relative overflow-hidden rounded-2xl">
            <Image
              src={stockroom}
              alt="Medicines and supplies stacked on shelves in the stockroom"
              className="aspect-[4/3] w-full object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-brand/40 to-transparent mix-blend-multiply" />
          </Reveal>
        </Container>
      </section>

      {/* People */}
      <section className="border-t border-line">
        <Container className="grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:py-20">
          <Reveal>
            <Eyebrow>Our people</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Skilled, qualified staff.</h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="flex flex-wrap content-start gap-2">
              {people.map((role) => (
                <li key={role} className="rounded-lg bg-subtle px-4 py-2.5 ring-1 ring-inset ring-line">{role}</li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* Wholesale CTA */}
      <section className="relative isolate overflow-hidden bg-linear-to-br from-brand via-blue-700 to-blue-900 text-white">
        <div aria-hidden="true" className="absolute -right-24 -top-32 -z-10 size-[28rem] rounded-full bg-sky-400/30 blur-3xl" />
        <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Supplying a clinic or pharmacy?</h2>
            <p className="mt-2 max-w-lg text-white/80">Competitive pricing, stock management and delivery. Tell us what you need.</p>
          </Reveal>
          <Reveal delay={120} className="self-start md:self-auto">
            <ButtonLink href="/contact" variant="inverse">
              Start a wholesale enquiry <ArrowRight size={16} />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

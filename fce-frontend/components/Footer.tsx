import Image from "next/image";
import Link from "next/link";
import { site, telHref, formatPhone } from "@/lib/site";
import { Container } from "@/components/ui";
import logo from "@/public/images/logo.png";

export default function Footer() {
    return (
        <footer className="bg-ink text-[15px] text-white [&_a:focus-visible]:outline-white">
            <Container className="grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
                <div>
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="" width={44} height={44} className="size-11" />
                        <p className="font-semibold">{site.name}</p>
                    </div>
                    <p className="mt-4 max-w-sm leading-relaxed text-white/60">
                        Retail pharmacy and wholesale medical supply for Honiara and healthcare providers across the Solomon Islands.
                    </p>
                </div>

                <nav aria-label="Footer">
                    <p className="text-sm font-medium text-white/50">Pages</p>
                    <ul className="mt-3 space-y-2">
                        {site.nav.map((item) => (
                            <li key={item.href}>
                                <Link href={item.href} className="text-white/85 hover:text-white">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <p className="text-sm font-medium text-white/50">Contact</p>
                    <ul className="mt-3 space-y-2 text-white/85">
                        <li>{site.location}</li>
                        <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
                        {site.phones.map((phone) => (
                            <li key={phone}>
                                <a href={telHref(phone)} className="tabular-nums hover:text-white">+677 {formatPhone(phone)}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>

            <Container>
                <p className="border-t border-white/10 py-6 text-sm text-white/50">
                    © {new Date().getFullYear()} {site.legalName}, trading as {site.name}
                </p>
            </Container>
        </footer>
    );
}

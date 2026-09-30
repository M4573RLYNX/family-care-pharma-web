"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site, telHref, formatPhone } from "@/lib/site";
import { Container } from "@/components/ui";

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
            <Image src={logo} alt="" width={40} height={40} className="size-10" />
            <span className="text-[15px] font-semibold leading-tight tracking-tight">
                Family Care
                <span className="block text-xs font-normal text-muted">Pharmacy · {site.shortName}</span>
            </span>
        </Link>
    );
}

export default function AppNavbar() {
    const pathname = usePathname();
    // The menu remembers the page it was opened on, so navigating closes it.
    const [openOn, setOpenOn] = useState<string | null>(null);
    const open = openOn === pathname;
    const setOpen = (next: boolean) => setOpenOn(next ? pathname : null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
            <Container className="flex h-16 items-center justify-between gap-6">
                <Logo />

                <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
                    {site.nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className="rounded-md px-3 py-2 text-[15px] text-muted transition-colors hover:text-ink aria-[current=page]:text-ink aria-[current=page]:font-medium"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <a
                    href={telHref(site.phones[0])}
                    className="hidden items-center gap-2 text-[15px] font-medium text-brand hover:text-brand-hover md:inline-flex"
                >
                    <Phone size={16} /> {formatPhone(site.phones[0])}
                </a>

                <button
                    type="button"
                    className="-mr-2 grid size-10 place-items-center rounded-md md:hidden"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </Container>

            {open && (
                <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-white md:hidden">
                    <Container className="py-3">
                        {site.nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={isActive(item.href) ? "page" : undefined}
                                className="block border-b border-line py-3 text-lg last:border-0 aria-[current=page]:text-brand"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href={telHref(site.phones[0])}
                            className="mt-3 flex h-12 items-center justify-center gap-2 rounded-lg bg-brand font-medium text-white"
                        >
                            <Phone size={17} /> Call {formatPhone(site.phones[0])}
                        </a>
                    </Container>
                </nav>
            )}
        </header>
    );
}

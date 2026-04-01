import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Pill } from "lucide-react";

export default function AppNavbar() {
    return (
        <Navbar isBordered maxWidth="xl">
            <NavbarBrand>
                <Link href="/" className="flex items-center gap-2 text-slate-900">
                    <Pill className="text-blue-600" />
                    <p className="font-bold text-inherit">FAMILY CARE PHARMACY</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem><Link color="foreground" href="/services">Services</Link></NavbarItem>
                <NavbarItem><Link color="foreground" href="/about">About Us</Link></NavbarItem>
                <NavbarItem><Link color="foreground" href="/contact">Contact</Link></NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="tel:+6777470344" variant="flat">Call Now</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
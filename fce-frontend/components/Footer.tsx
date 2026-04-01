import React from 'react';
import { Pill, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from "@heroui/react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-white">
                            <Pill className="text-blue-500" size={28} />
                            <span className="text-xl font-bold tracking-tight uppercase">
                                Family Care <span className="text-blue-500">Pharmacy</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            FCE Co Ltd is committed to providing high-quality pharmaceutical services
                            and medical supplies to the Honiara community and healthcare
                            providers across the Solomon Islands.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-white transition">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-slate-400 hover:text-blue-400 transition text-sm">Home</Link></li>
                            <li><Link href="/services" className="text-slate-400 hover:text-blue-400 transition text-sm">Our Services</Link></li>
                            <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 transition text-sm">Contact & Support</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4">
                            <li><span className="text-slate-400 text-sm">Retail Pharmacy</span></li>
                            <li><span className="text-slate-400 text-sm">Wholesale Distribution</span></li>
                            <li><span className="text-slate-400 text-sm">Medical Equipment</span></li>
                            <li><span className="text-slate-400 text-sm">Logistics & Supply Chain</span></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Get In Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-blue-500 shrink-0" size={18} />
                                <span className="text-sm">Honiara, Solomon Islands</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-blue-500 shrink-0" size={18} />
                                <span className="text-sm">famcarepharma@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-blue-500 shrink-0" size={18} />
                                <div className="text-sm space-y-1">
                                    <p>+(677) 7470344</p>
                                    <p>+(677) 7593550</p>
                                    <p>+(677) 7717748</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">
                        © {currentYear} FCE Co Ltd (Family Care Pharmacy). All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
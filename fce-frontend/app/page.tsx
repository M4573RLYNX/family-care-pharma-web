import React from 'react';
import {
  Phone, Mail, MapPin, CheckCircle2,
  Truck, Package, ShieldCheck, Activity,
  Stethoscope, Pill
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Pill className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight">FAMILY CARE <span className="text-blue-600">PHARMACY</span></span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
          <a href="tel:+6777470344" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              Your Health, Our Priority
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Leading Pharmaceutical <br />
              <span className="text-blue-600">Services in Honiara</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg">
              FCE Co Ltd (Family Care Pharmacy) provides premium retail pharmacy services and wholesale medical distribution across the Solomon Islands.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition">
                Explore Wholesale
              </button>
              <button className="px-8 py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition">
                Retail Services
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-blue-100 rounded-3xl h-[500px] w-full object-cover shadow-2xl overflow-hidden">
              {/* Replace with your pharmacy interior image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              <div className="flex items-center justify-center h-full text-slate-400 italic">
                Pharmacy Interior Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Healthcare</h2>
            <p className="text-slate-600">Supporting both individual patients and healthcare institutions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Retail Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Activity size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Retail Pharmacy</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <span>Prescription filling & medication management</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <span>Patient counseling by professional pharmacists</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <span>Health screenings and basic diagnostics</span>
                </li>
              </ul>
            </div>

            {/* Wholesale Card */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Truck size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Wholesale & Logistics</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <span>Bulk pharmaceutical supply for clinics & pharmacies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <span>Cold chain management for temperature-sensitive drugs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" size={18} />
                  <span>Specialized medical device procurement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Pharmaceuticals", icon: Pill },
              { name: "Medical Devices", icon: Stethoscope },
              { name: "Test Kits", icon: ShieldCheck },
              { name: "Consumables", icon: Package },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-2xl text-center hover:shadow-lg transition">
                <item.icon className="mx-auto mb-4 text-blue-600" size={32} />
                <h4 className="font-bold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-slate-800 pb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Family Care Pharmacy</h3>
            <p className="text-slate-400 leading-relaxed">
              Dedicated to delivering excellence in healthcare logistics and clinical services across the Solomon Islands.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 underline decoration-blue-500 underline-offset-8">Visit Us</h4>
            <div className="space-y-4 text-slate-400">
              <p className="flex items-center gap-3"><MapPin size={20} /> Honiara, Solomon Islands</p>
              <p className="flex items-center gap-3"><Mail size={20} /> famcarepharma@gmail.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 underline decoration-blue-500 underline-offset-8">Contact Lines</h4>
            <div className="space-y-4 text-slate-400">
              <p>+677 7470344</p>
              <p>+677 7593550</p>
              <p>+677 7717748</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-10 text-slate-500 text-sm">
          © {new Date().getFullYear()} FCE Co Ltd. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "Family Care Pharmacy | Honiara, Solomon Islands",
    template: "%s | Family Care Pharmacy",
  },
  description: "Retail pharmacy and wholesale medical supply in Honiara, Solomon Islands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Browser extensions (e.g. Scribe) add attributes to <html> before hydration.
    <html lang="en" className={body.variable} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JS can reveal it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
        >
          Skip to content
        </a>
        <AppNavbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

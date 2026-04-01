import AppNavbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Assuming you have the footer component

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
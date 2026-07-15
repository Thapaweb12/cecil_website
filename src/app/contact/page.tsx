import type { Metadata } from "next";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cecile M. Villacorta for a free, no-obligation life insurance needs analysis. Call 626-534-4411 or send a message. Serving West Covina and California.",
  alternates: { canonical: "/contact" },
};

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[64px] lg:pt-[72px] min-h-screen">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

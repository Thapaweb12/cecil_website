import type { Metadata } from "next";
import BusinessTracker from "@/components/business-tracker/BusinessTracker";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export const metadata: Metadata = {
  title: "Join the VANTAGE EAGLES",
  description:
    "Interested in a career in life insurance? Share your goals and story to explore mentorship and the business opportunity with Cecile Villacorta's VANTAGE EAGLES team.",
  alternates: { canonical: "/business-tracker" },
};

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[64px] lg:pt-[72px] min-h-screen">
        <BusinessTracker />
      </div>
      <Footer />
    </div>
  );
}

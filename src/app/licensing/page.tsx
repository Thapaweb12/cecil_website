import type { Metadata } from "next";
import Licensing from "@/components/licensing/Licensing";
import Footer from "@/components/static/Footer";
import Navbar from "@/components/static/Navbar";

export const metadata: Metadata = {
  title: "Getting Licensed",
  description:
    "Step-by-step guide to becoming a licensed life insurance professional — pre-licensing enrollment, fingerprinting, the state exam, study resources and applying for your license.",
  alternates: { canonical: "/licensing" },
};

export default function page() {
  return (
    <div>
      <Navbar />
      <div className="pt-[64px] lg:pt-[72px] min-h-screen">
        <Licensing />
      </div>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import DigitalCard from "@/components/digital-card/DigitalCard";

export const metadata: Metadata = {
  title: "Digital Card",
  description:
    "Cecile M. Villacorta's digital business card — save her contact, connect on social, and see her insurance services.",
  alternates: { canonical: "/digital-card" },
  // Personal share-by-link card — keep it out of search results.
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <div>
      <DigitalCard />
    </div>
  );
}

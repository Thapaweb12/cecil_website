import Hero from "../home/Hero";
import BusinessTrackerForm from "./BusinessTrackerForm";
import { site } from "@/lib/site";

const BusinessTracker = () => {
  return (
    <div className="pb-16">
      <Hero
        eyebrow="Join the VANTAGE EAGLES"
        title="Why I Joined Vantage"
        subtitle="Tell me your story and your goals — this helps us map out the right path for you."
      />

      <div className="container mt-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-surface-2 p-6 text-center sm:flex-row sm:text-left">
          <p className="font-medium text-body">
            Ready to get started right away? You can enroll online directly.
          </p>
          <a
            href={site.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-none"
          >
            Join Online Now
          </a>
        </div>
      </div>

      <div className="section pt-10">
        <BusinessTrackerForm />
      </div>
    </div>
  );
};

export default BusinessTracker;

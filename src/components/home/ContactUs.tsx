import ContactForm from "./contact/ContactForm";

const ContactUs = () => {
  return (
    <section id="contact" className="section bg-surface-2" aria-labelledby="contact-heading">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Get in Touch</p>
          <h2 id="contact-heading" className="headline mt-4 text-3xl md:text-4xl">
            Let&rsquo;s Build Your Plan Together
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Tell me a little about what you&rsquo;re looking for and I&rsquo;ll be
            in touch. Prefer to talk?{" "}
            <a
              href="tel:626-534-4411"
              className="whitespace-nowrap font-semibold text-secondary hover:text-teal"
            >
              Call 626-534-4411
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="card p-7 md:p-8">
            <h3 className="text-xl font-bold text-ink">Request Living Benefits Info</h3>
            <p className="mt-1 text-sm text-muted">
              A free, no-obligation needs analysis for you and your family.
            </p>
            <div className="mt-6">
              <ContactForm type="living_benefits" />
            </div>
          </div>

          <div className="card p-7 md:p-8">
            <h3 className="text-xl font-bold text-ink">Explore the Business Opportunity</h3>
            <p className="mt-1 text-sm text-muted">
              Learn how to earn while you learn with the VANTAGE EAGLES team.
            </p>
            <div className="mt-6">
              <ContactForm type="business_opportunity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

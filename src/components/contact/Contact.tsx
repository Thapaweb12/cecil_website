import ContactForm from "../home/contact/ContactForm";
import { MailIcon, PhoneIcon } from "@/assets/icons";

const Contact = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative isolate overflow-hidden bg-navy-deep">
        <div
          className="absolute inset-0 bg-[url('/home-hero-bg.jpeg')] bg-cover bg-center opacity-25"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grad-navy opacity-80" aria-hidden />
        <div className="container relative py-16 text-white md:py-20">
          <p className="eyebrow !text-teal before:!bg-teal">Get in Touch</p>
          <h1 className="headline mt-4 text-4xl text-white md:text-5xl">
            Contact Us Today
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Have a question or want a free needs analysis? Reach out and
            I&rsquo;ll get back to you personally.
          </p>
        </div>
      </div>

      <div className="section bg-surface">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info + map */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:626-534-4411"
                className="card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-grad-brand text-white">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    Call
                  </span>
                  <span className="font-semibold text-ink">626-534-4411</span>
                </span>
              </a>
              <a
                href="mailto:cecilev628@gmail.com"
                className="card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-grad-brand text-white">
                  <MailIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    Email
                  </span>
                  <span className="block truncate font-semibold text-ink">
                    cecilev628@gmail.com
                  </span>
                </span>
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line shadow-soft">
              <iframe
                title="Villacorta Insurance Services office location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.93238851713!2d-117.8862333241373!3d34.071247416726365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c329ab8bb27753%3A0xe07eaaad31921f35!2s2934%20E%20Garvey%20Ave%20S%2C%20West%20Covina%2C%20CA%2091791%2C%20USA!5e0!3m2!1sen!2snp!4v1731656985084!5m2!1sen!2snp"
                className="h-[420px] w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="card p-7 md:p-8">
            <h2 className="text-2xl font-bold text-ink">Send a Message</h2>
            <p className="mt-1 text-sm text-muted">
              Fill out the form and I&rsquo;ll be in touch shortly.
            </p>
            <div className="mt-6">
              <ContactForm type="contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

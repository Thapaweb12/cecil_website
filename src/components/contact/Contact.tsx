import React from "react";
import ContactForm from "../home/contact/ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <div className="bg-dark-blue py-10 w-full">
        <h1 className="text-4xl font-bold text-white text-center">
          Contact Us Today
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container py-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24364.59573157576!2d-117.89177203945364!3d34.066928931343135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDA0JzE2LjUiTiAxMTfCsDUzJzAxLjIiVw!5e0!3m2!1sen!2snp!4v1731601774358!5m2!1sen!2snp"
          className="w-full h-[500px]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="space-y-6">
          <h4 className="text-2xl font-bold  text-center ">Contact Us</h4>
          <ContactForm type="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

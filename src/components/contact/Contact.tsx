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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container py-10 items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.93238851713!2d-117.8862333241373!3d34.071247416726365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c329ab8bb27753%3A0xe07eaaad31921f35!2s2934%20E%20Garvey%20Ave%20S%2C%20West%20Covina%2C%20CA%2091791%2C%20USA!5e0!3m2!1sen!2snp!4v1731656985084!5m2!1sen!2snp"
          className="w-full h-[600px]"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold  text-center ">Contact Us</h4>

            <p className="text-center">
              To make an appointment for any information, you can fill out the
              attached form, or contact us directly
            </p>
          </div>

          <ContactForm type="contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

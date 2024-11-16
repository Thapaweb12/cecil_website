import React from "react";
import ContactForm from "./contact/ContactForm";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="space-y-14 container">
      <h3 className="text-center text-primary text-3xl font-bold">
        Villacorta Insurance Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-2xl font-bold  text-center ">Living Benefits</h4>
          <ContactForm type="living_benefits" />
        </div>
        <div className="space-y-6">
          <h4 className="text-2xl font-bold  text-center ">
            Business Opportunity
          </h4>
          <ContactForm type="business_opportunity" />
        </div>
      </div>
      {/* <div className="max-w-lg mx-auto space-y-4">
        <h4 className="text-4xl font-bold  text-center ">Contact us</h4>
        <div className="space-y-2 text-center font-semibold">
          <p>
            To make an appointment for any information, you can fill out the
            attached form, or contact us directly:
          </p>
          <p>Phone : 1(626) 534-4411</p>
          <p>Email : cecilev628@gmail.com</p>
        </div>
      </div> */}
    </div>
  );
};

export default ContactUs;

"use client";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { mailServiceUrl } from "@/components/constants/apiConstant";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Props {
  type:
    | "digital_card_contact"
    | "living_benefits"
    | "business_opportunity"
    | "contact";
}

const ContactForm = ({ type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const inputFields = [
    { name: "name", type: "text", placeholder: "Your Name", required: true },
    {
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Enter Phone Number",
      required: true,
    },
  ];

  async function handleMailSubmit(data: any) {
    if (data.fake_data) {
      toast.error("Please don't try to spam me");
      setIsLoading(false);
      return;
    }
    try {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);

      const response = await fetch(mailServiceUrl, {
        method: "POST",
        body: formData,
      });

      const { adminEmailStatus, feedbackEmailStatus } = await response.json();

      // if (!ok) {
      //   setIsLoading(false);
      //   throw new Error(`Error: ${response.status}`);
      // }

      if (adminEmailStatus === "success") {
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email.");
      }

      // if (feedbackEmailStatus === "success") {
      //   toast.success("Feedback email sent successfully!");
      // } else {
      //   toast.error("Failed to send feedback email.");
      // }

      setIsLoading(false);
      reset();
    } catch (err) {
      console.log("Error:", err);
      setIsLoading(false);
      toast.error("Something went wrong!");
    }
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await handleMailSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
      <div className="flex flex-col gap-2 md:gap-4 w-full">
        {inputFields.map((field) => (
          <CustomInput
            key={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            register={register}
            errors={errors}
          />
        ))}
        <textarea
          placeholder="Your Message"
          required
          className="w-full  pl-3 pt-2 resize-none h-[140px] md:h-[200px] outline-none  border border-gray-400 rounded-lg "
          {...register("message")}
        />
        {/* Hidden anti-spam field */}
        <input
          type="text"
          className="bg-inherit border-none outline-none h-[1px] w-[1px]"
          {...register("fake_data")}
        />
      </div>

      <CustomButton
        isLoading={isLoading}
        className="bg-secondary py-1 "
        type="submit"
      >
        Submit
      </CustomButton>
    </form>
  );
};

export default ContactForm;

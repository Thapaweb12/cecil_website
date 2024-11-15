"use client";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const DigitalCardForm = () => {
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
  ];

  async function handleMailSubmit(data: any) {
    if (data.fake_data) {
      toast.error("Please don't try to spam me");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("type", "digital-card-contact");

      formData.append("email", data.email);

      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        throw new Error(`Error: ${response.status}`);
      }

      toast.success(responseData.message);
      setIsLoading(false);
      reset();
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong!");
    }
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await handleMailSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full container">
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

        {/* Hidden anti-spam field */}
        <input
          type="text"
          className="bg-inherit border-none outline-none h-[1px] w-[1px]"
          {...register("fake_data")}
        />
      </div>

      <CustomButton isLoading={isLoading} className="bg-primary py-1 " type="submit">
        Send Me Your Info
      </CustomButton>
    </form>
  );
};

export default DigitalCardForm;

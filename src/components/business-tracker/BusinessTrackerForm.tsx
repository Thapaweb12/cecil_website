"use client";

import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BusinessTrackerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const checkedReasons = watch("reasons") ? watch("reasons") : [];
  const inputFields = [
    {
      name: "name",
      type: "text",
      lable: "Name, Email",
      placeholder: "Your Name, Email",
      required: true,
    },
    {
      name: "referring_agent",
      type: "text",
      lable: "Referring Agent",
      placeholder: "If other, input name of CFT here",
      required: true,
    },
    {
      name: "other_cft",
      type: "text",
      lable: "Other CFT",
      placeholder: "If other, input name of CFT here",
      required: true,
    },

    {
      name: "cft_email",
      type: "email",
      placeholder: "Enter CFT Email",
      required: true,
    },

    {
      name: "checked_yes_no",
      type: "text",
      placeholder: "Checked Answers: Yes or No",
      required: true,
    },

    {
      name: "monthly_income",
      type: "text",
      placeholder: "Desired monthly income",
    },
    {
      name: "hour_committed",
      type: "text",
      placeholder: "Hours committed per week",
    },
  ];

  const options = [
    "I like the PFA products",
    "I need the PFA products",
    "I need part-time income",
    "I need a new career",
    "I want to build my own business",
    "I want to sell products only",
    "I feel I have leadership talents",
    "I enjoy working with other people",
    "I want a career that challenges me",
    "I want to make a difference in people's lives",
  ];

  async function handleMailSubmit(data: any) {
    console.log(data);
    if (data.fake_data) {
      toast.error("Please don't try to spam me");
      setIsLoading(false);
      return;
    }
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key])) {
          // Handle arrays
          formData.append(key, JSON.stringify(data[key]));
        } else {
          // Handle other fields
          formData.append(key, data[key]);
        }
      });
      formData.append("type", "business_tracker");
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
      setIsLoading(false);
      toast.error("Something went wrong!");
    }
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await handleMailSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full container"
    >
      <div className="flex flex-col gap-2 md:gap-4 w-full">
        <CustomInput
          key={inputFields[0].name}
          name={inputFields[0].name}
          type={inputFields[0].type}
          label={inputFields[0]?.lable}
          placeholder={inputFields[0].placeholder}
          required={inputFields[0].required}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={inputFields[1].name}
          name={inputFields[1].name}
          type={inputFields[1].type}
          label={inputFields[1]?.lable}
          placeholder={inputFields[1].placeholder}
          required={inputFields[1].required}
          register={register}
          errors={errors}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="certified_field_trainer">
            Certified Field Trainer
          </label>
          <select
            name="certified_field_trainer"
            id="certified_field_trainer"
            defaultValue={"Select Certified Field Trainer"}
            className="border border-slate-400 p-2 rounded-md  w-full"
          >
            <option value="Gina Criste">Gina Criste</option>
            <option value="Other CFT">Other CFT</option>
          </select>
        </div>

        <CustomInput
          key={inputFields[2].name}
          name={inputFields[2].name}
          type={inputFields[2].type}
          label={inputFields[2]?.lable}
          placeholder={inputFields[2].placeholder}
          required={inputFields[2].required}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={inputFields[3].name}
          name={inputFields[3].name}
          type={inputFields[3].type}
          label={inputFields[3]?.lable}
          placeholder={inputFields[3].placeholder}
          required={inputFields[3].required}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={inputFields[4].name}
          name={inputFields[4].name}
          type={inputFields[4].type}
          label={inputFields[4]?.lable}
          placeholder={inputFields[4].placeholder}
          required={inputFields[4].required}
          register={register}
          errors={errors}
        />

        <div>
          {options.map((option) => (
            <div key={option} className="flex gap-x-3 ">
              <input
                type="checkbox"
                className="size-4"
                {...register("reasons")}
                value={option}
                checked={checkedReasons?.includes(option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
        <CustomInput
          key={inputFields[5].name}
          name={inputFields[5].name}
          type={inputFields[5].type}
          label={inputFields[5]?.lable}
          placeholder={inputFields[5].placeholder}
          required={inputFields[5].required}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={inputFields[6].name}
          name={inputFields[6].name}
          type={inputFields[6].type}
          label={inputFields[6]?.lable}
          placeholder={inputFields[6].placeholder}
          required={inputFields[6].required}
          register={register}
          errors={errors}
        />

        <textarea
          placeholder="Why? What is your story?"
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
      <div className="mx-auto">
        <CustomButton
          isLoading={isLoading}
          className="bg-secondary py-1  w-fit px-8 "
          type="submit"
        >
          Submit
        </CustomButton>
      </div>
    </form>
  );
};

export default BusinessTrackerForm;

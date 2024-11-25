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
  // const checked_yes_no = watch("checked_yes_no") ? watch("checked_yes_no") : [];
  const inputFields = [
    {
      name: "name",
      type: "text",
      lable: "Name",
      placeholder: "Your Name",
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your name",
        },
      },
    },
    {
      name: "referring_agent",
      type: "text",
      lable: "Referring Agent",
      placeholder: "Enter Name Referrring Agent",
      // validation: {
      //   required: {
      //     value: true,
      //     message: "Opps! Enter your Referrring Agent Name",
      //   },
      // },
    },
    {
      name: "other_cft",
      type: "text",
      lable: "Other CFT",
      placeholder: "If other, input name of CFT here",
      validation: {
        required: {
          value: true,
          message: "Opps! Enter your name of CFT",
        },
      },
    },

    {
      name: "cft_email",
      type: "email",
      lable: "CFT Email",
      placeholder: "Enter CFT Email",
      // validation: {
      //   required: {
      //     value: true,
      //     message: "Opps! Enter your email",
      //   },
      //   pattern: {
      //     value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i",
      //     message: "Opps! Enter a Valid email",
      //   },
      // },
    },

    {
      name: "checked_yes_no",
      type: "text",
      placeholder: "Checked Answers: Yes or No",
      validation: {
        required: {
          value: true,
          message: "Opps! Select Option",
        },
      },
    },

    {
      name: "monthly_income",
      type: "text",
      lable: "Desired monthly income",
      placeholder: "Desired monthly income",
    },
    {
      name: "hour_committed",
      type: "number",
      placeholder: "Hours committed per week",
      lable: "Hours committed per week",
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

      const { adminEmailStatus, feedbackEmailStatus } = await response.json();

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
      console.error("Error:", err);
      setIsLoading(false);
      toast.error("Something went wrong!");
    }
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    !isLoading && (await handleMailSubmit(data));
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
          validation={inputFields[0]?.validation}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={"email"}
          name={"email"}
          type="email"
          label="Email"
          placeholder="Enter Your Email"
          validation={{
            required: {
              value: true,
              message: "Opps! Enter your email",
            },
            pattern: {
              value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i",
              message: "Opps! Enter a Valid email",
            },
          }}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={inputFields[1].name}
          name={inputFields[1].name}
          type={inputFields[1].type}
          label={inputFields[1]?.lable}
          placeholder={inputFields[1].placeholder}
          validation={inputFields[1].validation}
          register={register}
          errors={errors}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="certified_field_trainer" className="text-sm">
            Certified Field Trainer<span className="text-red-600">*</span>
          </label>
          <select
            required
            id="certified_field_trainer"
            {...register("certified_field_trainer")}
            defaultValue={"Select Certified Field Trainer"}
            className="border border-slate-400 p-2 rounded-md  w-full"
          >
            <option value="Cecile M. Villacorta">Cecile M. Villacorta</option>
            <option value="Other CFT">Other CFT</option>
          </select>
        </div>
        {watch("certified_field_trainer") === "Other CFT" && (
          <>
            <CustomInput
              key={inputFields[2].name}
              name={inputFields[2].name}
              type={inputFields[2].type}
              label={inputFields[2]?.lable}
              placeholder={inputFields[2].placeholder}
              validation={inputFields[2].validation}
              register={register}
              errors={errors}
            />
            <CustomInput
              key={inputFields[3].name}
              name={inputFields[3].name}
              type={inputFields[3].type}
              label={inputFields[3]?.lable}
              placeholder={inputFields[3].placeholder}
              validation={inputFields[3].validation}
              register={register}
              errors={errors}
            />
          </>
        )}
        {/* <CustomInput
          key={inputFields[4].name}
          name={inputFields[4].name}
          type={inputFields[4].type}
          label={inputFields[4]?.lable}
          placeholder={inputFields[4].placeholder}
          validation={inputFields[4].validation}
          register={register}
          errors={errors}
        /> */}
        <div className="space-y-2">
          <label>Select Reasons</label>
          {/* <div className="flex gap-x-4">
            <div className="flex gap-x-3  items-center ">
              <input
                required
                type="radio"
                className="size-4"
                {...register("checked_yes_no")}
                id="yes"
                value={"yes"}
                checked={checked_yes_no?.includes("yes")}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-x-3  items-center ">
              <input
                required
                type="radio"
                className="size-4"
                {...register("checked_yes_no")}
                id="no"
                value={"no"}
                checked={checked_yes_no?.includes("no")}
              />
              <label htmlFor="no">No</label>
            </div>
          </div> */}
          <div>
            {options.map((option) => (
              <div key={option} className="flex gap-x-3  items-center ">
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
        </div>
        <CustomInput
          key={inputFields[5].name}
          name={inputFields[5].name}
          type={inputFields[5].type}
          label={inputFields[5]?.lable}
          placeholder={inputFields[5].placeholder}
          validation={inputFields[5].validation}
          register={register}
          errors={errors}
        />
        <CustomInput
          key={inputFields[6].name}
          name={inputFields[6].name}
          type={inputFields[6].type}
          label={inputFields[6]?.lable}
          placeholder={inputFields[6].placeholder}
          validation={inputFields[6].validation}
          register={register}
          errors={errors}
        />
        <div className="space-y-2">
          <label className="text-sm">Message</label>
          <textarea
            placeholder="Why? What is your story?"
            className="w-full  pl-3 pt-2 resize-none h-[140px] md:h-[200px] outline-none  border border-gray-400 rounded-lg "
            {...register("message")}
          />
        </div>
        {/* Hidden anti-spam field */}
        <input
          type="text"
          className="bg-inherit border-none outline-none h-[1px] w-[1px]"
          {...register("fake_data")}
        />
      </div>
      <div className="mx-auto">
        <CustomButton
          disabled={isLoading}
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

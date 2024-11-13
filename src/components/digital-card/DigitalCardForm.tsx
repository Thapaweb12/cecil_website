"use client";

import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";

type Props = {};

const DigitalCardForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelFormSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <form
      className="w-full flex flex-col gap-y-6"
      onSubmit={handleSubmit(handelFormSubmit)}
    >
      <CustomInput
        register={register}
        errors={errors}
        name="full_name"
        label="Name"
        placeholder="Enter Your name"
      />
      <CustomInput
        register={register}
        errors={errors}
        name="email"
        label="Email"
        placeholder="Enter Your Email"
      />
      <CustomButton>Send Me Your Info</CustomButton>
    </form>
  );
};

export default DigitalCardForm;

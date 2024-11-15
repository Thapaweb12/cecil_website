import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { Obj } from "@/modules/types";

export interface IInputTypes
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  validation?: Obj;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  errors: any;
}

const CustomInput = ({
  className,
  labelClassName,
  inputClassName,
  label,
  type,
  validation,
  name,
  register,
  leftIcon,
  rightIcon,
  errors,
  ...props
}: IInputTypes) => {
  return (
    <div className={twMerge("flex w-full  flex-col gap-y-[6px] h-fit ")}>
      {label && (
        <label
          className={twMerge(
            "font-normal text-sm text-slate-900 " + labelClassName
          )}
        >
          {label}
          {validation?.required?.value && label && (
            <span className="text-red-600">*</span>
          )}
        </label>
      )}
      {type === "textarea" ? (
        <div
          className={
            twMerge(
              "rounded-lg border border-gray-400  text-base px-4  py-1  text-slate-900 items-center flex gap-2 bg-white "
            ) + className
          }
        >
          <textarea
            placeholder={label}
            rows={5}
            className={twMerge(
              " placeholder:text-sm w-full  placeholder:text-gray-600 outline-none  " +
                inputClassName
            )}
            {...register(name, validation)}
            {...props}
          />
        </div>
      ) : (
        <div
          className={
            twMerge(
              " rounded-lg border border-gray-400 text-base px-4  py-1 bg-white  text-gray-800 items-center flex gap-2  "
            ) + className
          }
        >
          {leftIcon && leftIcon}
          <input
            className={twMerge(
              " placeholder:text-base w-full  outline-none  " + inputClassName
            )}
            {...register(name, validation)}
            {...props}
          />
          {rightIcon && rightIcon}
        </div>
      )}
      <div>
        {errors && errors[name] && (
          <p className="ml-2 text-xs text-red-500">{errors[name]?.message}</p>
        )}
      </div>
    </div>
  );
};

export default CustomInput;

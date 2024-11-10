import { cva, VariantProps } from "class-variance-authority"
import Link from "next/link"
import React, { ButtonHTMLAttributes, FC } from "react"

import { cn } from "@/lib/cn"

{
  ;<div className=" bg-transparent text-foundation-gray-g-800  "></div>
}
const buttonVariants = cva(
  `flex w-full items-center justify-center gap-x-[10px] rounded-[50px] hover:scale-[104%] transition-all duration-150 py-1 px-5 text-xl leading-[34px]  hover:bg-opacity-70 font-medium`,
  {
    variants: {
      variant: {
        blue: "bg-foundation-blue-900 text-white ",
        yellow: "bg-foundation-yellow-40 text-foundation-yellow-900",
        outline:
          "bg-transparent text-foundation-gray-g-800 border border-foundation-gray-g-400 rounded-[50px] ",
      },
      size: {
        fixedSmall: "max-w-[180px] py-[13px] ",
        normal: "w-full py-3  ",
      },
    },
    defaultVariants: {
      size: "normal",
      variant: "blue",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  path?: string
}

const CustomButton: FC<ButtonProps> = ({
  size,
  variant,
  className,
  children,
  isLoading,
  path,
  ...props
}) => {
  return path ? (
    <Link
      href={path}
      className={cn(buttonVariants({ className, variant, size }))}>
      {isLoading ? <div className="spinner w-full"></div> : children}
    </Link>
  ) : (
    <button
      type="button"
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}>
      {isLoading ? <div className="spinner w-full"></div> : children}
    </button>
  )
}

export default CustomButton

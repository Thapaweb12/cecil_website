import { ChevronDoubleRightIcon } from "@/assets/icons";
import { FC } from "react";

const ErrorsAndOmissions: FC = () => {
  const data = [
    {
      label: <div>PURCHASE E&O</div>,
      href: "https://pfaonline.com/login.php?ref=%2Fpfastore",
    },
    {
      label: "APPOINTED STEPS",
      href: "https://www.teamdeltapower.com/_files/ugd/19d835_6203b9a95f3945f995613fff2bcb0d2c.pdf",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-14 ">
      <h1 className="text-4xl font-extrabold text-gray-800 container text-center ">
        Errors and Omissions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl container">
        {data.map((item, index) => (
          <a
            target="_blank"
            href={item.href}
            key={index}
            className="bg-white shadow-md border rounded-lg p-10 w-full  flex flex-col items-center justify-between hover:shadow-lg transition-shadow hover:bg-slate-100   duration-300"
          >
            <div className="text-lg font-bold text-gray-800 border border-black rounded-full px-4 py-2 mb-4 ">
              {item.label}
            </div>
            <ChevronDoubleRightIcon className="text-gray-800 size-12" />
              {index === 0 && (
                <span className="text-red-600 text-xs">
                  Invalid Link: Plese provide new link
                </span>
              )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ErrorsAndOmissions;

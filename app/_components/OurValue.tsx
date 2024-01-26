import React, { ReactNode } from "react";

type Props = {
    value: string,
    description: string,
    icon: ReactNode
};

const OurValue = ({ value, description, icon }: Props) => {
  return (
    <div className="rounded-xl shadow-md bg-[#f5f5f5] border border-blue-gray-600/50 p-12 mx-10">
      <div className="flex gap-8 items-center mb-4">
        {icon}
        <p className="font-bold text-[#353535] sm:text-2xl">{value}</p>
      </div>
      <p className="text-start text-blue-gray-800">{description}</p>
    </div>
  );
};

export default OurValue;

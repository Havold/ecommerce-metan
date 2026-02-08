"use client";
import { useSearchParams } from "next/navigation";

import React from "react";

interface StepProps {
  id: number;
  name: string;
}

const Step: React.FC<StepProps> = ({ id, name }) => {
  const searchParams = useSearchParams();
  const activeStep = searchParams.get("step") || 1;

  return (
    <div
      key={id}
      className={`flex flex-col gap-2 items-center border-b-3 pb-4 ${activeStep == id ? "opacity-100" : "opacity-20"} transition-all ease-in`}
    >
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 p-5 bg-secondary-bg text-white rounded-full flex items-center justify-center">
          {id}
        </div>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Step;

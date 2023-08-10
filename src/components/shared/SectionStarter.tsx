import React from "react";

type sectionStarterProps = {
  title: string;
  description: string;
};

const SectionStarter = ({ title, description }: sectionStarterProps) => {
  return (
    <div className="text-center space-y-4 w-full lg:w-1/3 px-4 mx-auto my-16 lg:mt-32 lg:mb-16 ">
      <h1 className="text-2xl font-bold uppercase">{title}</h1>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default SectionStarter;

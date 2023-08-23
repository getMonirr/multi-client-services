import React from "react";

type sectionStarterProps = {
  title: string;
  description: string;
};

const SectionStarter = ({ title, description }: sectionStarterProps) => {
  return (
    <div className="text-start space-y-4 w-full px-4 my-16 lg:mt-32 lg:mb-16 ">
      <p className="text-[#226CE5] uppercase">{description}</p>
      <h1 className="text-5xl font-bold capitalize">{title}</h1>
    </div>
  );
};

export default SectionStarter;

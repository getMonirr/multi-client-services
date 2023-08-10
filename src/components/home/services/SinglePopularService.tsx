import Link from "next/link";
import React from "react";

type SinglePopularServiceProps = {
  slide: {
    title: string;
    image: string;
    description: string;
  };
};

const SinglePopularService = ({ slide }: SinglePopularServiceProps) => {
  return (
    <Link href="#">
      <div
        className="bg-teal-500 min-h-[400px] p-4 space-y-1 rounded-sm relative text-white"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      >
        <div className="absolute h-full w-full bg-black left-0 top-0 rounded-sm bg-opacity-20"></div>
        <p className="text-sm">{slide.description}</p>
        <h3 className="text-xl font-black">{slide.title}</h3>
      </div>
    </Link>
  );
};

export default SinglePopularService;

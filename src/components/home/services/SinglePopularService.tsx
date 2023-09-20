import Link from "next/link";
import React from "react";

type SinglePopularServiceProps = {
  slide: {
    title: string;
    images: string[];
    category: string;
    _id: string;
  };
};

const SinglePopularService = ({ slide }: SinglePopularServiceProps) => {
  return (
    <Link href={`/find-jobs?searchQuery=${slide.category}`}>
      <div
        className="bg-teal-500 min-h-[400px] p-4 space-y-1 rounded-sm relative text-white"
        style={{
          backgroundImage: `url(${slide.images[0]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute h-full w-full bg-black left-0 top-0 rounded-sm bg-opacity-20"></div>
        <p className="text-sm">{slide.category}</p>
        <h3 className="text-xl font-black">{slide.title}</h3>
      </div>
    </Link>
  );
};

export default SinglePopularService;

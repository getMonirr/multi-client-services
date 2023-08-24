import Image from "next/image";
import React from "react";
import RootContainer from "../shared/RootContainer";
import SimpleBtn from "../shared/btn/SimpleBtn";
import { BsSearch } from "react-icons/bs";

type singleSliderProps = {
  slide: {
    title: string;
    image: any;
    color: string;
    tags: string[];
  };
};

const SingleSlider = ({ slide }: singleSliderProps) => {
  const color = `text-[${slide?.color}]`;
  return (
    <RootContainer>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-between flex-col lg:flex-row gap-8 my-8 lg:my-4">
        <div className="w-full lg:w-1/3">
          <h1
            style={{ color: `${slide?.color}` }}
            className={`font-black text-5xl lg:text-7xl font-nunito`}
          >
            {slide.title}
          </h1>
          <p className="mt-4 text-slate-500 mb-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eum ducimus corrupti. Pariatur rem similique totam minima ad eum
            aliquam optio est quos! Rem voluptas repellat optio cumque eveniet
            corporis.
          </p>
          <div className="join">
            <input
              className="input shadow-xl input-bordered py-4 input-lg join-item bg-white rounded-tr-none rounded-br-none b w-full lg:w-[500px] placeholder:text-sm"
              placeholder="Try 'web development'"
              type="text"
            />
            <button
              style={{ backgroundColor: `${slide?.color}` }}
              className="btn join-item bg-multi-secondary btn-lg shadow-xl"
            >
              <BsSearch className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="mt-6">
            <div className="text-sm flex-wrap inline-flex items-center">
              <span className="mr-4">Popular Skill:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {slide.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="p-1 bg-multi-bg rounded-md cursor-pointer mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <Image
              src={slide.image}
              quality={100}
              alt="slider image"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
              className=""
            />
          </div>
        </div>
      </div>
    </RootContainer>
  );
};

export default SingleSlider;

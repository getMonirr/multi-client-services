import Image from "next/image";
import React from "react";
import RootContainer from "../shared/RootContainer";
import SimpleBtn from "../shared/btn/SimpleBtn";

type singleSliderProps = {
  slide: {
    title: string;
    image: string;
  };
};

const SingleSlider = ({ slide }: singleSliderProps) => {
  return (
    <RootContainer>
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-between flex-col lg:flex-row gap-8 my-8 lg:my-4">
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-2xl">{slide.title}</h1>
          <p className="mt-4 text-slate-500 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            eum ducimus corrupti. Pariatur rem similique totam minima ad eum
            aliquam optio est quos! Rem voluptas repellat optio cumque eveniet
            corporis.
          </p>
          <SimpleBtn className="text-white">Explore More</SimpleBtn>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src={slide.image}
            quality={100}
            alt="slider image"
            width={300}
            height={300}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            className="rounded-xl w-full h-auto lg:h-[500px]"
          />
        </div>
      </div>
    </RootContainer>
  );
};

export default SingleSlider;

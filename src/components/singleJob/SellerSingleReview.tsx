import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const SellerSingleReview = () => {
  return (
    <div className="flex gap-4 items-start mt-4 pt-8">
      <div className="self-start lg:w-1/3">
        <Image
          alt="user image"
          src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
          width={200}
          height={200}
          className="rounded-full w-96 h-auto lg:w-20 lg:h-20"
        />
      </div>
      <div>
        <div className="r">
          <Link href="#">
            <h4 className="text-xl font-bold">User displayName</h4>
          </Link>
          <p>country name</p>
        </div>
        <div className="flex items-center gap-4 mt-2 divide-x-2">
          <div className="flex items-center gap-2">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className="  font-bold">5</span>
          </div>
          <p className="pl-2">1 month ago</p>
        </div>
        <div className="pt-4">
          <p>
            ok let me give u a conclusion this is my first purchnase on fiverr
            and this ui ux designer is way better than i talked to others quite
            afordable and skillfull i reccomend him ill definalty work with him
            on more ui ux designs again im really satisfied
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellerSingleReview;

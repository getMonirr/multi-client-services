import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import shihab from "@/assets/teamImage/shihab.jpg";
import Image from "next/image";
type MemberProps = {
  name: string;
  designation: string;
  img: any;
};

const SingleMember = ({ member }: { member: MemberProps }) => {
  const { name, designation, img } = member;
  return (
    <div className="w-full relative ">
      <div className="rounded overflow-hidden shadow-md bg-multi-bg">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <Image
              src={img.src}
              alt="image"
              className="rounded-full object-cover h-full w-full shadow-md"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
        <div className="px-6 mt-16 ">
          <div className="font-bold text-3xl text-center pb-1 text-multi-title">
            {name}
          </div>
          <p className="text-multi-paragraph text-sm text-center">
            {designation}
          </p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a
              href="javascript:void(0)"
              className="mx-5 hover:text-multi-secondary"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
            <a
              href="javascript:void(0)"
              className="mx-5 hover:text-multi-secondary"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a
              href="javascript:void(0)"
              className="mx-5 hover:text-multi-secondary"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;

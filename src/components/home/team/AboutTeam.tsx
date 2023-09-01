import SectionStarter from "@/components/shared/SectionStarter";
import React from "react";
import SingleMember from "./SingleMember";
import RootContainer from "@/components/shared/RootContainer";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import masum from "@/assets/teamImage/masum.jpg";
import Image from "next/image";

const AboutTeam = () => {
  return (
    <div className="bg-multi-icon-bg mt-16 pb-32 pt-1">
      <h1 className="text-center text-3xl mt-3">Welcome Our Team</h1>
      <RootContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-32 mt-32">
          <SingleMember />
          
          <div className="w-full relative ">
            <div className="rounded overflow-hidden shadow-md bg-multi-bg">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                    alt="image"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16 ">
                <div className="font-bold text-3xl text-center pb-1 text-multi-title">
                  Md. Monir Hoshen
                </div>
                <p className="text-multi-paragraph text-sm text-center">
                  Backend Developer
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
          <div className="w-full relative ">
            <div className="rounded overflow-hidden shadow-md bg-multi-bg">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                    alt="image"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16 ">
                <div className="font-bold text-3xl text-center pb-1 text-multi-title">
                  Sahedul Islam
                </div>
                <p className="text-multi-paragraph text-sm text-center">
                  Backend Developer
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
          <div className="w-full relative ">
            <div className="rounded overflow-hidden shadow-md bg-multi-bg">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                    alt="image"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div className="px-6 mt-16 ">
                <div className="font-bold text-3xl text-center pb-1 text-multi-title">
                  Mehtaj
                </div>
                <p className="text-multi-paragraph text-sm text-center">
                  Front-End Developer
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
          <div className="w-full relative ">
            <div className="rounded overflow-hidden shadow-md bg-multi-bg">
              <div className="absolute -mt-20 w-full flex justify-center">
                <div className="h-32 w-32">
                  
                  <Image src={masum} alt="image" className="rounded-full object-cover h-full w-full shadow-md"></Image>
                </div>
              </div>
              <div className="px-6 mt-16 ">
                <div className="font-bold text-3xl text-center pb-1 text-multi-title">
                  Masum Billah
                </div>
                <p className="text-multi-paragraph text-sm text-center">
                  MERN Stack Developer
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
        </div>
      </RootContainer>
    </div>
  );
};

export default AboutTeam;

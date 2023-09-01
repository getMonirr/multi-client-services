import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const SingleMember = () => {
  return (
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
            Md. Shihab 
          </div>
          <p className="text-multi-paragraph text-sm text-center">
            Team Leader
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

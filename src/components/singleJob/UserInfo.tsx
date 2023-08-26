import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const UserInfo = () => {
  return (
    <div className="flex gap-4 items-center mt-4">
      <div>
        <Image
          alt="user image"
          src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
          width={200}
          height={200}
          className="rounded-full w-20 h-20"
        />
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <Link href="#">
            <h4 className="text-xl font-bold">User displayName</h4>
          </Link>
          <p> @ user name</p>
        </div>
        <div className="flex items-center gap-4 mt-2 divide-x-2">
          <div className="flex items-center gap-2">
            <FaStar />
            <span className="  font-bold">5</span>
            <span>(17)</span>
          </div>
          <p className="pl-2">2 Orders in Queue</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

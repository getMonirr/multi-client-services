import Image from "next/image";
import Link from "next/link";
import React from "react";

const SellerSingleServices = ({ service }: { service: any }) => {
  const { _id, title, images } = service;

  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <Image
            src={images[0]}
            alt="title"
            height={100}
            width={100}
            className="h-[250px] w-full object-cover object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-end">
            <Link href={`/dashboard/update-service?id=${_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSingleServices;

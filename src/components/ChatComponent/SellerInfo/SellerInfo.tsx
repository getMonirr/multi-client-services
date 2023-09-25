import React from 'react';
import Image from "next/image";
import mehtaj from "@/assets/teamImage/mehtaj.jpg";
const SellerInfo = ({result}:any) => {
    const {name,email,profilePicture} = result;
    console.log(profilePicture)
    return (
        <div className="flex items-center mb-3">
                  <div>
                    <Image
                      className="rounded-full ml-5"
                      src={mehtaj}
                      width={30}
                      height={30}
                      alt="user"
                    ></Image>
                  </div>
                  <div className="ml-2">
                    <h2>{name?.firstName + ' ' + name?.lastName}</h2>
                    <p>Freelancer</p>
                  </div>
                </div>
    );
};

export default SellerInfo;
"use client"
import SimpleBtn from "@/components/shared/btn/SimpleBtn"

import img from '../../../../assets/description.png'
import Image from "next/image"
import { useState } from "react"

const Description = ({ setDescription, next, prev }: object | any) => {




    return (
        <div className="p-2">
            <h1 className="text-3xl font-bold my-4">
                Write your service  Description
            </h1>
            <div className="flex gap-20">
                <Image className="hidden md:flex w-[400px]" src={img} alt="Image" />
                <textarea onChange={(e) => setDescription(e.target.value)} name="description" id="" placeholder="Write  about your Description" className="  w-full border p-5  h-60 lg:h-96 block lg:w-[500px]" />
            </div>
            <div className="flex justify-between items-center mt-10">
                <div onClick={prev}>
                    <SimpleBtn>
                        Previous
                    </SimpleBtn>
                </div>
                <div onClick={next}>
                    <div >
                        <SimpleBtn className="mt-10">
                            {/* <Link className="m-10" href="/dashboard/create_my_service/thumbnail"> */}
                            Next
                            {/* </Link> */}
                        </SimpleBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description
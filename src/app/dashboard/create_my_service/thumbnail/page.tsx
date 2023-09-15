"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import Link from "next/link";
import React from "react";
import './style.css'

const Thumbnail = ({ next, prev }: any) => {



    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold">Thumbnail Images</h1>
            <div>

                <div>
                    <div>
                        <input className="file-input my-6 block" type="file" name="" id="" />
                        <input className="file-input my-6 block" type="file" name="" id="" />
                        <input className="file-input my-6 block" type="file" name="" id="" />

                    </div>
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
        </div>
    );
};

export default Thumbnail;
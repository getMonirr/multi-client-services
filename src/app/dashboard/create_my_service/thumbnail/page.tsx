"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import Link from "next/link";
import React from "react";
import './style.css'
import { useForm } from "react-hook-form";
import getImgUrl from "@/utils/getImgUrl";

const Thumbnail: React.FC = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: object | any) => {
        const img1 = await getImgUrl(data.img1[0])
        console.log(img1);
    }

    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold">Thumbnail Images</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <div className="mt-6 flex gap-10">
                    <div
                        onClick={handleSubmitImage}
                        className="w-40 h-40 border shadow-xl hover:shadow-blue-500 rounded-xl flex justify-center items-center text-2xl font-bold cursor-pointer"
                    >
                        <button>Upload Image</button>
                        <input id="image_input" className="hidden" type="file" />
                    </div>
                    <div
                        onClick={handleSubmitImage}
                        className="w-40 h-40 border shadow-xl hover:shadow-blue-500 rounded-xl flex justify-center items-center text-2xl font-bold cursor-pointer"
                    >
                        <button>Upload Image</button>
                        <input id="image_input" className="hidden" type="file" />
                    </div>
                    <div
                        onClick={handleSubmitImage}
                        className="w-40 h-40 border shadow-xl hover:shadow-blue-500 rounded-xl flex justify-center items-center text-2xl font-bold cursor-pointer"
                    >
                        <button>Upload Image</button>
                        <input id="image_input" className="hidden" type="file" />
                    </div>
                </div> */}
                {/* <div className="container">
                    <figure className="image-container">
                        <img id="chosen-image" />
                        <figcaption id="file-name"></figcaption>
                    </figure>

                    <input className="inputt" type="file" id="upload-button" accept="image/*" />
                    <label className="label" htmlFor="upload-button">
                        <i className="fas fa-upload"></i> &nbsp; Choose A Photo
                    </label>
                </div> */}
                <div>
                    <div>
                        <input {...register("img1")} className="file-input my-6 block" type="file" name="" id="" />
                        <input {...register("img2")} className="file-input my-6 block" type="file" name="" id="" />
                        <input {...register("img3")} className="file-input my-6 block" type="file" name="" id="" />

                    </div>
                </div>
                <SimpleBtn className="mt-4">
                    {/* <Link href="/dashboard/create_my_service/description_and_faq"> */}
                        <input type="submit" value="save and continue" />
                    {/* </Link> */}
                </SimpleBtn>
            </form>
        </div>
    );
};

export default Thumbnail;
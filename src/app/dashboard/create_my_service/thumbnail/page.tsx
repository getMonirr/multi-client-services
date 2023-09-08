"use client";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import Link from "next/link";
import React from "react";

const Thumbnail = () => {
    const handleSubmitImage = () => {
        document.getElementById("image_input")?.click();
        document.getElementById("image_input")?.removeChild;
    };
    return (
        <div className="my-10">
            <h1 className="text-2xl font-bold">Thumbnail Images</h1>
            <form>
                <div className="mt-6 flex gap-10">
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
                </div>
                <SimpleBtn className="mt-4">
                    <Link href="/dashboard/create_my_service/description_and_faq">
                        <input type="submit" value="save and continue" />
                    </Link>
                </SimpleBtn>
            </form>
        </div>
    );
};

export default Thumbnail;
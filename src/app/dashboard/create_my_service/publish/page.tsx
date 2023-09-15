import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import React from "react";


const Publish_service = ({ handleServiceData, prev }: any) => {

    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1 className='text-4xl text-center font-bold my-6'>Almost There....</h1>
                <p className='my-4 text-[20px] text-center text-gray-500'>Let's Publish your service and <br />
                    Get some buyer in rolling
                </p>
                <div className='flex justify-center items-center'>
                    <button className='btn' onClick={handleServiceData}>

                        Publish Your Service

                    </button>
                </div>

                <div className='flex justify-center items-center mt-8'>
                    <button onClick={prev} className='btn'>Previous</button>
                </div>
            </div>
        </div>
    )
};



export default Publish_service;
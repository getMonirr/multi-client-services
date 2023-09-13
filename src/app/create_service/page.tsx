"use client"
import React, { useState } from 'react';
import Overview from '../dashboard/create_my_service/overview/page';
import Pricing from '../dashboard/create_my_service/pricing/page';
import Description from '../dashboard/create_my_service/description_and_faq/page';
import Thumbnail from '../dashboard/create_my_service/thumbnail/page';
import Publish_service from '../dashboard/create_my_service/publish/page';
import Faq from '@/components/Dashboard/Faq/Faq';

const page = () => {
    const formArray = [1, 2, 3, 4, 5, 6];
    const [formNo, setFormNo] = useState(formArray[0])

    let data: string[] | any =[]


    const [overview, setOverview] = useState({});
    let pricing : any | string[] = []
    console.log(pricing);
    const [description, setDescription] = useState("")
    const [faq, setFaq] = useState({})
    // console.log(description);

    // console.log(pricing);

    const prev = () => {
        setFormNo(formNo - 1)
    }

    const next = () => {
        setFormNo(formNo + 1)
    }

    const handleServiceData = () => {
        if (overview || pricing || description || faq) {
            data = [overview, pricing, description, faq]
        }
        console.log(data);
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                {
                    formArray.map((v, i) => <>
                        <div
                            className={`w-5 h-5 lg:w-[35px] my-3 text-white rounded-full 
                    ${formNo - 1 === i
                                    ||
                                    formNo - 1 === i + 1
                                    || formNo === formArray.length
                                    ? 'bg-blue-500' : 'bg-slate-400'}
                     h-[35px] flex justify-center items-center`
                            }>
                            {v}
                        </div>
                        {
                            i !== formArray.length - 1 && <div className={`w-[60px] lg:w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                        }
                    </>)
                }
            </div>
            <div className=' h-[80%] m-auto shadow-xl py-10 px-16 rounded-xl'>
                {
                    formNo === 1 && <Overview next={next} setOverview={setOverview} />
                }
                {
                    formNo === 2 && <Pricing prev={prev} next={next} pricing={pricing} />
                }
                {
                    formNo === 3 && <Description next={next} prev={prev} setDescription={setDescription} />
                }
                {
                    formNo === 4 && <Thumbnail next={next} prev={prev} />
                }
                {
                    formNo === 5 && <Faq setFaq={setFaq} next={next} prev={prev} />
                }
                {
                    formNo === 6 && <Publish_service handleServiceData={handleServiceData} prev={prev}/>
                }
            </div>
        </div>
    );
};

export default page;
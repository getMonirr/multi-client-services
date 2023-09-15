import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React, { useState } from 'react';

const Faq = ({ prev, next, setFaq }: any) => {

    // const addQue = () => {
    //     const container = document.getElementById("container");
    //     const div = document.createElement("div");
    //     const label:  any = document.createElement("label");
    //     label.innerText= 'Hello world'
    //     const input: any = document.createElement("input");
    //     // const addLabel = div.appendChild(label)
    //     const content: any = div.append(label,input);
    //     container?.append(content)

    // }

    const [que, setQue] = useState("");
    const [ans, setAns] = useState("")

    const handleSavedDAta = () => {
        setFaq({que,ans})
    }

    return (
        <div>

            <p  className='text-blue-500 underline cursor-pointer my-4'>Add More Que</p>

            <div id='container'>
                <div>
                    <label className="block my-3">Write Your Questions</label>
                    <input onChange={(e) => setQue(e.target.value)} type="text" name="" className='w-full border px-2 py-4 text-lg lg:w-[500px]' id="" />
                </div>
                <div>
                    <label className="block my-3">Write Your Answers</label>
                    <input onChange={(e) => setAns(e.target.value)} type="text" name="" className='w-full border px-2 py-4 text-lg lg:w-[500px]' id="" />
                </div>
            </div>

            <div className=" flex justify-between items-center mt-10">
                <div onClick={prev}>
                    <SimpleBtn>
                        Previous
                    </SimpleBtn>
                </div>
                <div onClick={next}>
                    <div onClick={handleSavedDAta}>
                        <SimpleBtn className="mt-10">
                            {/* <Link className="m-10" href="/dashboard/create_my_service/thumbnail"> */}
                            Next
                            {/* </Link> */}
                        </SimpleBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
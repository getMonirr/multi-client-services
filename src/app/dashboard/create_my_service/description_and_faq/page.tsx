"use client"
import SimpleBtn from "@/components/shared/btn/SimpleBtn"
import { useState } from "react"

const Description = () => {
    // const [faq, setFaq] = useState([])

    const [firstFAQ, setfirstFAQ] = useState<boolean>(false)
    

    return (
        <>
            <h1 className="text-3xl font-bold my-4">
                Description & FAQ
            </h1>
            <div className="flex gap-20">
                <form>
                    <textarea name="" id="" placeholder="Write about your Description" className=" p-3 w-full border h-[300px] block lg:w-[500px]"></textarea>
                    <SimpleBtn className="mt-10">
                        <input type="submit" value="Save" />
                    </SimpleBtn>
                </form>

                <form>
                    <button onClick={() => setfirstFAQ(true)} className="underline text-sm text-blue-500">Add More Question</button>
                    

                    <div className="mt-4">
                        <label>Qustion</label>
                        <input placeholder="Write your QUE" type="text" name="" className="w-full border px-2 py-3 block my-3 lg:w-[500px]" id="" />
                    </div>
                    <div>
                        <label>Answer</label>
                        <input placeholder="Write your answet" type="text" name="" className="w-full border px-2 py-3 block my-3 lg:w-[500px]" id="" />
                    </div>

                    {
                        firstFAQ === true && <div className="mt-4">
                            <div>
                                <label>Qustion</label>
                                <input placeholder="Write your QUE" type="text" name="" className="w-full border px-2 py-3 block my-3 lg:w-[500px]" id="" />
                            </div>
                            <div>
                                <label>Answer</label>
                                <input placeholder="Write your answet" type="text" name="" className="w-full border px-2 py-3 block my-3 lg:w-[500px]" id="" />
                            </div>
                        </div>
                    }
                </form>
            </div>
        </>
    )
}

export default Description
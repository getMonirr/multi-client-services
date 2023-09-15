"use client"
import SimpleBtn from "@/components/shared/btn/SimpleBtn"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"

const Description = ({ setDescription }: object | any) => {
    // const [faq, setFaq] = useState([])

    const {register, handleSubmit} = useForm();

    const onsubmit = (data : string | object | any) => {
        setDescription(data);
    }

    return (
        <>
            <h1 className="text-3xl font-bold my-4">
                Description & FAQ
            </h1>
            <div className="flex gap-20">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <textarea {...register("description")} name="description" id="" placeholder="Write about your Description" className="  w-full border  first-letter: h-96 block lg:w-[500px]"/>
                    <SimpleBtn className="mt-10">
                        <input type="submit" value="Save" />
                    </SimpleBtn>
                </form>

                <form>
                    <button  className="underline text-sm text-blue-500">Add More Question</button>


                    <div className="mt-4">
                        <label>Qustion</label>
                        <input placeholder="Write your QUE" type="text" name="" className="w-full border px-2 py-3 block my-3 lg:w-[500px]" id="" />
                    </div>
                    <div>
                        <label>Answer</label>
                        <input placeholder="Write your answet" type="text" name="" className="w-full border px-2 py-3 block my-3 lg:w-[500px]" id="" />
                    </div>

                    

                    <SimpleBtn>
                        <input type="submit" value="Save" />
                    </SimpleBtn>
                </form>

            </div>
            <SimpleBtn className="mt-10">
                {/* <Link href="/dashboard/create_my_service/publish"> */}
                Save & Continue
                {/* </Link> */}
            </SimpleBtn>
        </>
    )
}

export default Description
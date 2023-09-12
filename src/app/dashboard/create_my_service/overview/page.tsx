"use client"
import FormContext from "@/Context/MultiStepFormContext";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import Link from "next/link";
import React, { useState , useContext} from "react";
import { useForm } from "react-hook-form";

const Overview = ({setOverview} : any) => {
    const [service_category, setService_category] = useState<string>("")
    const [service_sub_category, setService_sub_category] = useState("")

    // const setOverview : object | any = useContext(FormContext)

    // console.log(setOverview);

    const software_development_sub_category = [
        {
            value: "software_development",
            name: "Software Development"
        },
        {
            value: "website_development",
            name: "Website development"
        },
        {
            value: "game_development",
            name: "Game development"
        },
        {
            value: "ai_development",
            name: "Ai development"
        },
        {
            value: "mobile_app_development",
            name: "Mobile app development"
        },
    ];

    const graphic_design_sub_category = [
        {
            name: "Logo Design",
            value: "logo_design"
        },
        {
            name: "T-shirt design",
            value: "t-shirt_design"
        },
        {
            name: "Illustration",
            value: "illustration"
        },
        {
            name: "UI design",
            value: "ui_design"
        },
    ];

    const digital_marketing_sub_category = [
        {
            name: "Seo Marketing",
            value: "seo_marketing"
        },
        {
            name: "SMM Marketing",
            value: "smm_marketing"
        },
        {
            name: "Content marketing",
            value: "content_marketing"
        },
        {
            name: "Email Marketing",
            value: "email_marketing"
        },
        {
            name: "Affiliate Marketing",
            value: "affiliate_marketing"
        },
    ];

    const business_sub_category = [
        {
            name: "ERP Management",
            value: "erp_anagement"
        },
        {
            name: "CRM Management",
            value: "crm_management"
        },
        {
            name: "Project Management",
            value: "project_management"
        },
        {
            name: "Event Management",
            value: "event_management"
        },
        {
            name: "Sales",
            value: "sales"
        },
    ]

    const {register, handleSubmit} = useForm();

    const onsubmit = (data : React.FormEventHandler<HTMLFormElement> | object) => {
        console.log(data);
        setOverview(data);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">Overview</h1>
            <form onSubmit={handleSubmit(onsubmit)} className="mt-8">
                <div className="flex my-6 gap-10 items-center">
                    {/* Title */}
                    <div className="w-[300px]">
                        <h2 className="text-xl font-bold my-4">Gig Title</h2>
                        <p>
                            As your service storefront, your title is the most important place
                            to include keywords that buyers would likely use to search for a
                            service like yours.
                        </p>
                    </div>
                    {/* Fields */}
                    <div className="w-[700px]">
                        <input
                            {...register("service_name")}
                            type="text"
                            className="w-full px-4 pb-8 pt-2 rounded-lg border"
                            placeholder="I will do ......"
                            required
                        />
                    </div>
                </div>
                <div className="flex my-6 gap-10 items-center">
                    {/* Title */}
                    <div className="w-[300px]">
                        <h2 className="text-xl font-bold my-4">Category</h2>
                        <p>
                            Choose the category and sub-category most suitable for your
                            service.
                        </p>
                    </div>
                    {/* Fields */}
                    <div className="flex gap-4">
                        <div className="w-[350px]">
                            <select 
                            className="border p-4 w-full"  
                            {...register("service_category")}
                            onChange={(e) => setService_category(e.target.value)}
                            >
                                <option value="Programming & tech">Programming & tech</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="w-[350px]">
                            <select 
                            className="border p-4 w-full"
                            {...register("service_sub_category")}
                            >
                                <option value="Software development">Software development</option>
                                <option value="Website development">Website development</option>
                                <option value="Game Development">Game Development</option>
                                <option value="Website Maintenance">Website Maintenance</option>
                                <option value="Ai development">Ai development</option>
                                <option value="Mobile app development">Mobile app development</option>
                            </select>
                        </div>
                    </div>
                </div>
                <SimpleBtn>
                    {/* <Link href="/dashboard/create_my_service/pricing"> */}
                    <input type="submit" value="Save and Continue" />
                    {/* </Link> */}
                </SimpleBtn>
            </form>
        </div>
    );
};

export default Overview;
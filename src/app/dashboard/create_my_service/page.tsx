"use client"
import MultiStep from 'react-multistep'
import Overview from "./overview/page"
import SimpleBtn from "@/components/shared/btn/SimpleBtn"
import Pricing from "./pricing/page"
import Thumbnail from "./thumbnail/page"
import Description from "./description_and_faq/page"
import './style.css'
import Publish_service from './publish/page'
import { useState } from 'react'
import { useEffect } from 'react'
import { Provider } from '@/Context/MultiStepFormContext'
import { Steps } from "antd";

const { Step } = Steps

const Create_service = () => {

    const prevButton: any | React.ReactNode = <SimpleBtn className='mt-10 mr-[1000px]'>Previus</SimpleBtn>


    const nextButton: any | React.ReactNode = <SimpleBtn>Next</SimpleBtn>

    

    // Overview Page data

    const overview_initial_state = {
        title: "",
        category: "",
        sub_category: ""
    }

    // pricing page data

    let data: string[] | any = [];

    const pricing_initial_state = [data]

    const basic_package_initial_state = {
        name: "",
        description: "",
        delivery_time: ""
    }

    const standard_package_initial_state = {
        name: "",
        description: "",
        delivery_time: ""
    }

    const premium_package_initial_state = {
        name: "",
        description: "",
        delivery_time: ""
    }

    useEffect(() => {
        data = [basic_package_initial_state, standard_package_initial_state, premium_package_initial_state]
    }, [])



    // description

    const description_inititla_state = {
        description: ""
    }

    const [currentStep, setCurrentStep] = useState(0)



    // const renderStep = (step: any) => {
    //     switch (step) {
    //         case 0:
    //             return <Overview />;
    //         case 1:
    //             return <Pricing />;
    //         case 2:
    //             return <Description />;
    //         case 3:
    //             return <Thumbnail />
    //         case 4:
    //             return <Description />
    //         case 5:
    //             return <Publish_service />
    //         default:
    //             return null;
    //     }
    // };


    
    const [overview, setOverview] = useState(overview_initial_state);
    const [pricing, setPricing] = useState(pricing_initial_state);
    const [description, setDescription] = useState(description_inititla_state);
    console.log(description);

    const publish_data = () => {
        const saved_data = [overview,pricing, description];
        console.log(saved_data);
    }
    
    const steps = [
        { name: "", component: <Overview setOverview={setOverview}/> },
        { name: "", component: <Pricing setPricing={setPricing}/> },
        { name: "", component: <Thumbnail /> },
        { name: "", component: <Description setDescription={setDescription}/> },
        { name: "", component: <Publish_service publish_data={publish_data}/> },
    ];


    return (
        <div className='flex items-center justify-center'>
            <MultiStep showNavigation={true} prevButton={{ title: prevButton }} nextButton={{ title: nextButton }} steps={steps} >

            </MultiStep>
            <Provider value={{ overview, setOverview, pricing, setPricing, description, setDescription }}>

            </Provider>
        </div>
    )
}

export default Create_service
import Link from 'next/link';
import React from 'react';

const Update_profile_sidebar = () => {

    const data = [

        {
            id: 1,
            step: "step 1",
            title: "Personal Info",
            linkTo: "/dashboard/update_profile",
        },
        {
            id: 2,
            step: "step 2",
            title: "Address",
            linkTo: "/dashboard/Address",
        },
        {
            id: 3,
            step: "step 3",
            title: "Education",
            linkTo: "/dashboard/education",
        },
        {
            id: 4,
            step: "step 4",
            title: "Portfolio",
            linkTo: "/dashboard/Update_portfolio",
        },
        {
            id: 5,
            step: "step 5",
            title: "Description",
            linkTo: "/dashboard/description_exp",
        },
        {
            id: 6,
            step: "step 6",
            title: "Experience",
            linkTo: "/dashboard/work_exp",
        },

    ]
    return (
        <aside id='aside_bar_update_profile' className=" sm:relative bg-mobile sm:bg-desktop sm:bg-cover bg-no-repeat w-[100%] h-[100%] pt-8 sm:pl-8 sm:basis-[30%] sm:rounded-lg flex items-start justify-center sm:flex-col sm:justify-start">
            {data.map((item, idx) => {
                return (
                    <div
                        key={idx}
                        className="flex items-center space-x-4 leading-4 sm:mb-10"
                    >
                        <Link

                            href={item.linkTo}
                        >
                            {item.id}
                        </Link>
                        <Link href={item.linkTo}>
                            <p className="hidden sm:block uppercase text-neutral-coolGray text-[14px]">
                                {item.step}
                            </p>
                            <p className="hidden sm:block uppercase text-neutral-lightGray font-[500] tracking-wider">
                                {item.title}
                            </p>
                        </Link>
                    </div>
                );
            })}
        </aside>
    );
};

export default Update_profile_sidebar;
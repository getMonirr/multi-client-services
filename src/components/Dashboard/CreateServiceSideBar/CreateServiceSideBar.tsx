import Link from 'next/link';
import React from 'react';

const CreateServiceSideBar = () => {
    const data = [
        {
            id: 1,
            step: "step 1",
            title: "Overview",
            linkTo: "/create_my_service",
        },
        {
            id: 2,
            step: "step 2",
            title: "pricing",
            linkTo: "create_my_service/pricing",
        },
        {
            id: 3,
            step: "step 3",
            title: "Description",
            linkTo: "create_my_service/description",
        },
        {
            id: 4,
            step: "step 4",
            title: "FAQ",
            linkTo: "create_my_service/faq",
        },
        {
            id: 4,
            step: "step 4",
            title: "Thumbnail",
            linkTo: "create_my_service/thumbnail",
        },
        {
            id: 4,
            step: "step 4",
            title: "Publish",
            linkTo: "create_my_service/publish",
        },
    ]



    return (
            <aside className="p-10 shadow-2xl rounded-xl">
                {data.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className="flex items-center space-x-4 leading-4 sm:mb-10"
                        >
                            <Link
                                style={{
                                    color: "hsl(229, 24%, 87%)",
                                    background: "transparent",
                                    border: "2px solid hsl(229, 24%, 87%)",
                                    fontWeight: "500",
                                    width: "2rem",
                                    height: "2rem",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                href={item.linkTo}
                            >
                                {item.id}
                            </Link>
                            <div>
                                <p className="hidden sm:block uppercase text-neutral-coolGray text-[14px]">
                                    {item.step}
                                </p>
                                <p className="hidden sm:block uppercase text-neutral-lightGray font-[500] tracking-wider">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </aside>
    );
};

export default CreateServiceSideBar;
import SimpleBtn from "@/components/shared/btn/SimpleBtn";
import Link from "next/link";
import React from "react";

const Overview = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Overview</h1>
            <form className="mt-8">
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
                            <select className="border p-4 w-full" name="" id="">
                                <option value="">Programming & tech</option>
                                <option value="">Graphic Design</option>
                                <option value="">Digital Marketing</option>
                                <option value="">Data Entry</option>
                                <option value="">Business</option>
                            </select>
                        </div>
                        <div className="w-[350px]">
                            <select className="border p-4 w-full">
                                <option value="">Software development</option>
                                <option value="">Website development</option>
                                <option value="">Game Development</option>
                                <option value="">Website Maintenance</option>
                                <option value="">Ai development</option>
                                <option value="">Mobile app development</option>
                            </select>
                        </div>
                    </div>
                </div>
                <SimpleBtn>
                    <Link href="/dashboard/create_my_service/pricing">
                    <input type="submit" value="Save and Continue" />
                    </Link>
                </SimpleBtn>
            </form>
        </div>
    );
};

export default Overview;
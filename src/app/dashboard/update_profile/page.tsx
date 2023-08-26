import Update_profile_sidebar from "@/components/Dashboard/Update_profile_sidebar/Update_profile_sidebar";
import SimpleBtn from "@/components/shared/btn/SimpleBtn";


const Update_profile = () => {
    return (
        <div className="mt-8">
            <h1 className='text-4xl font-semibold text-black'>Update Your Information</h1>
            <p className='text-gray-500 my-4'>Here you can edit public information about yourself <br />  The Changes will be displayed for other users within 5 minutes</p>

            <div className="flex gap-20">
                <div>
                    <Update_profile_sidebar />
                </div>
                <form className="flex gap-20">
                    <div className="w-[400px]">
                        {/* Personal information like name, email, contact number */}
                        <h1 className="text-3xl font-bold my-8">Personal Information</h1>
                        <div className="flex  gap-20 w-[1000px]">
                            <div className="mb-6 w-[500px]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                            <div className="mb-6 w-[500px]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="flex  gap-20 w-[1000px]">
                            <div className="mb-6 w-[500px]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@mail.com" required />
                            </div>
                            <div className="mb-6 w-[500px]">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+880 171xxxxxxxx" required />
                            </div>
                        </div>

                        <SimpleBtn>
                            <input className="text-white" type="submit" value="Update Personal Information" />
                        </SimpleBtn>
                    </div>
                </form>


            </div>
            <form className="ml-[360px]">
                {/* Addresses : village, city, country , postal code */}
                <h1 className="text-3xl font-bold my-8">Address</h1>
                <div className="flex  gap-20 w-[1000px]">
                    <div className="mb-6 w-[500px]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Village</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kachukhet" required />
                    </div>
                    <div className="mb-6 w-[500px]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dhaka" required />
                    </div>
                </div>
                <div className="flex  gap-20 w-[1000px]">
                    <div className="mb-6 w-[500px]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1206.." required />
                    </div>
                    <div className="mb-6 w-[500px]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangladesh" required />
                    </div>
                </div>
                <SimpleBtn>
                    <input className="text-white" type="submit" value="Update Personal Information" />
                </SimpleBtn>
            </form>
        </div>
    );
};

export default Update_profile;
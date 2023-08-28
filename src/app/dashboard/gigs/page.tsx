"use client"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  serviceName: string
  technology: string
  basic: string
  basicPrice: number
  advance: string
  advancePrice: number
  premium: string
  premiumPrice: number
  banner: any
}


const Gig = () => {

    const {
        register, handleSubmit, formState: { errors }} = useForm<Inputs>()
        const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { serviceName, technology, basic, basicPrice, advance, advancePrice, premium, premiumPrice, banner } = data;
        console.log(data);
        }



    return (
        <div className='my-40 container mx-auto flex justify-around'>

            <div className='border p-10'>
                <h1 className='text-3xl font-bold my-6'>Add Your Gig</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("serviceName")} type="text" name="serviceName" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Name</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("technology")} type="text" name="technology" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Technology</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("basic")} type="text" name="basic" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Basic</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("basicPrice")} type="number" name="basicPrice" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Basic Price</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("advance")} type="text" name="advance" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Advance</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("advancePrice")} type="number" name="advancePrice" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Advance Price</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("premium")} type="text" name="premium" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Premium</label>
                    </div>

                    <div className="relative z-0 w-[420px] mb-6 group">
                        <input {...register("premiumPrice")} type="number" name="premiumPrice" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-multi-secondary appearance-none dark:text-white dark:border-multi-secondary dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-multi-secondary dark:text-multi-secondary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-multi-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Premium Price</label>
                    </div>

                    <div className='flex items-center my-4 gap-4'>
                          
                            <span className="text-multi-secondary">Banner</span>


                            
                                
                                <input {...register("banner")} type="file" className="block w-full text-sm text-slate-500
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-multi-secondary
                                  hover:file:bg-violet-100
                                "/>

                        </div>

                    <div className='flex justify-center'>
                        <button type='submit' className='btn bg-multi-secondary text-white w-full'>Add Gig</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Gig;
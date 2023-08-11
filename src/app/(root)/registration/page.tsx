
import img from '../../../assets/login.png'
import Image from 'next/image';
import Link from 'next/link';




const Registration = () => {

    
    

    return (
        <div>
            <div className='my-40 container mx-auto flex justify-around'>
                <Image src={img} alt='' />

                <div className='border p-10'>
                    <h1 className='text-3xl font-bold my-6'>Get Started</h1>
                    <form>
                        <div className="relative z-0 w-[420px] mb-6 group">
                            <input  type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                        </div>
                        <div className="relative z-0 w-[420px] mb-6 group">
                            <input  type="email" name="email" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-[420px] mb-6 group">
                            <input  type="password" name="password" className="block py-2.5 px-0 w-full text-sm text-orange-900 bg-transparent border-0 border-b-2 border-orange-300 appearance-none dark:text-white dark:border-orange-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-orange-500 dark:text-orange-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className='flex my-4 gap-10 items-center'>
                            <select className='w-full bg-orange-100 p-3' name="userType" id="">
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                        </div>
                        <div className='flex justify-center'>
                            <button className='btn w-full'>Continue</button>
                        </div>
                        <p className='my-4'>Already Have an Account? <Link href="/login" className='text-orange-500 underline'>Login Here</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
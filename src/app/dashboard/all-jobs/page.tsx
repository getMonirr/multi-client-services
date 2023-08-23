import { JobCategory } from "@/constant/JobCategory";
import { FaEye } from 'react-icons/fa';


const AllJobs = async () => {
   
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-2xl font-medium mb-10 mt-5">All Jobs</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    JobCategory.map((job, i) => (
                        <div key={i} className='bg-white rounded overflow-hidden group shadow-md'>
                  <div className="relative">
                      <img src={job.cover_page} className='w-full h-52' alt="" /> 
                      
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                          <a className='text-white cursor-pointer text-lg w-9 h-9 rounded-full bg-multi-secondary flex items-center justify-center hover:bg-gray-800 transition'>
                               <FaEye></FaEye>
                          </a>
                      </div>
                  </div>
  
                  <div className='pt-4 pb-3 px-4'>
                      <a href="">
                          <h2 className='font-medium text-lg text-gray-800 hover:text-red-600'>{job.name}</h2>
                      </a>
  
                      <div className='flex items-baseline mb-1 space-x-2'>
                          <p className='text-lg text-gray-500 font-semibold'>{job.type}</p>
                      </div>
                      {/* <div className="flex justify-between items-center">
                        <p className="text-gray-800 font-bold"> Price: ${ job.price } </p>
                        <p className="text-gray-500"> Ratings: { job.reviews.length } </p>
                      </div> */}
                  </div>
                  <button className='btn block w-full py-1 text-center text-white bg-multi-primary hover:bg-multi-secondary border-multi-primary rounded-none rounded-b transitio hover:border-red-600'>Collaborate</button>
              </div>

                    ))
                }
            </div>
        </div>
    );
};

export default AllJobs;
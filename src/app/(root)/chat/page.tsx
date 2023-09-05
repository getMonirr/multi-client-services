import Image from "next/image";
import React from "react";
import masum from "@/assets/teamImage/masum.jpg";
import shahedul from "@/assets/teamImage/shahedul.jpg";

const page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="w-[100%] bg-gray-300 min-h-screen md:w-[25%]">
          <div className="">
            <div className="w-full h-[80px] rounded-full flex items-center">
              <div className="flex items-center">
              <div>
                <Image
                  className="rounded-full ml-5"
                  src={shahedul}
                  width={44}
                  height={44}
                  alt="user"
                ></Image>
              </div>
              <div className="ml-2">
                <h2>Shahedul Islam</h2>
                <p>Ceo of M Solution</p>
              </div>
              </div>
            </div>
            
              
              <div className="ml-5 mt-5">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search absolute inset-y-0 left-0 pl-2 py-1"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search Freelancer here"
                    className="pl-10 py-2 border rounded-lg"
                  />
                </div>
              </div>
              <div className="ml-5 mt-5">
              <div className="flex items-center">
              <div>
                <Image
                  className="rounded-full ml-5"
                  src={shahedul}
                  width={40}
                  height={40}
                  alt="user"
                ></Image>
              </div>
              <div className="ml-2">
                <h2>Shahedul Islam</h2>
                <p>Ceo of M Solution</p>
              </div>
              </div>
              </div>
            
          </div>
        </div>
        <div className="h-screen w-[100%] md:w-[60%]">
          <div className="w-full h-[60%] flex flex-col">
            <div className="my-2 bg-white flex items-center gap-2">
              <div className="ml-5">
                <Image
                  className="rounded-full"
                  src={masum}
                  width={60}
                  height={60}
                  alt="user"
                ></Image>
              </div>
              <div>
                <h3 className="text-lg">Masum</h3>
              </div>
              <div>
                <div className="w-4 h-4 bg-success rounded-full border-2"></div>
              </div>
            </div>
            <div className="h-[85%] border w-full overflow-y-scroll">
              <div className="h-[1000px] px-10 py-14">
                <div className="max-w-[40%] flex">
                  <div className="max-w-[10%]">
                    <Image
                      className="rounded-full"
                      src={masum}
                      width={30}
                      height={30}
                      alt="user"
                    ></Image>
                  </div>
                  <div className="max-w-[90%] bg-slate-400 rounded-b-xl rounded-tr-xl p-4 mb-6">
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
                <div className="max-w-[40%] flex ml-auto">
                  <div className="max-w-[90%] bg-blue-400 rounded-b-xl rounded-tl-xl  p-4 text-white">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className="max-w-[10%]">
                    <Image
                      className="rounded-full"
                      src={masum}
                      width={30}
                      height={30}
                      alt="user"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 justify-center items-center">
            <input
              className="h-12 w-[80%] border-2 border-white-800 px-3 py-5 rounded-full"
              type="text"
              placeholder="Write here..."
            />

            <button
              className="btn btn-sm btn-success h-12 w-12 rounded-full
            
              border-black
              p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-send"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-gray-300 min-h-screen md:w-[15%] text-center">
          <div className="w-1/2 mx-auto mt-10">
            <Image
              className="rounded-full"
              src={masum}
              width={48}
              height={48}
              alt="user"
            ></Image>
          </div>
          <div className="">
            <h2 className="text-xl">Md. Masum Billah</h2>
            <p>Junior Developer</p>
            
          </div>
          <div className="mt-20">
          <p>Jobs Completed-15</p>
          </div>
          <div>
            <p>Review: 4.5</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

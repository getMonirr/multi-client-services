"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "@/utils/swr/fetcher";
import axios from 'axios';
import masum from "@/assets/teamImage/masum.jpg";
import shahedul from "@/assets/teamImage/shahedul.jpg";

import monir from "@/assets/teamImage/monir.jpg";
import shihab from "@/assets/teamImage/shihab.jpg";
import { FaPaperPlane } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import RootContainer from "@/components/shared/RootContainer";
import io from "socket.io-client";
import SellerInfo from "@/components/ChatComponent/SellerInfo/SellerInfo";

//const socket = io("multi-client-service-backend.up.railway.app")
const socket = io("http://localhost:5000");
const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [message,setMessage] = useState('')
    const [receiveMessage,setReceiveMessage] = useState('')
    const [typeMessage,setTypeMessage] = useState('')
    const { data: session } = useSession();
  console.log(session);
  const userName = session?.user.name;
  const email = session?.user?.email;
  const profileImage = session?.user?.profilePicture as string;
  

  const { data: results } = useSWR('/api/users', fetcher);
  console.log('results: ', results?.data);
  

  useEffect(() => {
    // Fetch messages when the component mounts
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      
      const response = await fetch('http://localhost:5000/messages');


      if (!response.ok) {
        // Handle error if the request was not successful
        throw new Error('Failed to fetch messages');
      }

      const fetchData = await response.json();
      console.log('All Message: ', fetchData);
      setMessages(fetchData);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  
  const sendMessage = async () =>{
    setMessage(typeMessage);
    const data = {
      sender:session?.user.email,
      name:session?.user.name,
      message:typeMessage
    }
    try {
      const response = await fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(data), // Convert form data to JSON
      });

      if (response.ok) {
        // Successful response
        alert('Data saved successfully');
        // Clear the form or perform any other necessary actions
      } else {
        // Handle errors if the request was not successful
        console.error('Error saving data:', response.statusText);
        alert('Error saving data');
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Error saving data:', error);
      alert('Error saving data');
    }
    
    // try {
    //   // Send a POST request to your Express.js backend
    //   axios.post('http://localhost:5000/messages', data);
    //   alert('Data saved successfully');
      
    // } catch (error) {
    //   console.error('Error saving data:', error);
    //   alert('Error saving data');
    // }

    
    socket.emit("send_message", data );
    setTypeMessage('')
}
    useEffect(()=>{
      socket.on("receive_message", (data)=>{
        console.log(data?.message)
        setReceiveMessage(data?.message)
        
      } )
    },[])
    
    
    const handleInputEnter = (event:any)=>{
      if(event.code ==='Enter'){
          sendMessage();
      }
  }
  return (
    <>
      <RootContainer>
      
        <div className="flex flex-col lg:flex-row border-2 border-multi-icon-bg  my-5 h-[400px]">
          <div className="w-full bg-multi-icon-bg h-auto lg:max-h-screen lg:w-[25%]">
              <div className="w-full h-[80px] rounded-full flex items-center">
                <div className="flex items-center">
                  <div>
                    <Image
                      className="rounded-full ml-5"
                      src={profileImage}
                      width={44}
                      height={44}
                      alt="user"
                    ></Image>
                  </div>
                  <div className="ml-2">
                    <h2></h2>
                    <p>{session?.user?.role}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 ml-5 lg:ml-1">
                <div className="relative pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search absolute inset-y-0 left-0 pl-4 py-1"
                    width="34"
                    height="34"
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
                    placeholder="Search here"
                    className="pl-10 py-2 border rounded-lg lg:w-56"
                  />
                </div>
              </div>
              <div className="ml-5 mt-5 h-[85%] lg:overflow-y-scroll">
                <div>
                {Array.isArray(results?.data) &&
        results?.data.map((result:any) => (
          <SellerInfo key={result._id} result={result} />
        ))}
        
                </div>
                
                
              </div>
            
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="w-full h-auto lg:h-[80%] flex flex-col ">
              <div className="flex flex-col lg:flex-row  justify-between">
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
                    <h3 className="text-lg">Md Masum Billah</h3>
                  </div>
                  <div>
                    <div className="w-4 h-4 bg-success rounded-full border-2"></div>
                  </div>
                </div>
                <div className="flex">
                  <span>
                    <CiSearch></CiSearch>
                  </span>
                  <span>
                    <AiOutlineHeart></AiOutlineHeart>
                  </span>
                  <span>
                    <AiOutlineBell></AiOutlineBell>
                  </span>
                </div>
              </div>
              <div className="h-[85%] border w-full overflow-y-scroll">
                <div className="h-[1000px] px-10 py-14">
  
                  {
                    message && <div className="max-w-[40%] flex">
                    <div className="max-w-[10%]">
                      <Image
                        className="rounded-full"
                        src={shahedul}
                        width={30}
                        height={30}
                        alt="user"
                      ></Image>
                    </div>
                    
                    <div className="max-w-[90%] bg-multi-icon-bg rounded-b-xl rounded-tr-xl p-4 mb-6">
                    
                      {message}
        
                      </div>
                    
                  </div>
                  }
                  {
                    receiveMessage && <div className="max-w-[40%] flex ml-auto">
                    
                    <div className="max-w-[90%] bg-blue-400 rounded-b-xl rounded-tl-xl  p-4 text-white">
                   {receiveMessage}
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
                  }
                  
                  
                </div>
              </div>
            </div>
            <div className="flex mt-5 justify-center items-center">
              <div className="w-[80%] relative">
                <input
                  className="h-12 w-full border-2 border-white-800 px-12 py-5 rounded-full"
                  type="text"
                  placeholder="Write here..."
                  value={typeMessage}
                  onChange={(e)=>setTypeMessage(e.target.value)}
                  onKeyUp={handleInputEnter}
                />
                <span className="absolute right-8 top-4 inset-y-0">
                  <GrAttachment />
                </span>
                <span className="absolute left-4 top-4 inset-y-0">
                  <BsMic />
                </span>
              </div>

              <button
                onClick={sendMessage}
                className="btn btn-sm bg-multi-icon-bg h-12 w-12 rounded-full
            
          
              p-2"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
          <div className="bg-multi-icon-bg w-full lg:w-[15%] text-center">
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
      </RootContainer>
    </>
  );
};

export default ChatPage;

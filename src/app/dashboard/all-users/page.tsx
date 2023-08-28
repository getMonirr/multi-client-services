"use client"
import { useState } from 'react';
import { JobCategory } from "@/constant/JobCategory";
import { FaTrash } from 'react-icons/fa';

const AllUsers = () => {
    const [userList, setUserList] = useState(JobCategory);
    const handleDelete = (id: number) => {
        const updatedUsers = userList.filter(item => item._id !== id);
        setUserList(updatedUsers);
      };
    

    
    return (
        <div>
            <h2 className='text-2xl font-medium text-center'>All Users Data {userList.length}</h2>

            <div className="overflow-x-auto">

            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th> Location</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}

                {
                    userList.map((user, i) =>(

                        <tr key={user._id}>
                        <th>{i +1} </th>
                        <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask rounded-sm w-12 h-12">
                                <img src={user.cover_page} alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{user.name}</div>
                            <div className="text-sm opacity-50">{user.username}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {user.services}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{user.type}</span>
                        </td>
                        <td>{user.location}</td>
                        <th>
                        <button onClick={() => handleDelete(user._id)} className="btn btn-primary btn-sm"> <FaTrash></FaTrash> </button>
                        </th>
                    </tr>
                        
                    ))
                }

                </tbody>
                
            </table>

            </div>

        </div>
    );
};

export default AllUsers;
"use client";
import { useState } from "react";
import { JobCategory } from "@/constant/JobCategory";
import { FaTrash } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const AllUsers = () => {
  const [userList, setUserList] = useState(JobCategory);
  const handleDelete = (id: number) => {
    const updatedUsers = userList.filter((item) => item._id !== id);
    setUserList(updatedUsers);
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-center">
        All Users Data {userList.length}
      </h2>

      <div className="overflow-x-auto flex w-[220px] lg:w-full overflow-y-auto h-screen">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User</th>
              <th>Roll</th>
              <th> Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {userList.map((user, i) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask rounded-full w-12 h-12">
                        <img
                          src={user.cover_page}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.username}</div>
                    </div>
                  </div>
                </td>
                <td>{user.type}</td>
                <td>
                  <button className="btn btn-xs bg-green-200 text-green-800">
                    Active
                  </button>
                </td>
                <th>
                  <div className="flex items-center gap-3">
                    <BsTrash3 size={20} className="cursor-pointer" />
                    <BiEdit size={20} className="cursor-pointer" />
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

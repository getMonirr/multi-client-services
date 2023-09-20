"use client";
import { useEffect, useState } from "react";
import { JobCategory } from "@/constant/JobCategory";
import { FaTrash } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Image from "next/image";

const AllUsers = () => {
  const [userList, setUserList] = useState(JobCategory);
  const handleDelete = (id: number) => {
    const updatedUsers = userList.filter((item) => item._id !== id);
    setUserList(updatedUsers);
  };

  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-gray-500 mt-8 text-[20px] uppercase">
          Manage users access
        </p>
        <h2 className="text-3xl my-6 font-medium">Users</h2>
      </div>

      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d : any | object | null | string[], inx : number): any => (
                <tr className="pt-4">
                  <th>{inx + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img alt="" src={d?.profilePicture} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{d?.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>{d.email}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">{d.role}</button>
                  </th>
                  <td
                    onClick={() => handleDelete(d._id)}
                    className=" btn-error flex justify-center items-center mt-4 cursor-pointer"
                  >
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

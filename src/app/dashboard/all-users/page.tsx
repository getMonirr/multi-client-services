/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { JobCategory } from "@/constant/JobCategory";
import { FaTrash } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";

const AllUsers = () => {
  const [userList, setUserList] = useState(JobCategory);
  const handleDelete = (id: number) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/users/${id}`).then((data) => {
          console.log(data);
          if (data.data.deletedCount > 0) {
            Swal.fire("Deleted!", "User deleted", "success");
            // setUserList();
            console.log(data);
            // const remaining = data.filter((user : any) => user._id !== id);
          }
        });
      }
    });
  };

  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setData(data.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-medium text-center">
        All Users Data {userList.length}
      </h2>

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
              {data?.map(
                (d: any | object | null | string[], inx: number): any => (
                  <tr key={inx} className="pt-4">
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
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;

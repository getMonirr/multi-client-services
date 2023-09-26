"use client";
import { useEffect, useState } from "react";
import { JobCategory } from "@/constant/JobCategory";
import { FaTrash, FaUserEdit } from "react-icons/fa";
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

  const [id, setId] = useState("");

  const handleGetID = (_id: string) => {
    console.log(_id);
    setId(_id);
  };

  const [userRole, setUserRole] = useState("");

  console.log(userRole);

  const handleUpdateUser = () => {
    axios
      .patch(`/api/users/${id}`, {
        role: userRole,
      })
      .then((result) => {
        console.log(result);
        if (result.status == 200) {
          Swal.fire("Good job!", "User role updated!", "success");
        }
      });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-gray-500 mt-8 text-[20px] uppercase">
          Manage users access
        </p>
        <h2 className="text-3xl my-6 font-medium">Users</h2>
      </div>

      <div className="overflow-x-scroll w-[300px] md:w-[600px] lg:w-full lg:overflow-x-auto">
        <div className="">
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
                    <th className="">
                      <button className="btn btn-ghost mr-4 btn-xs">
                        {d.role}
                      </button>
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <div
                        className="inline"
                        onClick={() => handleGetID(d?._id)}
                      >
                        <button
                          className="btn btn-xs"
                          onClick={() => {
                            if (document) {
                              (
                                document.getElementById(
                                  "my_modal_5"
                                ) as HTMLFormElement
                              ).showModal();
                            }
                          }}
                        >
                          <FaUserEdit />
                        </button>
                      </div>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Update Role</h3>
                          <select
                            onChange={(e) => setUserRole(e.target.value)}
                            className="my-4 text-lg p-4 border w-full"
                          >
                            <option value="">Select</option>
                            <option value="seller">seller</option>
                            <option value="buyer">buyer</option>
                            <option value="admin">admin</option>
                          </select>

                          <div className="flex justify-between">
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                            <div className="modal-action">
                              <form method="dialog">
                                <button
                                  onClick={handleUpdateUser}
                                  className="btn"
                                >
                                  DONE
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </dialog>
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

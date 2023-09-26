"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Manage_services = () => {
  const [data, setData] = useState<string[] | any>([]);
  // const id = data?._id;

  useEffect(() => {
    axios.get("/api/services").then((res) => {
      console.log(res?.data?.data);
      setData(res?.data?.data);
    });
  }, []);

  const handleDeleteService = (id: string) => {
    axios.delete(`/api/services/${id}`).then((result) => {
      if (result.data.data.deletedCount > 0) {
        Swal.fire("Good Jobs", "Service deleted Successfully", "success");
        const newData = data.find((d: object | string | any) => d?._id !== id);
        setData(newData);
      }
    });
  };


  const handleChangeStatus = (id: string) => {
      console.log(id);
      axios.patch(`/api/services/${id}`)
      .then(result => {
        if (result.data) {
          Swal.fire("Good Jobs", "Service status updated", "success");
        }
      })
  }


  return (
    <div className="my-4">
      <h1 className="text-3xl font-bold">Manage Service</h1>
      <p className="text-gray-500 my-3">
        Deliver great service experiences fast. Empower every team, set up a
        service desk quickly and continously adapt at scale with our service
        management.
      </p>

      <p className="my-4">Total services: {data.length}</p>
      <div className="overflow-x-scroll lg:overflow-x-auto my-10 w-full max-w-[300px] lg:w-full">
        <table className="table overflow-x-scroll lg:overflow-x-auto">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Category</th>
              <th>Service title</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((d: any, i: number) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  {d?.seller?.name?.firstName + " " + d?.seller?.name?.lastName}
                </td>
                <td>{d?.category}</td>
                <td>{d?.title}</td>
                <td>
                  <select onChange={()  => handleChangeStatus(d._id)} className="">
                    <option value={d?.status}>{d?.status || "Nothing"}</option>
                    <option value="pending">Pending</option>
                    <option value="pause">Pause</option>
                    <option value="active">{d?.status ? "" : "active"}</option>
                  </select>
                </td>
                <th>
                  <button
                    onClick={() => handleDeleteService(d?._id)}
                    className="btn btn-error"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage_services;

import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Manage_services = () => {
  return (
    <div className="my-4">
      <h1 className="text-3xl font-bold">Manage Service</h1>
      <p className="text-gray-500 my-3">
        Deliver great service experiences fast. Empower every team, set up a
        service desk quickly and continously adapt at scale with our service
        management.
      </p>
      <div className="overflow-x-auto my-10 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Service title</th>
              <th>Level</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Md Monir Hossain</td>
              <td>I will build next js full responsive web applications</td>
              <td>2</td>
              <th>
                <button className="btn btn-error">
                  <FaTrashAlt />
                </button>
              </th>
            </tr>
            <tr>
              <th>2</th>
              <td>Md Shahedul Islam</td>
              <td>I will develop mern stack website</td>
              <td>2</td>
              <th>
                <button className="btn btn-error">
                  <FaTrashAlt />
                </button>
              </th>
            </tr>
            <tr>
              <th>3</th>
              <td>Mehetaj Khandaker</td>
              <td>I will develop your professional website</td>
              <td>1</td>
              <th>
                <button className="btn btn-error">
                  <FaTrashAlt />
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage_services;

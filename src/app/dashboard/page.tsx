import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { MdOutlineClose } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary drawer-button lg:hidden"
        >
          {" "}
          <MdOutlineClose></MdOutlineClose>{" "}
        </label>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Main />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gray-900 text-base-content">
          {/* Sidebar content here */}
          <Sidebar></Sidebar>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

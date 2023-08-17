import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white p-4">
      {/* Sidebar content */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className=" text-white hover:text-gray-400 block">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className=" text-white hover:text-gray-400 block">
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className=" text-white hover:text-gray-400 block">
              Users
            </a>
          </li>
          {/* Add more sidebar items */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
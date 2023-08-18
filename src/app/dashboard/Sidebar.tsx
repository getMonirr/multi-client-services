import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white p-4">
      {/* Sidebar content */}
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className=" text-white hover:text-gray-400 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="dashboard" className=" text-white hover:text-gray-400 block">
              All Jobs List
            </Link>
          </li>
          {/* Add more sidebar items */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
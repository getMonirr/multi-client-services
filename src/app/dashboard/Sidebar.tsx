import Link from 'next/link';
import { title } from 'process';
import React from 'react';

const navLinks = [
  {
    path: '/dashboard',
    title: 'Dashboard'
  },
  {
    path: '/dashboard/all-jobs',
    title: 'All Jobs'
  },
  {
    path: '/dashboard/users-list',
    title: 'All Users'
  },
  {
    path: '/',
    title: 'Home'
  },
]

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white p-4">
      {/* Sidebar content */}
      <nav>
        <ul className="space-y-2">

          {
            navLinks.map(({path, title})=> <Link href={path} key={title} className=" text-white hover:text-gray-400 block cursor-pointer">{title}</Link> )
          }
          {/* Add more sidebar items */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
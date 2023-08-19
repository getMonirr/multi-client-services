import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-lg bg-gray-800 text-white">
                        {/* Sidebar content here */}
                        <h1 className='mt-4 mb-10 text-2xl font-bold'>Career Solution</h1>
                        <Link href="/dashboard/account-setting">Account Settings</Link>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
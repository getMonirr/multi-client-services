import React from 'react';
import { Image } from 'next/dist/client/image-component';

const page = () => {
    return (
        <div className='my-6'>
            <h1 className='text-3xl font-bold'>Manage My Orders</h1>
            <p className='text-gray-500 w-1/2 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio, dignissimos accusantium dolor magni excepturi quia consequuntur cumque tenetur porro, veritatis, provident explicabo delectus quis repellat officiis. Ex, quis architecto?</p>
            {/* table with visual elements */}


            <div>

                <h1 className='text-lg font-bold my-4'>All orders in queue</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Buyer</th>
                                <th>Service Category</th>
                                <th>Due On</th>
                                <th>Total Payment</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    1
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image className='' width={10} height={10} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww&w=1000&q=80" alt='Buyer Image'/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">From United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>
                                        Front end development
                                    </p>
                                </td>
                                <td>20 August 2023</td>
                                <td>$ 200</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Pending</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;
import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React from 'react';

const Seller_description = () => {
    return (
        <div className="my-10">
            <h1 className='text-2xl font-bold'>Description</h1>
            <textarea name="" id="" className='w-full border p-4 h-60 my-3' placeholder='Write about your service ...'></textarea>
            <SimpleBtn>
                <input type="submit" value="Save & Continue" />
            </SimpleBtn>
        </div>
    );
};

export default Seller_description;
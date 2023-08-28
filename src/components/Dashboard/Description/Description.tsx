import SimpleBtn from '@/components/shared/btn/SimpleBtn';
import React from 'react';

const Description = () => {
    return (
        <div>
            <form className="mb-6 w-[1000px]">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description / Bio</label>
                <textarea maxLength={1200} className="bg-gray-50 border h-[250px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hey, this is my rahim, so I have to say something about myself. Sometimes it is hard to introduce yourself because you know yourself so well that you do not know where to start with. Let me give a try to see what kind of image you have about me through my self-description. I hope that my impression about myself and your impression about me are not so different. Here it goes.

I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiment when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I like the beautiful west lake in Hangzh" required />
            <SimpleBtn className='my-5'>
                <input className='' type="submit" value="Update Bio / Description" />
            </SimpleBtn>
            </form>

        </div>
    );
};

export default Description;
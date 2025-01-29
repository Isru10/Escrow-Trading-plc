import React from 'react';
import {
  motion,
} from "framer-motion";

const Analytics = () => {
  return (
    //  <motion.h1
    //     initial={{ y: 48, opacity: 0 }}
    //     whileInView={{ y: 0, opacity: 1 }}
    //     transition={{ ease: "easeInOut", duration: 0.75 }}
    //     className="mb-20 text-4xl font-black uppercase text-zinc-50"
    //   >
    //     Launch Schedule
    //   </motion.h1>
    <div
    // bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1587365403481-1120a2e0287f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHxlbnwwfHwwfHx8MA%3D%3D")]
     className='w-full bg-black text-gray-300  py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* <img className='hidden w-[500px] mx-auto my-4' width={44} height={44} src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmQlMjBoZWxwfGVufDB8fDB8fHww" alt='/' /> */}
        <div className='flex flex-col justify-center'>
          {/* <p className='text-[#00df9a] font-bold '></p> */}
          <motion.h1 
           initial={{ y: 48, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ ease: "easeInOut", duration: 0.75 }}
          className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>We need your help</motion.h1>
          <p>
            But you can contribute by signing in as a moderator?
          </p>  
          <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
import React from 'react'
import hybrid from '../assets/hybrid.jpg'
const Hero = () => {
  return (
    <div className="">
 <div className='flex justify-between '>
        
        <div className="lg:w-1/2 flex justify-center items-center lg:flex-col ">

                <h3 className='text-6xl font-serif lg:text-left mb-6'>Escrow Trading</h3>
                <div className="m-4">
                <span className=''>Hybrid taking you abroad</span>
                </div>
                
        </div>
        
        <div className="lg:w-1/2">
            <img src={hybrid} alt=""  className=' rounded-lg'/>
        </div>

        

    </div>
    </div>
   
  )
}

export default Hero
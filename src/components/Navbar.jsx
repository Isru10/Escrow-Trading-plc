import { FaBars, FaHeart, FaShoppingCart, FaTimes, FaUser } from 'react-icons/fa'
import Escrow from '../assets/Escrow.png'
import { useEffect, useState } from 'react'
const Navbar = () => {
  const navLinks=[
    {title:'Home',url:'/'},
    {title:'About',url:'/about'},
    {title:'Services',url:'/servcies'},
    {title:'Contact',url:'/contact'},
  ]
  const iconList = [
    {icon:<FaUser/>},
    {icon:<FaHeart/>},
    {icon:<FaShoppingCart/>},
  ]
  const bgColor='bg-gray-800';
  const modalColor='bg-gray-900'


  // st-2
  const [isMobile,setIsMobile]=useState(window.innerWidth<769);
  const [showModal,setShowModal]=useState(false);
  useEffect(()=>{
    const handleResize=()=>{{
      setIsMobile(window.innerWidth<769)
    }}
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    };
  },[])
  const toggleModal =()=>{
    setShowModal(!showModal);
  };
  const handleBarsIconClick=()=>{
    toggleModal();
  }
  return (
    // <nav className='flex justify-between items-center bg-slate-600 '>
    //     <div className="p-2">
    //         <img src={Escrow} alt="" width={45} height={45} className='rounded hover:p-1 hover:rounded-full' />
    //     </div>

    //     <div className="gap-8 text-1xl p-1 flex justify-between  ">
    //             <a href="/" className='hover:bg-slate-400 hover:outline-double hover:rounded-full hover:p-1' > Home</a>
    //             <a href="/" className='hover:bg-slate-400 hover:outline-double hover:rounded-full hover:p-1'> About</a>
    //             <a href="/" className='hover:bg-slate-400 hover:outline-double hover:rounded-full hover:p-1'> Services</a>
    //             <a href="/" className='hover:bg-slate-400 hover:outline-double hover:rounded-full hover:p-1'> Contact</a>
    //     </div>

    // </nav>

    <> 
    {!isMobile ? (
        <nav className={` ${bgColor}`}>
          <div className="flex justify-between mx-auto items-center py-4 px-24">
            <div className="text-white font-bold text-xl">Logo</div>
            <ul className='flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer'>
              {navLinks.map((link,index)=>(
                <li key={index} className='text-white text-sm'>{link.title}</li>
              ))}
            </ul>

            <ul className='flex text-white gap-6 items-center cursor-pointer'>
              {iconList.map((item,index)=>(
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ):(
        // nav for mobile 
        <nav className={`${bgColor} py-4 px-4`}>
          <div className="mx-auto flex items-center justify-between">
            <div className="text-white font-bold text-xl">Logo</div>
            <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
            {iconList.map((item,index)=>(
                <div key={index} onClick={index===iconList.length-1?handleBarsIconClick:null}>{item.icon}</div>
              ))}
              <FaBars onClick={handleBarsIconClick} className='text-white cursor-pointer'/>
            </div>
          </div>

          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center">
              <div className={`absolute inset-0 ${modalColor}`}/>
              <FaTimes className='absolute top-6 right-4 text-white cursor-pointer' onClick={toggleModal} style={{fontSize:'16px'}} />
              <div className="relative bg-gray-900 w-full"> 
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                {navLinks.map((link,index)=>(
                <span key={index} className='text-white cursor-pointer font-light text-2xl'>{link.title}</span>
              ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      )
    }
    
    </>

    
  );
}

export default Navbar

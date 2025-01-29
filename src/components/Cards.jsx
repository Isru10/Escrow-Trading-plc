import React from 'react';
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-gray-300 text-black'>
        <h3 className=' font-bold text-2xl py-5 mb-16 mt-0 flex justify-center align-center text-center'>  Try out our plans?  </h3>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg- rounded-lg' src="https://images.unsplash.com/photo-1619732426274-4c7a677cd6af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvbnplfGVufDB8fDB8fHww" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Soon To Come</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent rounded-lg' src="https://media.istockphoto.com/id/1934303400/photo/diamond-on-white-background-with-high-quality.webp?a=1&b=1&s=612x612&w=0&k=20&c=dyPn3atO2QbujA_P4pV8TPmzMqjUjcIT8ep-rHHturY=" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Sonic Conributor</h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white rounded-lg' src="https://images.unsplash.com/photo-1498262257252-c282316270bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWV0YWx8ZW58MHx8MHx8fDA%3D" alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Helper </h2>
              <p className='text-center text-4xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;
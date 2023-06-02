import React from 'react'

const Profile = () => {
  const covers = ["https://img.wattpad.com/cover/293101183-512-k203888.jpg","https://img.wattpad.com/cover/173410667-512-k59434.jpg","https://img.wattpad.com/cover/319257073-512-k874323.jpg",1,2]   
 
  return (
   <div className='h-auto min-h-screen w-full flex flex-col bg-[#424242]'>
      <nav className={'w-full h-[3.4rem] py-2 px-10 bg-[#424242] sticky z-40 top-0 border-b-2 border-b-[#FF9125] shadow-[0px_-1px_10px_0px] '}>
      </nav> 
      <div className='h-[30vh] flex flex-col bg-white w-full'> 
        <div className='flex justify-evenly bg-green-500 h-full w-full'>
          <div className='bg-red-600 w-[34vh]'>

          </div>
          <div className='flex bg-blue-500 h-full w-full'>
          
          </div>
        </div>
        <div className=''>

        </div>
      </div>
      <div className='flex flex-col h-auto w-full bg-green-500'>
        <div className='w-full flex h-10 bg-yellow-400'>
          <div className='w-[11%] h-full bg-gray-600 border border-white'></div>
          <div className='w-[11%] h-full bg-gray-600 border border-white'></div>
          <div className='w-[11%] h-full bg-gray-600 border border-white'></div>
        </div>
        <div className='w-full h-auto flex p-6 gap-10 justify-start'>
          <div className='flex flex-col h-auto w-[10%] gap-1 text-left [&_h4]:font-semibold [&_h4]:text-[18px]'>
            <h4>Nama</h4>
            <h4>Username</h4>
            <h4>Email</h4>
            <h4>Alamat</h4>
          </div>
          <div className='flex flex-col h-auto w-[70%] text-left gap-1 [&_h4]:text-[18px]'>
            <h4>Roihan Faiz</h4>
            <h4>Rf_faiz</h4>
            <h4>Faiz@gmail.com</h4>
            <h4>Jogjakarta, bantul, Kretek</h4>
          </div>
        </div>
        {/* <div className='w-full h-auto flex p-6 gap-10'>
          <div className='w-48 bg-[#ffffff60] overflow-hidden flex justify-center items-center flex-col'>
            <img src="https://img.wattpad.com/cover/293101183-512-k203888.jpg" alt="cover" />
          </div>
          <div className='min-h-full w-40 flex justify-center items-center flex-col'>
            <div className='bg-[#ffffff60] rounded-2xl h-36 w-[90%] flex justify-center items-center '>
              New Writing +
            </div>
          </div>
        </div> */}
        {/* <div className='w-full h-auto flex px-6 py-4 gap-10'>
            <div className='flex flex-col w-full h-auto'>
              <div className='w-full h-auto flex flex-col text-left'>
                <h1 className='font-semibold'>My List</h1>
                <hr className='py-1'/>
                <div className='flex flex-[1] gap-10'>
                  <div className='w-[13%] bg-black' >
                    <img src="https://img.wattpad.com/cover/293101183-512-k203888.jpg" alt="cover" className='object-contain'/>
                  </div>
                  <div className='w-[13%] bg-black' >
                    <img src="https://img.wattpad.com/cover/293101183-512-k203888.jpg" alt="cover" className='object-contain'/>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      <div className='w-full min-h-[15vh]'>
         
      </div>
   </div>
  )
}

export default Profile
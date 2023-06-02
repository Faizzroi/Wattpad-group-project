import React, { useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Read = () => {
  const [Comments, setComments] = useState(false)
  const move = useLocation()
  


  return (
    <div className='w-full h-screen bg-zinc-700 overflow-y-auto overflow-x-clip'>
      <div className='sticky z-50 top-0 w-full h-0 overflow-y-visible'>
        <div className={`w-full h-12 bg-[#00000070] flex items-center justify-between`}>
          <div className=' bg-green-400 w-20 h-full '>
              <NavLink className='px-3 flex items-center h-full' to={"/"}>Kembali
              </NavLink>
          </div>
          <div className=''>Judul</div>
          <div className='bg-green-400 w-20 h-full'>
              <div className='px-3 flex items-center justify-end h-full bg-red-400'>Cari</div>
          </div>
        </div>
      </div>
      <div className='h-[160vh] aspect-[620/877] bg-white m-auto'></div>
      <div className='sticky z-50 bottom-0 w-full h-0 overflow-y-visible'>
        <div className='justify-between relative -translate-y-full bottom-0 flex w-full h-12 bg-[#00000070] overflow-y-visible'>
          <div className='w-[20%] bg-green-400'>
          </div>
          <div className='w-[33.7%] gap-3 flex py-2 justify-center h-full bg-green-600'>
            <div className='mt-0.5 w-[13%] h-full'>Kurang</div>
            <div className='h-full w-[3vw] bg-white'></div>
            <div className='mt-0.5 w-[13%] h-full'>Tambah</div>
          </div>
          <div className='w-[20%] gap-0 flex justify-end h-full bg-green-500'>
            <div className='h-full w-[40%] bg-purple-950'>Vote</div>
            <button className='h-full w-[40%] bg-yellow-500' onClick={()=>setComments(!Comments)}>Comment</button>
            <div className='h-full min-w-[18%]'>Share</div>
          </div>
          <div className={`absolute bottom-0 right-0 -translate-y-12 -translate-x-1 ${Comments == false?"h-0" : "h-[36rem]"} overflow-hidden w-[26rem] bg-pink-600 after:bg-black after:absolute after:`}>
            <div className='h-full w-full flex flex-col'>
              <div className='w-full h-[5%] text-left bg-white border-b border-b-[#169C89] px-2 pt-0.5'>Comments</div>
              <div className='bg-orange-400 flex flex-wrap flex-col p-1 w-full h-full gap-1'>
                <div className='w-full h-max bg-gray-600 rounded-md'>
                  <div className='p-1 flex items-center w-full h-auto'>
                    <div className='h-10 bg-white w-10 rounded-full'></div>
                    <div className='px-2'>Asep Karasep</div>
                  </div>
                  <div className='w-auto h-auto min-h-[4rem] m-1 rounded-md bg-white'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Read
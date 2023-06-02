import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  const cover = ["https://img.wattpad.com/cover/293101183-512-k203888.jpg","https://img.wattpad.com/cover/173410667-512-k59434.jpg","https://img.wattpad.com/cover/319257073-512-k874323.jpg"]

  return (
    <div className='w-full h-full flex  '>
      <div  className='h-full w-[30%] bg-[#424242] p-5 min-w-[368px] '>
        <form className='flex flex-col h-full bg-[#424242] shado rounded-2xl' htmlFor="">
          <label className='h-[25%] mt-4 flex items-center justify-center '>
            <div className='text-[1.5rem] top-2'>Login Wochonen</div>
          </label>
          <div className='h-[40%] w-full flex flex-col items-center justify-between '>
            <div className='w-full flex flex-col gap-12 items-center h-[58%] justify-between py-10 '>
              <div className='w-full flex flex-col items-center gap-5'>
                <input type="text" className='h-14 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Email. . .'/>
                <input type="text" className='h-14 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Password. . .'/>
              </div>
              <div className='w-full'>
                <button className=' p-4 rounded-xl w-[90%] bg-[#169C89] text-white'>Login</button>
              </div>
            </div>
          </div>
          {/* <div className='h-[auto] w-full flex flex-col items-center justify-between '>
            <div className='w-full flex flex-col gap-12 items-center h-[58%] justify-between py-3 '>
              <div className='w-full flex flex-col items-center gap-5'>
                <input type="text" className='h-14 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Email. . .'/>
                <input type="text" className='h-14 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Password. . .'/>
                <input type="text" className='h-14 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Password. . .'/>
                <input type="text" className='h-14 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Password. . .'/>
              </div>
              <div className='w-full'>
                <button className=' p-3 rounded-xl w-[90%] bg-black text-white'>Login</button>
              </div>
            </div>
          </div> */}
          <div className='py-1'>
            <hr className='inline-block w-[40%] -translate-y-[500%]' />
            <div className='inline px-2'>or</div>
            <hr className='inline-block w-[40%] -translate-y-[500%]' />
          </div>
          <div className='h-[20%] flex flex-col justify-center items-center gap-3 '>
            <div className={`[&_button]:px-9 [&_button]:rounded-lg [&_button]:py-3 [&_button]:bg-white flex justify-center items-center gap-3 `}>
              <button>G</button>
              <button>F</button>
              <button>T</button>
            </div>
            <div className='text-slate-200 text-[14px]'>Don't Have Account? <NavLink className={'text-violet-700'}>Sign Up</NavLink></div>
          </div>
        </form>
      </div>
      <div className='h-full w-[70%]'>
        <div className='h-[46%] w-full flex flex-col text-left pl-5 mt-4 '>
          <div className='text-[1.2rem] font-medium'>Sedang Populer</div>
          {/* <hr className='mb-2 right-0 w-[97%]' /> */ }
          <div className='h-[89%] flex gap-14 overflow-x-auto bg-slate-300 rounded-2xl w-[98%] p-3'>
              {cover.map((x)=>{
                return (
                <div className='h-full min-w-max  flex items-center'>
                  <img src={x} alt="cover" className='h-full object-contain' />
                </div>
                )
              })}
          </div>
        </div>
        <div className='h-[46%] w-full flex flex-col text-left pl-5 mt-4 '>
          <h1 className='text-[1.2rem] font-medium'>Penilaian terbaik</h1>
          {/* <hr className='mb-2 right-0 w-[97%]' /> */ }
          <div className='h-[89%] flex items-center gap-14 overflow-x-auto bg-slate-300 rounded-2xl w-[98%] p-3'>
              {cover.map((x)=>{
                return (
                <div className='h-[98%] min-w-max flex items-center'>
                  <img src={x} alt="cover" className='h-full object-contain' />
                </div>
                )
              })}
          </div>
        </div>
        <div>
           
        </div>
      </div>
    </div>
  )
}

export default Login
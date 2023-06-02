import React from 'react'

const Register = () => {
  return (
   <div  className='h-full w-[30%] p-5 min-w-[368px] bg-teal-300'>
      <form className='flex flex-col h-full bg-teal-800' htmlFor="">
      <label className='h-[30%] flex items-center justify-center '>
         <div>Wochonen</div>
      </label>
      <div className='h-[40%] w-full flex flex-col items-center justify-between '>
         <div className='w-full flex flex-col gap-12 items-center h-[58%] justify-between py-10 '>
            <div className='w-full flex flex-col items-center gap-5'>
            <input type="text" className='h-12 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Email. . .'/>
            <input type="text" className='h-12 w-[90%] rounded-xl px-4 focus' placeholder='Masukkan Password. . .'/>
            </div>
            <div className='w-full'>
            <button className=' p-3 rounded-xl w-[90%] bg-black text-white'>Login</button>
            </div>
         </div>
      </div>
      <div className='py-2'>
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
         <div>Don't Have Account? <NavLink>Sign Up</NavLink></div>
      </div>
      </form>
   </div>
  )
}

export default Register
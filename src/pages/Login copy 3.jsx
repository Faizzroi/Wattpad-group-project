import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [register, setRegister] = useState(false)
  const [animate, setAnimate] = useState(false)
  const loct = useLocation().pathname
  const change = useNavigate()

  const changeHandler = () => {
    setAnimate(!animate)
    change("/register")
    setTimeout(() => {
      setRegister(!register)
    }, 2000);
  }

  const mapper = (x) => 
  {
    return x()
  }
  
  const cover = ["https://img.wattpad.com/cover/293101183-512-k203888.jpg","https://img.wattpad.com/cover/173410667-512-k59434.jpg","https://img.wattpad.com/cover/319257073-512-k874323.jpg"]

  return (
    <div className='w-full h-full flex '>
      <div  className='h-full w-[29%] bg-[#424242] min-w-[368px] flex flex-col gap-4'>
      {
      mapper(()=>{
      if (register == false) {
        return (
          <>
          <form className='flex flex-col justify-between h-[62%] bg-[#424242] shado rounded-2xl' htmlFor="">
          <label className='h-[35%] mb-7 flex items-end justify-center '>
            <div className='text-[1.3rem] font-bold text-white top-2'>Login to Wochonen</div>
          </label>
          <div className='w-full flex flex-col gap-11 items-end h-auto py-4 '>
            <div className='w-full flex flex-col items-center gap-7'>
              <div className='w-[89%] flex'>
                <input type="text" className='h-14 w-full rounded-r-xl px-4 focus' placeholder='Username'/>
              </div>
              <input type="text" className='h-14 w-[89%] rounded-xl px-4 focus' placeholder='Password'/>
            </div>
            <div className='w-full flex flex-col items-center gap-2'>
            <h1 className='text-white'>Forget password?</h1>
            <button className=' p-3.5 rounded-xl w-[89%] bg-[#169C89] text-white'>Login</button>
            </div>
            </div>
        </form>
        <div className='py-1'>
          <hr className='inline-block w-[40%] -translate-y-[500%]' />
          <div className='inline px-2 text-white'>or</div>
          <hr className='inline-block w-[40%] -translate-y-[500%]' />
        </div>
        <div className='h-[15%] flex flex-col justify-center items-center gap-9 '>
          <div className={`[&_button]:px-9 [&_button]:rounded-lg [&_button]:py-1.5 [&_button]:bg-white flex justify-center items-center gap-3 `}>
            <button>G</button>
            <button>F</button>
            <button>T</button>
          </div>
          <div className='text-slate-200 text-[14px]'>Don't Have Account? <NavLink className={'text-violet-700'} onClick={changeHandler}>Sign Up</NavLink></div>
        </div>
          </>
          )
        } else {

            return(
              <div  className='h-full w-[29%] bg-[#424242] min-w-[368px] flex flex-col gap-4'>
        <form className='flex flex-col justify-between h-[70%] bg-[#424242] rounded-2xl' htmlFor="">
          <label className='h-[35%] mb-14 flex items-end justify-center '>
            <div className='text-[1.6rem] text-[#169C89] top-2'>Create Account!</div>
          </label>
          <div className='w-full flex flex-col gap-10 items-end h-auto'>
            <div className='w-full flex flex-col items-center gap-4'>
              <div className='w-[89%] flex'>
                <input type="text" className='h-14 w-full rounded-xl px-4 focus' placeholder='Username'/>
              </div>
              <div className='w-[89%] flex'>
                <input type="text" className='h-14 w-full rounded-xl px-4 focus' placeholder='Username'/>
              </div>
              <div className='w-[89%] flex'>
                <input type="text" className='h-14 w-full rounded-xl px-4 focus' placeholder='Username'/>
              </div>
              <input type="text" className='h-14 w-[89%] rounded-xl px-4 focus' placeholder='Password'/>
            </div>
            <div className='w-full flex flex-col items-center gap-2'>
              <button className=' p-3.5 rounded-xl w-[89%] bg-[#169C89] text-white'>Login</button>
            </div>
          </div>
        </form>
        <div className='py-1'>
          <hr className='inline-block w-[40%] -translate-y-[500%]' />
          <div className='inline px-2 text-white'>or</div>
          <hr className='inline-block w-[40%] -translate-y-[500%]' />
        </div>
        <div className='h-[15%] flex flex-col justify-center items-center gap-9 '>
          <div className={`[&_button]:px-9 [&_button]:rounded-lg [&_button]:py-1.5 [&_button]:bg-white flex justify-center items-center gap-3 `}>
            <button>G</button>
            <button>F</button>
            <button>T</button>
          </div>
          <div className='text-slate-200 text-[14px]'>Already Have an Account? <NavLink className={'text-violet-700'} to={"/login"}>Log in</NavLink></div>
        </div>
      </div>
          )
        }
        })
      }
      </div>
      <div className='h-full w-[71%] flex flex-col'>
        <div className='h-[50vh] w-full flex flex-col text-left items-center'>
          <div className='w-full'>
            <h1 className='text-[1.2rem] ml-6 font-medium'>Sedang Populer</h1>
          </div>
          {/* <hr className='mb-2 right-0 w-[97%]' /> */ }
          <div className='p-3 bg-[#00000020] flex gap-14 rounded-2xl h-[89%] w-[98%]'>
                {cover.map((x)=>{
                  return (
                  <div className='h-full min-w-max flex items-center'>
                    <img src={x} alt="cover" className='h-full object-contain block' />
                  </div>
                  )
                })}
          </div>
        {
          
        }
        </div>
        <div className='h-[50vh] w-full flex flex-col text-left items-center'>
          <div className='w-full'>
            <h1 className='text-[1.2rem] ml-6 font-medium'>Penilaian Terbaik</h1>
          </div>
          {/* <hr className='mb-2 right-0 w-[97%]' /> */ }
          <div className='p-3 bg-[#00000020] flex gap-14 rounded-2xl h-[89%] w-[98%]'>
                {cover.map((x)=>{
                  return (
                  <div className='h-full min-w-max flex items-center'>
                    <img src={x} alt="cover" className='h-full object-contain block' />
                  </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
import React, { useRef, useState } from 'react'
import { NavLink, redirect, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [register, setRegister] = useState(false)
  const loct = useLocation().pathname
  const change = useNavigate()

  const changeHandler = () => {
    change("/register")
    setTimeout(() => {
      setRegister(!register)
    }, 600);
  }

  //    useEffect(() => 
//   {
//     const getData = () =>
//     {
//       let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: '/index',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`
//         },
//       };
      
//       instance
//       .request(config)
//       .then((response) => 
//       {
//         setLoading(false)
//         setData(response.data.data)
//         setError(false)
//         return response.data.data
//       })
//       .then((result)=>{
//         setFiltered(result)
//       })
//       .catch((error) => 
//       {
//         setLoading(false)
//         setError(true)
//         console.log(error);
//       });
//     }
//     getData()
//   }, [])

//    useEffect(() => 
//   {
//     const getData = () =>
//     {
//       let config = {
//         method: 'get',
//         maxBodyLength: Infinity,
//         url: '/index',
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`
//         },
//       };
      
//       instance
//       .request(config)
//       .then((response) => 
//       {
//         setLoading(false)
//         setData(response.data.data)
//         setError(false)
//         return response.data.data
//       })
//       .then((result)=>{
//         setFiltered(result)
//       })
//       .catch((error) => 
//       {
//         setLoading(false)
//         setError(true)
//         console.log(error);
//       });
//     }
//     getData()
//   }, [])

  const mapper = (x) => 
  {
    return x()
  }
  
  const cover = ["https://img.wattpad.com/cover/293101183-512-k203888.jpg","https://img.wattpad.com/cover/173410667-512-k59434.jpg","https://img.wattpad.com/cover/319257073-512-k874323.jpg"]

  return (
    <div className='w-full h-full flex '>
      <div className='h-auto w-[29%] min-w-[368px] overflow-y-hidden bg-[#424242]'>
        <div className={`h-[200vh] w-full ${loct == "/register" ? "-translate-y-[50%]" : null} overflow-visible duration-500 ease-out`}>
          <div  className={`h-screen w-full bg-[#424242] flex flex-col gap-4 ${loct == "/register" && "opacity-0"} duration-300`}>
            <form className='flex flex-col justify-between h-[62%] bg-[#424242] shado rounded-2xl' htmlFor="">
              <label className='h-[35%] mb-12 flex items-end justify-center '>
                <div className='text-[1.5rem] font-bold text-white'>Login to Wochonen</div>
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
              <div className='text-slate-200 text-[14px]'>Don't Have Account?<b className='text-violet-900'><NavLink to={"/register"}>Sign Up</NavLink></b> </div>
            </div>
          </div>
          <div  className={`h-screen w-full bg-[#424242] flex flex-col gap-4 ${loct == "/login" && "opacity-0"} duration-300`}>
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
              <div className='text-slate-200 text-[14px]'>Already Have an Account?<b className='text-violet-900'><NavLink to={"/login"}>Sign Up</NavLink></b></div>
            </div>
          </div>
        </div>
      </div>
      {
      mapper(()=>{
      if (register == false) {
          } else {

        }
        })
      }
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
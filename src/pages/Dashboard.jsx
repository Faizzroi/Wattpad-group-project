import React, { useEffect, useRef, useState } from 'react'
import instance from '../api/api'

const Dashboard = () => {
   const covers = ["https://img.wattpad.com/cover/293101183-512-k203888.jpg","https://img.wattpad.com/cover/173410667-512-k59434.jpg","https://img.wattpad.com/cover/319257073-512-k874323.jpg",1,2]   
   // const usingRef = useRef(null)
   const [books, setBooks] = useState([])
   const [navState, setNavState] = useState(false)
   const [rendered, setRendered] = useState(false)

   const option = {
      root: document.getElementById("main-parent"),
      rootMargin: '0px 0px 70px 0px',
      threshold: 0.9
   }
 
   const IntersectionFunc = (elements, extra) => {
      elements.forEach((element) => {
         console.log(element);
         if (element.isIntersecting && (element.boundingClientRect.y > -1)) {
            setNavState(false)
         } else if (!element.isIntersecting && (element.boundingClientRect.y > -1)) {
            setNavState(false)
         } else if (element.isIntersecting && (element.boundingClientRect.y > -13)) {
            setNavState(false)
         } 
         else {
            setNavState(true)
         }
      });
   }

   const observer = new IntersectionObserver(IntersectionFunc, option)
   const target = document.getElementById("genre")

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

   useEffect(() => {
      setRendered(true)
   }, [])
   
   useEffect(() => {
     console.log(target);
     if (target != null) {
      return observer.observe(target)
     }
   }, [rendered])
 
  return (
   <div className='h-max w-full flex flex-col bg-[#424242]'>
      <nav className={'w-full h-[3.4rem] py-2 px-10 bg-[#424242] sticky z-40 top-0 border-b-2 border-b-[#FF9125] shadow-[0px_1px_10px_0px] '}>
         <input className='w-[26%] z-10 h-9 rounded-3xl px-3 float-right bg-[#ffffff10] focus-visible:outline-neutral-600 focus-visible:outline-0' type="text" placeholder='Cari '/>
      </nav> 
      <div className='w-full sticky flex justify-center z-30 top-[54px] h-0 overflow-y-visible'>
         <div className={`w-[96%] flex py-2 relative gapx-6 justify-evenly items-center flex-wrap h-40 px-2 pt-10 bg-[#383838] rounded-b-3xl -translate-y-[120%] duration-700 ${(navState) && "-translate-y-[16%]"}` }>
            {[...Array(12)].map((x)=><button className='w-[16%] h-12 bg-[#FF9125] rounded-xl hover:text-white font-bold'>Horror</button>)}
            <div className='absolute bottom-0 right-12 bg-[#383838] border-2 border-[#FF9125] border-t-0 h-8 rounded-b-2xl w-[3.25rem] z-10 translate-y-full'>
  
            </div>
         </div>
      </div>
      <div className='w-full h-[auto] px-36 flex flex-col items-center gap-7'>
         <div className='w-full h-auto text-left flex flex-col mb-7' id='top-picks'>
            <h1 className='text-[1.2rem] text-white  px-2.5 py-0.5 w-[10vw] rounded-2xl min-w-max'> <span className='text-[1.5rem]'>T</span>op picks</h1>
            <div className='w-full h-auto flex-wrap py-2 flex gap-10 justify-around '>
            {
               covers.map((x)=>
               {
                  return (
                     <div className='h-[43vh] hover:scale-110 duration-300 w-[auto] aspect-[476/745]'>
                        <img className='h-full ' src={x} alt="cover" />
                     </div>
                  )
               })
            }
            </div>
         </div>
         <div className='w-[98.5%]'>
            <hr className='w-full h-[2.5px] rounded-3xl bg-black border-black'/>
         </div>
         <div className='w-full flex py-2 gapx-6 justify-evenly items-center flex-wrap h-32 bg-[#383838] rounded-xl ' id="genre">
            {[...Array(12)].map((x)=><button className='w-[16%] h-12 bg-[#FF9125] rounded-xl hover:text-white font-bold'>Horror</button>)}
         </div>
         <div className='h-[auto] w-full flex flex-wrap gap-14 items-center justify-between place-items-center p-3 py-1 pb-6'>
            {[...Array(16)].map((x)=>
            {  return (
               <div className='h-[20rem] aspect-[476/745] bg-amber-300'>

               </div>)
            }
               )}
         </div>
      </div>
      <div className='w-full min-h-[15vh]'>
         
      </div>
   </div>
  )
}

export default Dashboard
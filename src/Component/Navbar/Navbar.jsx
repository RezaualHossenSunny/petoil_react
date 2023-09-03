import { useState } from "react"

import {FaBars} from 'react-icons/fa'


export const Navbar = () => {
   const [show,setShow] = useState(false);
   const handleClick = ()=>{
    setShow (!show)
   }
  return (
    <>
    <section  className="bg-primary md:py-[35px]">
      {/* logo start */}
    <div className="max-w-continer mx-auto ">
        <div className="flex justify-between">
        <div className="w-1/4 mt-4 md:mt-4 flex ">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="41" viewBox="0 0 36 41" fill="none">
                <path d="M1.31817 26.7647C-3.34564 18.9885 5.42342 5.58824 11.1708 1C16.4051 5.23529 25.3341 18.2952 20.7159 26.7647C17.6367 32.4118 4.70501 32.4118 1.31817 26.7647Z" fill="white"/>
                <path d="M8.67767 34.6353C2.74191 24.7854 13.9025 7.81176 21.2174 2C27.8792 7.36471 39.2434 23.9073 33.3657 34.6353C29.4467 41.7882 12.9882 41.7882 8.67767 34.6353Z" fill="white" stroke="#F40404" stroke-width="2"/>
              </svg>
              
                <svg xmlns="http://www.w3.org/2000/svg" width="165" height="27" viewBox="0 0 165 27" fill="none">
                    <path d="M12.184 0.799998C14.512 0.799998 16.54 1.184 18.268 1.952C19.996 2.72 21.328 3.824 22.264 5.264C23.2 6.704 23.668 8.384 23.668 10.304C23.668 12.224 23.2 13.904 22.264 15.344C21.328 16.784 19.996 17.888 18.268 18.656C16.54 19.424 14.512 19.808 12.184 19.808H8.548V26H0.0520001V0.799998H12.184ZM11.644 13.256C12.796 13.256 13.66 13.004 14.236 12.5C14.812 11.972 15.1 11.24 15.1 10.304C15.1 9.368 14.812 8.648 14.236 8.144C13.66 7.616 12.796 7.352 11.644 7.352H8.548V13.256H11.644ZM47.4063 19.592V26H26.4543V0.799998H46.9383V7.208H34.8063V10.16H45.4623V16.28H34.8063V19.592H47.4063ZM56.149 7.388H48.769V0.799998H72.025V7.388H64.645V26H56.149V7.388ZM85.0317 19.664H82.7277V26H74.2317V0.799998H86.3637C88.6917 0.799998 90.7197 1.184 92.4477 1.952C94.1757 2.72 95.5077 3.824 96.4437 5.264C97.3797 6.704 97.8477 8.384 97.8477 10.304C97.8477 12.104 97.4397 13.676 96.6237 15.02C95.8077 16.364 94.6317 17.432 93.0957 18.224L98.3877 26H89.3157L85.0317 19.664ZM89.2797 10.304C89.2797 9.368 88.9917 8.648 88.4157 8.144C87.8397 7.616 86.9757 7.352 85.8237 7.352H82.7277V13.256H85.8237C86.9757 13.256 87.8397 13.004 88.4157 12.5C88.9917 11.972 89.2797 11.24 89.2797 10.304ZM114.268 26.576C111.556 26.576 109.12 26.012 106.96 24.884C104.8 23.756 103.108 22.196 101.884 20.204C100.66 18.188 100.048 15.92 100.048 13.4C100.048 10.88 100.66 8.624 101.884 6.632C103.108 4.616 104.8 3.044 106.96 1.916C109.12 0.787999 111.556 0.223999 114.268 0.223999C116.98 0.223999 119.416 0.787999 121.576 1.916C123.736 3.044 125.428 4.616 126.652 6.632C127.876 8.624 128.488 10.88 128.488 13.4C128.488 15.92 127.876 18.188 126.652 20.204C125.428 22.196 123.736 23.756 121.576 24.884C119.416 26.012 116.98 26.576 114.268 26.576ZM114.268 19.7C115.324 19.7 116.272 19.448 117.112 18.944C117.976 18.416 118.66 17.684 119.164 16.748C119.668 15.788 119.92 14.672 119.92 13.4C119.92 12.128 119.668 11.024 119.164 10.088C118.66 9.128 117.976 8.396 117.112 7.892C116.272 7.364 115.324 7.1 114.268 7.1C113.212 7.1 112.252 7.364 111.388 7.892C110.548 8.396 109.876 9.128 109.372 10.088C108.868 11.024 108.616 12.128 108.616 13.4C108.616 14.672 108.868 15.788 109.372 16.748C109.876 17.684 110.548 18.416 111.388 18.944C112.252 19.448 113.212 19.7 114.268 19.7ZM131.572 0.799998H140.068V26H131.572V0.799998ZM144.157 0.799998H152.653V19.412H164.029V26H144.157V0.799998Z" fill="white"/>
                    </svg>
             
              <div>
            
              </div>
        </div>
           {/* logo end */}


<div className="mt-4 md:mt-0">
<div onClick={handleClick} className="  md:hidden">
  {
    show == true ?  <FaBars className="bg-slate-100 w-[35px] h-[25px]"></FaBars> :  <FaBars className="bg-slate-100  w-[35px] h-[25px]"></FaBars>
  }

</div>

   {/*  navbar start */}
        <div className="md:w-3/4  md:flex justify-end mt-4  md:mt-0  ">
            <div  className= {` absolute md:static md:flex gap-10 items-center duration-300 bg-primary   ${show ? 'top 6 left-0 w-full' :'-top-44 left-0 w-full'}`}>
                <p className=" text-base text-white lg:font-pops">Home</p>
                <p className="text-base text-white lg:font-pops">About</p>
                <p className="text-base text-white lg:font-pops">Services</p>
                <p className="text-base text-white lg:font-pops">Gallery</p>
                <p className="text-base text-white lg:font-pops">Blog</p>

                <div className="   md:w-full md:flex  md:border  border-white-500 md:px-[30px] ">
                    <p className=" text-base text-white font-pops  md: py-[14px] ">CONTACT</p>
                   </div>
               
            </div>
           
        </div>
</div>

       
    </div>
    </div>
  </section>
     </>
  )
}

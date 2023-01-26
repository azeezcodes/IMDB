import React, {useState} from 'react'
import {
   AiOutlineFire,
   AiOutlineSearch,
   AiOutlineAlignRight,
} from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';


const Nav = () => {
   const [show, setShow] = useState(false);
   return (
      <div className='flex-col'>
         <div className="bg-[#161616] px-8 h-24 flex justify-between text-white items-center">
            <Link to="/">
               <div>
                  <p className="text-2xl font-bold ">MoviesHub</p>
               </div>
            </Link>
            <div className="hidden lg:flex w-[40%] justify-evenly ">
               <Link to="/">
                  <div className="flex gap-4 items-center text-[#85db9a] hover:text-white hover:font-bold">
                     {" "}
                     <AiOutlineFire /> <p>Trending</p>{" "}
                  </div>
               </Link>
               <Link to="/searchmovie">
                  <div className="flex gap-4 items-center text-[#85db9a] hover:text-white hover:font-bold ">
                     {" "}
                     <TbMovie /> <p>Search All Movies </p>
                  </div>
               </Link>
               <Link to="/searchtitle">
                  <div className="flex gap-4 items-center text-[#85db9a] hover:text-white hover:font-bold">
                     {" "}
                     <MdOutlineOndemandVideo /> <p>Search By Title</p>
                  </div>
               </Link>
            </div>

            <div className="flex-col gap-2 lg:hidden">
               <div
                  className=" text-[#85db9a] font-bold text-[20px] relative"
                  onClick={() => setShow(!show)}
               >
                  <AiOutlineAlignRight />
               </div>
            </div>
         </div>
         <div>
            {show && (
               <div className="flex-col lg:hidden gap-2  w-[400px] ml-3">
                  <Link to="/">
                     <div className="flex gap-4 items-center text-[#85db9a] hover:text-white hover:font-bold ">
                        {" "}
                        <AiOutlineFire /> <p>Trending</p>{" "}
                     </div>
                  </Link>
                  <Link to="/searchmovie">
                     <div className="flex gap-4 items-center text-[#85db9a] hover:text-white hover:font-bold  ">
                        {" "}
                        <TbMovie /> <p>Search All Movies </p>
                     </div>
                  </Link>
                  <Link to="/searchtitle">
                     <div className="flex gap-4 items-center text-[#85db9a] hover:text-white hover:font-bold ">
                        {" "}
                        <MdOutlineOndemandVideo /> <p>Search By Title</p>
                     </div>
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}

export default Nav
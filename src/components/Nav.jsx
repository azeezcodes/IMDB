import React from 'react'
import { AiOutlineFire, AiOutlineSearch } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
     <div className="bg-[#161616] px-8 h-24 flex justify-between text-white items-center">
        <Link to="/">
           <div>
              <p className="text-2xl font-bold ">MoviesHub</p>
           </div>
        </Link>
        <div className="hidden lg:flex w-[40%] justify-evenly ">
           <Link to="/">
              <div className="flex gap-2 items-center text-[#A9A9A9] hover:text-white hover:font-bold">
                 {" "}
                 <AiOutlineFire /> <p>Trending</p>{" "}
              </div>
           </Link>
           <Link to="/searchmovie">
              <div className="flex gap-2 items-center text-[#A9A9A9] hover:text-white hover:font-bold ">
                 {" "}
                 <TbMovie /> <p>Search All Movies </p>
              </div>
           </Link>
           <Link to="/searchtitle">
              <div className="flex gap-2 items-center text-[#A9A9A9] hover:text-white hover:font-bold">
                 {" "}
                 <MdOutlineOndemandVideo /> <p>Search By Title</p>
              </div>
           </Link>
        </div>
     </div>
  );
}

export default Nav
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import ReactPaginate from "react-paginate";

const Home = () => {

    const [movies, setMovies] = useState([])

   // const API_KEY = 'k_c3g1jac0';

   useEffect(() => {
     const loaddata = async () => {
       const response = await axios({
          method: "GET",
          url: `https://imdb-api.com/en/API/MostPopularMovies/k_3bdud124`,
          headers: {
             "Content-Type": "application/json",
          },
       });
       setMovies(response.data.items);
     }

     loaddata()
   }, [])

 //react-paginate
   const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 12;
    const currentItems = movies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(movies.length / 12);


    const handlePageClick = (event) => {
       const newOffset = (event.selected * 12) % movies.length;
       setItemOffset(newOffset);
    };
   
   

    return (
       <div className="bg-[#0D0D0F] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 justify-items-center mt-[60px]">
          {currentItems.map((movie) => (
             <div
                key={movie.id}
                className="h-[398px] w-[332px] bg-[#161616] flex flex-col justify-center items-center"
             >
                <Link to={`/movie/${movie.id}`}>
                   <img
                      src={movie.image}
                      alt="a"
                      className="h-[358px] w-[312px] object-cover"
                   />
                </Link>
                <p className="font-bold text-white py-3">{movie.title}</p>
             </div>
          ))}

          <div className="mt-10 ml-[600px] flex items-center justify-center ">
             <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                breakClassName={"text-white ml-[20px] mr-[20px]"}
                previousLabel="Previous"
                containerClassName={"flex items-center w-[400px]"}
                previousClassName={
                   "bg-[#5FCF7B] text-black rounded-md px-3 py-1 h-10 hover:bg-[#85db9a]"
                }
                nextClassName={
                   "bg-[#5FCF7B] text-black rounded-md px-3 py-1 h-10 hover:bg-[#85db9a]"
                }
                pageClassName={"text-white ml-[20px] mr-[20px]"}
             />
          </div>
       </div>
    );
}

export default Home
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
   const [expression, setExpression] = useState("");
   const [movies, setMovies] = useState([]);

   const handleCLick = () => {
      const loaddata = async () => {
         const response = await axios({
            method: "GET",
            url: `https://imdb-api.com/en/API/SearchTitle/k_d4n752kc/${expression}`,
            headers: {
               "Content-Type": "application/json",
            },
         });

         setMovies(response.data.results);
      };
      loaddata();

      setExpression("");
   };

   return (
      <div>
         <div className="flex gap-3 mt-6 items-center">
            <input
               type="text"
               value={expression}
               name="expression"
               onChange={(e) => setExpression(e.target.value)}
               placeholder="search by title"
               className="bg-[#1E1E1E] ml-8 outline-none w-[300px] h-10 pl-6 text-white rounded-md border-none focus:border-blue-900 focus:outline-blue-900 placeholder:text-slate-400"
            />
            <button
               className="bg-[#5FCF7B] text-black rounded-md px-3 py-1 h-10 hover:bg-[#85db9a]"
               onClick={() => handleCLick()}
            >
               Search Title
            </button>
         </div>
         {/* result */}
         <div className="bg-[#0D0D0F] mt-7 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 justify-items-center">
            {movies.length > 0 ? (
               movies.map((movie, i) => (
                  <div
                     key={movie.id}
                     className="h-[398px] w-[332px] bg-[#161616] flex flex-col justify-center items-center"
                  >
                     <Link to={`/movie/${movie.id}`}>
                        <img
                           src={movie.image}
                           alt="a"
                           className="h-[358px] w-[312px] object-cover hover:h-[360px] "
                        />
                     </Link>
                     <p className="font-bold text-white py-3">{movie.title}</p>
                  </div>
               ))
            ) : (
               <div>
                  {" "}
                  <p className="font-bold text-white py-3">
                     Enter the title of the movie
                  </p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Search;

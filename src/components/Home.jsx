import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

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

 

    return (
       <div className="bg-[#0D0D0F] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 justify-items-center">
          {movies.map((movie) => (
             <div key={movie.id} className="h-[398px] w-[332px] bg-[#161616] flex flex-col justify-center items-center">
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
       </div>
    );
}

export default Home
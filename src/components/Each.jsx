import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Each = () => {
   const { id } = useParams();
   const [data, setData] = useState([])
   
 useEffect(() => {
    fetch(`https://imdb-api.com/en/API/Title/k_3bdud124/${id}`)
       .then((response) => {
          if (!response.ok) {
             throw new Error(
                `This is an HTTP error: The status is ${response.status}`
             );
          }
          return response.json();
       })
       .then((actualData) => {
          setData(actualData);
       })

       .catch((err) => {
          console.log(err.message);
       });
 }, []);
   console.log(data);
   

  return (
     <div>
        <div className="flex-col md:flex-row lg:flex-row gap-8">
           <div>
              <img
                 src={data.image}
                 alt="a"
                 className="w-[350px] h-[500px] rounded-md"
              />
           </div>
           <div className="flex flex-col gap-2 ">
              <p className="text-3xl font-extrabold text-white">{data.fullTitle}</p>
              <p className="text-base text-slate-400 ">{data.plot}</p>
              <p className="text-slate-400 font-bold">
                 Release Date:{data.releaseDate}
              </p>
              <button className="bg-[#5FCF7B] text-black rounded-md px-3 py-1 h-8 hover:bg-[#85db9a]">
                 Play Trailer
              </button>
           </div>
        </div>

        <div>
           <p>Cast</p>
        </div>
     </div>
  );
}

export default Each
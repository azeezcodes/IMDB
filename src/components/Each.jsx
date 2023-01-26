import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Each = () => {
   const { id } = useParams();
   const [data, setData] = useState([])
   
 useEffect(() => {
    fetch(`https://imdb-api.com/en/API/Title/k_d4n752kc/${id}`)
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
   
   console.log(data.actorList);

  return (
     <div className='mt-[60px]'>
        <div className="flex gap-6 px-20  ">
           <div>
              <img
                 src={data.image}
                 alt={data.title}
                 className="w-[350px] h-[500px] rounded-md"
              />
           </div>
           <div className="flex flex-col gap-4 pt-16 ">
              <p className="text-3xl font-extrabold text-white">
                 {data.fullTitle}
              </p>
              <p className="text-base text-slate-400 ">{data.plot}</p>
              <p className="font-light">Genre: {data.genres}</p>
              <p className="text-slate-400 font-bold">
                 Release Date:{data.releaseDate}
              </p>

              <button className="bg-[#5FCF7B] text-black rounded-md px-3 py-1 h-8 hover:bg-[#85db9a]">
                 Play Trailer
              </button>
           </div>
        </div>



        {/* <div className="mt-[60px]">
           <p>Cast</p>
           {data.actorList.map((item) => (
              <div className='flex'>
                 <div className="flex-col gap-4" key={item.id}>
                    <img
                       src={item.image}
                       alt={item.name}
                       className="h-[30px] w-[30px] rounded-full"
                    />
                    <p className="font-semibold text-white">
                       {item.name} as {item.asCharacter}
                    </p>
                 </div>
              </div>
           ))}
        </div> */}
     </div>
  );
}

export default Each
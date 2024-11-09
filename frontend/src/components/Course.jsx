import React from "react";
import Cards from './Cards';
import list from "../../public/list.json"
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-2"></div>
      <div className="mt-23 justify-items-center hover:scale-105" >
        <h2 className="text-2xl font-semibold md:text-4x1">
          We are <span className="text-pink-500"> delighted :)</span>
        </h2>
        <p className="mt-100">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat nam
          fugiat optio alias libero voluptatum animi officiis excepturi
          incidunt? Ipsum distinctio quis voluptatibus ad doloribus! Deleniti
          vero impedit mollitia nisi officia eaque eveniet eos ex tempora
          commodi, maiores maxime vitae iste corporis soluta! Officia iste
          voluptatibus assumenda error et dolores.
        </p>
        <button
      className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
      onClick={() => navigate("/")}
    >
      Back
    </button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
        </div>    
    </>
  );
}

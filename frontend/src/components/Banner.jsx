import React from "react";
import banner from "../../public/banner.jpg"

export default function Banner() {
  return (
    <>
      <div className=" flex justify-between gap-4">
        <div className="flex-1 bg-blue-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque vero
            consequuntur nam! Sint repellat minima veritatis quasi nisi atque
            delectus officiis, quas minus numquam suscipit animi iure ab dolores
            ducimus impedit, accusamus laboriosam. Reprehenderit, aut ratione ad
            delectus error illum consequatur tenetur deleniti, facere
            temporibus, veniam eius exercitationem architecto nulla.
          </p>
        </div>
        <div className="flex-1 bg-green-100">
        <img src={banner}/>
        </div>
      </div>
      <input type="email" name="email" placeholder="write email"></input>
      <button className="btn">Button</button>
      <div className="w-full md:w-1/2">     
      </div> 
    </>
  );
}

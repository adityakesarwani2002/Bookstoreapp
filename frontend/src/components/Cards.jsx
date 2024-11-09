import React from "react";

export default function Cards(item) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src="https://imgs.search.brave.com/gClS57JwZ2LHZT5cOePfbGSYE1xQp00uEvsqGcoMSDU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NDgyMDI5L3Bob3Rv/L3N0YWNrLW9mLWJv/b2tzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1aeFNzV0tO/Y1ZwRXpySjNfa3hB/VXVoQkNUM1BfZGZu/bUo4MUplZ1BEOGVF/PQ"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

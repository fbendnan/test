import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

export default function Card({ title, image, rating, date }) {
  return (
    <div className="w-[220px] border rounded-xl overflow-hidden">
      <div>
        <img src={image} alt={title} className="W-[100%]" />
      </div>
      <div>
        <div className="p-2 flex flex-col gap-3">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div>
            <div className="flex">
              <MdDateRange className="text-xl text-red-700" />
              <p>{date}</p>
            </div>
            <div className="flex gap-2">
              <FaRegStar className="text-yellow-600 text-xl" />
              <p> {rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";


export default function Filter({ filters = [] }) {
  const [currentFilter, setCurrentFilter] = useState(0);
  return (
    <section className="flex justify-between items-center pb-4 flex-wrap gap-5 px-4 sm:px-6 lg:px-8">
      <ul className="flex gap-5 items-center flex-wrap">
        {filters.map((filter, index) => (
          <li
            className={`font-medium  p-2 rounded-full text-base px-3 ${
              index == currentFilter ? "bg-yellow-200" : ""
            } cursor-pointer hover:bg-yellow-200 transition-all duration-150`}
            onClick={() => setCurrentFilter(index)}
          >
            {filter}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-5">
        <p className="text-base text-slate-500">Follow for updates: </p>
        <FontAwesomeIcon icon={faTwitter} className=" h-5 w-5 text-slate-500 cursor-pointer" />
        <FontAwesomeIcon icon={faRss} className=" h-5 w-5 text-slate-500 cursor-pointer" />
      </div>
    </section>
  );
}

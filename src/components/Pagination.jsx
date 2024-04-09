import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ current = 1, lastPage = 8 }) {
  return (
    <section className="my-10  flex justify-end py-6 gap-x-7">
      <div className="grow flex justify-center">
        <ul className="flex items-center gap-x-7">
          <li className="font-bold text-lg bg-yellow-300 h-9 w-9 flex items-center justify-center rounded-full">{current}</li>
          <li className="font-bold text-lg">{current + 1}</li>
          <li className="font-bold text-lg">...</li>
          <li className="font-bold text-lg">{lastPage}</li>
        </ul>
      </div>

      <div className="flex gap-3 items-center group cursor-pointer">
        <p className="text-lg font-medium group-hover:underline">Next</p>
        <FontAwesomeIcon
          icon={faArrowRight}
          className=" h-4 w-4 transition-all duration-150 text-red-500 group-hover:translate-x-3"
        />
      </div>
    </section>
  );
}

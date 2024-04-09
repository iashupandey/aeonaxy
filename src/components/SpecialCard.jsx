import React from "react";
import AvatarDetails from "./AvatarDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function SpecialCard({ data }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-black border border-slate-300 flex flex-col">
      <div className="h-72  relative">
        <img src={data.imgSrc} alt="" className="h-full w-full" />
        <img
          src="/posts/round-border.svg"
          alt=""
          className="h-full w-full absolute bottom-0 right-0"
        />
      </div>
      <div className="p-6 text-white pt-16  flex flex-col grow items-start">
        <h2 className="text-3xl font-medium mb-2">{data.title}</h2>
        <p className=" mt-2 font-extralight">{data.description}</p>

        <button className="mt-auto bg-yellow-200 transition-all duration-150 hover:bg-yellow-400 text-black p-2 uppercase font-semibold flex gap-x-3 items-center justify-center rounded-full pr-8">
          <span className="bg-black h-9 w-9 rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faPlay} className=" h-4 w-4 text-white" />
          </span>
          Listen Now
        </button>
      </div>
    </div>
  );
}

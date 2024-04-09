import React from "react";
import AvatarDetails from "./AvatarDetails";

export default function Card({ data }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-300 flex flex-col">
      <div className="h-72 overflow-hidden ">
        <img src={data.imgSrc} alt="" className="h-full w-full" />
      </div>
      <div className="p-6 grow flex flex-col">
        <div className="flex items-center mb-4">
          <div
            className={` font-base mr-2 border  px-3 py-1 rounded-full ${
              data.type == "Company" ? "text-red-500 border-red-600" : ""
            } ${
              data.type == "Growth" ? "text-green-500 border-green-600" : ""
            } ${
              data.type == "Engineering"
                ? "text-indigo-500 border-indigo-600"
                : ""
            } `}
          >
            {data.type}
          </div>
        </div>
        <h2 className="text-lg lg:text-xl font-bold mb-2">{data.title}</h2>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="pt-6 mt-auto">
          <AvatarDetails
            imgSrc={data.avatarImg}
            name={data.name}
            created_at={data.created_at}
            classes="text-base font-semibold"
          />
        </div>
      </div>
    </div>
  );
}

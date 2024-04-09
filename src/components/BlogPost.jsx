import React from "react";
import AvatarDetails from "./AvatarDetails";

const BlogPost = ({
  imgSrc = "#",
  type = "Latest Post",
  title = "A Practical Guide to Apple Search Ads",
  description = "Why it's a channel worth exploring to grow your app",
  avatarImg = "/avatar/Ellipse.png",
  name = "Thomas Petit",
  created_at = "June 07, 2022",
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
      <section className="rounded-xl overflow-hidden border border-black/20">
        <img src={imgSrc} alt="" className="object-cover" />
      </section>
      <div className="flex flex-col">
        <div
          className={` font-base mr-2 border-2  px-3 py-1 rounded-full w-fit ${
            type == "Company" ? "text-red-500 border-red-600" : ""
          } ${type == "Growth" ? "text-green-500 border-green-600" : ""} ${
            type == "Engineering" ? "text-indigo-500 border-indigo-600" : ""
          } ${
            type == "Latest Post" ? "text-emerald-500 border-emerald-500" : ""
          }  `}
        >
          {type}
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold mb-2 pt-3">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className=" mt-auto ">
          <AvatarDetails
            imgSrc={avatarImg}
            name={name}
            created_at={created_at}
          />
        </div>
      </div>
    </main>
  );
};

export default BlogPost;

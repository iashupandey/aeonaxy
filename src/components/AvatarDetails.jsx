import React from "react";

export default function AvatarDetails({
  imgSrc = "/avatar/Ellipse.png",
  name = "Thomas Petit",
  created_at = "",
  classes="text-lg font-semibold"
}) {
  return (
    <div className="flex items-center ">
      <img
        src={imgSrc}
        alt="Author Avatar"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <div className={classes}>{name}</div>
        <div className="text-sm text-black">{created_at}</div>
      </div>
    </div>
  );
}

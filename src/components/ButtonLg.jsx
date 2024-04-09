import React from 'react'

export default function ButtonLg({title="title", classes=""}) {
  return (
    <button className={`bg-indigo-500 rounded-full p-2 px-4 uppercase text-white text-xs md:text-sm ${classes}`}>
        {title}
  </button>
  )
}

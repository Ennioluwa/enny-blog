import Image from 'next/image'
import React from 'react'

const Author = ({ author }) => {
  return (
    <div className=" relative mt-20 mb-8 rounded-lg bg-black bg-opacity-20 p-12 text-center">
      <Image
        unoptimized
        width="100px"
        height="100px"
        src={author.image.url}
        alt={author.name}
        className=" h-24 w-24 rounded-full align-middle"
      />
      <h3 className=" my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className=" text-lg text-white">{author.bio}</p>
    </div>
  )
}

export default Author

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState()
  useEffect(() => {
    getCategories().then((result) => setCategories(result))
  }, [])
  console.log(categories)
  return (
    <div className=" mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className=" mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      <div>
        {categories?.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <p className=" cursor-pointer align-middle font-semibold">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories

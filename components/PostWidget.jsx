import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])
  console.log(relatedPosts)
  return (
    <div className=" mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className=" mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : ' Recent Posts'}
      </h3>
      {relatedPosts.map((post) => {
        return (
          <div className="mb-4 flex w-full items-center " key={post.title}>
            <div className=" w-16 flex-none">
              <img
                src={post.featuredImage[0].url}
                alt={post.title}
                className=" h-12 w-12 rounded-full align-middle"
              />
            </div>
            <div className="ml-4 flex-grow">
              <p className=" text-xs text-gray-500">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} key={post.title} className="">
                {post.title}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostWidget

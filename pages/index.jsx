import Head from 'next/head'
import { Categories, PostWidget, PostCard } from '../components'
import { getPosts } from '../services/index'
import { FeaturedPosts } from '../sections'

const Home = ({ posts }) => {
  return (
    <div className=" container mx-auto mb-8 min-h-screen px-10">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className=" grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className=" col-span-1 lg:col-span-8">
          {posts.map((post, index) => {
            console.log(post)
            return <PostCard key={index} post={post.node} />
          })}
        </div>
        <div className=" col-span-1 lg:col-span-4">
          <div className=" relative top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

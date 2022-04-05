import { useRouter } from 'next/router'
import {
  Author,
  Categories,
  Comments,
  CommentsForm,
  PostDetail,
  PostWidget,
} from '../../../components'
import { getPost, getPosts } from '../../../services'
import { AdjacentPosts } from '../../../sections'
const index = ({ post }) => {
  const router = useRouter()
  const slug = router.query.slug
  return (
    <div className=" container mx-auto mb-8 px-10">
      <AdjacentPosts slug={slug} />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className=" col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className=" col-span-1 lg:col-span-4">
          <div className=" relative top-8 lg:sticky">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}

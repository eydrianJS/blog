import React, { useEffect, useState } from 'react'
import BlogEntry from './BlogEntry'
import { getPosts } from '../../firebase'
interface Post {
  id: string
  category: string
  content: string
  date: string
  image: string
  like: number
  subTitle: string
  title: string
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getPosts().then((data) => {
      if (data) {
        const posts = data.docs.map((item) => {
          const currentPost = item.data()
          return {
            id: item.id,
            category: currentPost.category,
            content: currentPost.content,
            date: currentPost.date.seconds + '000',
            image: currentPost.image,
            like: currentPost.like,
            subTitle: currentPost.subTitle,
            title: currentPost.title
          }
        })
        setPosts(posts)
      }
    })
  }, [])
  return (
    <>
      {posts.map((post: Post) => (
        <BlogEntry key={post.id} setPosts={setPosts} posts={posts} post={post} />
      ))}
    </>
  )
}

export default Blog

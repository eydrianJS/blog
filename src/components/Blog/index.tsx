import React, { useEffect, useState, useContext } from 'react'
import BlogEntry from './BlogEntry'
import { getPosts } from '../../firebase'
import { AppContextInterface } from '../../interfaces/AuthInterfaces'
import { AuthContext } from '../../providers/AuthProvider'
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
  const { currentUser } = useContext<AppContextInterface>(AuthContext)

  useEffect(() => {
    getPosts().then((data) => {
      if (data) {
        const posts = data.docs.map((item) => {
          const currentPost = item.data()
          return {
            public: currentPost.public,
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

        setPosts(posts.filter((currentPost) => currentUser || currentPost.public))
      }
    })
  }, [currentUser])
  return (
    <>
      {posts.map((post: Post) => (
        <BlogEntry key={post.id} setPosts={setPosts} posts={posts} post={post} />
      ))}
    </>
  )
}

export default Blog

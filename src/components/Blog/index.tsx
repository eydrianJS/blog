import React, { useEffect, useState } from 'react'
import BlogEntry from './BlogEntry'
import { getPosts } from '../../firebase'

const Blog = () => {
  const [posts, setPosts] = useState<any>([])
  useEffect(() => {
    getPosts().then((data) => {
      if (data) {
        setPosts(data.docs)
      }
    })
  }, [])
  return (
    <>
      {posts.map((item: any) => (
        <BlogEntry item={item.data()} key={item.id} />
      ))}
    </>
  )
}

export default Blog

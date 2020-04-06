import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import PostBlog from '../../components/PostBlog'
import { isMobile } from 'react-device-detect'
import MobileLayout from '../../layouts/MobileLayout'

const PostPage = () => {
  return isMobile ? <MobileLayout Page={<PostBlog />} /> : <MainLayout Page={<PostBlog />} />
}

export default PostPage

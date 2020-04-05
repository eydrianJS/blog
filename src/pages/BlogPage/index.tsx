import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import MobileLayout from '../../layouts/MobileLayout'
import Blog from '../../components/Blog'
import { isMobile } from 'react-device-detect'

const BlogPage = () => {
  return isMobile ? <MobileLayout Page={<Blog />} /> : <MainLayout Page={<Blog />} />
}

export default BlogPage

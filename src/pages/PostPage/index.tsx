import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { RouteComponentProps } from 'react-router-dom'
import PostBlog from '../../components/PostBlog'
import { isMobile } from 'react-device-detect'
import MobileLayout from '../../layouts/MobileLayout'

interface PostPageParams extends RouteComponentProps<{ id: string }> {}

const PostPage = ({ match }: PostPageParams) => {
  return isMobile ? (
    <MobileLayout Page={<PostBlog id={match.params.id} />} />
  ) : (
    <MainLayout Page={<PostBlog id={match.params.id} />} />
  )
}

export default PostPage

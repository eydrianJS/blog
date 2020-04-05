import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import CodeReview from '../../components/CodeReview'
import MobileLayout from '../../layouts/MobileLayout'
import { isMobile } from 'react-device-detect'

const CodeReviewPage = () => {
  return isMobile ? <MobileLayout Page={<CodeReview />} /> : <MainLayout Page={<CodeReview />} />
}

export default CodeReviewPage

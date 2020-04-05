import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Homework from '../../components/Homework'
import { isMobile } from 'react-device-detect'
import MobileLayout from '../../layouts/MobileLayout'

const HomeworkPage = () => {
  return isMobile ? <MobileLayout Page={<Homework />} /> : <MainLayout Page={<Homework />} />
}

export default HomeworkPage

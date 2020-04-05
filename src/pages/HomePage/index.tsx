import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Home from '../../components/Home'
import MobileLayout from '../../layouts/MobileLayout'
import { isMobile } from 'react-device-detect'

const HomePage = () => {
  return isMobile ? <MobileLayout Page={<Home />} /> : <MainLayout Page={<Home />} />
}

export default HomePage

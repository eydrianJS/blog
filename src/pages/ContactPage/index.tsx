import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import Contact from '../../components/Contact'
import MobileLayout from '../../layouts/MobileLayout'
import { isMobile } from 'react-device-detect'

const ContactPage = () => {
  return isMobile ? <MobileLayout Page={<Contact />} /> : <MainLayout Page={<Contact />} />
}

export default ContactPage

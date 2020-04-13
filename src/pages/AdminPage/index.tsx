import React, { useContext } from 'react'
import MainLayout from '../../layouts/MainLayout'
import Admin from '../../components/Admin'
import { AppContextInterface } from '../../interfaces/AuthInterfaces'
import { AuthContext } from '../../providers/AuthProvider'
import LoginPage from '../../components/Login'

const BlogPage = () => {
  const { currentUser } = useContext<AppContextInterface>(AuthContext)
  return currentUser ? <MainLayout Page={<Admin />} /> : <MainLayout Page={<LoginPage />} />
}

export default BlogPage

import React, { useContext } from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeworkPage from './pages/HomeworkPage'
import BlogPage from './pages/BlogPage'
import CodeReviewPage from './pages/CodeReviewPage'
import ContactPage from './pages/ContactPage'
import PostPage from './pages/PostPage'
import Admin from './pages/AdminPage'
import UploadImage from './components/Admin/UploadImage'
import { AuthContext } from './providers/AuthProvider'
import { AppContextInterface } from './interfaces/AuthInterfaces'
import Createcontentpost from './components/Admin/CreateNewPost/CreateContentPost'
import UpdateContentPost from './components/Admin/CreateNewPost/UpdateContentPost'

function App() {
  const { currentUser } = useContext<AppContextInterface>(AuthContext)

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/post/:id" component={PostPage} />
      <Route exact path="/homework" component={HomeworkPage} />
      <Route exact path="/codeReview" component={CodeReviewPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/newPostAdminSecure" component={Admin} />
      {currentUser ? (
        <>
          <Route exact path="/newPostAdminSecure/image" component={UploadImage} />{' '}
          <Route exact path="/newPostAdminSecure/newContent/:id" component={Createcontentpost} />
          <Route exact path="/newPostAdminSecure/updateContent/:id" component={UpdateContentPost} />
        </>
      ) : null}
    </Switch>
  )
}

export default App

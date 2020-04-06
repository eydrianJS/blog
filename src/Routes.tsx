import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeworkPage from './pages/HomeworkPage'
import BlogPage from './pages/BlogPage'
import CodeReviewPage from './pages/CodeReviewPage'
import ContactPage from './pages/ContactPage'
import PostPage from './pages/PostPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/post/:id" component={PostPage} />
      <Route exact path="/homework" component={HomeworkPage} />
      <Route exact path="/codeReview" component={CodeReviewPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  )
}

export default App

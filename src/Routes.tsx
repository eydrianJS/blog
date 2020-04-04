import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import HomeworkPage from './pages/HomeworkPage'
import BlogPage from './pages/BlogPage'
import CodeReviewPage from './pages/CodeReviewPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog" component={HomeworkPage} />
      <Route exact path="/homework" component={BlogPage} />
      <Route exact path="/codeReview" component={CodeReviewPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  )
}

export default App

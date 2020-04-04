import React from 'react'
import useStyles from './style'
import {Container, CssBaseline } from '@material-ui/core'

interface MainLayoutParams {
    Page: React.ReactNode
}

const MainLayout = ({Page}: MainLayoutParams) => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
        NAVBAR
      {/* <Navbar currentUser={currentUser} /> */}
      <div className={classes.root}>
        <Container>
          <CssBaseline />
          {Page}
        </Container>
      </div>
    </main>
  )
}

export default MainLayout

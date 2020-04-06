import React, { useState, useCallback } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core/'
import { Link } from 'react-router-dom'
import useStyles from './styles'

import Menu from './Menu'

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" className={classes.main}>
        <Toolbar>
          <Typography className={classes.logo} variant="h6" noWrap component={Link} to="/">
            FSFrontend
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap component={Link} to="/blog">
            BLOG
          </Typography>
          {/* <Typography className={classes.title} variant="h6" noWrap component={Link} to="/homework">
            ZADANIA
          </Typography> */}
          {/* <Typography className={classes.title} variant="h6" noWrap component={Link} to="/codeReview">
            CODEREVIEW
          </Typography> */}
          <Typography className={classes.title} variant="h6" noWrap component={Link} to="/contact">
            KONTAKT
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h6" noWrap>
        <Menu />
      </Typography>
    </>
  )
}

export default Navbar

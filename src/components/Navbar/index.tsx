import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core/'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import imageSrc from './Logo.png'
import Menu from './Menu'

const Navbar = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position="static" className={classes.main}>
        <Toolbar>
          <Typography className={classes.logo} variant="h6" noWrap component={Link} to="/">
            <img src={imageSrc} alt="logo" style={{ width: 160, height: 50 }} />
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap component={Link} to="/blog">
            Blog
          </Typography>
          {/* <Typography className={classes.title} variant="h6" noWrap component={Link} to="/homework">
            ZADANIA
          </Typography> */}
          {/* <Typography className={classes.title} variant="h6" noWrap component={Link} to="/codeReview">
            CODEREVIEW
          </Typography> */}
          <Typography className={classes.title} variant="h6" noWrap component={Link} to="/contact">
            O mnie
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

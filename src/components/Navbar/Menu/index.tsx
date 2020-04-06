import React, { useState } from 'react'
import classes from './styles.module.css'
import CloseIcon from '@material-ui/icons/Close'
import { Typography } from '@material-ui/core/'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const classe = openMenu ? classes.sidebar : classes.closeMe

  return (
    <div>
      {!openMenu ? (
        <MenuIcon
          className={classes.closeMenu}
          onClick={() => {
            setOpenMenu(true)
          }}
        />
      ) : null}
      <div className={classe}>
        <CloseIcon
          className={classes.closeMenu}
          onClick={() => {
            setOpenMenu(false)
          }}
        />
        <Typography
          className={[classes.title, classes.first].join(' ')}
          variant="h6"
          noWrap
          component={Link}
          to="/blog"
          onClick={() => {
            setOpenMenu(false)
          }}>
          BLOG
        </Typography>
        {/* <Typography className={classes.title} variant="h6" noWrap component={Link} to="/homework">
        ZADANIA
        </Typography>
        <Typography className={classes.title} variant="h6" noWrap component={Link} to="/codeReview">
        CODEREVIEW
      </Typography> */}
        <Typography
          className={classes.title}
          variant="h6"
          onClick={() => {
            setOpenMenu(false)
          }}
          noWrap
          component={Link}
          to="/contact">
          KONTAKT
        </Typography>
      </div>
    </div>
  )
}

export default Menu

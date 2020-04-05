import React from 'react'
import classes from './styles.module.css'
import CloseIcon from '@material-ui/icons/Close'
import { Typography } from '@material-ui/core/'
import { Link } from 'react-router-dom'

interface MenuParams {
  handleSetMenu: () => void
}

const Menu = ({ handleSetMenu }: MenuParams) => {
  return (
    <div className={classes.sidebar}>
      <CloseIcon onClick={handleSetMenu} className={classes.closeMenu} />
      <Typography className={classes.title} variant="h6" noWrap component={Link} to="/blog">
        BLOG
      </Typography>
      <Typography className={classes.title} variant="h6" noWrap component={Link} to="/homework">
        ZADANIA
      </Typography>
      <Typography className={classes.title} variant="h6" noWrap component={Link} to="/codeReview">
        CODEREVIEW
      </Typography>
      <Typography className={classes.title} variant="h6" noWrap component={Link} to="/contact">
        KONTAKT
      </Typography>
    </div>
  )
}

export default Menu

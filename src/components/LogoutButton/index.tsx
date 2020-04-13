import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './styles'
import { logout } from '../../firebase'

const Logout = () => {
  const classes = useStyles()

  return (
    <Button type="submit" fullWidth variant="contained" color="secondary" onClick={logout} className={classes.submit}>
      Logout
    </Button>
  )
}

export default Logout

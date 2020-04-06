import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  main: {
    flexGrow: 1,
    background: '#52c3c0',
    margin: 0
  },
  title: {
    textDecoration: 'none',
    margin: 10,
    color: '#ffffff',
    cursor: 'pointer',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  logo: {
    textDecoration: 'none',
    margin: 10,
    color: '#ffffff',
    cursor: 'pointer'
  }
})

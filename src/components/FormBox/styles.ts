import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  main: {
    width: 'auto',
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(10)}px ${theme.spacing(10)}px ${theme.spacing(10)}px`
  },
  form: {
    width: '100%',
    marginTop: theme.spacing()
  },
  button: {
    marginTop: theme.spacing(3)
  },
  registerButton: {
    backgroundColor: theme.palette.warning.dark,
    marginTop: theme.spacing(3)
  }
})

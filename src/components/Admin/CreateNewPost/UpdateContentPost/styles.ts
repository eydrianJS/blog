import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  main: {
    width: '100%'
  },
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(10)}px ${theme.spacing(10)}px ${theme.spacing(10)}px`
  },
  paperPost: {
    width: '90%',
    marginTop: theme.spacing(5),
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
  element: {
    marginTop: theme.spacing(3),
    width: '100%'
  }
})

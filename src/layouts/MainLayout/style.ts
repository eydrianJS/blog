import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  main: {
    flexGrow: 1
  },
  root: {
    flexGrow: 1
  },
  formControl: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(4)
  },
  paper: {
    background: 'linear-gradient(#dce1e3, #ffffff, #ffffff)',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    minHeight: 400,
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  }
})

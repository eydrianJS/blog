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
  }
})

import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  container: {
    width: 'calc(100% - 30px)'
  },
  content: {
    margin: 20,
    [theme.breakpoints.down('md')]: {
      margin: 10
    },
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left',
    width: '100%'
  },
  categoryItem: {
    marginTop: 32,
    fontSize: 20
  },
  category: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: 10
    },
    height: 100,
    cursor: 'pointer'
  },
  paper: {
    marginTop: theme.spacing(4),
    minHeight: 400,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  }
})

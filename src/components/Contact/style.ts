import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  image: {
    float: 'left',
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginTop: 40,
      width: '30%',
      paddingTop: 20,
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
      margin: 20,
      borderRadius: '50%',
      float: 'right'
    }
  },
  container: {
    width: 'calc(100% - 30px)'
  },
  title: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    [theme.breakpoints.up('sm')]: {
      margin: 15,
      marginLeft: 60,
      marginRight: 60
    },
    color: '#080808'
  },
  content: {
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'left',
    width: '100%'
  },
  text: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    width: '100%',
    fontFamily: "'Alegreya', sans-serif",
    paddingBottom: 20,
    paddingTop: 20,
    [theme.breakpoints.up('sm')]: {
      margin: 30,
      paddingBottom: 40,
      paddingTop: 40,
      marginLeft: 60,
      marginRight: 60,
      width: 'calc(100% - 120px)'
    },
    textAlign: 'left',
    borderTop: 'solid 1px #52c3c0',
    borderBottom: 'solid 1px #52c3c0',
    wordWrap: 'break-word'
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

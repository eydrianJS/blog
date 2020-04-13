import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  image: {
    width: '90%'
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
  postImage: {
    width: '100%',
    marginTop: 20
  },
  date: {
    fontSize: 20,
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'left',
    width: 'calc(100% - 10px)',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 60,
      marginRight: 60,
      width: 'calc(100% - 120px)'
    },
    paddingBottom: 20,
    color: '#52c3c0',
    borderBottom: 'solid 1px #52c3c0'
  },
  author: {
    fontSize: 20,
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'right',
    width: 'calc(100% - 10px)',
    [theme.breakpoints.up('sm')]: {
      marginLeft: 60,
      marginRight: 60,
      width: 'calc(100% - 120px)'
    },
    paddingBottom: 20,
    color: '#52c3c0'
  },
  text: {
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 'calc(100% - 10px)',
    paddingBottom: 20,
    [theme.breakpoints.up('sm')]: {
      margin: 30,
      paddingBottom: 40,
      marginLeft: 60,
      marginRight: 60,
      width: 'calc(100% - 120px)'
    },
    textAlign: 'left',
    borderBottom: 'solid 1px #52c3c0'
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    marginTop: theme.spacing(4),
    minHeight: 400,
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary,
    overflow: 'hidden'
  },
  buttons: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    '& label.Mui-focused': {
      color: '#52c3c0'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#52c3c0'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#52c3c0'
      },
      '&:hover fieldset': {
        borderColor: '#52c3c0'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#52c3c0'
      }
    }
  }
})

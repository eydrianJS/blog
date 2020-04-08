import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  image: {
    margin: 10,
    float: 'left',
    width: '200px',
    cursor: 'pointer'
  },
  icon: {
    color: '#52c3c0',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        color: '#f0ad44'
      }
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px!important'
    }
  },
  iconClicked: {
    color: '#f0ad44',
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        color: '#52c3c0'
      }
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '20px!important'
    }
  },
  title: {
    color: '#080808'
  },
  date: {
    color: '#52c3c0'
  },
  content: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'justify',
    borderBottom: 'solid 1px #52c3c0',
    borderTop: 'solid 1px #52c3c0'
  },
  email: {
    width: 'calc(100% - 40px)',
    [theme.breakpoints.down('md')]: {
      width: '100%!important'
    }
  },
  comments: {
    marginTop: 10,
    width: '100%',
    minHeight: 40
  },
  addComment: {
    marginTop: 10,
    width: '100%',
    minHeight: 40,
    borderBottom: 'solid 1px #52c3c0',
    borderTop: 'solid 1px #52c3c0'
  },
  commentDate: {
    paddingTop: 10,
    color: '#52c3c0',
    textAlign: 'left',
    marginLeft: 5,
    width: 'calc(100% - 10px)',
    borderBottom: 'solid 1px #52c3c0'
  },
  nick: {
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      width: '100%!important'
    }
  },
  buttons: {
    margin: 10,
    marginLeft: 40,
    marginRight: 40,
    paddingRight: 10,
    width: "calc('100%' - 60px)",
    [theme.breakpoints.down('md')]: {
      width: '100%!important',
      marginLeft: 7,
      marginRight: 20
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
  },
  commentContent: {
    margin: 5,
    paddingTop: 5
  },
  text: {
    marginBottom: 30
  },
  save: {
    marginTop: '20px!important',
    width: '30%!important',
    padding: '15px!important',
    color: '#ffffff!important',
    backgroundColor: '#f0ad44!important',
    '&:hover': {
      backgroundColor: '#ffffff!important',
      color: '#f0ad44!important',
      outlineStyle: 'solid!important',
      outline: '1.5px!important',
      outlineColor: '#f0ad44!important'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%!important'
    }
  },
  button: {
    padding: '10px!important',
    paddingRight: '0px!important',
    backgroundColor: '#ffffff!important',
    borderRadius: 2,
    outlineStyle: 'solid!important',
    outline: '1.5px!important',
    color: '#52c3c0!important',
    outlineColor: '#52c3c0!important',
    '&:hover': {
      color: '#f0ad44!important',
      outlineColor: '#f0ad44!important'
    }
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  }
})

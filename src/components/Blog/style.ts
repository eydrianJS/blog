import { makeStyles, createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

export default makeStyles({
  image: {
    margin: 10,
    [theme.breakpoints.down('sm')]: {
      width: '300px'
    }
  },
  email: {
    width: '100%'
  },
  text: {
    marginBottom: 30
  },
  button: {
    margin: theme.spacing(1)
  },
  save: {
    marginTop: '20px!important',
    width: '100%!important',
    padding: '15px!important',
    color: '#ffffff!important',
    backgroundColor: '#f0ad44!important',
    '&:hover': {
      backgroundColor: '#ffffff!important',
      color: '#f0ad44!important',
      outlineStyle: 'solid!important',
      outline: '1.5px!important',
      outlineColor: '#f0ad44!important'
    }
  },
  paper: {
    background: 'linear-gradient(#dce1e3, #ffffff, #ffffff)',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    minHeight: 400,
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
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

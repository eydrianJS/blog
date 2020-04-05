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
    marginTop: 20,
    width: '100%',
    padding: 15,
    color: '#ffffff',
    backgroundColor: '#f0ad44',
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#f0ad44',
      outlineStyle: 'solid',
      outline: 1.5,
      outlineColor: '#f0ad44'
    }
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

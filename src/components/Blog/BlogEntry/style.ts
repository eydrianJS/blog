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
    '&:hover': {
      color: '#f0ad44'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20
    }
  },
  title: {
    // fontSize: 20
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
    // borderBottom: 'solid 1px #f0ad44',
    // borderTop: 'solid 1px #f0ad44'
    borderBottom: 'solid 1px #52c3c0',
    borderTop: 'solid 1px #52c3c0'
  },
  text: {
    marginBottom: 30
  },
  button: {
    padding: '10px!important',
    backgroundColor: '#ffffff!important',
    borderRadius: 2,
    outlineStyle: 'solid!important',
    outline: '1.5px!important',
    color: '#52c3c0!important',
    outlineColor: '#52c3c0!important',
    // color: '#f0ad44!important',
    // outlineColor: '#f0ad44!important',
    '&:hover': {
      color: '#f0ad44!important',
      outlineColor: '#f0ad44!important'
      // color: '#52c3c0!important',
      // outlineColor: '#52c3c0!important'
    }
  },
  paper: {
    // background: 'linear-gradient(#dce1e3, #ffffff, #ffffff)',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    textAlign: 'center',
    display: 'flex',
    color: theme.palette.text.secondary
  }
  // buttons: {
  //   width: '30%',
  //   [theme.breakpoints.down('md')]: {
  //     width: '100%'
  //   },
  //   '& label.Mui-focused': {
  //     color: '#52c3c0'
  //   },
  //   '& .MuiInput-underline:after': {
  //     borderBottomColor: '#52c3c0'
  //   },
  //   '& .MuiOutlinedInput-root': {
  //     '& fieldset': {
  //       borderColor: '#52c3c0'
  //     },
  //     '&:hover fieldset': {
  //       borderColor: '#52c3c0'
  //     },
  //     '&.Mui-focused fieldset': {
  //       borderColor: '#52c3c0'
  //     }
  //   }
  // }
})

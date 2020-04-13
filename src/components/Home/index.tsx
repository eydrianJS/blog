import React from 'react'
import { useFormik } from 'formik'
import image from './book.png'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import useStyle from './style'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { addEmail } from '../../firebase'
import Modal from './Modal'

const RegisterValidation = (values: { email: string }) => {
  const errors: { [key: string]: string } = {}
  if (!values.email) {
    errors.email = 'Adres email jest obowiązkowy'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Błędny format adresu email'
  }
  return errors
}
const Home = () => {
  const classes = useStyle()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate: RegisterValidation,
    onSubmit: ({ email }) => {
      addEmail(email)
        .then((data) => {
          setOpen(true)
        })
        .catch((error) => {
          console.log('error')
        })
    }
  })

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <img src={image} className={classes.image} alt="newsletter" />
        <div className={classes.buttons}>
          <Typography variant="h6" className={classes.text}>
            Nie masz czasu na śledzenie wszystkich blogów? Nie masz czasu na szukanie ciekawych wpisów o najnowszych
            technologiach? Nie chce Ci się szukać pracy, wolisz żeby ona znalazła Ciebie? Jeżeli przynajmniej jedna
            odpowiedz na te pytania jest twierdząca, musisz zapisać się na ten newsletter.
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="text"
              label="Adres email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              className={classes.email}
              autoComplete="off"
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
            <Button type="submit" id="save" variant="contained" className={classes.save}>
              Zapisz się
            </Button>
            <Modal handleClose={handleClose} open={open} />
          </form>
        </div>
      </Grid>
    </Paper>
  )
}

export default Home

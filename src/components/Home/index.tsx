import React from 'react'
import { useFormik } from 'formik'
import image from './book.png'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import useStyle from './style'
import Button from '@material-ui/core/Button'
import { Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

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
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate: RegisterValidation,
    onSubmit: ({ email }) => {}
  })

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <img src={image} className={classes.image} alt="newsletter" />
        <div className={classes.buttons}>
          <Typography variant="h6" className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. At volutpat diam
            ut venenatis tellus in. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus.
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
            <Button type="submit" id="save" variant="contained" className={classes.save}>
              Zapisz się
            </Button>
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
          </form>
        </div>
      </Grid>
    </Paper>
  )
}

export default Home

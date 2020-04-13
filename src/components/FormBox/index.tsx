import React, { useContext } from 'react'
import { Typography, Paper, Button } from '@material-ui/core'
import { FormikProps } from 'formik'
import InputFormik from '../InputFormik/InputFormik'
import useStyles from './styles'
import ConfirmButton from '../../interfaces/ConfirmButton'

type Input = {
  name: string
  label: string
  type?: string
}

interface FormBoxParams {
  label: string
  confirmButton: ConfirmButton
  inputs: Input[]
  formik: FormikProps<any>
}

const FormBox = ({ formik, inputs, label, confirmButton }: FormBoxParams) => {
  const classes = useStyles()

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          {label}
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          {inputs.map(({ name, label: inputLabel, type }) => (
            <InputFormik key={name} name={name} formik={formik} label={inputLabel} type={type} />
          ))}
          <Button type="submit" fullWidth={true} variant="contained" color="primary" className={classes.button}>
            {confirmButton.label}
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default FormBox

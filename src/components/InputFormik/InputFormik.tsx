import React from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core'
import { FormikProps } from 'formik'
import styles from './styles.module.css'

interface InputFormikParams {
  name: string
  label: string
  type?: string
  formik: FormikProps<any>
}

const InputFormik = ({ name, label, formik, type }: InputFormikParams) => {
  const { touched, errors, values, handleChange, handleBlur } = formik
  const isError = errors[name] && touched[name]

  return (
    <FormControl margin="normal" fullWidth={true} className={isError ? styles.error : ''}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        id={name}
        name={name}
        type={type ? type : 'text'}
        autoComplete="off"
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isError ? <div>{errors[name]}</div> : null}
    </FormControl>
  )
}

export default InputFormik

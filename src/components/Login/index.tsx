import React from 'react'
import { singIn } from '../../firebase'
import { useFormik } from 'formik'
import LoginValidation from '../../validations/LoginValidation'
import ConfirmButton from '../../interfaces/ConfirmButton'
import BackButton from '../../interfaces/BackButton'
import FormBox from '../../components/FormBox'

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate: LoginValidation,
    onSubmit: ({ email, password }) => {
      singIn(email, password).then((result) => {
        if (result.error) {
          alert(result.message)
        }
      })
    }
  })

  const loginPageInformation = [
    { name: 'email', label: 'Email Address' },
    { name: 'password', label: 'Password', type: 'password' }
  ]

  const confirmButton: ConfirmButton = {
    label: 'Sing In',
    color: 'primary'
  }

  return <FormBox label="Login" confirmButton={confirmButton} inputs={loginPageInformation} formik={formik} />
}

export default LoginPage

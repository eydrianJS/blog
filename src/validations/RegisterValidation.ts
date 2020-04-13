import { validateEmail, validatePassword } from './CommonValiations'

interface RegisterValuesInterface {
  userName: string
  password: string
  email: string
}

const RegisterValidation = (values: RegisterValuesInterface) => {
  const errors: { [key: string]: string } = {}
  const passwordError = validatePassword(values.password)
  const errorsEmail = validateEmail(values.email)

  if (!values.userName) {
    errors.userName = 'Required'
  } else if (values.userName.length > 15) {
    errors.userName = 'Must be 15 characters or less'
  }
  if (passwordError) {
    errors.password = passwordError
  }
  if (errorsEmail) {
    errors.email = errorsEmail
  }
  return errors
}

export default RegisterValidation

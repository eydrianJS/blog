import { validateEmail, validatePassword } from './CommonValiations'

interface LoginValuesInterface {
  password: string
  email: string
}

const LoginValidation = (values: LoginValuesInterface) => {
  const errors: { [key: string]: string } = {}
  const passwordError = validatePassword(values.password)
  const errorsEmail = validateEmail(values.email)

  if (passwordError) {
    errors.password = passwordError
  }
  if (errorsEmail) {
    errors.email = errorsEmail
  }

  return errors
}

export default LoginValidation

export const validatePassword = (password: string) => {
  if (!password) {
    return 'Required'
  } else if (password.length > 15) {
    return 'Must be 15 characters or less'
  }
  return ''
}

export const validateEmail = (email: string) => {
  if (!email) {
    return 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Invalid email address'
  }
  return ''
}

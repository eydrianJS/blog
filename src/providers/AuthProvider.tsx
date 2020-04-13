import React from 'react'
import { AppContextInterface } from '../interfaces/AuthInterfaces'
import CurrentUser from '../interfaces/types/CurrentUserType'
import useOnAuthStateChanged from '../effects/useOnAuthStateChanged'

export const AuthContext = React.createContext<AppContextInterface>({ currentUser: null })

interface AuthProviderParams {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderParams) => {
  const currentUser: CurrentUser = useOnAuthStateChanged()

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}>
      {children}
    </AuthContext.Provider>
  )
}

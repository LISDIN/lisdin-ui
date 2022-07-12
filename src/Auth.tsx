import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import React from 'react'

Amplify.configure(awsmobile)

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  return (
    <Authenticator
      variation="modal"
      signUpAttributes={[
        'given_name',
        'family_name',
        'preferred_username',
        'address',
      ]}
    >
      {({ signOut, user }) => (
        <AuthContext.Provider value={{ signOut, user }}>
          {children}
        </AuthContext.Provider>
      )}
    </Authenticator>
  )
}

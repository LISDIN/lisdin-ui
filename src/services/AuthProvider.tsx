import { createContext, PropsWithChildren } from 'react'
import { Amplify } from '@aws-amplify/core'
import { Authenticator } from '@aws-amplify/ui-react'
import awsmobile from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsmobile)

export const AuthContext = createContext(null as any)

export const AuthProvider = (props: PropsWithChildren) => {
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
          {props.children}
        </AuthContext.Provider>
      )}
    </Authenticator>
  )
}

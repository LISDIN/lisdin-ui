
import React from 'react';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


Amplify.configure(awsmobile)

export function Dashboard() {
    return (
        <Authenticator>
          {({ signOut, user }) => (
            <div>
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
              <br />
            </div>
          )}
        </Authenticator>
      );
}



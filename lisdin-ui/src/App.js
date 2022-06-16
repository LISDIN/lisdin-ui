import {AuthProvider} from './Auth'
import Profile from './Profile'
import Home from './Home'
import Ideas from './Ideas'
import Account from './Account'
import Collaborate from './Collaborate'
import Messages from './Messages'
import Notifications from './Notifications'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
        <CssBaseline/>
        <div className="App">
            <AuthProvider>  
                <Router>
                    <Routes>
                        <Route exact path='/home' element={ <Home/>}/>
                        <Route exact path='/ideas' element={ <Ideas/>}/>
                        <Route exact path='/collaborate' element={ <Collaborate/>}/>
                        <Route exact path='/messages' element={ <Messages/>}/>
                        <Route exact path='/notifications' element={ <Notifications/>}/>
                        <Route exact path='/account' element={ <Account/>}/>
                        <Route exact path="/" element={ <Profile/>}/>
                    </Routes>
                </Router>
                

            </AuthProvider>        
        </div>
    </>
);
}

export default App;

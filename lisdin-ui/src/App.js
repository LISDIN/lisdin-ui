import {AuthProvider} from './Auth'
import Profile from './Profile'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <AuthProvider>  
            <Router>
                <Routes>
                    
                    <Route exact path='/home' element={ <Home/>}/>
                    <Route exact path="/" element={ <Profile/>}/>
                </Routes>
            </Router>
            

        </AuthProvider>        
    </div>
);
}

export default App;

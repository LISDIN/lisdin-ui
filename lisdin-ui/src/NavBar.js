import HomeIcon from '@mui/icons-material/Home';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputBase from '@mui/material/InputBase';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './Auth'

import './NavBar.css'

const NavBar = () => {

    const navigate = useNavigate()
    const { signOut } = useContext(AuthContext)

    return (
        <>
        <div className='nav-container'>
            <HomeIcon 
                sx={{ fontSize: 80, color: 'blue'}}     
                onClick={ ()=> {navigate('/home')}} 
                
            />
    
            <LightbulbIcon 
                sx={{ fontSize: 80, color: 'blue' }}
                onClick={ ()=> {navigate('/ideas')}} 
            />
        
            <PeopleAltIcon 
                sx={{ fontSize: 80, color: 'blue'}} 
                onClick={ ()=> {navigate('/collaborate')}} 
            />
        
            <EmailIcon 
                sx={{ fontSize: 80, color: 'blue' }} 
                onClick={ ()=> {navigate('/messages')}} 
            />

            <NotificationsIcon  
                sx={{ fontSize: 80, color: 'blue'}} 
                onClick={ ()=> {navigate('/notifications')}} 
            />
        
            <InputBase  placeholder='Search' sx={{ fontSize: 40, border: '2px solid blue', borderRadius: '5px', padding: '5px', marginRight: '5px' }} />
    
            <AccountCircleIcon 
                sx={{ fontSize: 80, color: 'blue'}}  
                onClick={ ()=> {navigate('/account')}} 
            />
        
            <ExitToAppIcon 
                sx={{ fontSize: 80, color: 'blue'}} 
                onClick = { () => signOut()} 
            />   
        </div>
        <hr style={{borderColor: 'blue'}}></hr>
        </>
    )
}   

export default NavBar
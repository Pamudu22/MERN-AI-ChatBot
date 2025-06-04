import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import Logo from './shared/Logo'
import { UseAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
  const auth = UseAuth();
  return (
    <AppBar sx={{bgcolor: "Transparent", position: "static",boxShadow: "none"}}>
             
        <Toolbar sx={{display: "flex",
        justifyContent: "space-between",
        alignItems: "right",
        }}>
            <Logo /> 
            <div>
              {auth?.isLoggedIn ? 
              <> 
              <NavigationLink bg='#1b1b1b' to='/chat' text='Start a live chat' textcolor='white'/>
              <NavigationLink bg='#a40000' to='/' text='Logout' textcolor='white' onClick={auth.logout} />
               </>:
                <>
                <NavigationLink bg='#002147' to='/login' text='Login' textcolor='white'/>
                <NavigationLink bg='#1b1b1b' to='/signup' text='Signup' textcolor='white'  />
                </> 
            }
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header
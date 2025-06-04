import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createTheme,ThemeProvider } from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
axios.defaults.baseURL='http://localhost:3000/api/v1';
axios.defaults.withCredentials = true;
const theme = createTheme({typography: {
  fontFamily: 'Roboto slab, sans-serif',
  allVariants: {color: 'white'},
}})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Toaster  position='top-center'/> 
         <App />
    
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)

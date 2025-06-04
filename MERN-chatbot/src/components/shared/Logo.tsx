import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div style={{
        display: 'flex',
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
        padding: 0,        
        margin: 0,         
        lineHeight: 1,    
    }}>
        <Link to={"/"} style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            gap: '15px',
            padding: 0,    
            margin: 0,      
        }}>
            <img 
                src="Wizby LOGO.png" 
                alt="WizbyLogo" 
                style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    padding: 0,     
                    margin: 0,     
                    display: 'block', 
                }} />
            </Link>
            <Typography sx={{
                display: { md: "block", sm: "none", xs: "none" },
                fontWeight: "800",
                textShadow: "2px 2px 20px #000",
                fontSize: "24px",
                padding: 0,         
                margin: 0,        
                lineHeight: 1,    
            }}>
                <span style={{ color: "#f0f8ff " }}>WIZBY</span>-bot
            </Typography>
        
    </div>
  )
}

export default Logo
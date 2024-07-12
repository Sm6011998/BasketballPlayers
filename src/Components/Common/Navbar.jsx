import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../Auth';
import { toast } from 'react-toastify';

export default function Navbar() {
  
  const[auth,setAuth] = UseAuth()
  const Navigate = useNavigate()

  const Logout = ()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem("auth")
    toast.warning("You have been logged out!")
    Navigate("/login")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, display:"flex",justifyContent:"center" }}>
            All your favourite Players are here
          </Typography>
          <Button color="inherit"><Link style={{textDecoration:"none",color:"white"}}to="/">Home</Link></Button>
          {
            !auth.user?(
              <>
              <Button variant='contained' sx={{backgroundColor:"#a5b4fc",marginRight:"0.5rem"}} ><Link 
          style={{textDecoration:"none",color:"white"}}to="/login">Login</Link></Button>
          <Button variant='contained' sx={{backgroundColor:"#14b8a6"}}><Link style={{textDecoration:"none",
            color:"white"}}to="/register">Sign Up</Link></Button>
              
              </>
            ):(
              <>
            <Typography variant='body1' sx={{marginRight:"0.5rem"}}>Welcome <br/>{auth.user.name}</Typography>

              <Button variant='contained' onClick={Logout} sx={{backgroundColor:"#f87171"}}><Link style={{textDecoration:"none",
            color:"white"}}to="/register">Logout</Link></Button>
              </>

            )
          }
          
        </Toolbar>
      </AppBar>
    </Box>
    </>
  
  );
}

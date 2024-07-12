import React, { useState } from 'react'

import { Box, Button, Card, CardContent, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import img2 from '../../img/technical-training-blogs-compilation.webp'
import { Link, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'

import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import { UseAuth } from '../Auth'
import Layout from '../Common/Layout'
import { LoginApi } from '../Api'

const Login = () => {
  const SetValue = {
    email: "",
    password: ""
  }
  const [login, setLogin] = useState(SetValue)
  const [error, setError] = useState({})
  const[load, setLoad] = useState(false)
  const [auth,setAuth] = UseAuth()


  const Navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Validation = () => {
    let error = {}

    if (!login.email) {
      error.email = "Email is Required!"
    }
    else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(login.email)
    ) {
      error.email = "Enter a valid Email!"
    }
    if (!login.password) {
      error.password = "Enter a Valid Password!"
    }
    else if (login.password.length < 8) {
      error.password = "Enter a Valid Password!"
    }
    return error
  }

  const ChangeValue = (event) => {
    const { name, value } = event.target
    setLogin({ ...login, [name]: value })
    console.log(login)

    if(name === "email"){
      if(value.length === 0){
        setError({...error,email:"Email is Required!"})
        setLogin({...login,email:''})
      }
      else{
        setError({...error,email:''})
        setLogin({...login,email:value})
      }
    }

    if(name === "password"){
      if(value.length === 0){
        setError({...error,password:"Password is required"})
        setLogin({...login,password:""})
      }
      else{
        setError({...error,password:""})
        setLogin({...login,password:value})
      }
    }
  }

  const SubmitData = async(data) => {
    data.preventDefault()
    setError(Validation())

    const SubmitValue = Validation()

    if(Object.keys(SubmitValue).length === 0){
      setLoad(true) 
      try{ 
                 
        const Final = await LoginApi(login)
        setLogin(Final)
        console.log("login",Final)
  
        if(Final.data.status === true){
          setAuth({...auth,
            user:Final.data.user,
            token:Final.data.token
          })
          Navigate("/")          
          localStorage.setItem("auth",JSON.stringify(Final.data))   
          toast.success(Final.data.message)   
        }
        else{
          toast.error("Something went wrong!")
        }
         
      }
      catch(error){
        console.log(error)
         toast.error("User not found!")
      }
      finally{
        setLoad(false)
      }
 
     }
  }





  return (
    <>
      <Layout>
        <Box sx={{
          backgroundImage: `url(https://wallpapers.com/images/high/cartoon-nba-players-1024-x-768-bfvikqbe832rsbmg.webp)`, backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: 'auto', padding: "10rem 0px"
        }}>


          <Box>
            <Grid container spacing={5} sx={{ padding: "0px 10rem" }}>
              <Grid item sm={6}>
                <Card sx={{ background: "#fecaca", minWidth: 175 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                      Login
                    </Typography>
                    <Typography variant="h5" component="div">

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Login makes easy access to all our Basketball players.

                    </Typography>
                    <Typography variant="body2">
                      New user?
                      <Link to='/register'>Register Here</Link>

                    </Typography>
                  </CardContent>

                </Card>

              </Grid>
              <Grid item sm={6}>
                
                <Card sx={{ minWidth: 175, }}>
                <div style={{display:"flex",justifyContent:"center", color:"#14b8a6",background:"#e0f2fe"}}><h1>Login</h1></div>
                  <CardContent>
                    <Box component="form" onSubmit={SubmitData}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <TextField id="outlined-basic" label="Email" type='email' variant="outlined" fullWidth
                          placeholder='Enter your Email Address' onChange={ChangeValue} value={login.email} name='email'
                          error={error.email} />
                      </Typography>
                      <span style={{ color: "red" }}>{error.email}</span>

                      <FormControl  variant="outlined" fullWidth sx={{marginTop:"1rem"}}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password" name='password' value={login.password}
                          onChange={ChangeValue} error={error.password} label="Password" 
                          type={showPassword ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword} 
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          }
                          
                        />
                      </FormControl>
                      <span style={{ color: "red" }}>{error.password}</span>

                      <div style={{display:"flex",justifyContent:"center",marginTop:"1rem"}}> <Button type='submit' variant='contained' sx={{ background: '#818cf8', color: "#1e1b4b" }}>
                        {load?(
                            <ClipLoader color="#57dad6" />
                        ):(
                            <>Login</>
                        )
}</Button></div>
                    </Box>
                   



                  </CardContent>

                </Card>


              </Grid>

            </Grid>
          </Box>



        </Box>
      </Layout>

    </>
  )
}

export default Login
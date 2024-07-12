import React, { useState } from 'react'

import { Box, Button, Card, CardContent, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import img2 from '../../img/technical-training-blogs-compilation.webp'
import { Link, useNavigate } from 'react-router-dom'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import Layout from '../Common/Layout'
import { RegisterApi } from '../Api'

const Register = () => {
  const SetValue = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    first_school: '',
    image: null
  }
  const [formData, setFormData] = useState(SetValue);
  const [image, setImage] = useState()
  const [load, setLoader] = useState(false)
  const [error, setError] = useState({})

  const Navigate = useNavigate()

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const Validation = () => {
    let error = {}

    if (!formData.name) {
        error.name = "Name is Required!"
    }
    if (!formData.email) {
        error.email = "Email is Required!"
    }
    else if (
        !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData.email)
    ) {
        error.email = "Enter a valid Email!"
    }
    if (!formData.mobile) {
        error.mobile = "Number is Required!"
    }
    else if (formData.mobile.length < 10) {
        error.mobile = "Number should be 10 digit!"
    }
    if (!formData.password) {
        error.password = "Enter a Valid Password!"
    }
    else if (formData.password.length < 6) {
        error.password = "Enter a Valid Password!"
    }
    if (!formData.first_school) {
        error.first_school = "Value is required!"
    }

    return error
}

const ChangeValue = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
    console.log(formData)

    if (name === "email") {
        if (value.length === 0) {
            setError({ ...error, email: "Email is Required!" })
            setFormData({ ...formData, email: '' })
        }
        else {
            setError({ ...error, email: '' })
            setFormData({ ...formData, email: value })
        }
    }

    if (name === "name") {
        if (value.length === 0) {
            setError({ ...error, name: "Name is Required!" })
            setFormData({ ...formData, name: '' })
        }
        else {
            setError({ ...error, name: '' })
            setFormData({ ...formData, name: value })
        }
    }

    if (name === "mobile") {
        if (value.length === 0) {
            setError({ ...error, mobile: "Number is Required!" })
            setFormData({ ...formData, mobile: '' })
        }
        else {
            setError({ ...error, mobile: '' })
            setFormData({ ...formData, mobile: value })
        }
    }

    if (name === "password") {
        if (value.length === 0) {
            setError({ ...error, password: "Password is required!" })
            setFormData({ ...formData, password: "" })
        }
        else {
            setError({ ...error, password: "" })
            setFormData({ ...formData, password: value })
        }
    }

    if (name === "first_school") {
        if (value.length === 0) {
            setError({ ...error, first_school: "Value is required!" })
            setFormData({ ...formData, first_school: "" })
        }
        else {
            setError({ ...error, first_school: "" })
            setFormData({ ...formData, first_school: value })
        }
    }
}

const SubmitData = async (event) => {
    event.preventDefault();
    setError(Validation())

    let SubmitValue = Validation()


    const SubmitData = new FormData();
    SubmitData.append("name", formData.name)
    SubmitData.append("email", formData.email)
    SubmitData.append("mobile", formData.mobile)
    SubmitData.append("password", formData.password)
    SubmitData.append("first_school", formData.first_school)
    SubmitData.append("image", image)

    if (Object.keys(SubmitValue).length === 0) {
        setLoader(true)
        const Response = await RegisterApi(SubmitData)
        console.log("register", Response)

        if (Response.data.status === true) {
            Navigate('/login')
            toast.success(Response.data.messege)
        }
        setLoader(false)

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
                      Sign Up
                    </Typography>
                    <Typography variant="h5" component="div">

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Sign up with us and explore the world full of Best players.

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nemo facilis ab dolor tempora vero, laboriosam quod molestiae tempore deleniti consectetur. Accusamus ad aperiam hic cumque quae voluptas porro doloribus.

                    </Typography>
                    <Typography variant="body2">
                      Already have an account?
                      <Link to='/login'>Login Here</Link>

                    </Typography>

                  </CardContent>

                </Card>

              </Grid>
              <Grid item sm={6}>

                <Card sx={{ minWidth: 175, }}>
                  <div style={{ display: "flex", justifyContent: "center", color: "#14b8a6", background: "#e0f2fe" }}><h1>Sign Up</h1></div>
                  <CardContent>
                    <Box component="form" onSubmit={SubmitData}>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <TextField id="outlined-basic" label="Name" type='text' variant="outlined" fullWidth
                          placeholder='Enter your name' onChange={ChangeValue} value={formData.name} name='name'
                          error={error.name} />
                      </Typography>
                      <span style={{ color: "red" }}>{error.name}</span>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <TextField id="outlined-basic" label="Email" type='email' variant="outlined" fullWidth
                          placeholder='Enter your Email Address' onChange={ChangeValue} value={formData.email} name='email'
                          error={error.email} />
                      </Typography>
                      <span style={{ color: "red" }}>{error.email}</span>

                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <TextField id="outlined-basic" label="Phone" type='text' variant="outlined" fullWidth
                          placeholder='Enter your phone No' onChange={ChangeValue} value={formData.mobile} name='mobile'
                          error={error.mobile} />
                      </Typography>
                      <span style={{ color: "red" }}>{error.mobile}</span>
                      
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <TextField id="outlined-basic" label="first_school" type='text' variant="outlined" fullWidth
                          placeholder='Enter your first school' onChange={ChangeValue} value={formData.first_school} name='first_school'
                          error={error.first_school} />
                      </Typography>
                      <span style={{ color: "red" }}>{error.first_school}</span>

                      <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password" name='password' value={formData.password}
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

                      <div class="form-group">
                        <label for="exampleFormControlFile1">Upload images</label>
                        <input type="file" class="form-control" id="exampleFormControlFile1" onChange={(event) => {
                          setImage(event.target.files[0])
                        }} name='photo' accept="photo/*" />

                        {image !== "" && image !== undefined && image !== null ? (
                          <img
                            style={{ height: "180px" }}
                            src={URL.createObjectURL(image)}
                            alt=""
                            className="upload-img"
                          />
                        ) : (
                          <>{image === "" && <p>Drag or drop content here</p>}</>
                        )
                        }
                      </div>



                      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}> <Button type='submit' variant='contained' sx={{ background: '#818cf8', color: "#1e1b4b" }}>
                        {load? (
                          <ClipLoader color="#57dad6" />
                        ) : (
                          <>Signup</>
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

export default Register
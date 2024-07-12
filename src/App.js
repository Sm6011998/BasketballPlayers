import React from 'react'
import BasketBallPlayerCard from './Components/BasketBallPlayerCard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Components/Public/Login';
import Register from './Components/Public/Register';


const App = () => {
  const PrivateRouteAuth = ({children})=>{
    const token = localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ?(
      children
    ):(
      <>
      <Navigate to='/login'/>
      </> 
    )

  }
  const PrivateRoute = [
    {
      path:"/",
      ele:<BasketBallPlayerCard/>
    }
  ]
  const PublicRoute = [
    {
      path:"/login",
      ele:<Login/>
    },
    {
      path:"/register",
      ele:<Register/>
    },
  ]

  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        {
          PublicRoute.map((item)=>{
            return(
              <>
              <Route
              path={item.path}
              element={item.ele}/>
              </>
            )
          })
        }
        {
          PrivateRoute.map((item)=>{
            return(
              <>
              <Route
              path={item.path}
              element={<PrivateRouteAuth>{item.ele}</PrivateRouteAuth>}/>
              
              </>
            )
          })
        }
      
      </Routes>
    </Router>
   


    
    
    </>
  )
}

export default App
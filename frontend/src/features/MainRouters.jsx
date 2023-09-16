import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Layout from '../component/Layout'
import Dashboard from './dashboard/Router'
import Login from './login/Router'
import Product from './product/Router'
import Register from './register/Router'

const MainRouters = () => {
  const authUser = localStorage.getItem("user");

  return (
    <BrowserRouter>
      {
        authUser ? <Routes>
          <Route path='/*' element={<Others />} />
        </Routes>
          : <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register/*' element={<Register />} />
          </Routes>
      }
    </BrowserRouter>
  )
}

export default MainRouters;



function Others() {
  const authUser = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {

    if (!authUser) {
      navigate("/")
    }
  }, [authUser])
  return (
    <>
      {authUser ?
        <><Layout>
          <Routes>
            {/* dashboard all route */}
            <Route path='/dashboard/*' element={<Dashboard />}></Route>
            <Route path='/product/*' element={<Product />}></Route>
          </Routes>
        </Layout></>
        : 
        <Routes>
          <Route path='/' element={<Login />} />
         </Routes>
        }

    </>
  )
}



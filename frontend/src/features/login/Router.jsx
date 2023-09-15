import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Login from './presenter/Index'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  )
}

export default Router

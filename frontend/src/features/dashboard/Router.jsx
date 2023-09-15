import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Dashboard from './presenter/Index'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  )
}

export default Router

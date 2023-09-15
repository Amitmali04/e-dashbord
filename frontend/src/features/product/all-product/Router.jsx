import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Product from './presenter/Index'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Product />} />
    </Routes>
  )
}

export default Router

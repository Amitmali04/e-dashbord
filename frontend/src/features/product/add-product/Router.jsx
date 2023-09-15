import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Add_Product from './presenter/Index'
import Edit_Product from './presenter/Edit_Product'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Add_Product />} />
      {/* <Route path='/' element={<Edit_Product />} /> */}
    </Routes>
  )
}

export default Router

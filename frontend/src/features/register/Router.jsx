import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Rigister from './presenter/Index'


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Rigister />} />
    </Routes>
  )
}

export default Router

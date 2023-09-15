import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  Product from './all-product/Router'
import Add_Product from './add-product/Router'
import Edit_Product from './add-product/Router'


const Router = () => {
  return (
    <Routes>
      <Route path='/all-product/*' element={<Product />} />
      <Route path='/add-product/*' element={<Add_Product />} />
      {/* <Route path='/edit-product/:id*' element={<Edit_Product />} /> */}
    </Routes>
  )
}

export default Router

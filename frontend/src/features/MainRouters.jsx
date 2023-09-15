import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../component/Layout'
import Dashboard from './dashboard/Router'
import Login from './login/Router'
import Product from './product/Router'
import Rigister from './register/Router'

const MainRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Rigister />} />
        <Route path='/*' element={<Others />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouters


function Others() {

  const { authUser } = useUserAuth();
  const navigate = useNavigate()

  useEffect(() => {
      if (!authUser) {
          navigate("")
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
              : ""}

      </>
  )
}
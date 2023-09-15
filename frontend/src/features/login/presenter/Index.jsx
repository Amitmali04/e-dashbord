import React, { useState } from 'react'
import { InputField } from '../../../component/InputField'
import { Button } from '../../../component/Button'
import OfficeImage from '../../../assets/Office work _Outline.svg'
import { NavLink } from 'react-router-dom'

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password:""
  })
  return (
    <section className='flex h-screen bg-blue-500'>
      <div className="grid md:h-[85%] md:w-[85%] self-center max-w-screen-xl px-4 py-4 mx-auto bg-white rounded-lg md:rounded-3xl xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
          <img src={OfficeImage} alt="Image" />
        </div>
        <div className="mx-auto place-self-center lg:col-span-5 border-2 shadow-xl ">
          <div className="w-full max-w-md p-5 sm:p-6 md:p-9 dark:bg-gray-800 dark:border-gray-700">
           
              {/* <img src={visaIcon} className='h-[45px] mx-auto' alt="FlowBite Logo" /> */}
              <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white">Login !</h5>
              <div className="mb-2">
                <InputField label="Email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  inputProps={{ type: 'email', placeholder: 'Jhon@gmail.com' }} />
              </div>
              <div className="mb-2">
                <InputField label="Password"
                  value={values.password}
                  onChange={(e) => setValues({ ...values, password: e.target.value })}
                  inputProps={{ type: 'password', placeholder: 'Password' }} />
              </div>

              <div className='text-sm text-red-600'>
                {/* {errorMessage != '' ? errorMessage : ''} */}
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button >Login</Button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Forgot Password?
                </a>
              </div>
              
              <p className='mt-4 '>Create new account ? <NavLink to="/register">Sign Up</NavLink>.</p>
              
          
          </div>
        </div>
      </div>
    </section>
  )
}

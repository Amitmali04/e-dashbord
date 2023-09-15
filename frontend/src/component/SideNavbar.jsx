import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const SideNavbar = ({ navigation }) => {
  const [localNavigations, setLocalNavigations] = useState([])
  const [currentDept, setCurrentDept] = useState("")


  useEffect(() => {
    setLocalNavigations(navigation)
  }, [navigation])

  console.log(localNavigations)


  const sidebarToggle = (
    <button data-drawer-target="logo-sidebar" onClick={() => {
      const target = document.getElementById('logo-sidebar')

      if (target) {
        if (target.classList.contains('-translate-x-full')) {
          target.classList.remove('-translate-x-full')
        } else {
          target.classList.add('-translate-x-full')
        }
      }
    }} data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="absolute inline-flex items-center p-2 text-sm text-gray-500 rounded-lg right-1 top-1 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">

      <span className="sr-only" >Close sidebar</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" fillRule="evenodd" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path>
      </svg>
    </button>
  )

  const companyIcon = (<h1 className="h-8 ml-5 my-[25px]" >CompanyLogo</h1>)

  const scrollableMenuArea = (
    <div className='h-full px-3 pb-4 overflow-y-auto bg-main-bg dark:bg-gray-800'>
      <p className='text-sm ml-3 text-[#919191]'>Menu</p>
      <ul className="space-y-2 font-medium">
        {localNavigations.map((ele) => (
          <>
            {ele.children?.length ?
              <CustomSidebarbuttonMultiLevel
                currentDept={currentDept}
                navigation={ele}
                changeCurrentDept={(value) => setCurrentDept(value)}
              />
              :
              <CustomSidebarButton
                navigation={ele}
                currentDept={currentDept}
                changeCurrentDept={(value) => setCurrentDept(value)}
              />
            }
          </>

        ))}
        <div className='h-[250px]'>

        </div>

      </ul>


    </div>
  )

  return (
    <aside id="logo-sidebar" className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full drop-shadow-sidebar bg-main-bg sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700' aria-label='Sidebar'>
      {sidebarToggle}{companyIcon}
      {scrollableMenuArea}

    </aside>
  )

}



function CustomSidebarButton({ currentDept, navigation, changeCurrentDept }) {
  const classStyleSelected = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-[#4B4B4B] bg-[#EEEEEE] text-[#414141]";
  const classStyleNonSelected = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-[#4B4B4B] hover:bg-[#EEEEEE] hover:text-[#414141]"

  return (<li>
    <NavLink to={navigation.path ?? ""} onClick={() => {
      if (currentDept.path === navigation.name) {
        changeCurrentDept('')
      } else {
        changeCurrentDept(navigation.name)
      }
    }} className={currentDept.name == navigation.name ? classStyleSelected : classStyleNonSelected}>
      {navigation.icon == '' ? <svg aria-hidden="true" className="w-6 h-6 text-[#4B4B4B] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
        : <span>{navigation.icon}</span>}
      <span className="ml-3">{navigation.name}</span>
    </NavLink>
  </li>)
}


function CustomSidebarbuttonMultiLevel({ currentDept, navigation, changeCurrentDept }) {

  const [changeAngle , setChangeAngle] = useState(false);

  const classStyleNonselect = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-[#4B4B4B] hover:bg-[#EEEEEE] hover:text-[#414141]";
  const classStyleSelected = "flex items-center w-full p-2 transition duration-75 rounded-sm group  text-[#4B4B4B] bg-[#EEEEEE] text-[#414141]";

  return (
    <li>
      <button type='button' onClick={() => {
        if (currentDept == navigation.name) {
          changeCurrentDept('')  
        } else {
          changeCurrentDept(navigation.name)
         
        }
      }} className={currentDept == navigation.name ? classStyleSelected : classStyleNonselect} aria-controls={navigation.name} data-collapse-toggle={navigation.name}>
        <span>{navigation.icon}</span>
        <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{navigation.name}</span>
        <svg sidebar-toggle-item className={`w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
      {
        navigation.children?.length && currentDept == navigation.name ?
          <ul className='py-2 space-x-2 mt-[-2] bg-[f8f8f8]' id={navigation.name}>
            {
              navigation.children.map((ele) => (
                <li className="flex items-center w-full p-2  transition duration-75 pl-11 group rounded-sm text-[#4B4B4B]  hover:bg-[#EEEEEE] hover:text-[#414141]">
                  <NavLink to={ele.path ?? " "} >
                    {ele.name}
                  </NavLink>
                </li>
              ))
            }
          </ul> : ""
      }
    </li>
  )
}

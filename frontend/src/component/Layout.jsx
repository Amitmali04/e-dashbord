import React from 'react'
import {SideNavbar} from './SideNavbar'
import {navigation} from '../Navigation'
import {MainContent } from './CustomComponents'

const Layout = ({children}) => {
  console.log(navigation)
  return (
    <div >
        {/* Sidebar */}
        <SideNavbar navigation={navigation}/>


        {/* main containt */}
      
        <MainContent >  
        {children}
       </MainContent>
    


        
      
    </div>
  )
}

export default Layout

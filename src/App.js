import React, {useState} from 'react'
import NavBar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar'
import Main from './components/main/Wrapper'

const App = () =>{
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openSidebar = ()=>{
    setSidebarOpen(true)
  }

  const closeSidebar = ()=>{
    setSidebarOpen(false)
  }
  return (
    <div className="container">
    <NavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Main/>
      <SideBar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
}

export default App;

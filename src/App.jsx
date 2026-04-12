import { useEffect, useState } from 'react'
import './App.css'
import Builder from './components/Builder'
import Navbar from './components/landingPage/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Register from './components/landingPage/Register'
import Login from './components/landingPage/Login'
import UserNavbar from './components/user/UserNavbar'
import Tree from './components/user/Tree'
import ViewPage from './components/user/ViewPage'
import Onboarding from './pages/Onboarding'
import { UserProvider } from './context/UserContext'
import Profile from './components/profile/Profile'
import HomePage from './components/landingPage/HomePage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [storedUser, setStoredUser] = useState("")
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem('userInfo');
    if (user) {
      try {
        const userData = JSON.parse(user);
        console.log(user, "Ha hum hi hai");
        setStoredUser(userData);
      } catch (err) {
        console.error("Invalid User Data", err);
        localStorage.removeItem('userInfo');
      }
    }
  }, [location.pathname])

  // Set in your that When you have to Set value or See what the value of setVaraible is, than you can use the below code and Whenever Value of that variable changes it will show the value
  useEffect(() => {
    console.log("This is about the Sotred User ######", storedUser);
  }, [storedUser])

  return (
    <>
      <UserProvider>
        <div className="flex flex-col">

          {/* <Tree /> */}
          {/* Logic for Navbar */}
          {location.pathname.startsWith('/user') ? (<UserNavbar />)
            : ['/register', '/login', '/'].some(path => location.pathname === path) ? (<Navbar />) : null}

          <Routes>
            {/* LadingPage */}

            {/* Public Routes */}
            <Route path='/' element={<HomePage/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            {/* View page */}
            <Route path="/:slug" element={<ViewPage />} />

            {/* user */}
            <Route path="/user-onboarding" element={<Onboarding />} />
            <Route path="/user-dashbroad" element={<h1>User Dashboard</h1>} />
            <Route path="/user-custom-builder/:pageId" element={<Builder />} />
            <Route path='/user-profile' element={<Profile/>} />
            <Route path='/user-tree' element={<Tree />} />
            <Route path='/user-settings' element={<h1>settings</h1>} />
            <Route path="/user-analytics" element={<h1> Anakytics </h1>} />
          </Routes>

        </div>
      </UserProvider>

        {/* Your routes/components */}
        <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App

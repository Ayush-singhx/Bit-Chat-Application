import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import SettingPage from './Pages/SettingPage'
import ProfilePage from './Pages/ProfilePage'
import { useAuthStore } from './store/useAuthStore.js'
import { useEffect } from 'react'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const { authUser, checkAuth, ischeckingAuth, onlineUsers } = useAuthStore()

  console.log({ onlineUsers });
  
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({ authUser });

  if (ischeckingAuth && !authUser) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className='size-6 animate-spin' />
      </div>
    )
  }
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={authUser? <HomePage />: <Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser? <SignUpPage /> : <Navigate to="/"/>} />
        <Route path="/login" element={!authUser? <LoginPage /> : <Navigate to="/"/>} />
        <Route path="/profile" element={authUser? <ProfilePage /> : <Navigate to="/login"/>} />
      </Routes>

      <Toaster />
    </>
  )
}

export default App
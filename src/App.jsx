import React from 'react'
import { NavbarComponent } from './components/NavbarComponent'
import { Home } from './routes/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SearchPage } from './routes/SearchPage'
import { LoginPage } from './routes/LoginPage'
import { RegisterPage } from './routes/RegisterPage'
import { AuthProvider } from './context/AuthContext.jsx'
import { ProtectedRouteComponent } from './components/ProtectedRouteComponent'






export const App = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/search' element={<ProtectedRouteComponent><SearchPage></SearchPage></ProtectedRouteComponent>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/*' element={<Navigate to="/" />}></Route>
        </Routes>
      </AuthProvider>
    </>
  )
}


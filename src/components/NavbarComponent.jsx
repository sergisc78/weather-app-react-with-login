import React from 'react'
import UserImage from '../assets/img/user.png'
import { NavLink } from 'react-router-dom'





export const NavbarComponent = () => {



    return (

        <header>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="nav-link active " to={'/'} >Weather Search App</NavLink>
                    <NavLink className="nav-link user-icon" to={'/login'} title='Login' > <img src={UserImage} alt="userImage" height={30} width={30} /></NavLink>
                </div>
            </nav>
        </header>



    )
}
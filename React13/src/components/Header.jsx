import React from "react";
import {NavLink,Outlet} from 'react-router'
function Header() {
    return (
        <>
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold cursor-pointer">
                    Logo
                </div>

                {/* Menu */}
                <ul className="flex gap-8 text-lg">
                    <NavLink
                        // className="hover:text-blue-400 cursor-pointer transition"
                        className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-blue-400 cursor-pointer transition'}
                        to="/">Home</NavLink>
                    <NavLink 
                        className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-blue-400 cursor-pointer transition'}
                        to="/about">About</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-blue-400 cursor-pointer transition'}
                        to="/login">Login</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-yellow-400' : 'hover:text-blue-400 cursor-pointer transition'} to="/College">College</NavLink> 
                </ul>

            </div>

            </header>
            <Outlet/> 
        </>
        
    );
}

export default Header;
import React from 'react'
import { Link } from "react-router-dom"
import HeaderSlider from './HeaderSlider'

import "./Header.css"

function Header() {
    return (
        <>
            <div className='header'>
                <div className="header-container">
                    <div className="navbar">
                        <div className="logo">Teachy</div>
                        <nav className="navbar">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Contact</a></li>
                                <li className='sign-in'>
                                    <Link to={"/dashboard"}>Sign In</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-message">
                        <h1>Manage your classroom.</h1>
                        <h2>Start your journey with Teachy!</h2>
                    </div>
                </div>
            </div>



            {/* The slider is set as position absolute 
            and positioned behind the Header  */}
            <HeaderSlider />



        </>
    )
}

export default Header
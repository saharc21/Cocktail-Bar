import React from 'react'
import Header from '../Components/header/Header'
import Footer from '../Components/footer/Footer'
import './style.css';

const Layout = (props) => {
    return (
        <div className="container">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout


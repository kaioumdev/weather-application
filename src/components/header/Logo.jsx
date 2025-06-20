import React from 'react'
import LogoImage from "../../assets/logo.svg"

const Logo = () => {
    return (
        <a href="/">
            <img className="h-9" src={LogoImage} alt="Weather App" />
        </a>
    )
}

export default Logo
import React from "react";
import { NavBar } from "./NavBar";
import { Socials } from "./Socials";
import glasses from "../assets/img/logos/glasses.svg"
import logoName from "../assets/img/logos/logoName.svg"

export const Header =() =>{
    return <header className="h-20 flex bg-black items-center fixed top-0 w-full text-white z-10 ">
        <div className="container mx-auto h-full flex items-center justify center lg:justify-between">
            <img src={logoName} className="w-1/4 hidden md:block lg:block"/>
            <img src={glasses} className="w-1/4 lg: hidden md:hidden sm:block"/>
            <NavBar/>
            <Socials/>
        </div>
    </header>
}
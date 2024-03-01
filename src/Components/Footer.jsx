import React from "react";
import { Socials } from "./Socials";
import logoName from "../assets/img/logos/logoName.svg"

export const Footer =() =>{
    return( 
    <footer className="bg-primary py-12">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
                <div className="flex space-x-6">
                    <Socials/>
                </div>
                <img className="w-1/4" src={logoName}/>
                <p>&copy; 2024 Aman Shukla. All rights reserved</p>
            </div>
        </div>
    </footer>
    );
};
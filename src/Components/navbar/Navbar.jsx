import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Menu = () =>(
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Study</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

function Navbar(){
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <div className="gpt3_navbar">
            <div className="gpt3_navbar-links">
                <div className="gpt3_navbar-links-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="gpt3_navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3_navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3_navbar-menu">
                {
                toggleMenu
                ?
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                :
                    < RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                }
                { toggleMenu &&(
                    <div className="gpt3_navbar-menu_container scale-up-center">
                        <div className="gpt3_navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3_navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar;
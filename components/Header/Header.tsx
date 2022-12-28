import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../../images/chetjogiaprofile.png"
import {useState} from "react"


function Header() {

  const [active, setActive] = useState(false)

  function burgerHandler(){
    setActive(!active)
    
  }

  return (
    <div className="header-container z-50 sticky w-full top-0 flex justify-between bg-midnight text-white">
      <div className="flex logo-container ml-10 justify-center items-center gap-5 h-16">
       <Link href="#intro" scroll={false}> <Image className="logo-image rounded-full w-11  border-light-coral border border-solid" src={profile} alt="logo" /></Link>
       <Link href="#intro" scroll={false}><h1 className="text-xl">Chetan Jogia</h1></Link>
      </div>
      <nav className={active ? "nav-bar active flex gap-10 self-center mr-10 flex-wrap overflow-hidden" : "nav-bar flex gap-10 self-center mr-10 flex-wrap overflow-hidden"}>
        <Link href="#intro" scroll={false} onClick={burgerHandler}>Home</Link>
        <Link href="#projects" scroll={false} onClick={burgerHandler}>Projects</Link>
        <Link href="#CV" scroll={false} onClick={burgerHandler}>CV</Link>
        <Link href="#contact" scroll={false} onClick={burgerHandler}>Contact</Link>
      </nav>
      <div onClick={burgerHandler} className={active ? "hamburger active":"hamburger"}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

    </div>
    
  );
}

export default Header;

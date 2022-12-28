import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import profile from "../images/chetjogiaprofile.png"

function Header() {
  return (
    <div className=" z-10 sticky w-full top-0 flex justify-between bg-midnight text-white">
      <div className="flex logo-container ml-10 justify-center items-center gap-5 h-16">
        <Image className="logo-image rounded-full w-11  border-light-coral border border-solid" src={profile} alt="logo" />
        <h1 className="text-xl">Chetan Jogia</h1>
      </div>

      <nav className="flex gap-10 self-center mr-10 flex-wrap overflow-hidden">
        <Link href="#intro" scroll={false}>Home</Link>
        <Link href="#projects" scroll={false}>Projects</Link>
        <Link href="#CV" scroll={false}>CV</Link>
        <Link href="#contact" scroll={false}>Contact</Link>
      </nav>
    </div>
  );
}

export default Header;

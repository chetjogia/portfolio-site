import * as React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="sticky w-full top-0 flex justify-between bg-midnight text-white">
      <div className="flex logo-container ml-10 justify-center items-center gap-10 h-16">
        <img src="" alt="logo" />
        <h1 >Chetan Jogia</h1>
      </div>

      <nav className="flex gap-10 self-center mr-10 flex-wrap overflow-hidden">
        <Link href="/">Home</Link>
        <Link href="/Project">Projects</Link>
        <Link href="/CV">CV</Link>
        <Link href="Contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;

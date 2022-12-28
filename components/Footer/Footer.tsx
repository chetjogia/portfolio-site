import * as React from "react";
import Link from "next/link";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className="sticky w-full bottom-0 flex  justify-center items-center bg-midnight text-white h-16 m-0">
      <div className={styles.buttons}>
        <Link className={styles.link} href="https://github.com/chetjogia" target="_blank"><FaGithub  className={styles.icon} /></Link>
        <Link className={styles.link} href="https://linkedin.com/in/chetanjogia" target="_blank"><FaLinkedin className={styles.icon}/></Link>
        <Link className={styles.link} href="https://www.instagram.com/chetjogiaguitar/" target="_blank"><FaInstagram className={styles.icon}/></Link>
        </div>
    </div>
  );
}

export default Footer;

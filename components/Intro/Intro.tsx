import styles from "./intro.module.css";
import Image from "next/image";
import profile from "../../images/chetjogiaprofile.png"
import {SlArrowDown} from 'react-icons/sl'
import Link from "next/link";

function Intro() {
  return (
    <div id="intro" className={styles["container"]}>
      <div className={styles.info}>
        <h2 className={styles.introduction}>
          Hey I&apos;m, <span className="text-light-coral">Chetan Jogia</span>
        </h2>

        <h1 className={styles["job-role"]}>Full-Stack Developer</h1>

        <p className={styles["paragraph"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          risus hendrerit, varius augue vitae, pharetra orci. Integer pretium
          ligula sed libero aliquet gravida.
        </p>
      </div>
      <div className={styles["button-div"]}>
       {/*  <button className={styles.button}>Contact Me</button> */}
       {/*  <p className={styles.seemore}>See More</p> */}
        <Link className="w-8" href='#projects' scroll={false}><SlArrowDown className={styles.downarrow}/></Link>
      </div>
      <div className={styles["profile-div"]}>
        <Image className={styles["image-div"]} src={profile} alt="profile"/>
        <div className={styles["square-border"]}></div>
      </div>
    </div>
  );
}

export default Intro;

import styles from "./projects.module.css";
import Image from "next/image";
import Card from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";
import Link from "next/link";
import {SlArrowDown} from 'react-icons/sl'

function Projects() {
  return (
    <div id="projects" className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Projects</h1>
        <p>
          In my spare time, I enjoy working on small side-projects, consolidating the skills I&apos;ve learnt whilst build upon them by exploring new technologies. These applications also allow me to express my creativity by allowing me to try new ideas that can address real-world problems.
        </p>
      </div>
    <CardContainer/>
    <div className={styles["button-div"]}>
       {/*  <button className={styles.button}>Contact Me</button> */}
        <Link className="w-8" href='#CV' scroll={false}><SlArrowDown className={styles.downarrow}/></Link>
      </div>
    </div>
  );
}

export default Projects;

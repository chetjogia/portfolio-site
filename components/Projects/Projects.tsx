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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          risus hendrerit, varius augue vitae, pharetra orci. Integer pretium
          ligula sed libero aliquet gravida.
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

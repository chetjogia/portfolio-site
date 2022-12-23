import Image from "next/image";
import projectImage1 from "../../images/chetjogiasiteimage.png";
import styles from "./Card.module.css";
import {FaGithub} from "react-icons/fa"
import {MdOutlineLaunch} from "react-icons/md"

function Card() {
  return (
    <div className={styles["card-content"]}>
   <Image src={projectImage1} alt="project1" className={styles["card-image"]} /> 
      <div className={styles["card-body"]}>
      
        <h3 className={styles["project-header"]}>Project Title</h3>
        <p className={styles["project-body"]}>
          This project was created using a PERN stack and I learnt how to do a
          lot of things
        </p>
        <div className={styles["button-container"]}>
          <button className={styles["open-git"]}><FaGithub size="auto" className={styles["icon"]}/></button>
          <button className={styles["open-site"]}><MdOutlineLaunch size="auto" className={styles["icon"]}/></button>
     
        </div>
      </div>
    </div>
  );
}

export default Card;

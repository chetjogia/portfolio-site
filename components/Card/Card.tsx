import Image from "next/image";
import projectImage1 from "../../images/chetjogiasiteimage.png";
import styles from "./Card.module.css";
import {FaGithub} from "react-icons/fa"
import {MdOutlineLaunch} from "react-icons/md"
import {IoConstructOutline} from 'react-icons/io5'
import {RxDoubleArrowUp} from 'react-icons/rx'

function Card() {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["image-div"]}>
        <IoConstructOutline size="auto" className={styles["construction"]}/>
{/*       <Image src={projectImage1} alt="project1" className={styles["card-image"]} />  */}
      </div>

      <div className={styles["card-body"]}>
        <div className={styles["text"]}>
          <div className={styles["project-header-div"]}>
          <h3 className={styles["project-header"]}>Project Coming Soon</h3> <RxDoubleArrowUp size="auto" className={styles["uparrow"]}/>
          </div>
    
        <p className={styles["project-body"]}>
         Coming soon
        </p>  

        </div>
     
        <div className={styles["button-container"]}>
          <button className={styles["open-git"]}><FaGithub size="auto" className={styles["icon"]}/></button>
          <button className={styles["open-site"]}><MdOutlineLaunch size="auto" className={styles["icon"]}/></button>
     
        </div>
      </div>
    </div>
  );
}

export default Card;

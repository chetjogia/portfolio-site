import Image, { StaticImageData } from "next/image";
import projectImage1 from "../../images/chetjogiasiteimage.png";
import styles from "./Card.module.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLaunch } from "react-icons/md";
import { IoConstructOutline } from "react-icons/io5";
import { RxDoubleArrowUp } from "react-icons/rx";
import Link from "next/link";

interface Project {
  projectHeader: string;
  projectBody: string;
  techStack:string;
  image: StaticImageData;
  github: string;
  website:string;
}

function Card(props: Project) {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["image-div"]}>
     {/*    <IoConstructOutline size="auto" className={styles["construction"]} /> */}
              <Image src={props.image} alt="project1"  style={{objectFit:"cover"}}/> 
      </div>

      <div className={styles["card-body"]}>
        <div className={styles["text"]}>
          <div className={styles["project-header-div"]}>
            <h3 className={styles["project-header"]}>Project: {props.projectHeader}</h3>{" "}
            <RxDoubleArrowUp size="auto" className={styles["uparrow"]} />
          </div>

          <p className={styles["project-body"]}>{props.projectBody}</p>
          <p className={styles["project-tech"]}><i>Tech Stack:</i> {props.techStack}</p>
        </div>

        <div className={styles["button-container"]}>
          <Link target="_blank" href={props.github} className={styles["open-git"]}>
            <FaGithub size="auto" className={styles["icon"]} />
          </Link>
          <Link target="_blank" href={props.website} className={styles["open-site"]}>
            <MdOutlineLaunch size="auto" className={styles["icon"]} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

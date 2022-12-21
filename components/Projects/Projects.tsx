import styles from "./projects.module.css";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
function Projects() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Projects</h1>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
          risus hendrerit, varius augue vitae, pharetra orci. Integer pretium
          ligula sed libero aliquet gravida.
        </p>
      </div>{" "}
      <div className={styles["carousel"]}>
        <Carousel />
      </div>
    </div>
  );
}

export default Projects;

import styles from "./cv.module.css";
import WorkExperience from "../WorkExperience/WorkExperience";

function Intro() {
  return (
    <div id="CV" className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>Curriculum Vitae</h1>
      </div>
      <div className={styles["work-exp"]}>
        <div className={styles["exp-1"]}>
          <WorkExperience/>
        </div>
        <div className={styles["exp-2"]}>
          <WorkExperience/>
        </div>
        <div className={styles["exp-3"]}>
          <WorkExperience/>
        </div>
        <div className={styles["exp-4"]}>
          <WorkExperience/>
        </div>
        <div className={styles["exp-5"]}>
          <WorkExperience/>
        </div>

      </div>
    </div>
  );
}

export default Intro;

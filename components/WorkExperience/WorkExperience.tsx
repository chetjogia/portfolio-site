import styles from "./WorkExperience.module.css"

function WorkExperience() {
  return (
    <div className={styles["work-exp"]}>
      <div className={styles["header"]}>
        <h4>UBS</h4>
        <p>16/02/2022-18/02/2022</p>
      </div>
      <div className={styles["work-body"]}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget risus hendrerit, varius augue vitae, pharetra orci. Integer pretium ligula sed libero aliquet gravida.
        </p>
      </div>
    </div>
  );
}

export default WorkExperience;

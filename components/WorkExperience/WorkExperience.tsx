import styles from "./WorkExperience.module.css"

interface Experience{
  title: string;
  date: string;
  description: string;
}


function WorkExperience(props:Experience) {
  return (
    <div className={styles["work-exp"]}>
      <div className={styles["header"]}>
        <h4>{props.title}</h4>
        <p>{props.date}</p>
      </div>
      <div className={styles["work-body"]}>
        <p>
        {props.description}
        </p>
      </div>
    </div>
  );
}

export default WorkExperience;

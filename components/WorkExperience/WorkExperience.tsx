import styles from "./WorkExperience.module.css"

interface Experience{
  title: string;
  location:string;
  date: string;
  description: string;
}


function WorkExperience(props:Experience) {
  return (
    <div className={styles["work-exp"]}>
      <div className={styles["header"]}>
        <div className={styles["header-title"]}>
        <h4>{props.title}</h4>
        <p>{props.location}</p>
        </div>
  
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

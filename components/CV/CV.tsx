import styles from "./cv.module.css";
import WorkExperience from "../WorkExperience/WorkExperience";
import Link from "next/link";
import {SlArrowDown} from 'react-icons/sl'



function Intro() {


let coding_exp = {title: "Junior Software Developer - School Of Code", date:"09/2022-02/2023", description:"Having studied music and achieved a professional standard of playing the guitar over 10+ years, I decided to pursue my creative passion and become a session guitarist. Running a succesful self-employed business through performing, recording, producing and teaching." }

let musician_exp = {title: "Session Musician", date:"08/2016-09/2022", description:"Having studied music and achieved a professional standard of playing the guitar over 10+ years, I decided to pursue my creative passion and become a session guitarist. Running a succesful self-employed business through performing, recording, producing and teaching." }

let ubs_exp = {title: "Associate Credit Trader - UBS", date:"02/2013-08/2016", description:"Having gained a graduate offer in an extremely competitive internship, I began my career at UBS as a structured treasury trader. I subsequently moved to the Emerging Markets Credit Trading team, gaining experience in market making and risk management" }

let ucl_exp = {title: "Associate Credit Trader - UBS", date:"02/2013-08/2016", description:"Having gained a graduate offer in an extremely competitive internship, I began my career at UBS as a structured treasury trader. I subsequently moved to the Emerging Markets Credit Trading team, gaining experience in market making and risk management" }

let childhood_exp = {title: "Associate Credit Trader - UBS", date:"02/2013-08/2016", description:"Having gained a graduate offer in an extremely competitive internship, I began my career at UBS as a structured treasury trader. I subsequently moved to the Emerging Markets Credit Trading team, gaining experience in market making and risk management" }

  return (
    <div id="CV" className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>My Journey So Far...</h1>
      </div>
      <div className={styles["work-exp"]}>
        <div className={styles["exp-1"]}>
          <WorkExperience {...coding_exp}/>
        </div>
        <div className={styles["exp-2"]}>
          <WorkExperience {...musician_exp}/>
        </div>
        <div className={styles["exp-3"]}>
          <WorkExperience {...ubs_exp}/>
        </div>
        <div className={styles["exp-4"]}>
          <WorkExperience {...ucl_exp}/>
        </div>
        <div className={styles["exp-5"]}>
          <WorkExperience {...childhood_exp}/>
        </div>
        

      </div>
      <div className={styles["button-div"]}>
        <Link className="w-8" href='#contact' scroll={false}><SlArrowDown className={styles.downarrow}/></Link>
      </div>
    </div>
  );
}

export default Intro;

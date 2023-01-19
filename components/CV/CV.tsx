import styles from "./cv.module.css";
import WorkExperience from "../WorkExperience/WorkExperience";
import Link from "next/link";
import {SlArrowDown} from 'react-icons/sl'



function Intro() {


let coding_exp = {title: "Junior Software Developer", location:"School Of Code", date:"09/2022-02/2023", description:"I wanted to find a role that combines the technical and creative skills that I'd developed over my career. Having had experience with software development through an internship and my degree, I realised that a career in technology is the perfect place for these skills to meet. I then succesfully gained a space into a 16 week intensive bootcamp, in which I learned and used various technologies in order to begin a career as a Junior Full-Stack Software Engineer." }

let musician_exp = {title: "Session Musician - Guitarist", location:"UK", date:"08/2016-09/2022", description:"Having studied music and achieved a professional standard of playing the guitar over 10+ years, I decided to pursue my creative passion and become a session guitarist. Running a succesful self-employed business through performing, recording, producing and teaching." }

let ubs_exp = {title: "Associate Credit Trader", location: "UBS", date:"02/2013-08/2016", description:"Having gained a graduate offer in an extremely competitive internship, I began my career at UBS as a structured treasury trader. I subsequently moved to the Emerging Markets Credit Trading team, gaining experience in market making and risk management" }

let ucl_exp = {title: "Student - MSci Mathematics", location:"University College London", date:"10/2008-06/2012", description:"During my degree I was exposed to a wide variety of topics including Complex Analysis, Algebraic Topology, Financial Modelling and more. I thoroughly enjoyed approaching and solving complex problems and the sense of satisfaction that I gained from learning and applying theory to the real world. Having completed my Master's year I graduated with a 1st Class Honours" }

let childhood_exp = {title: "Student", location:"Trinity School Croydon", date:"Class of 2008", description:`I was fortunate enough during my childhood to be exposed to a wide variety of activities and experiences and this helped develop my interests from a young age. Of particular note I began training in Wing Chun Kung Fu, joined the Cricket and Swimming teams and began my journey into the Music world. My school career culminated in achieving 4A's at A-Levels and 9A*s and 1A at GCSE's.` }

  return (
    <div id="CV" className={styles["container"]}>
      <div className={styles["header"]}>
        <h1>My Journey So Far...</h1>
        <p>Click <Link href="/Chetan_Jogia_Resume_copy.pdf" target="_blank" className={styles["CV-download"]}>here</Link> to download full CV</p>
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
     {   <div className={styles["exp-5"]}>
          <WorkExperience {...childhood_exp}/>
        </div>}
        

      </div>
      <div className={styles["button-div"]}>
        <Link className="w-8" href='#contact' scroll={false}><SlArrowDown className={styles.downarrow}/></Link>
      </div>
    </div>
  );
}

export default Intro;

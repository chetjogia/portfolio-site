import Card from "../Card/Card";
import styles from "./CardContainer.module.css";
import utellum from "../../images/utellum_screenshot.png";
import homegrown from "../../images/homegrown_screenshot.png"
import Image, { StaticImageData } from "next/image";


interface Project{
  projectHeader: string;
  projectBody:string;
  projectSubheader:string;
  techStack:string
  image: StaticImageData;
  github: String;
  website: String;
}

function CardContainer() {
    let utellumProject =  {projectHeader: "Utellum", projectSubheader:"Peer-2-Peer Learning Platform", projectBody: "A one-week project with a brief to develop a web application that would benefit current and future boot-campers.", techStack:"React, Express, Node, postgreSQL, Jest, Supertest, React Testing Library, CSS", image: utellum, github: "https://github.com/chetjogia/bc13_w9_project-frontend-devindy", website:"https://shiny-lamington-ec7ea1.netlify.app/"};


    let monthProject =  {projectHeader: "Home-Grown", projectSubheader:"Urban Farming Community", projectBody: "Connecting land owners with people who'd like to farm tackling the cost of living crisis and sustainability", techStack:"Next.JS, Express, Node, postgreSQL, Jest, Supertest, Cypress, React Testing Library, CSS, Firebase", image: homegrown, github:"https://github.com/chetjogia/home-grown-FE", website:"https://home-grown.vercel.app/"};




  return (
    <div className={styles["card-container"]}>
      <Card {...utellumProject} />
      <Card {...monthProject}/>
     {/*  <Card /> */}
    </div>
  );
}

export default CardContainer;

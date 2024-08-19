import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.PNG";
import movie from "../../Assets/Projects/movie.PNG";
import weather from "../../Assets/Projects/weather.PNG";


import ReactGA from "react-ga";
import Mobileappscard from "./Mobileappscard";

function Projects() {
  const[iswebsiteprojectshown,setWebsiteprojectshown]=useState(true);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          You can Browse my recent works.
        </p>
        <div style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:"center",
          gap:'50px'}}>
         <button style={{
          backgroundColor: iswebsiteprojectshown?"#38583c":"transparent",
          border: '#5bf572 solid 1px',
          color:"white",
          borderRadius:'5px',
          padding:'5px'
         }} 
         onClick={()=>setWebsiteprojectshown(true)}>Websites</button>
         <p>"    "</p>
         <button style={{
          backgroundColor:iswebsiteprojectshown?"transparent":"#38583c",
          border: '#5bf572 solid 1px',
          color:"white",
          borderRadius:'5px',
          padding:'5px'
         }} 
         onClick={()=>setWebsiteprojectshown(false)}>Mobile Apps</button>
        </div>
        {iswebsiteprojectshown ? <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="AllMart Ecommerce"
              description="AllMart brings together a curated selection of
               renowned  goods and products, offering a diverse
                range of catagory. From the vegitable and electronics stews
                 to the tantalizing spices of traditional Ethiopian foods.

              "
              link="https://github.com/amexyegondar/AllMartEcommerce"
              liveLink="https://all-mart-ecommerce.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Wetat Meznagna"
              description='This website purposely made for young people to enjoy their break by movies made in Ethiopia
              ,America, Hind.Your vacation time matter us.Your movie companion with interactive and use friendly interface.'
              link="https://github.com/amexyegondar/movie-weta-meznagna"
              liveLink="https://movie-weta-meznagna.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Application"
              description="Stay connected with your cloud through our first ethiopian weather web application. Know where and when to go. 
              Make your day predictable. Dress based on our real time information about your city in the  world."
              link="https://github.com/amexyegondar/React_weather_web_application"
              liveLink='https://react-weather-web-application-two.vercel.app'
            />
          </Col>

          
        </Row>:
        <Mobileappscard/>
        }
      </Container>
    </Container>
  );
}

export default Projects;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.PNG";
import movie from "../../Assets/Projects/movie.PNG";
import weather from "../../Assets/Projects/weather.PNG";
import foodapp from "../../Assets/fodoapp.png";
import fitnessapp from '../../Assets/iPhone 16.png';
import housesell from '../../Assets/housesell.png';
import ReactGA from "react-ga";


function Projects() {

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
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Food Ordering Platform"
              description="Explore popular foods, manage orders, and enjoy seamless cart functionality."
              link="https://github.com/amexyegondar/React_weather_web_application"
              liveLink='https://react-weather-web-application-two.vercel.app'
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessapp}
              isBlog={false}
              title="Eskista Fitness App"
              description="Work out at home, track your stats, and stay motivated with weekly insights."
              link="https://github.com/amexyegondar/React_weather_web_application"
              liveLink='https://react-weather-web-application-two.vercel.app'
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={housesell}
              isBlog={false}
              title="House Broker App"
              description="Post and manage property listings with real-time Firebase integration and dynamic UI."
              link="https://github.com/amexyegondar/React_weather_web_application"
              liveLink='https://react-weather-web-application-two.vercel.app'
            />
          </Col>
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
          

          
        </Row>
       
      </Container>
    </Container>
  );
}

export default Projects;

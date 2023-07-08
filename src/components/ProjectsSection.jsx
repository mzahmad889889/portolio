import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo4 from '../images/photo4.png';

import Card from "./Card";

const projects = [
  {
    title: "Advance React",
    description:
      "An advanced React certificate refers to a certification that recognizes proficiency in advanced concepts and techniques related to React development.",
    getImageSrc: () => photo1,
  },
  {
    title: "Programming With JavaScript",
    description:
      "A programming with JavaScript certificate refers to a certification that validates an individual's proficiency in JavaScript programming. 🔥️",
    getImageSrc: () => photo2,
  },
  {
    title: "Version Control",
    description:
      "A version control certificate refers to a certification that recognizes an individual's proficiency in using version control systems to manage and track changes in software projects.",
    getImageSrc: () => photo3,
  },
  {
    title: "HTML and CSS in depth",
    description:
      "An HTML and CSS in-depth certificate refers to a certification that acknowledges an individual's comprehensive understanding and proficiency in HTML and CSS, the core technologies used for building websites and web applications.",
    getImageSrc: () => photo4,
  },
];

const ProjectsSection = () => {
  return (
    
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <section id="projects-section">
      <Heading as="h1" >
        Certificates
      </Heading>
     
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
      </section>
    </FullScreenSection>
  );
};

export default ProjectsSection;

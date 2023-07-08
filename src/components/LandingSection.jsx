import React from "react";
import { Avatar, HStack, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import image from "../images/image.png"
import { wrap } from "framer-motion";

const greeting = "Hello, I am M Z AHMAD!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React and WordPress";

// Implement the UI for the LandingSection component according to the instructions.

  
 


// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
      
      <VStack
    py={3}
    mt={10}
    >
    <Avatar size="2xl"  src={image} />
    <Heading as='h6' size='xs'>
      {greeting}
    </Heading>
    
    <Heading as='h2' size='xl'>
      {bio1}
    </Heading>
    <Heading as='h2' size='xl'>
      {bio2}
    </Heading>
    </VStack>
    <VStack mt={20}>
      <Heading ml={-670} >
        Introduction
      </Heading>
      <Text fontSize="xm" color="grey.500">
      Hello! I am Front-End Developer from Pakistan, Peshawar.<br/>
      I have rich experience in website design and building via HTML5, CSS3, JavaScript, reactJS and also I am good at WordPress.<br/>
      I love to talk with you about my unique experience.<br/>
      </Text>
    </VStack>
    
  </FullScreenSection>
  
);

export default LandingSection;

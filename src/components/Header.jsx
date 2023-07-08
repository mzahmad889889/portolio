import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon1: faEnvelope,
    url1: "mailto: muhammadzubairahmad35@gmail.com",
  },
  {
    icon2: faGithub,
    url2: "https://github.com/mzahmad889889",
  },
  {
    icon3: faLinkedin,
    url3: "https://www.linkedin.com/in/muhammad-zubair-ahmad-111073180/",
  },
  {
    icon4: faFacebook,
    url4: "https://web.facebook.com/mzahmads",
  },
];



const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const boxRef = useRef(null);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        boxRef.current.style.transform = 'translateY(-200px)';
      } else {
        // Scrolling up
        boxRef.current.style.transform = 'translateY(0)';
      }
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  

  return (
    <Box
    ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={14}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav >
          <HStack spacing={5}>
            <a href="mailto: muhammadzubairahmad35@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://github.com/mzahmad889889" target="_blank">
            <FontAwesomeIcon icon={faGithub}  size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-zubair-ahmad-111073180/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://web.facebook.com/mzahmads" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            </HStack>
          </nav>
          
          <nav>
            <HStack spacing={8} >
              <a href="#projects" onClick={handleClick('projects')}>Certificates</a>
              <a href="#contactme" onClick={handleClick('contactme')}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

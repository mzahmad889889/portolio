import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  return (
    <HStack
    px={0}
    bg={"white"}
    textColor={"black"}
    rounded={10}
    my={15}
    >
     <VStack
       
     >
        <Image borderRadius='10' src={imageSrc}/>
        <VStack
        px={2}
        py={3}
        >
        <Heading >
          <Text  fontSize='xl'>
            {title}
          </Text>
          <VStack
          py={3}
          >
         <Text fontSize='sm' textColor={"blackAlpha.500"}>
            {description}
          </Text>
          </VStack>
          
        </Heading>
        
        </VStack>
        </VStack> 
    </HStack>
  );
  
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 
};

export default Card;

import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
} from "@chakra-ui/react";
import  * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { isOpen, type, message, onOpen, onClose} = useAlertContext();

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
     initialValues: { 
      firstName: '',
      email: '', 
      type: '',
      comment: '',
     }, 
     onSubmit: (values, action) => {
      {!isOpen?
        submit(values, action.resetForm()) && 
        onOpen('success',`Thanks for your submission ${values.firstName}, we will get back to you shortly!`):
        onOpen('error',response.message)}
        
      {response && (
        <div>
        {response.type === 'success' && <p>{response.message}</p>}
        {response.type === 'error' && <p>{response.message}</p>}
        </div>
      )}
       
      
     
      
       
     
     
    },
    validationSchema:Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email').required('Required'),
      comment: Yup.string().min(25).required('Required')

     }),
      
    });

        

  return (
    
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
      <section id="contactme-section">  
        <Heading as="h1" >
          Contact me
        </Heading>
       
        <Box p={6} rounded="md" w="250%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.firstName && touched.firstName ? true:false}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                 />
                 <FormErrorMessage>{errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.email && touched.firstName ? true:false}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type"  name="type" onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}>
                  <option bg={"black"} value="hireMe">Freelance project proposal</option> 
                  <option bg={"black"} value="openSource">
                    Open source consultancy session
                  </option>
                  <option bg={"black"} value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={errors.comment && touched.comment ? true : false}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                  
                />
                <FormErrorMessage>{errors.comment}</FormErrorMessage>
              </FormControl>
               <Button
               type="submit"
               isLoading={isLoading}
               colorScheme="purple"   width="full">
                Submit
              </Button>
             
            </VStack>
          </form>
        </Box>
        </section>
      </VStack>
    </FullScreenSection>
   
  );
};

export default LandingSection;
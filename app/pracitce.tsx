
'use client'
import { ChakraProvider, Heading } from "@chakra-ui/react";  
export default function Practice(){
  return (
  <ChakraProvider>
    
<h1>Hello</h1>
<h1>World</h1>
<Heading>This is Heading by chakra </Heading>
<Heading as = "h6" color="red" fontSize= '5xl' fontWeight='thin'>This is Heading by chakra </Heading>
<Heading>This is Heading by chakra </Heading>

  </ChakraProvider>
  


  );
}
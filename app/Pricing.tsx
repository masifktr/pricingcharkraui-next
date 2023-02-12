import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkMarkIcon from "./icons/checkMarkIcon";

export default function Pricing() {
  return (

    // main Container
    <Box
    maxW={"950px"}
    mx={{base:"10px", lg:"auto"}}
      bg="white"
      m="auto"
      mt="-165px"
      overflow="hidden"
      
     
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }
      borderRadius="16px"
    >
      <Flex display = {{base:"column", md:"column", lg:"row"}}>
        {/* Left Box */}

        <Box bg={"#9a87bd"} p="40px" textAlign={"center"}>
          <Text fontSize={"24px"} fontWeight="bold">
            {" "}
            Primium Pro{" "}
          </Text>
          <Heading fontSize={"50"} fontWeight="bold">
            $329
          </Heading>
          <Text>Build just once</Text>
          <Button color={"white"} bg="#805AD5" w={"150px"} mt="20" border-radius='5px'>
                                                
            Get Started
          </Button>
        </Box>

        {/* Right Box */}

        <Box pt="50px" pl="25px" pr="10px">
          <Text mb={"20px"}>
            Access these features when you get this pricing pakage for your
            bisuness
          </Text>
          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>International calling and messegaing API</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}

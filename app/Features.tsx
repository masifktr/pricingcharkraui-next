import { Box, Flex, HStack, Icon, Text,  } from "@chakra-ui/react";
import React from "react";
import icon1 from "./icons/icon1";
import icon2 from "./icons/icon2";
import icon3 from "./icons/icon3";

export default function Features() {
  return (
    <Box maxW={'730'} margin={'auto'} mt={'40px'} >
        <Flex direction={{base:"column", lg:"row"}}>
      <HStack>
        <Icon as={icon1}/>
        <Text fontWeight={'bold'}>30 days money back <br /> Guarantee</Text>
      </HStack>

      <HStack>
        <Icon as={icon2} />
        <Text fontWeight={'bold'}>No setup fees <br /> 100% hassle-free</Text>
      </HStack>

      <HStack>
        <Icon as={icon3} />
        <Text fontWeight={'bold'}>No monthly subscription <br /> Pay once and for all</Text>

      </HStack>
      </Flex>
    </Box>
  );
}

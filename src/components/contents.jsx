import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Stack,
  Circle
} from '@chakra-ui/react'
import { PhoneIcon, StarIcon } from '@chakra-ui/icons'
import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'
import img4 from '../assets/img/img4.jpg'

let Contents = () => {
  return (
    <Box>
      <SimpleGrid columns={{ base: '1', lg: '2' }} spacing="5">
        <HStack
          position="sticky"
          top="0"
          zIndex="1"
          bg="gray.100"
          align="center"
          ml="2"
        >
          <Circle
            minHeight="full"
            rounded="full"
            maxWidth="150px"
            overflow="hidden"
          >
            <img
              src={img4}
              className="w-full h-full object-cover rounded-full"
              alt="no img 1"
            />
          </Circle>
          <Box>
            <Stack>
              <HStack py="" color="blue.600" fontWeight="bold" fontSize="lg">
                <Text>MOSE Creative Mints</Text>
                <PhoneIcon ml="2" />
              </HStack>
              <Flex py="" as="div" align="baseline">
                <StarIcon mr="3" />
                Prague , Chezch Republic <br />
              </Flex>
              <Text py="" fontSize="sm" fontWeight="light">
                web and graphics designer , ui ,app
              </Text>
              <Flex pt="1" as="div" align="baseline">
                <Box>
                  <Text fontWeight="semibold">47446</Text>
                  <Text color="gray.500" fontWeight="hairline">
                    shots
                  </Text>
                </Box>
                <Box ml="3">
                  <Text fontWeight="semibold">47446</Text>
                  <Text color="gray.500" fontWeight="hairline">
                    followers
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </HStack>
        <SimpleGrid
          columns={{ base: '1', md: '2', lg: '3' }}
          spacing={{ base: '0', md: '2', lg: '3' }}
        >
          <img
            className="h-2/3 shadow-2xl drop-shadow-lg mx-auto rounded"
            src={img1}
            alt="no img 1"
          />
          <img
            className="h-2/3 shadow-2xl drop-shadow-lg mx-auto rounded"
            src={img2}
            alt="no img 1"
          />
          <img
            className="h-2/3 shadow-2xl drop-shadow-lg mx-auto rounded"
            src={img3}
            alt="no img 1"
          />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}

export default Contents

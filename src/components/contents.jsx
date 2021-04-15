import {
  Box,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Stack,
  useColorMode,
  Divider,
  Image
} from '@chakra-ui/react'
import { PhoneIcon, StarIcon } from '@chakra-ui/icons'
import img1 from 'assets/img/img1.jpg'
import img2 from 'assets/img/img2.jpg'
import img3 from 'assets/img/img3.jpg'
import img4 from 'assets/img/img4.jpg'
import img5 from 'assets/img/img5.jpg'
import img6 from 'assets/img/img6.jpg'
import img7 from 'assets/img/img7.jpg'

let Contents = () => {
  let { colorMode } = useColorMode()
  let images = [img1, img7, img4, img3, img5, img6, img2]
  // console.log(Math.floor(Math.random() * 7))
  let getImage = () => {
    return Math.floor(Math.random() * 7)
  }

  return (
    <Box>
      <SimpleGrid columns={{ base: '1', lg: '2' }} spacing="5">
        <HStack
          position="sticky"
          top="0"
          zIndex="1"
          bg={colorMode === 'light' ? 'gray.100' : 'gray.600'}
          align="center"
          ml="2"
        >
          {/* <Circle
            minHeight="full"
            rounded="full"
            maxWidth="150px"
            overflow="hidden"
          >
            <img
              src={images[getImage()]}
              className="w-full h-full object-cover rounded-full"
              alt="no img 1"
            />
          </Circle> */}
          <Image
            maxWidth="150px"
            borderRadius="full"
            boxSize="150px"
            src={images[getImage()]}
            alt="thierry irambona"
          />
          <Box color={colorMode === 'dark' && 'linkedin.400'}>
            <Stack>
              <HStack
                py=""
                color={colorMode === 'dark' ? 'whatsapp.500' : 'blue.600'}
                fontWeight="bold"
                fontSize="lg"
              >
                <Text>MOSE Creative Mints</Text>
                <Divider orientation="vertical" />
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
                <Divider
                  bg="gray.900"
                  colorScheme="teal"
                  size="lg"
                  orientation="vertical"
                />
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
            src={images[getImage()]}
            alt="no img 1"
          />
          <img
            className="h-2/3 shadow-2xl drop-shadow-lg mx-auto rounded"
            src={images[getImage()]}
            alt="no img 1"
          />
          <img
            className="h-2/3 shadow-2xl drop-shadow-lg mx-auto rounded"
            src={images[getImage()]}
            alt="no img 1"
          />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}

export default Contents

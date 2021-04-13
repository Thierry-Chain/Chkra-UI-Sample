import { Box, Flex, Text, Spacer, HStack, Button, Link } from '@chakra-ui/react'
import { LinkIcon, SearchIcon, DragHandleIcon } from '@chakra-ui/icons'

import React from 'react'

function Navbar() {
  return (
    <Box bg="gray.600" p="3">
      <Flex align="baseline" color="whiteAlpha.500" alignContent="space-around">
        <Text
          fontFamily="mono"
          fontWeight="semibold"
          fontSize="xl"
          color="whiteAlpha.900"
        >
          <LinkIcon /> Dribble
        </Text>

        <HStack ml="6" display={{ base: 'none', md: 'inline-flex' }}>
          <Link href="#" ml="2" fontSize="md" color="whiteAlpha.600">
            Inspiration
          </Link>
          <Link href="#" ml="2" fontSize="md" color="whiteAlpha.600">
            Find work
          </Link>
          <Link href="design" ml="2" fontSize="md" color="whiteAlpha.600">
            Designers
          </Link>
          <Link href="#" ml="2" fontSize="md" color="whiteAlpha.600">
            Learn design
          </Link>
          <Link href="#" ml="2" fontSize="md" color="whiteAlpha.600">
            Hire Designers
          </Link>
          <DragHandleIcon ml="2" />
        </HStack>
        <Spacer />
        <HStack>
          <SearchIcon w="6" />
          <Text fontSize="md" color="whiteAlpha.600">
            Sign in
          </Text>
          <Button colorScheme="pink">Sign up</Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar

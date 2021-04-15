import {
  Box,
  Flex,
  Text,
  Spacer,
  HStack,
  Button,
  useColorMode
} from '@chakra-ui/react'
import { LinkIcon, SearchIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

import React from 'react'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={colorMode === 'light' ? 'gray.600' : 'gray.700'} p="3">
      <Flex align="baseline" color="whiteAlpha.500" alignContent="space-around">
        <Text
          fontFamily="mono"
          fontWeight="semibold"
          fontSize="xl"
          color="whiteAlpha.900"
        >
          <LinkIcon />
          <NavLink to="/">Dribble</NavLink>
        </Text>

        <HStack ml="6" display={{ base: 'none', md: 'inline-flex' }}>
          <NavLink to="/inp">
            <Text ml="2" fontSize="md" color="whiteAlpha.600">
              Inspiration
            </Text>
          </NavLink>
          <NavLink to="/work">
            <Text ml="2" fontSize="md" color="whiteAlpha.600">
              Find work
            </Text>
          </NavLink>
          <NavLink to="/design">
            <Text ml="2" fontSize="md" color="whiteAlpha.600">
              Designers
            </Text>
          </NavLink>
          <NavLink to="/learn">
            <Text ml="2" fontSize="md" color="whiteAlpha.600">
              Learn design
            </Text>
          </NavLink>
          <NavLink to="/hire">
            <Text ml="2" fontSize="md" color="whiteAlpha.600">
              Hire Designers
            </Text>
          </NavLink>
          {colorMode === 'light' ? (
            <MoonIcon
              ml="3"
              onClick={() => {
                toggleColorMode()
              }}
              cursor="pointer"
              fontSize="4xl"
            />
          ) : (
            <SunIcon
              ml="3"
              onClick={() => {
                toggleColorMode()
              }}
              cursor="pointer"
              fontSize="2xl"
            />
          )}
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

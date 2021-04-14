import { Box, Divider, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import Contents from './contents'

function Body() {
  let { colorMode } = useColorMode()
  return (
    <Box bg={colorMode === 'light' ? 'gray.100' : 'gray.600'} py="4" px="7">
      <Box color={colorMode === 'dark' && 'blackAlpha.600'}>
        <Text fontWeight="semibold" fontSize="2xl">
          Find designers
        </Text>
        <Text
          fontFamily="mono"
          color={colorMode === 'dark' && 'blackAlpha.500'}
        >
          by skils location knowledge and more
        </Text>
      </Box>
      <Contents />
      <Divider color="gray.900" />
      <Contents />
      <Divider color="gray.900" />
      <Contents />
      <Divider color="gray.900" />
      <Contents />
      <Divider color="gray.900" />
      <Contents />
    </Box>
  )
}

export default Body

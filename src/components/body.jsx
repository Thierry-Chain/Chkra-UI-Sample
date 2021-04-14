import { Box, Divider, Text } from '@chakra-ui/react'
import React from 'react'
import Contents from './contents'

function Body() {
  return (
    <Box bg="gray.100" py="4" px="7">
      <Text fontWeight="semibold" fontSize="2xl">
        Find designers
      </Text>
      <Text fontFamily="mono" color="gray.600">
        by skils location knowledge and more
      </Text>
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

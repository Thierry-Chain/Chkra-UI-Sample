import { Box } from '@chakra-ui/react'
import Body from './components/body'
import Navbar from './components/navbar'

function App() {
  // let handleClick = () => {
  //   toggleColorMode()
  // }
  //const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Navbar />
      <Body />
    </Box>
  )
}

export default App

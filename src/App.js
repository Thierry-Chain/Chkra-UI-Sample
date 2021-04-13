import { Box } from '@chakra-ui/react'
import Contents from './components/contents'
import Navbar from './components/navbar'

function App() {
  // let handleClick = () => {
  //   toggleColorMode()
  // }
  //const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Navbar />
      <Contents />
    </Box>
  )
}

export default App

import { Box /*, useColorMode, Button*/ } from '@chakra-ui/react'
import Body from './components/body'
import Navbar from './components/navbar'
import { Route } from 'react-router'
import Contents from './components/contents'

function App() {
  // let handleClick = () => {
  //   toggleColorMode()
  // }

  // const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      {/* <Button
        onClick={() => {
          toggleColorMode()
        }}
      >
        Click me
      </Button>{' '} */}
      <Navbar />
      <Route path="/" exact component={Body} />
      <Route path="/design" exact component={Contents} />
    </Box>
  )
}

export default App

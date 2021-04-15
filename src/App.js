import { Box /*, useColorMode, Button*/ } from '@chakra-ui/react'
import Body from './components/body'
import Navbar from './components/navbar'
import { Route } from 'react-router'
import Contents from './components/contents'
import HomeSkeleton from './components/homeSkeleton'

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
      <Route path="/inp" exact component={HomeSkeleton} />
    </Box>
  )
}

export default App

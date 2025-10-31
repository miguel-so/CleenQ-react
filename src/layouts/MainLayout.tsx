import { Box, Flex } from '@chakra-ui/react'
import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex="1" bg="white">
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

export default MainLayout


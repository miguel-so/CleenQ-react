import { Box } from '@chakra-ui/react'
import Header from '../components/Header'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Box minH="100vh" bg="white">
      <Header />
      {children}
    </Box>
  )
}

export default AuthLayout


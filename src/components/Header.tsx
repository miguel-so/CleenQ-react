import { Box, Container, Flex, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const { isAuthenticated, logout } = useAuth()

  return (
    <Box as="header" bg="dark" color="white" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap={4}>
          <Text fontSize="xl" fontWeight="bold" textStyle="lg-bold">
            CleenQ
          </Text>
          <Flex gap={4} align="center" direction={{ base: 'column', md: 'row' }}>
            {!isAuthenticated && (
              <>
                <Link to="/">
                  <Button variant="ghost" color="white" textStyle="button-text">
                    Home
                  </Button>
                </Link>
                <Link to="/login">
                  <Button colorScheme="primary" textStyle="button-text">
                    Login
                  </Button>
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link to="/admin">
                  <Button variant="ghost" color="white" textStyle="button-text">
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={logout} colorScheme="secondary" textStyle="button-text">
                  Logout
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header


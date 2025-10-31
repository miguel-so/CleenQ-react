import { useState } from 'react'
import { Box, Container, VStack, Heading, Field, Input, Button, Text, Alert } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (login(username, password)) {
      navigate('/admin')
    } else {
      setError('Invalid credentials. Use admin / admin123')
    }
  }

  return (
    <Box minH="calc(100vh - 200px)" display="flex" alignItems="center" py={12}>
      <Container maxW="md">
        <Box as="form" onSubmit={(e) => { e.preventDefault(); handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>); }}>
          <VStack gap={6}>
          <Heading as="h1" textStyle="h2" color="primary.500">
            Login
          </Heading>
          
          {error && (
            <Alert.Root status="error" borderRadius="md">
              <Alert.Content>
                <Alert.Title>{error}</Alert.Title>
              </Alert.Content>
            </Alert.Root>
          )}

          <Field.Root required>
            <Field.Label textStyle="md-reg">Username</Field.Label>
            <Input
              type="text"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              placeholder="Enter username"
              textStyle="md-reg"
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label textStyle="md-reg">Password</Field.Label>
            <Input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="Enter password"
              textStyle="md-reg"
            />
          </Field.Root>

          <Button type="submit" colorScheme="primary" width="full" textStyle="button-text">
            Login
          </Button>

          <Text textStyle="sm-reg" color="gray.600" textAlign="center">
            Mock credentials: admin / admin123
          </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Login


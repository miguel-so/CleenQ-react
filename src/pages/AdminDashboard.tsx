import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

const AdminDashboard = () => {
  return (
    <Box minH="calc(100vh - 100px)" py={12}>
      <Container maxW="container.xl">
        <VStack gap={6} align="stretch">
          <Heading as="h1" textStyle="h1" color="primary.500">
            Admin Dashboard
          </Heading>
          <Box p={8} bg="gray.50" borderRadius="md">
            <Text textStyle="lg-reg" color="dark">
              Welcome to the admin dashboard. This is a protected route that requires authentication.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default AdminDashboard


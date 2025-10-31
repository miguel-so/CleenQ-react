import { Box, Container, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer" bg="dark" color="white" py={8} mt="auto">
      <Container maxW="container.xl">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={4}>
          <Text textStyle="md-reg">© 2024 CleenQ. All rights reserved.</Text>
          <Flex gap={4} direction={{ base: 'column', md: 'row' }} align="center">
            <Text textStyle="sm-reg">Privacy Policy</Text>
            <Text textStyle="sm-reg">Terms of Service</Text>
            <Text textStyle="sm-reg">Contact</Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer


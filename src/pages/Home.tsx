import { Box, Container, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <VStack gap={8} align="stretch">
          {/* H1 Example */}
          <Box>
            <Heading as="h1" textStyle="h1" color="primary.500">
              H1 Typography Example
            </Heading>
            <Text textStyle="md-reg" color="dark" mt={2}>
              This is using H1 style: 70px font size, 100% line height
            </Text>
          </Box>

          {/* H2 Example */}
          <Box>
            <Heading as="h2" textStyle="h2" color="secondary.500">
              H2 Typography Example
            </Heading>
            <Text textStyle="md-reg" color="dark" mt={2}>
              This is using H2 style: 50px font size, 110% line height
            </Text>
          </Box>

          {/* H3 Example */}
          <Box>
            <Heading as="h3" textStyle="h3" color="primary.500">
              H3 Typography Example
            </Heading>
            <Text textStyle="md-reg" color="dark" mt={2}>
              This is using H3 style: 30px font size, 110% line height
            </Text>
          </Box>

          {/* H4 Example */}
          <Box>
            <Heading as="h4" textStyle="h4" color="secondary.500">
              H4 Typography Example
            </Heading>
            <Text textStyle="md-reg" color="dark" mt={2}>
              This is using H4 style: 24px font size, 110% line height
            </Text>
          </Box>

          {/* H5 Example */}
          <Box>
            <Heading as="h5" textStyle="h5" color="primary.500">
              H5 Typography Example
            </Heading>
            <Text textStyle="md-reg" color="dark" mt={2}>
              This is using H5 style: 36px font size, 110% line height
            </Text>
          </Box>

          {/* Typography Examples Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mt={8}>
            {/* LG Med Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="lg-med" color="dark">
                LG Med Example (18px/Auto)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 18px, Line Height: Auto, Weight: Medium
              </Text>
            </Box>

            {/* LG Bold Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="lg-bold" color="dark">
                LG Bold Example (18px/Auto)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 18px, Line Height: Auto, Weight: Bold
              </Text>
            </Box>

            {/* XL Med Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="xl-med" color="dark">
                XL Med Example (24px/150%)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 24px, Line Height: 150%, Weight: Medium
              </Text>
            </Box>

            {/* LG Reg Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="lg-reg" color="dark">
                LG Reg Example (18px/160%)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 18px, Line Height: 160%, Weight: Regular
              </Text>
            </Box>

            {/* MD Reg Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="md-reg" color="dark">
                MD Reg Example (16px/160%)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 16px, Line Height: 160%, Weight: Regular
              </Text>
            </Box>

            {/* Sm Bold Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="sm-bold" color="dark">
                Sm Bold Example (14px/140%)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 14px, Line Height: 140%, Weight: Bold
              </Text>
            </Box>

            {/* Sm Reg Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="sm-reg" color="dark">
                Sm Reg Example (14px/Auto)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 14px, Line Height: Auto, Weight: Regular
              </Text>
            </Box>

            {/* LG Sm Bold Example */}
            <Box p={4} border="1px" borderColor="gray.200" borderRadius="md">
              <Text textStyle="lg-sm-bold" color="dark">
                LG Sm Bold Example (18px/160%)
              </Text>
              <Text textStyle="sm-reg" color="gray.600" mt={2}>
                Font: Poppins, Size: 18px, Line Height: 160%, Weight: Bold
              </Text>
            </Box>
          </SimpleGrid>

          {/* Font Families Examples */}
          <Box mt={8} p={6} bg="gray.50" borderRadius="md">
            <Heading as="h3" textStyle="h3" color="dark" mb={4}>
              Font Families Examples
            </Heading>
            <VStack align="stretch" gap={4}>
              <Box>
                <Text textStyle="md-reg" fontWeight="bold" color="dark">
                  Default Font (Poppins):
                </Text>
                <Text textStyle="lg-reg" color="dark" mt={2}>
                  This is the default font family (Poppins) used across the application. All body text uses Poppins.
                </Text>
              </Box>
              <Box>
                <Text textStyle="md-reg" fontWeight="bold" color="dark" fontFamily="Archivo Narrow">
                  Archivo Narrow Font:
                </Text>
                <Text textStyle="lg-reg" color="dark" mt={2} fontFamily="Archivo Narrow">
                  This text uses Archivo Narrow font family, typically used for headings.
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* Color Tokens Examples */}
          <Box mt={8} p={6} bg="gray.50" borderRadius="md">
            <Heading as="h3" textStyle="h3" color="dark" mb={4}>
              Color Tokens Examples
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              <Box p={4} bg="primary.500" borderRadius="md">
                <Text textStyle="lg-bold" color="white">
                  Primary Color (#008AFE)
                </Text>
              </Box>
              <Box p={4} bg="secondary.500" borderRadius="md">
                <Text textStyle="lg-bold" color="white">
                  Secondary Color (#52C90E)
                </Text>
              </Box>
              <Box p={4} bg="dark" borderRadius="md">
                <Text textStyle="lg-bold" color="white">
                  Dark Color (#0D1319)
                </Text>
              </Box>
              <Box p={4} bg="white" border="1px" borderColor="gray.300" borderRadius="md">
                <Text textStyle="lg-bold" color="dark">
                  White Color (#FFFFFF)
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home


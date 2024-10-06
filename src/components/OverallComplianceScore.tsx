import React from 'react'
import { Box, Text, CircularProgress, CircularProgressLabel, Flex, VStack } from '@chakra-ui/react'

const OverallComplianceScore = () => {
  const score = 78

  return (
    <Box
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={6}
      height="100%"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color="gray.700">
        Overall Compliance Score
      </Text>
      <Flex justifyContent="center" alignItems="center" height="calc(100% - 2rem)">
        <VStack spacing={4}>
          <CircularProgress
            value={score}
            size="200px"
            thickness="8px"
            color={score > 80 ? 'green.400' : score > 60 ? 'orange.400' : 'red.400'}
          >
            <CircularProgressLabel fontSize="3xl" fontWeight="bold">{score}%</CircularProgressLabel>
          </CircularProgress>
          <Text color="gray.600" textAlign="center">
            Your organization is {score > 80 ? 'well-compliant' : score > 60 ? 'moderately compliant' : 'needs improvement'}
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default OverallComplianceScore
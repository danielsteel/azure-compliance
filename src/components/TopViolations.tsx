import React from 'react'
import { Box, Text, VStack, HStack, Progress, Flex } from '@chakra-ui/react'

const TopViolations = () => {
  const violations = [
    { name: 'Unencrypted Storage Accounts', count: 15 },
    { name: 'Exposed Management Ports', count: 12 },
    { name: 'Missing MFA', count: 10 },
    { name: 'Outdated OS Versions', count: 8 },
    { name: 'Insecure Network Configurations', count: 6 },
  ]

  const maxCount = Math.max(...violations.map(v => v.count))

  return (
    <Box
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={6}
      height="100%"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color="gray.700">
        Top Policy Violations
      </Text>
      <VStack spacing={4} align="stretch">
        {violations.map((violation, index) => (
          <Box key={index}>
            <Flex justify="space-between" mb={2}>
              <Text fontSize="sm" fontWeight="medium" color="gray.700">{violation.name}</Text>
              <Text fontSize="sm" fontWeight="bold" color="red.500">{violation.count}</Text>
            </Flex>
            <Progress 
              value={(violation.count / maxCount) * 100} 
              size="sm" 
              colorScheme="red" 
              borderRadius="full"
              bg="red.100"
            />
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

export default TopViolations
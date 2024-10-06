import React from 'react'
import { Box, Text, Progress, Flex } from '@chakra-ui/react'

interface ResourceComplianceCardProps {
  type: string
  total: number
  compliant: number
}

const ResourceComplianceCard: React.FC<ResourceComplianceCardProps> = ({ type, total, compliant }) => {
  const compliancePercentage = (compliant / total) * 100

  return (
    <Box
      bg="white"
      boxShadow="md"
      borderRadius="lg"
      p={6}
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        {type}
      </Text>
      <Flex justify="space-between" mb={2}>
        <Text fontSize="sm">Compliant: {compliant}</Text>
        <Text fontSize="sm">Total: {total}</Text>
      </Flex>
      <Progress value={compliancePercentage} size="sm" colorScheme={compliancePercentage > 80 ? 'green' : compliancePercentage > 60 ? 'yellow' : 'red'} />
      <Text fontSize="sm" mt={2} textAlign="right">
        {compliancePercentage.toFixed(1)}% Compliant
      </Text>
    </Box>
  )
}

export default ResourceComplianceCard
import React from 'react'
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Badge } from '@chakra-ui/react'

const PolicyCompliance = () => {
  const policies = [
    { name: 'Require MFA for all users', status: 'Compliant', resources: 150, violations: 0 },
    { name: 'Encrypt all storage accounts', status: 'Non-compliant', resources: 50, violations: 5 },
    { name: 'Use approved VM images', status: 'Compliant', resources: 75, violations: 0 },
    { name: 'Enable auditing on SQL servers', status: 'Partially compliant', resources: 30, violations: 2 },
    { name: 'Restrict public network access', status: 'Non-compliant', resources: 100, violations: 12 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant':
        return 'green'
      case 'Non-compliant':
        return 'red'
      case 'Partially compliant':
        return 'yellow'
      default:
        return 'gray'
    }
  }

  return (
    <Box>
      <Heading mb={6}>Policy Compliance</Heading>
      <Box bg="white" boxShadow="md" borderRadius="lg" overflow="hidden">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Policy Name</Th>
              <Th>Status</Th>
              <Th isNumeric>Resources</Th>
              <Th isNumeric>Violations</Th>
            </Tr>
          </Thead>
          <Tbody>
            {policies.map((policy, index) => (
              <Tr key={index}>
                <Td>{policy.name}</Td>
                <Td>
                  <Badge colorScheme={getStatusColor(policy.status)}>{policy.status}</Badge>
                </Td>
                <Td isNumeric>{policy.resources}</Td>
                <Td isNumeric>{policy.violations}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default PolicyCompliance
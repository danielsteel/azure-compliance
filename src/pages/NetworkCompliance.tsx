import React from 'react'
import { Box, Heading, Text, VStack, SimpleGrid, Progress, Badge, Button, useDisclosure } from '@chakra-ui/react'
import ComplianceStandardDetail from '../components/ComplianceStandardDetail'

const NetworkCompliance = () => {
  const networkCompliance = 78
  const { isOpen, onOpen, onClose } = useDisclosure()

  const networkStandard = {
    name: 'Network Compliance',
    compliance: networkCompliance,
    description: 'Overview of network-specific compliance standards and gaps.',
    details: [
      { control: 'Firewall Configuration', status: 'Partially Compliant', adherence: 'Some firewall rules are overly permissive', details: 'Several firewall rules allow broad access that should be restricted.', recommendation: 'Review and tighten firewall rules, implementing least privilege access.' },
      { control: 'Network Segmentation', status: 'Non-Compliant', adherence: 'Insufficient segmentation between critical systems', details: 'Critical systems are not properly isolated from general network traffic.', recommendation: 'Implement strict network segmentation to isolate critical systems.' },
      { control: 'Encryption in Transit', status: 'Partially Compliant', adherence: 'Not all internal traffic is encrypted', details: 'Some internal network traffic is still unencrypted, posing a risk to data confidentiality.', recommendation: 'Implement end-to-end encryption for all sensitive data in transit, including internal traffic.' },
      { control: 'Access Control Lists', status: 'Compliant', adherence: 'ACLs are properly configured and maintained', details: 'Access Control Lists are regularly reviewed and updated to ensure proper network access control.' },
      { control: 'Intrusion Detection', status: 'Partially Compliant', adherence: 'IDS coverage is incomplete', details: 'Intrusion Detection Systems are not monitoring all critical network segments.', recommendation: 'Extend IDS coverage to all critical network segments and implement regular signature updates.' },
    ]
  }

  return (
    <Box>
      <Heading mb={6}>Network Compliance</Heading>
      <Box bg="white" boxShadow="md" borderRadius="lg" p={6} mb={6}>
        <Text fontSize="xl" fontWeight="bold" mb={4}>Overall Network Compliance</Text>
        <Progress value={networkCompliance} size="lg" colorScheme={networkCompliance > 80 ? 'green' : networkCompliance > 60 ? 'yellow' : 'red'} />
        <Text mt={2} fontWeight="bold" textAlign="right">{networkCompliance}%</Text>
      </Box>
      <VStack spacing={6} align="stretch">
        <Heading size="md" mb={4}>Network Compliance Gaps</Heading>
        <SimpleGrid columns={1} spacing={4}>
          {networkStandard.details.map((gap, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" bg="white">
              <Text fontWeight="bold">{gap.control}</Text>
              <Badge colorScheme={gap.status.toLowerCase() === 'compliant' ? 'green' : gap.status.toLowerCase() === 'partially compliant' ? 'yellow' : 'red'} mb={2}>
                {gap.status}
              </Badge>
              <Text mb={2}>{gap.adherence}</Text>
              <Button size="sm" onClick={onOpen}>View Details</Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {isOpen && (
        <ComplianceStandardDetail standard={networkStandard} onClose={onClose} />
      )}
    </Box>
  )
}

export default NetworkCompliance
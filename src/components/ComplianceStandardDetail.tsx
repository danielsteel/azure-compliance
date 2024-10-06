import React from 'react'
import { Box, Text, Progress, VStack, Heading, Table, Thead, Tbody, Tr, Th, Td, Badge, Icon } from '@chakra-ui/react'
import { FiCheckCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi'

interface ComplianceIssue {
  control: string
  pdfReference: string
  adherence: string
  status: string
  details?: string
  recommendation?: string
}

interface ComplianceStandardDetailProps {
  standard: {
    name: string
    compliance: number
    description: string
    details?: ComplianceIssue[]
  }
}

const ComplianceStandardDetail: React.FC<ComplianceStandardDetailProps> = ({ standard }) => {
  const { name, compliance, description, details } = standard

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'compliant':
        return 'green'
      case 'partially compliant':
        return 'yellow'
      case 'non-compliant':
        return 'red'
      default:
        return 'gray'
    }
  }

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'compliant':
        return FiCheckCircle
      case 'partially compliant':
        return FiInfo
      case 'non-compliant':
        return FiAlertTriangle
      default:
        return FiInfo
    }
  }

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Heading size="md" mb={2}>Description</Heading>
        <Text color="gray.600">{description}</Text>
      </Box>

      <Box>
        <Heading size="md" mb={2}>Overall Compliance</Heading>
        <Progress value={compliance} size="lg" colorScheme={compliance > 80 ? 'green' : compliance > 60 ? 'yellow' : 'red'} borderRadius="full" />
        <Text mt={2} fontWeight="bold" textAlign="right">{compliance}%</Text>
      </Box>

      {details && (
        <Box>
          <Heading size="md" mb={4}>Detailed Compliance Information</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Control</Th>
                <Th>PDF Reference</Th>
                <Th>Status</Th>
                <Th>Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              {details.map((detail, index) => (
                <Tr key={index}>
                  <Td fontWeight="medium">{detail.control}</Td>
                  <Td>{detail.pdfReference}</Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(detail.status)} display="flex" alignItems="center">
                      <Icon as={getStatusIcon(detail.status)} mr={1} />
                      {detail.status}
                    </Badge>
                  </Td>
                  <Td>
                    <Text><strong>Adherence:</strong> {detail.adherence}</Text>
                    {detail.details && <Text mt={1}><strong>Details:</strong> {detail.details}</Text>}
                    {detail.recommendation && (
                      <Text mt={1} color="brand.600">
                        <strong>Recommendation:</strong> {detail.recommendation}
                      </Text>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </VStack>
  )
}

export default ComplianceStandardDetail
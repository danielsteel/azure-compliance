import React, { useState } from 'react'
import { Box, Heading, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Button, Text, VStack, HStack, Icon, Progress } from '@chakra-ui/react'
import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import ComplianceStandardCard from '../components/ComplianceStandardCard'
import ComplianceStandardDetail from '../components/ComplianceStandardDetail'

const ComplianceStandards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedStandard, setSelectedStandard] = useState(null)

  const standards = [
    {
      name: 'NIST SP 800-53',
      compliance: 85,
      description: 'Provides a catalog of security and privacy controls for federal information systems and organizations.',
      details: [
        { control: 'AC-2', pdfReference: 'Page 23, Line 15', adherence: 'Implemented account management procedures', status: 'Compliant', details: 'All user accounts are properly managed with regular reviews and automated deactivation for dormant accounts.' },
        { control: 'AU-2', pdfReference: 'Page 45, Line 7', adherence: 'Configured system-wide audit logging', status: 'Partially Compliant', details: 'Audit logging is implemented for most systems, but some legacy applications lack comprehensive logging capabilities.', recommendation: 'Upgrade legacy systems or implement additional logging mechanisms.' },
        { control: 'SC-7', pdfReference: 'Page 78, Line 32', adherence: 'Implemented boundary protection mechanisms', status: 'Compliant', details: 'Firewalls and intrusion detection systems are in place at all network boundaries.' },
      ]
    },
    {
      name: 'ISO/IEC 27001',
      compliance: 92,
      description: 'An international standard for implementing and maintaining an effective information security management system (ISMS).',
      details: [
        { control: 'A.9.2', pdfReference: 'Page 15, Line 8', adherence: 'Implemented user access provisioning', status: 'Compliant', details: 'User access rights are reviewed regularly and updated based on role changes.' },
        { control: 'A.12.4', pdfReference: 'Page 22, Line 19', adherence: 'Established logging and monitoring procedures', status: 'Compliant', details: 'Centralized logging system is in place with real-time alerting for security events.' },
        { control: 'A.13.1', pdfReference: 'Page 25, Line 3', adherence: 'Implemented network security controls', status: 'Partially Compliant', details: 'Most network segments are properly secured, but some internal networks lack proper segmentation.', recommendation: 'Implement network segmentation for all internal networks.' },
      ]
    },
    {
      name: 'CIS Azure Foundations Benchmark',
      compliance: 78,
      description: 'Provides prescriptive guidance for establishing a secure baseline configuration for Microsoft Azure.',
      details: [
        { control: '1.1', pdfReference: 'Page 8, Line 5', adherence: 'Ensure that multi-factor authentication is enabled for all privileged users', status: 'Compliant', details: 'MFA is enforced for all admin accounts and privileged roles.' },
        { control: '2.3', pdfReference: 'Page 12, Line 18', adherence: 'Ensure that storage account access keys are periodically rotated', status: 'Partially Compliant', details: 'Most storage account keys are rotated, but some legacy accounts have outdated keys.', recommendation: 'Implement automated key rotation for all storage accounts.' },
        { control: '3.7', pdfReference: 'Page 17, Line 22', adherence: 'Ensure that Network Watcher is enabled', status: 'Non-Compliant', details: 'Network Watcher is not enabled in all regions where virtual networks are deployed.', recommendation: 'Enable Network Watcher for all regions with virtual networks.' },
      ]
    },
  ]

  const handleStandardClick = (standard) => {
    setSelectedStandard(standard)
    onOpen()
  }

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'compliant':
        return FiCheckCircle
      case 'partially compliant':
        return FiInfo
      case 'non-compliant':
        return FiAlertCircle
      default:
        return FiInfo
    }
  }

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

  return (
    <Box>
      <Heading mb={6} color="gray.800">Compliance Standards</Heading>
      <Text mb={8} fontSize="lg" color="gray.600">Review and manage compliance across various industry standards and regulations.</Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {standards.map((standard, index) => (
          <ComplianceStandardCard 
            key={index} 
            {...standard} 
            onClick={() => handleStandardClick(standard)}
          />
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent borderRadius="xl">
          <ModalHeader>{selectedStandard?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedStandard && (
              <VStack spacing={6} align="stretch">
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>Description</Text>
                  <Text>{selectedStandard.description}</Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={2}>Compliance Score</Text>
                  <Progress value={selectedStandard.compliance} size="lg" colorScheme={selectedStandard.compliance > 80 ? 'green' : selectedStandard.compliance > 60 ? 'yellow' : 'red'} borderRadius="full" />
                  <Text mt={2} fontWeight="bold" textAlign="right">{selectedStandard.compliance}%</Text>
                </Box>
                <Box>
                  <Text fontSize="lg" fontWeight="bold" mb={4}>Control Details</Text>
                  <VStack spacing={4} align="stretch">
                    {selectedStandard.details.map((detail, index) => (
                      <Box key={index} p={4} borderWidth={1} borderRadius="md" borderColor="gray.200">
                        <HStack spacing={4} mb={2}>
                          <Icon as={getStatusIcon(detail.status)} color={`${getStatusColor(detail.status)}.500`} boxSize={5} />
                          <Text fontWeight="bold">{detail.control}</Text>
                          <Text fontSize="sm" color="gray.500">({detail.pdfReference})</Text>
                        </HStack>
                        <Text mb={2}><strong>Adherence:</strong> {detail.adherence}</Text>
                        <Text mb={2}><strong>Status:</strong> {detail.status}</Text>
                        <Text mb={2}><strong>Details:</strong> {detail.details}</Text>
                        {detail.recommendation && (
                          <Text color="brand.600"><strong>Recommendation:</strong> {detail.recommendation}</Text>
                        )}
                      </Box>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box mt={8}>
        <Button colorScheme="brand" onClick={() => handleStandardClick({ 
          name: 'Network Compliance', 
          compliance: 78, 
          description: 'Overview of network-specific compliance standards and gaps.',
          details: [
            { control: 'Firewall Configuration', status: 'Partially Compliant', adherence: 'Some firewall rules are overly permissive', details: 'Several firewall rules allow broad access that should be restricted.', recommendation: 'Review and tighten firewall rules, implementing least privilege access.' },
            { control: 'Network Segmentation', status: 'Non-Compliant', adherence: 'Insufficient segmentation between critical systems', details: 'Critical systems are not properly isolated from general network traffic.', recommendation: 'Implement strict network segmentation to isolate critical systems.' },
            { control: 'Encryption in Transit', status: 'Partially Compliant', adherence: 'Not all internal traffic is encrypted', details: 'Some internal network traffic is still unencrypted, posing a risk to data confidentiality.', recommendation: 'Implement end-to-end encryption for all sensitive data in transit, including internal traffic.' },
          ] 
        })}>
          View Network Compliance
        </Button>
      </Box>
    </Box>
  )
}

export default ComplianceStandards
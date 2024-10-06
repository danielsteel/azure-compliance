import React from 'react'
import { Box, Text, VStack, HStack, Icon, Badge } from '@chakra-ui/react'
import { FiAlertCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi'

const RecentAlerts = () => {
  const alerts = [
    { message: 'New unencrypted storage account detected', severity: 'high' },
    { message: 'Unusual access pattern detected', severity: 'medium' },
    { message: 'Policy compliance dropped below 80%', severity: 'low' },
    { message: 'Failed login attempts increased', severity: 'medium' },
  ]

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'high':
        return FiAlertCircle
      case 'medium':
        return FiAlertTriangle
      case 'low':
        return FiInfo
      default:
        return FiInfo
    }
  }

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'red'
      case 'medium':
        return 'orange'
      case 'low':
        return 'yellow'
      default:
        return 'gray'
    }
  }

  return (
    <Box
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={6}
      height="100%"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4} color="gray.700">
        Recent Alerts
      </Text>
      <VStack spacing={4} align="stretch">
        {alerts.map((alert, index) => (
          <HStack key={index} spacing={3} bg={`${getSeverityColor(alert.severity)}.50`} p={3} borderRadius="md">
            <Icon as={getSeverityIcon(alert.severity)} color={`${getSeverityColor(alert.severity)}.500`} boxSize={5} />
            <Box flex={1}>
              <Text fontSize="sm" fontWeight="medium" color="gray.700">{alert.message}</Text>
            </Box>
            <Badge colorScheme={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
          </HStack>
        ))}
      </VStack>
    </Box>
  )
}

export default RecentAlerts
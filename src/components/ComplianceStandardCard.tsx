import React from 'react'
import { Box, Text, CircularProgress, CircularProgressLabel, VStack, Button, Icon } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface ComplianceStandardCardProps {
  name: string
  compliance: number
  description: string
  onClick: () => void
}

const ComplianceStandardCard: React.FC<ComplianceStandardCardProps> = ({ name, compliance, description, onClick }) => {
  return (
    <Box
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={6}
      display="flex"
      flexDirection="column"
      alignItems="center"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
    >
      <VStack spacing={4} align="center">
        <Text fontSize="xl" fontWeight="bold" textAlign="center" color="gray.700">
          {name}
        </Text>
        <CircularProgress
          value={compliance}
          size="120px"
          thickness="8px"
          color={compliance > 80 ? 'green.400' : compliance > 60 ? 'orange.400' : 'red.400'}
        >
          <CircularProgressLabel fontSize="2xl" fontWeight="bold">{compliance}%</CircularProgressLabel>
        </CircularProgress>
        <Text fontSize="sm" textAlign="center" color="gray.600" noOfLines={3}>
          {description}
        </Text>
        <Button 
          rightIcon={<Icon as={FiArrowRight} />} 
          colorScheme="brand" 
          onClick={onClick} 
          size="sm"
          width="full"
        >
          View Details
        </Button>
      </VStack>
    </Box>
  )
}

export default ComplianceStandardCard
import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import ResourceComplianceCard from '../components/ResourceComplianceCard'

const ResourceCompliance = () => {
  const resources = [
    { type: 'Virtual Machines', total: 100, compliant: 85 },
    { type: 'Storage Accounts', total: 50, compliant: 45 },
    { type: 'SQL Databases', total: 30, compliant: 28 },
    { type: 'App Services', total: 40, compliant: 37 },
    { type: 'Key Vaults', total: 20, compliant: 20 },
    { type: 'Network Security Groups', total: 60, compliant: 52 },
  ]

  return (
    <Box>
      <Heading mb={6}>Resource Compliance</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {resources.map((resource, index) => (
          <ResourceComplianceCard key={index} {...resource} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default ResourceCompliance
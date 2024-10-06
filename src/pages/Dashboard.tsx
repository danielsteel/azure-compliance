import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, Icon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from '@chakra-ui/react'
import { FiTrendingUp, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import OverallComplianceScore from '../components/OverallComplianceScore'
import ComplianceTrend from '../components/ComplianceTrend'
import TopViolations from '../components/TopViolations'
import RecentAlerts from '../components/RecentAlerts'

const StatCard = ({ title, value, trend, icon }) => (
  <Box bg="white" borderRadius="xl" boxShadow="xl" p={6}>
    <Flex alignItems="center" mb={4}>
      <Icon as={icon} boxSize={8} color="brand.500" mr={4} />
      <Heading size="md">{title}</Heading>
    </Flex>
    <Stat>
      <StatNumber fontSize="2xl">{value}</StatNumber>
      <StatHelpText>
        <StatArrow type={trend > 0 ? 'increase' : 'decrease'} />
        {Math.abs(trend)}% since last month
      </StatHelpText>
    </Stat>
  </Box>
)

const Dashboard = () => {
  return (
    <Box>
      <Heading color="gray.800" mb={6}>Azure Public Cloud Compliance Dashboard</Heading>
      <Text mb={8} fontSize="lg" color="gray.600">Monitor and manage your compliance status across various standards and policies.</Text>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
        <StatCard title="Overall Compliance" value="78%" trend={5.2} icon={FiTrendingUp} />
        <StatCard title="Active Alerts" value="12" trend={-3.1} icon={FiAlertCircle} />
        <StatCard title="Compliant Resources" value="1,284" trend={2.5} icon={FiCheckCircle} />
        <ComplianceTrend />
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <OverallComplianceScore />
        <TopViolations />
        <RecentAlerts />
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
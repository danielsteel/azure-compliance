import React from 'react'
import { ChakraProvider, Box, Flex } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import ComplianceStandards from './pages/ComplianceStandards'
import PolicyCompliance from './pages/PolicyCompliance'
import ResourceCompliance from './pages/ResourceCompliance'
import NetworkCompliance from './pages/NetworkCompliance'
import AuditLogs from './pages/AuditLogs'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex>
          <Sidebar />
          <Box flex={1} ml="64" p={8} bg="gray.50" minHeight="100vh">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/compliance-standards" element={<ComplianceStandards />} />
              <Route path="/policy-compliance" element={<PolicyCompliance />} />
              <Route path="/resource-compliance" element={<ResourceCompliance />} />
              <Route path="/network-compliance" element={<NetworkCompliance />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  )
}

export default App
import React from 'react'
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Badge } from '@chakra-ui/react'

const AuditLogs = () => {
  const logs = [
    { timestamp: '2023-05-15 14:30:22', action: 'User Login', user: 'john.doe@example.com', status: 'Success' },
    { timestamp: '2023-05-15 14:45:10', action: 'Policy Change', user: 'admin@example.com', status: 'Success' },
    { timestamp: '2023-05-15 15:12:05', action: 'Resource Creation', user: 'jane.smith@example.com', status: 'Failure' },
    { timestamp: '2023-05-15 15:30:18', action: 'Permission Change', user: 'admin@example.com', status: 'Success' },
    { timestamp: '2023-05-15 16:05:33', action: 'User Login', user: 'guest@example.com', status: 'Failure' },
  ]

  return (
    <Box>
      <Heading mb={6}>Audit Logs</Heading>
      <Box bg="white" boxShadow="md" borderRadius="lg" overflow="hidden">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Timestamp</Th>
              <Th>Action</Th>
              <Th>User</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {logs.map((log, index) => (
              <Tr key={index}>
                <Td>{log.timestamp}</Td>
                <Td>{log.action}</Td>
                <Td>{log.user}</Td>
                <Td>
                  <Badge colorScheme={log.status === 'Success' ? 'green' : 'red'}>{log.status}</Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  )
}

export default AuditLogs
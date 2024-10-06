import React from 'react'
import { Box, VStack, Icon, Text, Link, Flex, Spacer } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FiHome, FiCheckSquare, FiShield, FiServer, FiList, FiWifi } from 'react-icons/fi'

const MenuItem = ({ icon, children, to }) => {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      as={RouterLink}
      to={to}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'brand.400',
          color: 'white',
        }}
        bg={isActive ? 'brand.400' : 'transparent'}
        color={isActive ? 'white' : 'gray.600'}
      >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
        {children}
      </Flex>
    </Link>
  )
}

const Sidebar = () => {
  return (
    <Box
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w="64"
      pos="fixed"
      h="full"
      boxShadow="2xl"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="brand.500">
          Cloud Compliance
        </Text>
      </Flex>
      <VStack spacing={1} align="stretch" mt={6}>
        <MenuItem icon={FiHome} to="/">Dashboard</MenuItem>
        <MenuItem icon={FiCheckSquare} to="/compliance-standards">Compliance Standards</MenuItem>
        <MenuItem icon={FiShield} to="/policy-compliance">Policy Compliance</MenuItem>
        <MenuItem icon={FiServer} to="/resource-compliance">Resource Compliance</MenuItem>
        <MenuItem icon={FiWifi} to="/network-compliance">Network Compliance</MenuItem>
        <MenuItem icon={FiList} to="/audit-logs">Audit Logs</MenuItem>
      </VStack>
      <Spacer />
      <Box p="4" fontSize="sm" color="gray.500" textAlign="center" borderTop="1px" borderTopColor="gray.200" mt="4">
        <Text>Azure Public Cloud Compliance</Text>
        <Text>© 2023 All Rights Reserved</Text>
      </Box>
    </Box>
  )
}

export default Sidebar
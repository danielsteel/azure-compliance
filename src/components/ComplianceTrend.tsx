import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ComplianceTrend = () => {
  const data = [
    { name: 'Jan', score: 65 },
    { name: 'Feb', score: 68 },
    { name: 'Mar', score: 72 },
    { name: 'Apr', score: 75 },
    { name: 'May', score: 78 },
  ]

  return (
    <Box
      bg="white"
      boxShadow="xl"
      borderRadius="xl"
      p={4}
      height="100%"
    >
      <Text fontSize="lg" fontWeight="bold" mb={2} color="gray.700">
        Compliance Trend
      </Text>
      <Flex justifyContent="center" alignItems="center" height="200px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#718096', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#718096', fontSize: 12 }}
              domain={[60, 80]}
              ticks={[60, 65, 70, 75, 80]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#f7fafc',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="score" 
              stroke="#3182ce" 
              strokeWidth={2}
              dot={{ fill: '#3182ce', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </Box>
  )
}

export default ComplianceTrend
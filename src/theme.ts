import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    brand: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
    gray: {
      50: '#F7FAFC',
      100: '#EDF2F7',
      200: '#E2E8F0',
      300: '#CBD5E0',
      400: '#A0AEC0',
      500: '#718096',
      600: '#4A5568',
      700: '#2D3748',
      800: '#1A202C',
      900: '#171923',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'lg',
      },
      variants: {
        solid: (props) => ({
          bg: `${props.colorScheme}.500`,
          color: 'white',
          _hover: {
            bg: `${props.colorScheme}.600`,
          },
        }),
        outline: (props) => ({
          border: '2px solid',
          borderColor: `${props.colorScheme}.500`,
          color: `${props.colorScheme}.500`,
        }),
      },
    },
    Card: {
      baseStyle: {
        p: '6',
        bg: 'white',
        boxShadow: 'lg',
        borderRadius: 'xl',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
})

export default theme
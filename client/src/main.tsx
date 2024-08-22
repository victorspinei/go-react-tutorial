import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import theme from './chakra/theme.ts'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  </ChakraProvider>
)

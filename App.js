import { NavigationContainer } from '@react-navigation/native'
import BottomBar from './navigation/BottomBar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App () {
  return (
    <QueryClientProvider client={ queryClient }>
      <NavigationContainer>
        <BottomBar/>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

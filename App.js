import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MyStack></MyStack>
      </NavigationContainer>
    </QueryClientProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

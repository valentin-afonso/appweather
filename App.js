import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './BottomBar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomBar></BottomBar>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

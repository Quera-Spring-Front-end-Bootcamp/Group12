import {  Text } from '@mantine/core';
import { ThemeProvider } from './ThemeProvider';




export default function App() {
  
  return (
    
      <ThemeProvider>
        <Text>Welcome to Mantine!</Text>
      </ThemeProvider>
    
  );
}
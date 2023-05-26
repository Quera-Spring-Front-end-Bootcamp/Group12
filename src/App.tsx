import { AppShell } from '@mantine/core';
import { ThemeProvider } from './ThemeProvider';
import Sidebar from './layout/Sidebar';
import MainRouter from './router';
import MainLayout from './layout/MainLayout';

export default function App() {
  return (
    <ThemeProvider >
      <MainLayout/>
      {/* <MainRouter /> */}
    </ThemeProvider>
  );
}

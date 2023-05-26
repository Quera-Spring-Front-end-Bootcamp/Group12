import { ThemeProvider } from './ThemeProvider';
import MainLayout from './layout/MainLayout';
import MainRouter from './router';

export default function App() {
  return (
    <ThemeProvider>
      {/* <MainRouter /> */}
      <MainLayout />
    </ThemeProvider>
  );
}

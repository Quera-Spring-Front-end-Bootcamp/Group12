import { ThemeProvider } from './ThemeProvider';
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

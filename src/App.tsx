import { ThemeProvider } from './ThemeProvider';
import MainRouter from './router';

export default function App() {
  return (
    <ThemeProvider>
      <MainRouter />
    </ThemeProvider>
  );
}

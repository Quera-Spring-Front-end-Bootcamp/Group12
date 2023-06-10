import { Notifications } from '@mantine/notifications';
import { ThemeProvider } from './ThemeProvider';
import MainRouter from './router';
import { Provider } from 'react-redux';
import store from './data/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Notifications />
          <MainRouter />
        </ThemeProvider>
      </Provider>
    </>
  );
}

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
  createEmotionCache
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { useAppSelector } from './data/reduxHooks';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin]
});

export const theme: MantineThemeOverride = {
  colorScheme: 'light'
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const themeColor = useAppSelector((state) => state.theme.themeColor);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{
          dir: 'rtl',
          colorScheme,
          fontFamily: 'dana , sans-serif',

          colors: {
            brand: [
              '#defdfd',
              '#bbf1f2',
              '#95e7e8',
              '#6dddde',
              '#49d3d5',
              '#30babb',
              '#208D8E',
              '#116768',
              '#003f3f',
              '#001717'
            ]
          },
          primaryShade: { light: 6, dark: 7 },
          primaryColor: themeColor
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

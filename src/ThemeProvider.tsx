import {
  MantineProvider,
  MantineThemeOverride,
  createEmotionCache,
} from "@mantine/core";
import rtlPlugin from "stylis-plugin-rtl";

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin],
});

export const theme: MantineThemeOverride = {
  colorScheme: "light",
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{
        dir: "rtl",
        colorScheme: "light",
        fontFamily: "dana , sans-serif",

        colors: {
          firuzei: [
            "#defdfd",
            "#bbf1f2",
            "#95e7e8",
            "#6dddde",
            "#49d3d5",
            "#30babb",
            "#208D8E",
            "#116768",
            "#003f3f",
            "#001717",
          ],
        },
        primaryShade: { light: 6, dark: 7 },
        primaryColor: "firuzei",
      }}
    >
      {children}
    </MantineProvider>
  );
}

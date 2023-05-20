import { MantineProvider, MantineThemeOverride } from "@mantine/core";

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
      theme={{
        colorScheme: "light",

        colors: {
          firuzei: [
            "#defdfd",
            "#bbf1f2",
            "#95e7e8",
            "#6dddde",
            "#49d3d5",
            "#30babb",
            "#219192",
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

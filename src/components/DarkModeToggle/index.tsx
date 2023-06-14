import { useMantineColorScheme, SegmentedControl, Group, Center, Box } from '@mantine/core';
import { Sun, MoonStars } from '../../assets/icons';

export default function DarkModeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group w={'112px'} position="center" my="1px">
      <SegmentedControl
        size="xs"
        value={colorScheme}
        onChange={(value: 'light' | 'dark') => toggleColorScheme(value)}
        data={[
          {
            value: 'light',
            label: (
              <Center>
                <Sun width="1rem" />
                <Box ml={6}>روز</Box>
              </Center>
            )
          },
          {
            value: 'dark',
            label: (
              <Center>
                <MoonStars width="1rem" />
                <Box ml={6}>شب</Box>
              </Center>
            )
          }
        ]}
      />
    </Group>
  );
}

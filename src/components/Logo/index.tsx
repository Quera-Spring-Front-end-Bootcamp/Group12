import { Text, useMantineTheme } from '@mantine/core';

const Logo = () => {
  const themecolor = useMantineTheme()
  const color = themecolor.colors[themecolor.primaryColor]
  return(
  <Text
    fz="2rem"
    fw="800"
    bg={`linear-gradient(90deg, ${color[3]} 0, ${color[7]} 120%)`}
    style={{
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text'
    }}
  >
    کوئرا تسک منیجر
  </Text>
)};

export default Logo;

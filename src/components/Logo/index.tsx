import { Text, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';

const Logo = () => {
  const themecolor = useMantineTheme()
  const color = themecolor.colors[themecolor.primaryColor]
  return(
    <Link to='/'>

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
    </Link>
)};

export default Logo;

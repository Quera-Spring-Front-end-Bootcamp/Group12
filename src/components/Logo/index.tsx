import { Text } from '@mantine/core';

const Logo = () => (
  <Text
    fz="2rem"
    fw="800"
    bg="linear-gradient(90deg, #118C80 0, #4AB7D8 120%)"
    style={{
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text'
    }}
  >
    کوئرا تسک منیجر
  </Text>
);

export default Logo;

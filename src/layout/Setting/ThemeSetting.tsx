import { Flex, Radio, Text, Title, useMantineTheme, useMantineColorScheme } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import themeSlice from '../../data/themeSlice/themeSlice';
import DarkModeToggle from '../../components/DarkModeToggle';

const colors: string[] = [
  'pink',
  'grape',
  'indigo',
  'cyan',
  'brand',
  'green',
  'lime',
  'yellow',
  'orange'
];

export default function ThemeSetting() {
  const dispatch = useAppDispatch();
  const themeColor = useAppSelector((state) => state.theme.themeColor);
  const { setTheme } = themeSlice.actions;
  const changeHandler = (value: string) => dispatch(setTheme(value));
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const primaryShade = colorScheme === 'light' ? 6 : 7;
  return (
    <Flex direction={'column'} gap={40} ml={58} mt={170} h={'100%'}>
      <Title>تنظیمات</Title>
      <Radio.Group
        size="md"
        value={themeColor}
        onChange={changeHandler}
        name="themeColorPicker"
        title="انتخاب تم"
      >
        <Text mb={16}>انتخاب تم</Text>
        <Flex gap={16} justify={'left'} align={'center'}>
          {colors.map((color, index) => (
            <Radio
              key={index}
              transitionDuration={200}
              styles={{
                radio: {
                  background: theme.colors[color][primaryShade],
                  border: 'none'
                }
              }}
              className={`transition-all hover:scale-150 ${themeColor === color && 'scale-150'}`}
              value={color}
              color={color}
            />
          ))}
        </Flex>
      </Radio.Group>
      <DarkModeToggle />
    </Flex>
  );
}

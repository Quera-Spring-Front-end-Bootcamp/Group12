import { useDisclosure } from '@mantine/hooks';
import Modal from '../Modal';
import {
  Flex,
  Radio,
  Text,
  TextInput,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { TagsCircle } from '../../assets/icons';
import Button from '../Button';
import { useForm } from '@mantine/form';

const CreateTagModal = ({ setTag }: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { colors } = useMantineTheme();
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const primaryShade = colorScheme === 'light' ? 6 : 7;
  const form = useForm({
    initialValues: {
      name: '',
      color: ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'نام تگ باید بیشتر از دو حرف باشد'),
      color: (value) => (value.length > 2 ? null : 'لطفا رنگ تگ را انتحاب کنید')
    }
  });
  const handleSubmit = () => {
    if (form.validate().hasErrors === false) {
      setTag(form.values.name, form.values.color);
      form.reset();
      close();
    }
  };
  return (
    <>
      <Modal
        overlayProps={{
          opacity: 0.55,
          blur: 3,
          zIndex: 201
        }}
        opened={opened}
        onClose={close}
        title="ساختن تگ"
        centered
      >
        <Flex direction="column" gap="lg" className=" mt-5">
          <TextInput required label="نام تگ" {...form.getInputProps('name')} />

          <Radio.Group
            size="md"
            name="themeColorPicker"
            title="انتخاب تم"
            {...form.getInputProps('color')}
          >
            <Flex gap={8} justify={'left'} wrap={'wrap'} w={'65%'} align={'center'}>
              {Object.keys(colors).map((color, index) => (
                <Radio
                  key={index}
                  transitionDuration={200}
                  styles={{
                    radio: {
                      background: theme.colors[color][primaryShade],
                      border: 'none'
                    }
                  }}
                  className={`transition-all hover:scale-110 `}
                  value={color}
                  color={color}
                />
              ))}
            </Flex>
          </Radio.Group>
          <Text>رنگ تگ:{form.values.color}</Text>

          <Button onClick={handleSubmit}>تایید</Button>
        </Flex>
      </Modal>

      <SvgProvier>
        <TagsCircle onClick={open} className="cursor-pointer -m-1" />
      </SvgProvier>
    </>
  );
};

export default CreateTagModal;

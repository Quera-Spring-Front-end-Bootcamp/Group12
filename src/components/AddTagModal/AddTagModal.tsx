import Modal from '../Modal';
import {
  Flex,
  Radio,
  Text,
  TextInput,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';

import Button from '../Button';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import myAxios from '../../helpers/myAxios';
import { tag } from '../../data/dataSlice/boardsSlice';
import { useState } from 'react';

type props = {
  opened: boolean;
  onClose: () => void;
  taskId: string;
  setTags: any;
  tags: tag[];
};

const AddTagModal = ({ opened, onClose, taskId, setTags, tags }: props) => {
  const { colors } = useMantineTheme();
  const [loading, setLoading] = useState(false);

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
  const handleSubmit = async () => {
    if (form.validate().hasErrors === false) {
      setLoading(true);

      try {
        const res = await myAxios.post(`/tags`, {
          name: form.values.name,
          taskId,
          color: form.values.color
        });
        notifications.show({ message: 'تگ ساخته شد', color: 'green' });
        setTags([
          ...tags,
          {
            tagName: res.data.data.tag.name,
            color: res.data.data.tag.color,
            _id: res.data.data.tag._id
          }
        ]);
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
      setLoading(false);
      form.reset();
      onClose();
    }
  };
  return (
    <Modal
      overlayProps={{
        opacity: 0.55,
        blur: 3
      }}
      opened={opened}
      onClose={onClose}
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

        <Button loading={loading} onClick={handleSubmit}>
          تایید
        </Button>
      </Flex>
    </Modal>
  );
};

export default AddTagModal;

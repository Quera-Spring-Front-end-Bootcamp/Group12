import { useDisclosure } from '@mantine/hooks';
import Modal from '../Modal';
import { ColorPicker, Flex, Text, TextInput } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { TagsCircle } from '../../assets/icons';
import Button from '../Button';
import { useForm } from '@mantine/form';

const CreateTagModal = ({ setTag }: any) => {
  const [opened, { open, close }] = useDisclosure(false);
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
      <Modal opened={opened} onClose={close} title="ساختن تگ" centered>
        <Flex direction="column" gap="lg" className="h-96 mt-5">
          <TextInput required label="نام تگ" {...form.getInputProps('name')} />

          <ColorPicker {...form.getInputProps('color')} />
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

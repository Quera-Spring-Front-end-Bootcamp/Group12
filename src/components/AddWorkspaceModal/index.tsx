import { Flex, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import TextInput from '../TextInput';
import Button from '../Button';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useAppDispatch } from '../../data/reduxHooks';
import { updateWorkspaces } from '../../data/dataSlice/workSpacesSlice';
import { useState } from 'react';

type props = {
  opened: boolean;
  onClose: () => void;
};
const AddWorkspaceModal = ({ opened, onClose }: props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      name: ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'نام ورک اسپیس باید بیشتر از دو حرف باشد')
    }
  });
  return (
    <Modal opened={opened} onClose={onClose} title="ساختن ورک اسپیس جدید" centered dir="rtl">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          if (form.validate().hasErrors === false) {
            try {
              const res = await myAxios.post('/workspace/create', form.values);
              dispatch(updateWorkspaces(res.data.data));
              notifications.show({ message: 'ورک اسپیس ایجاد شد', color: 'green' });
              form.reset();
              onClose();
            } catch (error: any) {
              notifications.show({ message: error?.message, color: 'red' });
            }
          }
        }}
      >
        <Flex direction="column" px="sm" gap="lg">
          <TextInput
            w="100%"
            fw="500"
            color="#C8C8C8"
            fz="md"
            label="نام ورک اسپیس"
            labelProps={{
              style: {
                fontWeight: '400',
                marginBottom: '8px',
                fontSize: '14px'
              }
            }}
            placeholder="نام ورک اسپیس را وارد کنید"
            {...form.getInputProps('name')}
            mt={'lg'}
            mb="lg"
          />
          <Button loading={loading} type="submit">
            ساختن ورک اسپیس
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default AddWorkspaceModal;

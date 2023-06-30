import { useForm } from '@mantine/form';
import { useAppDispatch } from '../../data/reduxHooks';
import { Button, Modal, TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import myAxios from '../../helpers/myAxios';
import { addProject } from '../../data/dataSlice/workSpacesSlice';
import { useState } from 'react';

type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};
const AddProjectModal = ({ opened, onClose, id }: props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      name: '',
      workspaceId: id
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'نام باید بیشتر از دو حرف باشد')
    }
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (form.validate().hasErrors === false) {
      try {
        const res = await myAxios.post(`/projects/`, { name: form.values.name, workspaceId: id });
        dispatch(addProject(res.data.data));
        notifications.show({ message: 'پروژه ایجاد شد', color: 'green' });
        form.reset();
        onClose();
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  return (
    <Modal opened={opened} onClose={onClose} size="md" centered dir="rtl" title="اظافه کردن پروژه">
      <form>
        <TextInput
          label="نام پروژه را وارد کنید"
          labelProps={{
            style: {
              marginBottom: '8px'
            }
          }}
          fw="500"
          color="#C8C8C8"
          fz="md"
          placeholder="نام پروژه را وارد کنید"
          {...form.getInputProps('name')}
        />
        <Button loading={loading} type="submit" className="mt-4" onClick={(e) => handleSubmit(e)}>
          ایجاد پروژه
        </Button>
      </form>
    </Modal>
  );
};

export default AddProjectModal;

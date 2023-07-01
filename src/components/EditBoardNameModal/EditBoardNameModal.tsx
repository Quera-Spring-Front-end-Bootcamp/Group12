import { useForm } from '@mantine/form';
import { useAppDispatch } from '../../data/reduxHooks';
import { Button, Modal } from '@mantine/core';
import TextInput from '../TextInput';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useParams } from 'react-router';
import { updateBoards } from '../../data/dataSlice/boardsSlice';
import { useState } from 'react';

type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};
const EditBoardNameModal = ({ opened, onClose, id }: props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const { projectID } = useParams();
  const form = useForm({
    initialValues: {
      name: ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'نام باید بیشتر از دو حرف باشد')
    }
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.validate().hasErrors === false) {
      setLoading(true);
      try {
        await myAxios.put(`/board/${id}`, form.values);
        const boards = await myAxios.get(`/board/${projectID}`);
        dispatch(updateBoards(boards.data.data));
        notifications.show({ message: 'نام ویرایش شد', color: 'green' });
        form.reset();
        onClose();
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
      setLoading(false);
    }
  };
  return (
    <Modal opened={opened} onClose={onClose} size="md" centered dir="rtl" title="تغییر نام پروژه">
      <form>
        <TextInput
          label="نام جدید ستون را وارد کنید"
          labelProps={{
            style: {
              marginBottom: '8px'
            }
          }}
          fw="500"
          color="#C8C8C8"
          fz="md"
          placeholder="نام جدید ستون را وارد کنید"
          {...form.getInputProps('name')}
        />
        <Button loading={loading} type="submit" className="mt-4" onClick={(e) => handleSubmit(e)}>
          تغییر نام
        </Button>
      </form>
    </Modal>
  );
};

export default EditBoardNameModal;

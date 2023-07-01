import { Button, Modal, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import TextInput from '../TextInput';
import { notifications } from '@mantine/notifications';
import { useAppDispatch } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { useState } from 'react';
import { updateBoards } from '../../data/dataSlice/boardsSlice';
import { useParams } from 'react-router';

type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};
const EditTaskDescriptionModal = ({ opened, onClose, id }: props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { projectID } = useParams();
  const form = useForm({
    initialValues: {
      description: ''
    },

    validate: {
      description: (value) => (value.length > 10 ? null : 'توضیحات باید بیشتر از ده حرف باشد')
    }
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.validate().hasErrors === false) {
      setLoading(true);
      try {
        await myAxios.put(`/task/${id}`, form.values);
        const boards = await myAxios.get(`/board/${projectID}`);
        dispatch(updateBoards(boards.data.data));

        notifications.show({ message: 'نام ویرایش شد', color: 'green' });
        form.reset();
        setLoading(false);
        onClose();
      } catch (error: any) {
        setLoading(false);
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="md"
      centered
      dir="rtl"
      title="ویرایش توضیحات تسک">
      <form>
        <Textarea
          label="توضیحات جدید را وارد کنید"
          labelProps={{
            style: {
              marginBottom: '8px'
            }
          }}
          fw="500"
          color="#C8C8C8"
          fz="md"
          placeholder="توضیحات جدید را وارد کنید"
          {...form.getInputProps('description')}
        />
        <Button loading={loading} type="submit" className="mt-4" onClick={(e) => handleSubmit(e)}>
          ویرایش توضیحات
        </Button>
      </form>
    </Modal>
  );
};

export default EditTaskDescriptionModal;

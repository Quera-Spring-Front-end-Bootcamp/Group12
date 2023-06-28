import { useForm } from '@mantine/form';
import { useAppDispatch } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { Button, Modal, TextInput } from '@mantine/core';
import { useParams } from 'react-router';
import { addBoard } from '../../data/dataSlice/boardsSlice';

type props = {
  opened: boolean;
  onClose: () => void;
  id?: string;
};

const AddBoardModal = ({ opened, onClose, id }: props) => {
  const dispatch = useAppDispatch();
  const {projectID} = useParams();
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
    const projectId = id || projectID;
    if (form.validate().hasErrors === false) {
      try {
        const res = await myAxios.post(`/board/`, { name: form.values.name, projectId });
        dispatch(addBoard(res.data.data));
        notifications.show({ message: 'بورد ایجاد شد', color: 'green' });
        form.reset();
        onClose();
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  return (
    <Modal opened={opened} onClose={onClose} size="md" centered dir="rtl" title="اظافه کردن بورد به پروژه">
      <form>
        <TextInput
          label="نام بورد را وارد کنید"
          labelProps={{
            style: {
              marginBottom: '8px'
            }
          }}
          fw="500"
          color="#C8C8C8"
          fz="md"
          placeholder="نام بورد را وارد کنید"
          {...form.getInputProps('name')}
        />
        <Button type="submit" className="mt-4" onClick={(e) => handleSubmit(e)}>
          ایجاد بورد
        </Button>
      </form>
    </Modal>
  )
};

export default AddBoardModal;

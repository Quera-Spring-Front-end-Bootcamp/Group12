import { useForm } from '@mantine/form';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import { Button, Modal } from '@mantine/core';
import TextInput from '../TextInput';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { editProjectName } from '../../data/dataSlice/workSpacesSlice';
import { useParams } from 'react-router';
import { setProjectName } from '../../data/dataSlice/boardsSlice';

type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};
const EditProjectNameModal = ({ opened, onClose, id }: props) => {
  const dispatch = useAppDispatch();
  const { projectName } = useParams();
  const stateProjectName = useAppSelector(state=>state.boards.projectName)
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
      try {
        const res = await myAxios.put(`/projects/${id}`, form.values);
        const isProjectName = projectName ? projectName === stateProjectName : false;
        dispatch(editProjectName(res.data.data));
        if (isProjectName) dispatch(setProjectName(res.data.data.name));
        notifications.show({ message: 'نام ویرایش شد', color: 'green' });
        form.reset();
        onClose();
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  return (
    <Modal opened={opened} onClose={onClose} size="md" centered dir="rtl" title="تغییر نام پروژه">
      <form>
        <TextInput
          label="نام جدید پروژه را وارد کنید"
          labelProps={{
            style: {
              marginBottom: '8px'
            }
          }}
          fw="500"
          color="#C8C8C8"
          fz="md"
          placeholder="نام جدید پروژه را وارد کنید"
          {...form.getInputProps('name')}
        />
        <Button type="submit" className="mt-4" onClick={(e) => handleSubmit(e)}>
          تغییر نام
        </Button>
      </form>
    </Modal>
  );
};

export default EditProjectNameModal;

import { Button, Modal } from '@mantine/core';
import TextInput from '../TextInput';
import { useForm } from '@mantine/form';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useAppDispatch } from '../../data/reduxHooks';
import { editWorkspace } from '../../data/dataSlice/workSpacesSlice';

type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};

const EditNameModal = ({ opened, onClose, id }: props) => {
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      name: ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'نام باید بیشتر از دو حرف باشد')
    }
  });
  const handleSubmit =async (e:any)=> {
    e.preventDefault();
    if (form.validate().hasErrors === false) {
      try {
        const res = await myAxios.patch(`/workspace/${id}`, form.values);
        dispatch(editWorkspace(res.data.data));
        notifications.show({ message: 'نام ویرایش شد', color: 'green' });
        form.reset();
        onClose();
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  }
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="md"
      centered
      dir="rtl"
      title="تغییر نام ورک اسپیس">
      <form>
        <TextInput
          label="نام جدید ورک اسپیس را وارد کنید"
          labelProps={{
            style: {
              marginBottom: '8px'
            }
          }}
          fw="500"
          color="#C8C8C8"
          fz="md"
          placeholder="نام جدید ورک اسپیس را وارد کنید"
          {...form.getInputProps('name')}
        />
        <Button type="submit" className="mt-4" onClick={(e)=>handleSubmit(e)}>
          تغییر نام
        </Button>
      </form>
    </Modal>
  );
};

export default EditNameModal;

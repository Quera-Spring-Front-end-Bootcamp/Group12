import { Button, Flex, Modal } from '@mantine/core';
import TextInput from '../TextInput';
import { useForm } from '@mantine/form';
import { useParams } from 'react-router';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
type props = {
    opened: boolean;
    onClose: () => void;
    id?: string;
};

const ShareProjectModal = ({ opened, onClose, id }: props) => {
    const {projectID} = useParams();
  const form = useForm({
    initialValues: {
      name: ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'نام باید بیشتر از دو حرف باشد')
    }
  });
  const handleSubmit = async(e:any) =>{
    e.preventDefault();
    if (form.validate().hasErrors === false) {
        const projectId = projectID || id
        try {
            await myAxios.put(`/projects/${projectId}/members/${form.values.name}`);
            notifications.show({ message: 'کاربر به پروژه اظافه شد', color: 'green' });
            form.reset();
            onClose();
          } catch (error: any) {
            notifications.show({ message: error?.message, color: 'red' });
          }
    }
  }
  return (
    <>
      <form>
        <Modal title="به اشتراک گذاری پروژه" opened={opened} onClose={onClose}>
          <Flex m="24px 0" className='relative'>
            <TextInput
              w="100%"
              
              placeholder="دعوت با نام کاربری"
              {...form.getInputProps('name')}
            />

            <Button
            onClick={(e)=>handleSubmit(e)}
              className='text-sm font-normal absolute left-0'>
                
              ارسال
            </Button>
          </Flex>
        </Modal>
      </form>
    </>
  );
};

export default ShareProjectModal;

import {  Button, Flex, Modal, } from '@mantine/core';
import TextInput from '../TextInput';
import { useForm } from '@mantine/form';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
type props = {
  opened: boolean;
  onClose: () => void;
  id?: string;
};
const ShareWorkSpaceModal = ({ opened, onClose, id }: props) => {
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
        
        try {
            await myAxios.put(`/workspace/${id}/members/${form.values.name}`);
            notifications.show({ message: 'کاربر به ورک اسپیس اظافه شد', color: 'green' });
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
        <Modal title="به اشتراک گذاری ورک اسپیس" opened={opened} onClose={onClose}>
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

export default ShareWorkSpaceModal;

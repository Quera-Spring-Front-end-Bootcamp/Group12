import { Box, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode, useState } from 'react';
import myAxios from '../../helpers/myAxios';
import { useAppDispatch } from '../../data/reduxHooks';
import { notifications } from '@mantine/notifications';
import { useParams } from 'react-router';
import { updateBoards } from '../../data/dataSlice/boardsSlice';

type Props = {
  children: ReactNode;
  username: string;
  taskId: string;
};
const UnasignMember = ({ children, username, taskId }: Props) => {
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useAppDispatch();
  const { projectID }: any = useParams();
  const handleRemove = async () => {
    setLoading(true);
    try {
      await myAxios.delete(`/task/${taskId}/assign/${username}`);
      const boards = await myAxios.get(`/board/${projectID}`);
      dispatch(updateBoards(boards.data.data));
      notifications.show({ message: 'کاربر حذف شد', color: 'green' });
      close();
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      notifications.show({ message: error.message, color: 'red' });
    }
  };
  return (
    <>
      <Modal opened={opened} onClose={close} centered title="حذف کردن کاربر از تسک">
        <Button loading={loading} onClick={handleRemove}>
          حذف کردن کاربر از تسک
        </Button>
      </Modal>
      <Box onClick={open}>{children}</Box>
    </>
  );
};

export default UnasignMember;

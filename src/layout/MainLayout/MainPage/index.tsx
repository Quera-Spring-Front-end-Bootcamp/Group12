import { Outlet, useParams } from 'react-router';
import {
  getProjectBoards,
  setProjectMembers,
  setProjectName
} from '../../../data/dataSlice/boardsSlice';
import { useAppDispatch } from '../../../data/reduxHooks';
import { useEffect } from 'react';
import Button from '../../../components/Button';
import SvgProvier from '../../../assets/icons/SvgProvider';
import { PlusSquare } from '../../../assets/icons';
import ProjectHeader from '../ProjectHeader';
import myAxios from '../../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useDisclosure } from '@mantine/hooks';
import AddTaskModal from '../../../components/AddTaskModal';

export default function MainPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const { projectID }: any = useParams();
  const dispatch = useAppDispatch();
  const getProjectMembers = async () => {
    try {
      const res: any = await myAxios.get(`/projects/${projectID}`);
      dispatch(setProjectMembers(res?.data?.data?.members));
      dispatch(setProjectName(res?.data?.data?.name));
    } catch (error: any) {
      notifications.show({ message: error.message, color: 'red' });
    }
  };

  useEffect(() => {
    dispatch(getProjectBoards(projectID));
    getProjectMembers();
  }, [projectID]);

  return (
    <>
      <ProjectHeader />
      <Outlet />
      <AddTaskModal opened={opened} onClose={close} />
      <Button
        className="absolute bottom-6 left-4 z-10"
        onClick={() => {
          open();
        }}
        leftIcon={
          <SvgProvier>
            <PlusSquare />
          </SvgProvier>
        }>
        تسک جدید
      </Button>
    </>
  );
}

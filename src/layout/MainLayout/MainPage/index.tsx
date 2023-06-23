import { Outlet, useParams } from 'react-router';
import { getProjectBoards } from '../../../data/dataSlice/boardsSlice';
import { useAppDispatch } from '../../../data/reduxHooks';
import { useEffect } from 'react';
import Button from '../../../components/Button';
import SvgProvier from '../../../assets/icons/SvgProvider';
import { PlusSquare } from '../../../assets/icons';
import ProjectHeader from '../ProjectHeader';

export default function MainPage() {
  const { projectID }: any = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjectBoards(projectID));
  }, [projectID]);


  return (
    <>
      <ProjectHeader />
      <Outlet />
      <Button
        className="absolute bottom-6 left-4 z-10"
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

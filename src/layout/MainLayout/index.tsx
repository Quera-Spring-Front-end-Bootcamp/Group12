import { AppShell } from '@mantine/core';
import Sidebar from '../Sidebar';
import List from '../../components/List';
import MainPage from './MainPage';
import Button from '../../components/Button';
import { PlusSquare } from '../../assets/icons';
import SvgProvier from '../../assets/icons/SvgProvider';
import BoardView from './TaskViews/BoardView/Boardview';
import Calender from '../../components/Calender';

export default function MainLayout() {
  return (
    <>
      <AppShell
        bg="#FAFBFC"
        className="relative h-screen overflow-hidden"
        navbar={<Sidebar />}
        layout="alt"
      >
        <MainPage list={<List />} column={<BoardView />} calender={<Calender />} />
        <Button
          className="absolute bottom-6 left-4 z-10"
          leftIcon={
            <SvgProvier>
              <PlusSquare />
            </SvgProvier>
          }
        >
          تسک جدید
        </Button>
      </AppShell>
    </>
  );
}

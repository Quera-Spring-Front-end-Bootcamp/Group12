import { AppShell, Navbar } from '@mantine/core';
import MainHeader from './MainHeader';
import BoardView from './TaskViews/BoardView/Boardview';
import Sidebar from '../Sidebar';

export default function MainLayout() {
  return (
    <>
      <AppShell bg={'#FAFBFC'}

      navbar={<Sidebar/>}

      header={<MainHeader/>}

      layout='alt'
    >
      <BoardView/>
    </AppShell>
    </>
  );
}

import { AppShell, Navbar } from '@mantine/core';
import MainHeader from './MainHeader';
import Sidebar from '../Sidebar';

export default function MainLayout() {
  return (
    <>
      <AppShell bg={'#FAFBFC'}

      navbar={<Sidebar/>}

      header={<MainHeader/>}

      layout='alt'
    >
      {/* Your application here */}
    </AppShell>
    </>
  );
}


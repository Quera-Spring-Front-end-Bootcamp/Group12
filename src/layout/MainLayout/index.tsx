import { AppShell, useMantineColorScheme } from '@mantine/core';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <AppShell
        bg={colorScheme === 'light' ? '#FAFBFC' : 'dark'}
        className="relative h-screen overflow-hidden"
        navbar={<Sidebar />}
        layout="alt"
      >
        <Outlet />
      </AppShell>
    </>
  );
}

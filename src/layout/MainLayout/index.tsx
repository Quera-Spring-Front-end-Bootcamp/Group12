import { AppShell, Navbar } from '@mantine/core';
import MainHeader from './MainHeader';

export default function MainLayout() {
  return (
    <>
      <AppShell

      navbar={<Navbar width={{ base: 300 }} height={500} p="xs">
        {/* Navbar content */}</Navbar>}

      header={<MainHeader/>}

      layout='alt'
    >
      {/* Your application here */}
    </AppShell>
    </>
  );
}

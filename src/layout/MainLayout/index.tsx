import { AppShell, Navbar } from '@mantine/core';
import MainHeader from './MainHeader';

export default function MainLayout() {
  return (
    <>
      <AppShell bg={'#FAFBFC'}

      navbar={<Navbar style={{borderLeft:'1px solid #d5d5d5'}} width={{ base: 300 }} height={500} p="xs" bg={'transparent'}>
        {/* Navbar content */}</Navbar>}

      header={<MainHeader/>}

      layout='alt'
    >
      {/* Your application here */}
    </AppShell>
    </>
  );
}


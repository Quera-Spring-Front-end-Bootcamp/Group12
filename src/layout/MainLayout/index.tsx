import { AppShell, useMantineColorScheme, Flex, Text } from '@mantine/core';
import Sidebar from '../Sidebar';
import { Outlet, useParams } from 'react-router-dom';
import { EmptyPage } from '../../assets/icons';

export default function MainLayout() {
  const { projectID } = useParams();
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <AppShell
        bg={colorScheme === 'light' ? '#FAFBFC' : 'dark'}
        className="relative h-screen overflow-hidden"
        navbar={<Sidebar />}
        layout="alt"
      >
        {projectID ? (
          <Outlet />
        ) : (
          <Flex justify={'center'} align={'center'} gap={'xl'} direction={'column'} h={'100%'}>
            <EmptyPage style={{ height: '500px' }} />
            <Text weight={'bolder'} size={40}>
              کدوم پروژه رو نشون بدم؟ یکیشو انتخاب کن:)
            </Text>
          </Flex>
        )}
      </AppShell>
    </>
  );
}

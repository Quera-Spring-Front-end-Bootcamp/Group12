import { AppShell } from '@mantine/core';
import Sidebar from '../Sidebar';
import List from '../../components/List';
import MainPage from './MainHeader';
import Button from '../../components/Button';
import { PlusSquare } from '../../assets/icons';
import SvgProvier from '../../assets/icons/SvgProvider';

export default function MainLayout() {
  return (
    <>
      <AppShell bg={'#FAFBFC'}
      className='relative'
      navbar={<Sidebar/>}

      

      layout='alt'
    >
      <MainPage list={<List/>}/>
      <Button className='absolute bottom-6 left-4 z-10' leftIcon={<SvgProvier>
        <PlusSquare/>
      </SvgProvier>}>تسک جدید</Button>
    </AppShell>
    </>
  );
}


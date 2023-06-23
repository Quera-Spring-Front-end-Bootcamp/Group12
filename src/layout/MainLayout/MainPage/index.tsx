import {
  Flex,
  Tabs,
  Text,
  Divider,
  Group,
  useMantineTheme,
  useMantineColorScheme
} from '@mantine/core';
import { Calender, CheckList, Column, PlusSquare, Share } from '../../../assets/icons';
import Button from '../../../components/Button';

import SvgProvier from '../../../assets/icons/SvgProvider';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import DarkModeToggle from '../../../components/DarkModeToggle';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { getProjectBoards, setProjectName } from '../../../data/dataSlice/boardsSlice';

export default function MainPage() {
  const { primaryColor } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const primaryShade = colorScheme === 'light' ? 6 : 7;
  const params = useParams();
  const tab = params['*'];
  const [activeTab, setActiveTab] = useState<any | null>(tab);
  const { projectID }: any = useParams();
  const dispatch = useAppDispatch();
  const { fetchStatus } = useAppSelector((state) => state.workSpaces);
  const projectName = params.projectName;
  useEffect(() => {
    dispatch(getProjectBoards(projectID));
  }, [projectID]);

  useEffect(() => {
    dispatch(setProjectName(projectName));
    setActiveTab(tab)
  }, [projectName]);
  
  return (
    <Tabs
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          '&[data-active]': {
            color: theme.colors[primaryColor][primaryShade]
          }
        }
      })}
      mah="100vh"
      mt={30}
      value={`${activeTab}`}
      onTabChange={setActiveTab}
      //defaultValue={tab}
      w="100%">
      <Tabs.List mb={10} w="100%">
        <Flex align="center" w="100%">
          <Text fz="20px" fw="600" pr={16} className="cursor-default ">
            {fetchStatus === 'success' ? projectName : 'درحال بارگذاری'}
          </Text>
          <Divider mt="10px" h="24px" orientation="vertical" />
          <Link to="list-view">
            <Tabs.Tab
              icon={
                <SvgProvier style={{ height: '24px' }}>
                  <CheckList />
                </SvgProvier>
              }
              fz="16px"
              fw="500"
              value="list-view"
              className="cursor-pointer">
              نمایش لیستی
            </Tabs.Tab>
          </Link>
          <Divider mt="10px" h="24px" orientation="vertical" />

          <NavLink
            to="board-view"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'text-red-300' : ''
            }>
            <Tabs.Tab
              icon={
                <SvgProvier style={{ height: '24px' }}>
                  <Column />
                </SvgProvier>
              }
              fz="16px"
              fw="500"
              value="board-view"
              className="cursor-pointer">
              نمایش ستونی
            </Tabs.Tab>
          </NavLink>

          <Divider mt="10px" h="24px" orientation="vertical" />

          <NavLink
            to="calendar-view"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'text-red-300' : ''
            }>
            <Tabs.Tab
              icon={
                <SvgProvier style={{ height: '24px' }}>
                  <Calender />
                </SvgProvier>
              }
              fz="16px"
              fw="500"
              value="calendar-view"
              className="cursor-pointer">
              تقویم
            </Tabs.Tab>
          </NavLink>
          <Divider mt="10px" h="24px" orientation="vertical" />
          <Group ml="auto">
            <DarkModeToggle />
            <Button
              fz={16}
              fw={500}
              leftIcon={
                <SvgProvier style={{ height: '24px' }}>
                  <Share />
                </SvgProvier>
              }
              style={{
                backgroundColor: 'transparent',
                color: 'inherit'
              }}>
              اشتراک‌گذاری
            </Button>
          </Group>
        </Flex>
      </Tabs.List>
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
    </Tabs>
  );
}

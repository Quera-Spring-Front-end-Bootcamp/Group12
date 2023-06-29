import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../data/reduxHooks';
import { Button, Divider, Flex, Group, Tabs, Text } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import SvgProvier from '../../../assets/icons/SvgProvider';
import { Calender, CheckList, Column, Share } from '../../../assets/icons';
import DarkModeToggle from '../../../components/DarkModeToggle';
import { setProjectName } from '../../../data/dataSlice/boardsSlice';
import { useDisclosure } from '@mantine/hooks';
import ShareProjectModal from '../../../components/ShareProjectModal';

const ProjectHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { primaryColor } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const primaryShade = colorScheme === 'light' ? 6 : 7;
  const params = useParams();
  const tab = params['*'];
  const { fetchStatus } = useAppSelector((state) => state.workSpaces);
  const projectName = useAppSelector(state=>state.boards.projectName)
  const [activeTab, setActiveTab] = useState<any | null>(tab);
  const dispatch = useAppDispatch();
  useEffect(() => {
    
    //dispatch(setProjectName(project));
    setActiveTab(tab);
  }, [projectName]);

  return (
    <>
      <ShareProjectModal opened={opened} onClose={close} />
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
        defaultValue={'board-view'}
        w="100%">
        <Tabs.List mb={10} w="100%">
          <Flex align="center" w="100%">
            <Text fz="20px" fw="600" pr={16} className="cursor-default ">
              {fetchStatus === 'success' ? projectName : 'درحال بارگذاری'}
            </Text>
            <Divider mt="10px" h="24px" orientation="vertical" />
            <NavLink to="list-view">
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
            </NavLink>
            <Divider mt="10px" h="24px" orientation="vertical" />

            <NavLink to="board-view">
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

            <NavLink to="calendar-view">
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
                onClick={open}
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
      </Tabs>
    </>
  );
};

export default ProjectHeader;

import { Flex, Tabs, Text, Divider } from '@mantine/core';
import { Calender, CheckList, Column, PlusSquare, Share } from '../../../assets/icons';
import Button from '../../../components/Button';

import SvgProvier from '../../../assets/icons/SvgProvider';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MainPage() {
  const params = useParams();
  const tab = params['*'];
  return (
    <Tabs
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          '&[data-active]': {
            color: '#208D8E'
          }
        }
      })}
      mah="100vh"
      mt={30}
      defaultValue={tab || 'board-view'}
      w="100%">
      <Tabs.List mb={10} w="100%">
        <Flex align="center" w="100%">
          <Text fz="20px" fw="600" pr={16} className="cursor-default ">
            پروژه اول
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

          <Link to="board-view">
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
          </Link>

          <Divider mt="10px" h="24px" orientation="vertical" />

          <Link to="calender-view">
            <Tabs.Tab
              icon={
                <SvgProvier style={{ height: '24px' }}>
                  <Calender />
                </SvgProvier>
              }
              fz="16px"
              fw="500"
              value="calender-view"
              className="cursor-pointer">
              تقویم
            </Tabs.Tab>
          </Link>
          <Divider mt="10px" h="24px" orientation="vertical" />

          <Button
            fz={16}
            fw={500}
            leftIcon={
              <SvgProvier color="#323232" style={{ height: '24px' }}>
                <Share />
              </SvgProvier>
            }
            ml="auto"
            style={{
              backgroundColor: 'transparent',
              color: 'inherit'
            }}>
            اشتراک‌گذاری
          </Button>
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

import {  Avatar, Flex, Text } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Flag, JustifyRight } from '../../assets/icons';
import { task } from '../../data/dataSlice/boardsSlice';
import MyAvatar from '../Avatar';

interface propTypes {
  task: task
}

export default function ListRow({ task }: propTypes) {
  const storeTasks = task;
  
  return (
    <Flex className="my-5 bg-white p-3">
      <div className="w-5 h-5 rounded-lg ml-2"/>
      <Text fz={16} fw={500}>{task.name}</Text>
      <Avatar.Group className="mr-auto">
        <MyAvatar />
        {}
      </Avatar.Group>
      <Text className="mr-20">تاریخ</Text>
      <div className="mr-24">
        <SvgProvier color="#FB0606" style={{ height: '16px' }}>
          <Flag />
        </SvgProvier>
      </div>
      <div className="mr-28 ml-5">
        <SvgProvier color="#BDC0C6" style={{ height: '12px' }}>
          <JustifyRight />
        </SvgProvier>
      </div>
    </Flex>
  );
}

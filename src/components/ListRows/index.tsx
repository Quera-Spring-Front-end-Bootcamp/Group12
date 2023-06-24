import { Avatar, Flex, Text, useMantineColorScheme } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Flag, JustifyRight } from '../../assets/icons';
import { task } from '../../data/dataSlice/boardsSlice';
import MyAvatar from '../Avatar';

interface propTypes {
  task: task
}

export default function ListRow({ task }: propTypes) {
  const storeAssigns: Record<string, any> | undefined = task.taskAssigns;
  const {colorScheme} = useMantineColorScheme();
  
  return (
    <Flex className="my-5 bg-white p-3" bg={colorScheme === 'light' ? '#FAFBFC' : '#474747'}>
      <div className="w-5 h-5 rounded-lg ml-2" />
      <Text fz={16} fw={500}>{task.name}</Text>

      <Flex className="mr-auto" justify={"center"} align={"center"}>
        <Avatar.Group >
          <MyAvatar />
          {typeof storeAssigns === 'object' &&
            storeAssigns !== null &&
            Object.keys(storeAssigns).map((key: string) => {
              const value = storeAssigns[key];
              if (typeof value === 'object' && value !== null) {
                return <MyAvatar key={value._id} usernameorid={value._id} />;
              }
              return null;
            })}
        </Avatar.Group>
      </Flex>


      <Text className="mr-20">تاریخ</Text>

      <Flex className="w-10 mr-20" justify={"center"} align={"center"}>
        <SvgProvier color="#FB0606" style={{ height: '16px' }}>
          <Flag />
        </SvgProvier>
      </Flex>

      <Flex className="w-10 mr-24" justify={"center"} align={"center"}>
        <SvgProvier color="#BDC0C6" style={{ height: '12px' }}>
          <JustifyRight />
        </SvgProvier>
      </Flex>
    </Flex>
  );
}

import { Avatar, Flex, Text, useMantineColorScheme } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Flag, JustifyRight } from '../../assets/icons';
import { tag, task } from '../../data/dataSlice/boardsSlice';
import MyAvatar from '../Avatar';
import { formatDate } from '@fullcalendar/core/index.js';
import UnasignMember from '../UnasignUser';
import { useDisclosure } from '@mantine/hooks';
import TaskInformationModal from '../TaskInformationModal';
import { useEffect, useState } from 'react';
import myAxios from '../../helpers/myAxios';

interface propTypes {
  task: task
  name:string
}
type tags = tag[];
const initialTags: tags = [];
export default function ListRow({ task,name }: propTypes) {
  const [TaskInfoOpened, { open: openTaskInfo, close: closeTaskinfo }] = useDisclosure(false);
  const storeAssigns: Record<string, any> | undefined = task.taskAssigns;
  const {colorScheme} = useMantineColorScheme();
  const date:any = task.deadline?.toString()?.split('T')[0]
  const dateFa = formatDate(date, {
    timeZone: 'local',
    locale: 'fa',
    month: 'long',
    day: 'numeric'
  });
  const [tags, setTags] = useState(initialTags);
  useEffect(() => {
    myAxios.get(`/tags/task/${task._id}`).then((response) => {
      setTags(response.data.data.tags);
    });
  }, []);
  return (
    <Flex className="my-5  p-3" bg={colorScheme === 'light' ? '#FAFBFC' : '#474747'}>
      <TaskInformationModal
        onClose={closeTaskinfo}
        opened={TaskInfoOpened}
        boardName={name}
        tags={tags}
        task={task}
        setTags={setTags}
      />
      <div className="w-5 h-5 rounded-lg ml-2" />
      <Text fz={16} fw={500}>{task.name}</Text>

      <Flex className="mr-auto" justify={"center"} align={"center"}>
        <Avatar.Group >
          
          {storeAssigns?.length > 0 ?
            storeAssigns?.map((user:any) => {              
                return <UnasignMember key={user._id} taskId={task._id} username={user.username}><MyAvatar key={user._id} {...user} /></UnasignMember>;
            }): "ندارد"}
        </Avatar.Group>
      </Flex>


      <Text className="mr-20 w-16">{dateFa ? dateFa :'ندارد'}</Text>

      <Flex className="w-10 mr-20" justify={"center"} align={"center"}>
        <SvgProvier color="#FB0606" style={{ height: '16px' }}>
          <Flag />
        </SvgProvier>
      </Flex>

      <Flex className="w-10 mr-24" justify={"center"} align={"center"}>
        <SvgProvier color="#BDC0C6" style={{ height: '12px' }}>
          <JustifyRight className='hover:scale-125 cursor-pointer' onClick={openTaskInfo} />
        </SvgProvier>
      </Flex>
    </Flex>
  );
}

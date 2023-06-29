import { Flex, Text, Title, Group, Badge, Divider } from '@mantine/core';
import { Done, Dots, JustifyRight } from '../../assets/icons';
import TaskListItem from '../TaskListItem';
import SvgProvier from '../../assets/icons/SvgProvider';
import type { tag, task } from '../../data/dataSlice/boardsSlice';
import Avatar from '../Avatar';
import { useEffect, useState } from 'react';
import myAxios from '../../helpers/myAxios';
import TaskInformationModal from '../TaskInformationModal';
import { useDisclosure } from '@mantine/hooks';

type props = {
  task: task;
  projectName?: string;
  dragTask: boolean;
  boardName: string;
};

type tags = tag[];
const initialTags: tags = [];
const TaskCard = ({ task, projectName, dragTask, boardName }: props) => {
  const [tags, setTags] = useState(initialTags);

  useEffect(() => {
    myAxios.get(`/tags/task/${task._id}`).then((response) => {
      setTags(response.data.data.tags);
    });
  }, []);
  const [TaskInfoOpened, { open: openTaskInfo, close: closeTaskinfo }] = useDisclosure(false);

  return (
    <>
      <TaskInformationModal
        onClose={closeTaskinfo}
        opened={TaskInfoOpened}
        boardName={boardName}
        tags={tags}
        task={task}
      />

      <TaskListItem
        my={'xs'}
        w="256px"
        pb="0px"
        withBorder
        className={`${!dragTask ? 'group' : 'rotate-6'}`}
        style={{ transition: '300ms ease-out' }}
      >
        <Flex direction="column" gap="16px" style={{ position: 'relative' }}>
          <Flex direction="column" gap="8px">
            <Text size="12px">{projectName}</Text>
            <Flex gap="4px" align="center">
              <Title style={{ fontWeight: 700, fontSize: '14px' }} order={6}>
                {task?.name}
              </Title>
              <SvgProvier color="#BDC0C6" style={{ height: '12px' }}>
                <JustifyRight />
              </SvgProvier>
            </Flex>
          </Flex>
          <Avatar
            size="24px"
            variant="filled"
            radius="xl"
            src={null}
            style={{ position: 'absolute', left: 0 }}
            className={`opacity-0 group-hover/:opacity-100 duration-300 transition-all ${
              dragTask && 'opacity-100'
            }`}
          ></Avatar>
          {/* <Group spacing="4px">
          <SvgProvier color="#FB0606" style={{ height: '16px' }}>
            <Flag />
          </SvgProvier>
          <Text size="12px">۵ مهر - فردا</Text>
        </Group> */}
          {tags.length > 0 && (
            <Group spacing="xs">
              {tags.map((tag) => (
                <Badge color={tag.color} key={tag._id}>
                  {tag.tagName}
                </Badge>
              ))}
            </Group>
          )}
        </Flex>
        <div
          className={`max-h-0  group-hover/:block group-hover/:max-h-20 transition-all ease-in-out duration-300 ${
            dragTask && 'block max-h-20'
          }`}
        >
          <Divider
            mb="16px"
            mt="16px"
            className={`group-hover/:visible transition-all ease-in-out${
              dragTask ? 'visible' : 'invisible'
            }`}
          />
          <Flex justify="space-between" mb="16px">
            <SvgProvier style={{ heigh: '20px' }}>
              <Done
                className={`opacity-0 group-hover/:opacity-100 transition-all ease-in-out duration-300 ${
                  dragTask && 'opacity-100'
                }`}
              />
            </SvgProvier>
            <SvgProvier style={{ heigh: '20px' }}>
              <Dots
                onClick={openTaskInfo}
                className={` group-hover/:visible group-hover/:opacity-100 transition-all ease-in-out duration-300 ${
                  dragTask ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              />
            </SvgProvier>
          </Flex>
        </div>
      </TaskListItem>
    </>
  );
};
export default TaskCard;

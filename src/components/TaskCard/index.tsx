import { Flex, Text, Title, Group, Badge, Divider } from '@mantine/core';
import { CheckmarkSqaure, Done, Dots, Flag, JustifyRight } from '../../assets/icons';
import TaskListItem from '../TaskListItem';
import SvgProvier from '../../assets/icons/SvgProvider';
import type { task } from '../../data/dataSlice/boardsSlice';
import Avatar from '../Avatar';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

type props = {
  task: task;
  projectName?: string;
};

const TaskCard = ({ task, projectName }: props) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: task._id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskListItem
        w="256px"
        pb="0px"
        withBorder
        className="group"
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
            className="opacity-0 group-hover/:opacity-100 duration-300 transition-all"
          ></Avatar>

          <Group>
            <Group spacing="4px">
              <SvgProvier color="#FB0606" style={{ height: '16px' }}>
                <Flag />
              </SvgProvier>
              <Text size="12px">۵ مهر - فردا</Text>
            </Group>
            <Group spacing="4px">
              <SvgProvier style={{ height: '16px' }} color="#BDC0C6">
                <CheckmarkSqaure color="#BDC0C6" />
              </SvgProvier>
              <Text color="#BDC0C6" size="12px">
                ۲ / ۱۲
              </Text>
            </Group>
          </Group>
          <Group spacing="xs">
            <Badge>درس</Badge>
            <Badge color="grape">پروژه</Badge>
          </Group>
        </Flex>
        <div className="max-h-0  group-hover/:block group-hover/:max-h-20 transition-all ease-in-out duration-300 ">
          <Divider
            mb="16px"
            mt="16px"
            className="invisible group-hover/:visible transition-all ease-in-out"
          />
          <Flex justify="space-between" mb="16px">
            <SvgProvier style={{ heigh: '20px' }}>
              <Done className="opacity-0 group-hover/:opacity-100 transition-all ease-in-out duration-300" />
            </SvgProvier>
            <SvgProvier style={{ heigh: '20px' }}>
              <Dots className="invisible group-hover/:visible opacity-0 group-hover/:opacity-100 transition-all ease-in-out duration-300" />
            </SvgProvier>
          </Flex>
        </div>
      </TaskListItem>
    </div>
  );
};
export default TaskCard;

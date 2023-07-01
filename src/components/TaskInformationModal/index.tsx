import {
  Avatar as MantineAvatar,
  Box,
  Flex,
  Group,
  Text,
  useMantineTheme,
  Badge,
  Textarea
} from '@mantine/core';
import Modal from '../Modal';
import boardsSlice, { tag, task } from '../../data/dataSlice/boardsSlice';
import SvgProvier from '../../assets/icons/SvgProvider';
import {
  Arrow,
  AssignCircle,
  Attachment,
  Chat,
  Docs,
  DoneBox,
  Email,
  Emoji,
  Share,
  TagsCircle
} from '../../assets/icons';
import Avatar from '../Avatar';
import Button from '../Button';
import { useRef, useState } from 'react';
import { useClickOutside, useDisclosure } from '@mantine/hooks';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../data/reduxHooks';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import AddTagModal from '../AddTagModal/AddTagModal';

type props = {
  opened: boolean;
  onClose: () => void;
  task: task;
  boardName?: string;
  tags: tag[];
  setTags: any;
};

const TaskInformationModal = ({ opened, onClose, task, boardName, tags, setTags }: props) => {
  const { primaryColor } = useMantineTheme();
  const dispatch = useAppDispatch();
  const { updateBoards } = boardsSlice.actions;
  const { colorScheme } = useMantineTheme();
  const borderColor = colorScheme === 'light' ? '#F4F4F4' : '#2c2e33';
  const { projectID }: any = useParams();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [open, setOpen] = useState(false);
  const [tagOpened, { open: openTag, close: closeTag }] = useDisclosure(false);
  // const openTagModal = () => {
  //   setTagOpen(true)
  // }
  const openCommentSection = () => {
    setOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const ref = useClickOutside(() => setOpen(false));
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  dayjs.extend(relativeTime);
  const submitComment = async () => {
    setLoading(true);
    const data = {
      text: newComment,
      taskId: task._id
    };
    try {
      const res = await myAxios.post('/comments/', data);
      console.log(res);
      const boards = await myAxios.get(`/board/${projectID}`);
      dispatch(updateBoards(boards.data.data));
      setLoading(false);
    } catch (error: any) {
      notifications.show({ message: error?.message, color: 'red' });
    }
  };
  return (
    <>
      <Modal
        radius={'lg'}
        size={'1352px'}
        dir="rtl"
        title=""
        opened={opened}
        // className={`${tagOpened? 'scale-0 ' : ''} transition-all duration-150`}
        onClose={onClose}
        styles={{
          inner: {
            opacity: tagOpened ? '0' : '1',
            transition: '200ms'
          },
          body: {
            padding: '0px',
            overflow: 'hidden'
          },
          close: {
            margin: '0px'
          }
        }}
        centered
      >
        <AddTagModal
          onClose={closeTag}
          opened={tagOpened}
          taskId={task._id}
          tags={tags}
          setTags={setTags}
        />
        <Flex w={'100%'} h={506}>
          {/* right side */}
          <Flex
            className="basis-1/2 grow h-full"
            gap={'md'}
            style={{
              borderLeft: `2px solid ${borderColor}`
            }}
            pb={32}
            direction={'column'}
          >
            {/* right side header */}
            <Flex
              justify={'space-between'}
              h={80}
              align={'center'}
              px={32}
              style={{
                borderBottom: `2px solid ${borderColor}`
              }}
            >
              <Flex gap={24}>
                <Group spacing={'2px'} className="shrink-0">
                  <Box
                    px={24}
                    py={4}
                    h={30}
                    sx={(theme) => ({
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors[theme.primaryColor][7]
                          : theme.colors[theme.primaryColor][6],
                      color: 'white'
                    })}
                  >
                    <Text>{boardName}</Text>
                  </Box>
                  <Box
                    px={4}
                    py={4}
                    h={30}
                    sx={(theme) => ({
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors[theme.primaryColor][7]
                          : theme.colors[theme.primaryColor][6],
                      color: 'white',
                      borderRadius: '0px 3px 3px 0px'
                    })}
                  >
                    <SvgProvier style={{ transform: 'rotate(90deg)' }}>
                      <Arrow />
                    </SvgProvier>
                  </Box>
                </Group>
                <SvgProvier>
                  <DoneBox />
                </SvgProvier>
                <MantineAvatar.Group spacing={'sm'}>
                  {task.taskAssigns.map((user) => {
                    return <Avatar size="34px" key={user._id} {...user} />;
                  })}

                  <SvgProvier>
                    <AssignCircle />
                  </SvgProvier>
                </MantineAvatar.Group>
              </Flex>
              <Button
                fz={16}
                fw={500}
                // onClick={open}
                leftIcon={
                  <SvgProvier color="#BDBDBD" style={{ height: '24px' }}>
                    <Share />
                  </SvgProvier>
                }
                style={{
                  backgroundColor: 'transparent',
                  color: 'inherit'
                }}
              >
                اشتراک‌گذاری
              </Button>
            </Flex>
            {/* right side body */}
            <Flex direction={'column'} gap={'sm'} px={32}>
              <Flex gap={'sm'} className="shrink-0" my={8} align={'flex-start'}>
                <div onClick={openTag} style={{ cursor: 'pointer', height: '34px', width: '34px' }}>
                  <SvgProvier style={{ height: ' 34px' }}>
                    <TagsCircle />
                  </SvgProvier>
                </div>
                {tags.length > 0 && (
                  <Group pt={4} spacing="xs">
                    {tags.map((tag) => (
                      <Badge size="lg" color={tag.color} key={tag._id}>
                        {tag.tagName}
                      </Badge>
                    ))}
                  </Group>
                )}
              </Flex>
              <Text size={20} weight={600}>
                {task.name}
              </Text>
              {/* task discription */}
              <div
                style={{
                  borderRadius: '12px',
                  border: `1px solid ${colorScheme === 'light' ? '#C1C1C1' : '#454751'}`,
                  width: '100%',
                  minHeight: '48px',
                  padding: '12px'
                }}
              >
                {task.description}
              </div>
            </Flex>
          </Flex>
          {/* left side */}
          <Flex className="basis-1/2 grow" direction={'column'}>
            {/* left side header */}
            <Flex
              justify={'space-between'}
              h={80}
              align={'center'}
              pl={32}
              className="shrink-0"
              style={{
                borderBottom: `2px solid ${borderColor}`
              }}
            >
              <Flex gap={'xs'} direction={'column'}>
                <Text opacity={'0.3'}>ددلاین</Text>
                <Text size={20}>{dayjs(task.deadline).locale('fa').toNow(true)} دیگر</Text>
              </Flex>
            </Flex>
            {/* left side body */}
            <Flex direction={'column'} h={'100%'} justify={'space-between'}>
              {/* comments */}
              <Flex
                py={24}
                px={32}
                gap={'md'}
                direction={'column'}
                h={open ? 216 : 362}
                className="grow-0 shrink overflow-scroll transition-all duration-200"
              >
                {(task.comments?.length as number) > 0
                  ? task.comments?.map((comment) => {
                      return (
                        <Flex key={comment.user._id}>
                          <Avatar mr={'md'} {...comment.user} />
                          <Flex
                            w={'100%'}
                            direction={'column'}
                            p={16}
                            style={{
                              border: `1px solid ${borderColor}`,
                              borderRadius: '12px'
                            }}
                          >
                            <Flex justify={'space-between'} pb={8}>
                              <Text size={'lg'} color={primaryColor}>
                                {comment.user.firstname}
                              </Text>
                              <Text opacity={'0.3'}>
                                {dayjs(comment?.createdAt as string)
                                  .locale('fa')
                                  .fromNow(true)}{' '}
                                پیش
                              </Text>
                            </Flex>
                            <Text>{comment.text}</Text>
                          </Flex>
                        </Flex>
                      );
                    })
                  : 'کامنتی وجود ندارد'}
              </Flex>
              {/* comment input */}
              <div onClick={openCommentSection} ref={ref} className="shrink-0">
                <Flex
                  h={open ? 210 : 64}
                  p={16}
                  className="transition-all duration-200"
                  direction={'column'}
                  style={{
                    borderColor,
                    borderWidth: '1px 1px 0 0',
                    borderRadius: '0 16px 0 0'
                  }}
                >
                  <Flex justify={'space-between'} align={'center'}>
                    <Text opacity={'0.3'}>کامنت</Text>
                    <SvgProvier>
                      <Chat />
                    </SvgProvier>
                  </Flex>
                  <Textarea
                    ref={inputRef}
                    opacity={open ? 1 : 0}
                    className="transition-all duration-75"
                    onChange={(e) => {
                      setNewComment(e.target.value);
                    }}
                    styles={{
                      input: {
                        height: '112px',
                        fontSize: '16px'
                      }
                    }}
                    variant="unstyled"
                  ></Textarea>
                  {/* comment input icons and submit button */}
                  <Flex justify={'space-between'}>
                    <Group spacing={'md'} py={16}>
                      <SvgProvier>
                        <Email />
                      </SvgProvier>
                      <SvgProvier>
                        <Attachment />
                      </SvgProvier>
                      <SvgProvier>
                        <Docs />
                      </SvgProvier>
                      <SvgProvier>
                        <Emoji />
                      </SvgProvier>
                    </Group>
                    <Button
                      className="transition-all duration-100"
                      disabled={!newComment}
                      onClick={submitComment}
                      loading={loading}
                      radius={'md'}
                    >
                      ثبت کامنت
                    </Button>
                  </Flex>
                </Flex>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default TaskInformationModal;

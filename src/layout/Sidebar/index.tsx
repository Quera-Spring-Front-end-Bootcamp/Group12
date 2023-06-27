import {
  Accordion,
  Box,
  Flex,
  NavLink,
  Navbar,
  Text,
  ScrollArea,
  Badge,
  Skeleton,
  useMantineTheme
} from '@mantine/core';
import Logo from '../../components/Logo';
import SearchInput from '../../components/Search';
import Button from '../../components/Button';
import { Dots, Exit, Plus, PlusSquare } from '../../assets/icons';
import SidebarProfile from '../../components/SiderbarProfile';
import userSlice from '../../data/userSlice/userSlice';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import { useEffect, useState } from 'react';
import { fetchWorkspaces, searchWorkspace } from '../../data/dataSlice/workSpacesSlice';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import AddWorkspaceModal from '../../components/AddWorkspaceModal';
import EditWorkspaceModal from '../../components/EditWorkspaceModal';
import AddProjectModal from '../../components/AddProjectModal';
import EditProjectModal from '../../components/EditProjectModal';

function Sidebar() {
  // state for store seach param
  const [search, setSearch] = useState('');
  // state for store and pass workspace to modals
  const [workspaceId, setWorkspaceId] = useState('');
  // state for store and pass workspace to modals
  const [projectId, setProjectID] = useState('');
  // hook for open make new workspace
  const [opened, { open, close }] = useDisclosure(false);
  //hook for open edit workspace modal (contains delete and edit )
  const [openedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  // hook for open add new project modal
  const [openedAddProject, { open: openProject, close: closeAddProject }] = useDisclosure(false);
  // hook for open edit workspace modal (contains delete and edit project)
  const [openedEditProject, { open: editProject, close: closeProject }] = useDisclosure(false);
  const { primaryColor } = useMantineTheme();
  const dispatch = useAppDispatch();
  const worksaces = useAppSelector((state: any) => state.workSpaces);
  const renderWorkspaces = worksaces.search.length > 0 ? worksaces.search : worksaces.data;
  //fetching worksaces and projects and store them to redux wokspace slice
  useEffect(() => {
    dispatch(fetchWorkspaces());
  }, []);
  useEffect(() => {
    dispatch(searchWorkspace(search));
  }, [search]);
  const { clearUser } = userSlice.actions;
  const navigate = useNavigate();

  // this func change workspace id and pass it to modal user selected
  const handleEdit = (e: any, id: string) => {
    e.stopPropagation();
    setWorkspaceId(id);
    openEdit();
  };

  // this func change workspace id and pass it to modal user selected
  const handleAddProject = (id: string) => {
    setWorkspaceId(id);
    editProject();
  };

  // this func change project id and pass it to modal user selected
  const handleEditProject = (e: any, id: string) => {
    e.stopPropagation();
    setProjectID(id);
    editProject();
  };

  // this function for set search param
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <AddWorkspaceModal opened={opened} onClose={close} />
      <EditWorkspaceModal opened={openedEdit} onClose={closeEdit} id={workspaceId} />
      <AddProjectModal opened={openedAddProject} onClose={closeAddProject} id={workspaceId} />
      <EditProjectModal opened={openedEditProject} onClose={closeProject} id={projectId} />
      <Navbar
        bg="inherit"
        width={{
          // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
          sm: 300,

          // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
          lg: 340,

          // When other breakpoints do not match base width is used, defaults to 100%
          base: 300
        }}>
        <Navbar.Section>
          <Flex justify="center" align="center" pt="40px">
            <Logo />
          </Flex>
        </Navbar.Section>
        <Navbar.Section grow component={ScrollArea}>
          <Accordion
            miw="100%"
            // variant="default"
            chevronPosition="right"
            defaultValue="workspaces"
            style={{}}>
            <Flex justify="center" direction="column" align="center" w="100%">
              <Accordion.Item value="workspaces" w="100%">
                <Accordion.Control>ورک‌اسپیس‌ها</Accordion.Control>
                <Accordion.Panel>
                  <SearchInput
                    placeholder="جستجو کنید"
                    variant="filled"
                    onChange={(e) => handleSearch(e)}
                  />
                  <Button
                    w="100%"
                    fw="600"
                    fz="12px"
                    mt="md"
                    className="bg-stone-300 text-black hover:bg-stone-500 hover:text-white  !important"
                    onClick={() => {
                      open();
                    }}
                    leftIcon={<PlusSquare width="1.3rem" />}>
                    ساختن اسپیس جدید
                  </Button>
                  
                  <Box mt={16} w="100%">
                    {useAppSelector((state) => {
                      if (state.workSpaces.fetchStatus === 'pending') {
                        {
                          return (
                            <>
                              <Skeleton w={'auto'} h={40} mt={12} radius={'md'} />
                              <Skeleton w={'auto'} ml={24} h={32} mt={12} radius={'md'} />
                              <Skeleton w={'auto'} ml={24} h={32} mt={12} radius={'md'} />
                              <Skeleton h={40} mt={12} radius={'md'} />
                              <Skeleton w={'auto'} ml={24} h={32} mt={12} radius={'md'} />
                              <Skeleton h={40} mt={12} radius={'md'} />
                              <Skeleton h={40} mt={12} radius={'md'} />
                            </>
                          );
                        }
                      }
                      
                      return renderWorkspaces.map((workSpace: any, index:any) => {
                        return (
                          <NavLink
                            mt={8}
                            variant="filled"
                            color="red"
                            key={index}
                            w="100%"
                            className="group"
                            icon={<Badge className="w-5 h-5 p-0" radius={'8px'} variant="filled" />}
                            label={
                              <div className=" flex justify-between w-50 items-center ">
                                <Text fz="16px" fw="500">
                                  {workSpace.name}
                                </Text>
                                <Dots
                                  onClick={(e) => handleEdit(e, workSpace._id)}
                                  width="24px"
                                  className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200 hover:w-5"
                                />
                              </div>
                            }>
                            {workSpace.projects.length > 0 ? (
                              workSpace.projects.map((project: any, index: number) => {
                                return (
                                  <NavLink
                                    className="group"
                                    key={index}
                                    label={
                                      <div
                                        className="flex justify-between"
                                        onClick={() => {
                                          navigate(
                                            `${workSpace.name}/${project.name}/${project._id}/board-view`
                                          );
                                        }}>
                                        <Text>
                                          <Link
                                            style={({ isActive }) => {
                                              return {
                                                fontWeight: isActive ? 'bold' : '',
                                                color: isActive ? primaryColor : ''
                                              };
                                            }}
                                            to={`${workSpace.name}/${project.name}/${project._id}`}>
                                            {project.name}
                                          </Link>
                                        </Text>
                                        <Dots
                                          onClick={(e) => handleEditProject(e, project._id)}
                                          width="24px"
                                          className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                                        />
                                      </div>
                                    }
                                  />
                                );
                              })
                            ) : (
                              <>
                                <NavLink
                                  my={'xs'}
                                  h={'34px'}
                                  variant="subtle"
                                  color="green"
                                  className="bg-stone-300 w-fit rounded-md text-black hover:bg-stone-500 hover:text-white  !important"
                                  onClick={() => handleAddProject(workSpace._id)}
                                  label={
                                    <Flex
                                      align={'center'}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        openProject();
                                      }}>
                                      <Plus width={'24px'} />
                                      <Text fz={'12px'} fw={'600'} weight={'normal'}>
                                        افزودن پروژه جدید
                                      </Text>
                                    </Flex>
                                  }
                                />
                              </>
                            )}
                          </NavLink>
                        );
                      });
                    })}
                  </Box>
                </Accordion.Panel>
              </Accordion.Item>
            </Flex>
          </Accordion>
        </Navbar.Section>
        <Navbar.Section>
          <Flex align={'start'} direction="column" gap={'md'} p="32px">
            <Link to="/profile/panel">
              <SidebarProfile />
            </Link>
            <Button
              onClick={() => {
                dispatch(clearUser());
              }}
              color="dark.3"
              variant="subtle"
              leftIcon={<Exit width="16px" />}>
              خروج
            </Button>
          </Flex>
        </Navbar.Section>
      </Navbar>
    </>
  );
}

export default Sidebar;

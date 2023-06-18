import {
  Accordion,
  Box,
  Flex,
  NavLink,
  Navbar,
  Text,
  ScrollArea,
  Badge,
  Skeleton
} from '@mantine/core';
import Logo from '../../components/Logo';
import SearchInput from '../../components/Search';
import Button from '../../components/Button';
import { Dots, Exit, Plus, PlusSquare } from '../../assets/icons';
import SidebarProfile from '../../components/SiderbarProfile';
import userSlice from '../../data/userSlice/userSlice';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import { useEffect } from 'react';
import { fetchWorkspaces } from '../../data/dataSlice/workSpacesSlice';
import { Link } from 'react-router-dom';

function Sidebar() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWorkspaces());
  }, []);
  const { clearUser } = userSlice.actions;

  return (
    <>
      <Navbar
        bg="inherit"
        width={{
          // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
          sm: 300,

          // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
          lg: 340,

          // When other breakpoints do not match base width is used, defaults to 100%
          base: 300
        }}
      >
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
            style={{}}
          >
            <Flex justify="center" direction="column" align="center" w="100%">
              <Accordion.Item value="workspaces" w="100%">
                <Accordion.Control>ورک‌اسپیس‌ها</Accordion.Control>
                <Accordion.Panel>
                  <SearchInput placeholder="جستجو کنید" variant="filled" />
                  <Button
                    w="100%"
                    fw="600"
                    fz="12px"
                    mt="md"
                    className="bg-stone-300 text-black hover:bg-stone-500 hover:text-white  !important"
                    leftIcon={<PlusSquare width="1.3rem" />}
                  >
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
                      return state.workSpaces.data.map((workSpace: any, index) => {
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
                                  width="24px"
                                  className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                                />
                              </div>
                            }
                          >
                            {workSpace.projects.length > 0 ? (
                              workSpace.projects.map((project: any, index: number) => {
                                return (
                                  <NavLink
                                    className="group"
                                    key={index}
                                    label={
                                      <Link to={`project/${project._id}/board-view`}>
                                        <div className="flex justify-between">
                                          <Text>{project.name}</Text>

                                          <Dots
                                            width="24px"
                                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                                          />
                                        </div>
                                      </Link>
                                    }
                                  />
                                );
                              })
                            ) : (
                              <NavLink
                                my={'xs'}
                                h={'34px'}
                                variant="subtle"
                                color="green"
                                className="bg-stone-300 w-fit rounded-md text-black hover:bg-stone-500 hover:text-white  !important"
                                label={
                                  <Flex align={'center'}>
                                    <Plus width={'24px'} />
                                    <Text fz={'12px'} fw={'600'} weight={'normal'}>
                                      افزودن پروژه جدید
                                    </Text>
                                  </Flex>
                                }
                              />
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
              leftIcon={<Exit width="16px" />}
            >
              خروج
            </Button>
          </Flex>
        </Navbar.Section>
      </Navbar>
    </>
  );
}

export default Sidebar;

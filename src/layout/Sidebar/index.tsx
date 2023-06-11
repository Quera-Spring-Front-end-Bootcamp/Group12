import { Accordion, Box, Flex, NavLink, Navbar, Text, ScrollArea } from '@mantine/core';
import Logo from '../../components/Logo';
import SearchInput from '../../components/Search';
import Button from '../../components/Button';
import { Dots, Exit, PlusSquare } from '../../assets/icons';
import SidebarProfile from '../../components/SiderbarProfile';
import userSlice from '../../data/userSlice/userSlice';
import { useAppDispatch } from '../../data/reduxHooks';
import { useEffect } from 'react';
import myAxios from '../../helpers/myAxios';

function Sidebar() {
  useEffect(() => {
    const request = async () => {
      const workspases = await myAxios.get(`/workspace/get-all`);
      console.log(workspases);
    };
    request();
  }, []);
  const dispatch = useAppDispatch();
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
            defaultValue="ورک‌اسپیس‌ها"
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
                  <Box w="100%">
                    <NavLink
                      w="100%"
                      className="group"
                      icon={<div className="bg-red-500 w-5 h-5 rounded-lg " />}
                      label={
                        <div className=" flex justify-between w-50 items-center ">
                          <Text fz="16px" fw="500">
                            درس مدیریت پروژه
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                    >
                      <NavLink
                        className="group"
                        label={
                          <div className="flex justify-between">
                            <Text>پروژه اول</Text>

                            <Dots
                              width="24px"
                              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                            />
                          </div>
                        }
                      />
                    </NavLink>

                    <NavLink
                      className="group"
                      label={
                        <div className=" flex justify-between  items-center">
                          <Text fz="16px" fw="500">
                            کارهای شخصی
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                      icon={<div className="bg-amber-500 w-5 h-5 rounded-lg " />}
                    >
                      <NavLink
                        className="group"
                        label={
                          <div className="flex justify-between">
                            <Text>پروژه اول</Text>

                            <Dots
                              width="24px"
                              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                            />
                          </div>
                        }
                      />

                      <NavLink
                        className="group"
                        label={
                          <div className="flex justify-between">
                            <Text>پروژه دوم</Text>

                            <Dots
                              width="24px"
                              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                            />
                          </div>
                        }
                      />
                    </NavLink>
                    <NavLink
                      className="group"
                      icon={<div className="bg-green-500 w-5 h-5 rounded-lg " />}
                      label={
                        <div className=" flex justify-between  items-center">
                          <Text fz="16px" fw="500">
                            درس کامپایلر
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                    >
                      <NavLink
                        className="group"
                        label={
                          <div className="flex justify-between">
                            <Text>پروژه اول</Text>

                            <Dots
                              width="24px"
                              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                            />
                          </div>
                        }
                      />
                    </NavLink>
                    <NavLink
                      className="group"
                      icon={<div className="bg-blue-500 w-5 h-5 rounded-lg " />}
                      label={
                        <div className=" flex justify-between  items-center">
                          <Text fz="16px" fw="500">
                            درس الگوریتم
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                    >
                      <NavLink
                        className="group"
                        label={
                          <div className="flex justify-between">
                            <Text>پروژه اول</Text>

                            <Dots
                              width="24px"
                              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                            />
                          </div>
                        }
                      />
                    </NavLink>
                  </Box>
                </Accordion.Panel>
              </Accordion.Item>
            </Flex>
          </Accordion>
        </Navbar.Section>
        <Navbar.Section>
          <Flex align={'start'} direction="column" gap={'md'} p="32px">
            <SidebarProfile />
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

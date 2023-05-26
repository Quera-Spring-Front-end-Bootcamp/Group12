import { Accordion, Box, Flex, NavLink, Navbar, Text, ScrollArea } from "@mantine/core";
import Logo from "../../components/Logo";
import SearchInput from "../../components/Search";
import Button from "../../components/Button";
import { Dots, Exit, PlusSquare } from "../../assets/icons";
import SidebarProfile from "../../components/SiderbarProfile";

const Sidebar = () => {
  return (
    <>
      <Navbar
        bg={"inherit"}
        width={{
          // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
          sm: 300,

          // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
          lg: 340,

          // When other breakpoints do not match base width is used, defaults to 100%
          base: 300,
        }}
      >
        <Navbar.Section >
          <Flex justify={"center"} align={"center"} pt={'40px'}>

          <Logo />
          </Flex>
        </Navbar.Section>
        <Navbar.Section grow component={ScrollArea}>
          <Accordion
            miw="100%"
            // variant="default"
            chevronPosition="right"
            defaultValue="ورک‌اسپیس‌ها"
            style={{

            }}
          >
            <Flex justify="center" direction="column" align="center" w={"100%"}>
              <Accordion.Item value="workspaces" w={"100%"}>
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
                  <Box w={240}>
                    <NavLink
                      icon={<div className="bg-red-500 w-5 h-5 rounded-sm " />}
                      label={
                        <div className=" flex justify-between  items-center group">
                          <Text fz="16px" fw="500">
                            درس مدیریت پروژه
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                    />

                    <NavLink
                      label={
                        <div className=" flex justify-between  items-center group">
                          <Text fz="16px" fw="500">
                            کارهای شخصی
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                      icon={<div className="bg-red-500 w-5 h-5 rounded-sm " />}
                      rightSection={<></>}
                    >
                      <NavLink
                        label={
                          <div className="flex justify-between  group">
                            <Text>پروژه اول</Text>

                            <Dots
                              width="24px"
                              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                            />
                          </div>
                        }
                      />

                      <NavLink
                        label={
                          <div className="flex justify-between  group">
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
                      icon={<div className="bg-red-500 w-5 h-5 rounded-sm " />}
                      label={
                        <div className=" flex justify-between  items-center group">
                          <Text fz="16px" fw="500">
                            درس کامپایلر
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                    />
                    <NavLink
                      icon={<div className="bg-red-500 w-5 h-5 rounded-sm " />}
                      label={
                        <div className=" flex justify-between  items-center group">
                          <Text fz="16px" fw="500">
                            درس الگوریتم
                          </Text>
                          <Dots
                            width="24px"
                            className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200"
                          />
                        </div>
                      }
                    />
                  </Box>
                </Accordion.Panel>
              </Accordion.Item>
            </Flex>
          </Accordion>
        </Navbar.Section>
        <Navbar.Section>
          <Flex direction={"column"} p={'32px'}>
          <SidebarProfile />
          <Flex my="md" gap="md">
            <Exit width="16px" color="#818181" />
            <Text color="#818181">خروج</Text>
            </Flex>
            </Flex>
        </Navbar.Section>
      </Navbar>
    </>
  );
};

export default Sidebar;

import { Flex, Tabs, Text, Divider, Badge } from "@mantine/core";
import SearchInput from "../../../components/Search";
import { Calender, CheckList, Column, Share } from "../../../assets/icons";
import Button from "../../../components/Button";
import { TwoLineSetting } from "../../../assets/icons";
import SvgProvier from "../../../assets/icons/SvgProvider";
import { ReactNode } from "react";
type props = {
  list?: ReactNode;
  column?: ReactNode;
  calender?: ReactNode;
};

export default function MainPage({ list, column, calender }: props) {
  return (
    <Tabs
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          "&[data-active]": {
            color: "#208D8E",
          },
        },
      })}
      mah={'100vh'}
      mt={30}
      defaultValue="second"
      w={"100%"}
    >
      <Tabs.List mb={10} w={"100%"}>
        <Flex align="center" w={"100%"}>
          <Text fz={"20px"} fw={"600"} pr={16} className="cursor-default ">
            پروژه اول
          </Text>
          <Divider mt={"10px"} h={"24px"} orientation="vertical" />

          <Tabs.Tab
            icon={
              <SvgProvier style={{ height: "24px" }}>
                <CheckList />
              </SvgProvier>
            }
            fz={"16px"}
            fw={"500"}
            value="first"
            className="cursor-pointer"
          >
            نمایش لیستی
          </Tabs.Tab>
          <Divider mt={"10px"} h={"24px"} orientation="vertical" />

          <Tabs.Tab
            icon={
              <SvgProvier style={{ height: "24px" }}>
                <Column />
              </SvgProvier>
            }
            fz={"16px"}
            fw={"500"}
            value="second"
            className="cursor-pointer"
          >
            نمایش ستونی
          </Tabs.Tab>
          <Divider mt={"10px"} h={"24px"} orientation="vertical" />

          <Tabs.Tab
            icon={
              <SvgProvier style={{ height: "24px" }}>
                <Calender />
              </SvgProvier>
            }
            fz={"16px"}
            fw={"500"}
            value="third"
            className="cursor-pointer"
          >
            تقویم
          </Tabs.Tab>
          <Divider mt={"10px"} h={"24px"} orientation="vertical" />

          <Button
            fz={16}
            fw={500}
            leftIcon={
              <SvgProvier color="#323232" style={{ height: "24px" }}>
                <Share />
              </SvgProvier>
            }
            ml="auto"
            style={{
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            اشتراک‌گذاری
          </Button>
        </Flex>
      </Tabs.List>
      <Tabs.Panel value="first">
        <div className="flex  gap-4 items-center border-b-2 pb-1">
          <SearchInput
            fw={500}
            fz={12}
            placeholder="جستجو بین تسک‌ها"
            className="border-none"
          />
          <Divider orientation="vertical" />
          <Button
            fw={500}
            fz={12}
            leftIcon={
              <SvgProvier color="#323232" style={{ height: "24px" }}>
                <TwoLineSetting />
              </SvgProvier>
            }
            ml={30}
            style={{
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            فیلترها
          </Button>
          <Badge size="lg" color="cyan">
            دسته‌بندی‌شده با: وضعیت
          </Badge>
        </div>
        <div className="mt-5">{list ? list : <p>hi</p>}</div>
      </Tabs.Panel>
      <Tabs.Panel value="second" mah={'100vh'}>
        <div className="flex  gap-4 items-center border-b-2 pb-1">
          <SearchInput
            fw={500}
            fz={12}
            placeholder="جستجو بین تسک‌ها"
            className="border-none"
          />
          <Divider orientation="vertical" />
          <Button
            fw={500}
            fz={12}
            leftIcon={
              <SvgProvier color="#323232" style={{ height: "24px" }}>
                <TwoLineSetting />
              </SvgProvier>
            }
            ml={30}
            style={{
              backgroundColor: "transparent",
              color: "inherit",
            }}
          >
            فیلترها
          </Button>
          <Badge size="lg" color="cyan">
            دسته‌بندی‌شده با: وضعیت
          </Badge>
        </div>
        <div className="h-full overflow-y-scroll pt-5">
          {column ? column: <p>hi</p>}
        </div>
      </Tabs.Panel>
      <Tabs.Panel value="third">
        
        <div className="mt-5">{calender ? calender : <p>hi</p>}</div>
      </Tabs.Panel>
    </Tabs>
  );
}

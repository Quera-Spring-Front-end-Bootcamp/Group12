import { Center, Flex, Header, Tabs, Text, Divider, useMantineTheme } from '@mantine/core';
import SearchInput from '../../../components/Search';
import { Calender, CheckList, Column, Search, Share } from '../../../assets/icons';
import Button from '../../../components/Button';
import { TwoLineSetting } from '../../../assets/icons';
import SvgProvier from '../../../assets/icons/SvgProvider';
import { useState } from 'react';

export default function MainHeader() {
    const theme = useMantineTheme();
    const [activeTab, setActiveTab] = useState(0);
    const tabStyle = (index: number) => ({
        color: activeTab === index ? theme.colors.blue[7] : theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
      });
    return (
        <Header height={158} mr={50} ml={16}>
            

            <Tabs mt={42} defaultValue="second">

                <Tabs.List mb={20}>

                    <Flex align="center">

                        <Text fz={'20px'} fw={'600'} pr={16} className="cursor-default ">پروژه اول</Text>
                        <Divider  orientation="vertical"/>

                        <Tabs.Tab icon={<SvgProvier color="#323232" style={{ height: "24px" }}><CheckList /></SvgProvier>} fz={'16px'} fw={'500'} value="first" className="cursor-pointer">نمایش لیستی</Tabs.Tab>
                        <Divider  orientation="vertical"/>

                        <Tabs.Tab icon={<SvgProvier color="#323232" style={{ height: "24px" }}><Column /></SvgProvier>} fz={'16px'} fw={'500'} value="second" className="cursor-pointer">نمایش ستونی</Tabs.Tab>
                        <Divider  orientation="vertical"/>
                        
                        <Tabs.Tab icon={<SvgProvier color="#323232" style={{ height: "24px" }}><Calender /></SvgProvier>} fz={'16px'} fw={'500'} value="third" className="cursor-pointer">تقویم</Tabs.Tab>
                        <Divider  orientation="vertical"/>
                        <Button fz={16} fw={500} leftIcon={<SvgProvier color="#323232" style={{ height: "16px" }}><Share /></SvgProvier>} ml="280px" style={{
                            backgroundColor: 'transparent',
                            color: 'inherit'
                        }}>
                            اشتراک‌گذاری
                        </Button>
                    </Flex>

                </Tabs.List>
            </Tabs>

            <div className="flex  gap-4 items-center">

                <SearchInput fw={500} fz={12} placeholder='جستجو بین تسک‌ها' className="border-none" />
                <Divider  orientation="vertical"/>
                <Button fw={500} fz={12} leftIcon={<SvgProvier color="#323232" style={{ height: "24px" }}><TwoLineSetting /></SvgProvier>} ml={30} style={{
                    backgroundColor: 'transparent',
                    color: 'inherit'
                }}>
                    فیلترها
                </Button>
                <Text fw={500} fz={12} className="bg-sky-200">دسته‌بندی‌شده با: وضعیت</Text>
            </div>


        </Header>

    );
}

import { Center, Flex, Header, Tabs, Text, Divider, useMantineTheme, Badge } from '@mantine/core';
import SearchInput from '../../../components/Search';
import { Calender, CheckList, Column, Search, Share } from '../../../assets/icons';
import Button from '../../../components/Button';
import { TwoLineSetting } from '../../../assets/icons';
import SvgProvier from '../../../assets/icons/SvgProvider';

export default function MainHeader() {

    return (
        <Header w={'75%'} height={158} mr={50} ml={16} bg={'transparent'} style={{borderBottom:'1px solid #d5d5d5'}}>
            

            <Tabs styles={(theme) => ({
                tab: {
                    ...theme.fn.focusStyles(),
                    '&[data-active]': {
                        
                        color: '#208D8E',
                    },
                    
                }
            })} mt={42} defaultValue="second" w={'100%'}>

                <Tabs.List mb={20} w={'100%'}>

                    <Flex align="center" w={'100%'}>

                        <Text fz={'20px'} fw={'600'} pr={16} className="cursor-default ">پروژه اول</Text>
                        <Divider mt={'10px'} h={'24px'} orientation="vertical"/>

                        <Tabs.Tab icon={<SvgProvier  style={{ height: "24px" }}><CheckList /></SvgProvier>} fz={'16px'} fw={'500'} value="first" className="cursor-pointer">نمایش لیستی</Tabs.Tab>
                        <Divider mt={'10px'} h={'24px'} orientation="vertical"/>

                        <Tabs.Tab icon={<SvgProvier  style={{ height: "24px" }}><Column /></SvgProvier>} fz={'16px'} fw={'500'} value="second" className="cursor-pointer">نمایش ستونی</Tabs.Tab>
                        <Divider mt={'10px'} h={'24px'} orientation="vertical"/>
                        
                        <Tabs.Tab icon={<SvgProvier  style={{ height: "24px" }}><Calender /></SvgProvier>} fz={'16px'} fw={'500'} value="third" className="cursor-pointer">تقویم</Tabs.Tab>
                        <Divider mt={'10px'} h={'24px'}  orientation="vertical"/>
                        
                        <Button fz={16} fw={500} leftIcon={<SvgProvier color="#323232" style={{ height: "24px" }}><Share /></SvgProvier>} ml="auto" style={{
                            backgroundColor: 'transparent',
                            color: 'inherit'
                        }}>
                            اشتراک‌گذاری
                        </Button>
                    </Flex>

                </Tabs.List>
            </Tabs>

            <div className="flex  gap-4 items-center">

                <SearchInput  fw={500} fz={12} placeholder='جستجو بین تسک‌ها' className="border-none" />
                <Divider  orientation="vertical"/>
                <Button fw={500} fz={12} leftIcon={<SvgProvier color="#323232" style={{ height: "24px" }}><TwoLineSetting /></SvgProvier>} ml={30} style={{
                    backgroundColor: 'transparent',
                    color: 'inherit'
                }}>
                    فیلترها
                </Button>
                <Badge size='lg' color='cyan'>دسته‌بندی‌شده با: وضعیت</Badge>
            </div>


        </Header>

    );
}

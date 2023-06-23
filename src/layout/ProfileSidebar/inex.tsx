import { Button, Flex, Navbar, ScrollArea } from '@mantine/core';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';

function ProfilePageSidebar() {
  const location = useLocation();
  const [selectedPart, setSelectedPart] = useState(getSelectedPartFromURL());

  function getSelectedPartFromURL(): string {
    const parts = location.pathname.split('/');
    const lastPart = parts[parts.length - 1];
    
    return lastPart || 'panel';
  }

  const handlePartClick = (part: string) => {
    setSelectedPart(part);
  };

  return (
    <>
      <Navbar
        bg="inherit"
        width={{
          // When viewport is larger than theme.breakpoints.sm, Navbar width will be 300
          sm: 300,

          // When viewport is larger than theme.breakpoints.lg, Navbar width will be 400
          lg: 340,

          // When other breakpoints do not match, base width is used, defaults to 100%
          base: 300
        }}
      >
        <Navbar.Section>
          <Flex justify="center" align="center" pt="40px">
            <Logo />
          </Flex>
        </Navbar.Section>

        <Navbar.Section grow component={ScrollArea}>
          <Flex justify="start" align="center" pt="80px" pl="50px">
            <Link to={"/"}>
              <Button>
                بازگشت
              </Button>
            </Link>
          </Flex>
          <Flex direction={'column'} justify="center" align="center" pt="40px" gap={30}>
            <Link to={"/profile/panel"}>
              <Button
                w="220px"
                variant={selectedPart === 'panel' ? 'filled' : '#FAFBFC'}
                onClick={() => handlePartClick('panel')}
              >
                اطلاعات فردی
              </Button>
            </Link>
            <Link to={"/profile/info"}>
              <Button
                w="220px"
                variant={selectedPart === 'info' ? 'filled' : '#FAFBFC'}
                onClick={() => handlePartClick('info')}
              >
                اطلاعات حساب
              </Button>
            </Link>
            <Link to={"/profile/setting"}>
              <Button
                w="220px"
                variant={selectedPart === 'setting' ? 'filled' : '#FAFBFC'}
                onClick={() => handlePartClick('setting')}
              >
                تنظیمات
              </Button>
            </Link>
          </Flex>
        </Navbar.Section>

        <Navbar.Section>

        </Navbar.Section>
      </Navbar>
    </>
  );
}

export default ProfilePageSidebar;

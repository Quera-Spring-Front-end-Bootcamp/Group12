import { AppShell, useMantineColorScheme } from "@mantine/core";
import { Outlet } from "react-router-dom";
import ProfilePageSidebar from "../../ProfileSidebar/inex";

function ProfilePage() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <AppShell
        bg={colorScheme === 'light' ? '#FAFBFC' : 'dark'}
        className="relative h-screen overflow-hidden"
        navbar={<ProfilePageSidebar />}
        layout="alt"
      >
        <Outlet />
      </AppShell>
    </>
  );
}

export default ProfilePage;

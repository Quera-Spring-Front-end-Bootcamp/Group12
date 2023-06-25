import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useMantineTheme } from '@mantine/core';
import { useAppSelector } from '../../data/reduxHooks';
import CreateTaskCalendarModal from '../CreateTaskCalendarModal';
import { useDisclosure } from '@mantine/hooks';
import {  useState } from 'react';

const Calendar = () => {
  const [taskDate, setTaskDate] = useState('');
  const boards: any = useAppSelector((state) => state.boards.projectBoards);
  const [opened, { open, close }] = useDisclosure(false);
  const themecolor = useMantineTheme();
  const color = themecolor.colors[themecolor.primaryColor];
  const allTasks = boards?.reduce((accumulator: any, currentValue: any) => {
    return accumulator.concat(currentValue.tasks);
  }, []);

  //  store all tasks for passing to calendar as event
  const events = allTasks.map((task: any) => {
    const date = task.deadline?.split('T')[0];
    return { title: task.name, date };
  });

  // passing taskdate to add task modal
  const handleDateClick = (arg: any) => {
    setTaskDate(arg.dateStr);
    open();
  };
  return (
    <>
      <CreateTaskCalendarModal opened={opened} onClose={close} taskDate={taskDate} />
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="fa"
        timeZone="local"
        direction="rtl"
        firstDay={6}
        dateClick={handleDateClick}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: ''
        }}
        buttonText={{
          today: 'امروز',
          month: 'ماه',
          week: 'هفته',
          day: 'روز'
        }}
        events={events}
        eventColor={color[8]}
        eventTextColor={color[0]}
        height="620px"
      />
    </>
  );
};

export default Calendar;

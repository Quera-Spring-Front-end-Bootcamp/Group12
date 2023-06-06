import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const Calender = () => {
  const handleDateClick = (arg: any) => {
    // bind with an arrow function
    alert(arg?.dateStr);
  };
  return (
    <>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="fa"
        direction="rtl"
        firstDay={6}
        dateClick={handleDateClick}
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        buttonText={{
          today: 'امروز',
          month: 'ماه',
          week: 'هفته',
          day: 'روز'
        }}
        events={[
          { title: 'تسک 1', date: '2023-05-29' },
          { title: 'درس پایگاه داده', date: '2023-06-07' }
        ]}
        height="600px"
      />
    </>
  );
};

export default Calender;

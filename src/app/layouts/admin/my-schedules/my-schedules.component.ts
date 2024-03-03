import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrl: './my-schedules.component.scss'
})
export class MySchedulesComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2024-03-09' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };
  eventsPromise: Promise<EventInput[]> | undefined;

  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}

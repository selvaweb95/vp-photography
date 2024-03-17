import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DialogAddSchedulesComponent } from '../dialog/dialog-add-schedules/dialog-add-schedules.component';

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrl: './my-schedules.component.scss'
})
export class MySchedulesComponent {
  constructor(public dialog: MatDialog){}
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { id:'0', title: 'event 1', date: '2024-03-09' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };
  eventsPromise: Promise<EventInput[]> | undefined;
  openDialog(){
    const dialogRef = this.dialog.open(DialogAddSchedulesComponent, {
      height: '70%',
      width: '75%',
    });
    dialogRef.afterClosed().subscribe(() => {
      
    });
  }
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
}

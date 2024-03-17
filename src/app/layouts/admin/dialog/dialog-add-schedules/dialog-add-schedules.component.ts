import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-dialog-add-schedules',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,MatDialogModule,FormsModule,MatDatepickerModule,MatInputModule,MatButtonModule],
  templateUrl: './dialog-add-schedules.component.html',
  styleUrl: './dialog-add-schedules.component.scss'
})
export class DialogAddSchedulesComponent {
  constructor(private dialogRef: MatDialogRef<DialogAddSchedulesComponent>,private service:SharedService){ }
  scheduleData={id:0,eventName:"",date:""}
  scheduleValidation={isEventName:false,isDate:false}
  addDate(date:any){
    console.log(date.target.value);
    
    this.scheduleData.date = date
  }
  validateScheduleData(){
    if (this.scheduleData.eventName == "" || this.scheduleData.eventName == null) {
      this.scheduleValidation.isEventName = true
      return false
    }
    if (this.scheduleData.date == "" || this.scheduleData.date == null) {
      this.scheduleValidation.isDate = true
      return false
    }
    return true
  }
  addSchedule(){
    if (this.validateScheduleData()) {
      this.service.createCalendar(this.scheduleData).subscribe((res:any)=>{
        if (res.isSucceeded) {
          this.service.openSnackBar("Schedule Added")
          this.dialogRef.close()
        }
      })
    }
  }
}

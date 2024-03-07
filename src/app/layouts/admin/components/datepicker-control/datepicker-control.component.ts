import { Component, EventEmitter, Input, Output } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'datepicker-control',
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepicker-control.component.html',
  styleUrl: './datepicker-control.component.scss'
})
export class DatepickerControlComponent {
  @Input() iLabel!:string;
  @Input() value!:string;
  @Input() isError!:boolean;
  @Output() selectedDate = new EventEmitter<string>();
  // range = new FormGroup({
  //   start: new FormControl<Date | null>(null),
  //   end: new FormControl<Date | null>(null),
  // });
  emitDate(){
    this.selectedDate.emit(this.value)
  }
}

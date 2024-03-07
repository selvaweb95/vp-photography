import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'select-control',
  templateUrl: './select-control.component.html',
  styleUrl: './select-control.component.scss'
})
export class SelectControlComponent {
  events:any;
  constructor(private http:SharedService){
    http.getEvent().subscribe((data:any)=>{
      this.events=data.returnData
    })
  }
  @Input() iLabel!:string;
  @Input() isError!:boolean;
  @Input() value!:any;
  @Output() selectedEvent = new EventEmitter<string>();

  emitEvent(){
    this.selectedEvent.emit(this.value)
  }
}

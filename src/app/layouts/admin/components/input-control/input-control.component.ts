import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-control',
  templateUrl: './input-control.component.html',
  styleUrl: './input-control.component.scss'
})
export class InputControlComponent {
  @Input() iLabel!:string;
}

import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit{
  @Input() tabsArray:string[] =[];
  @Input() imageSelected:any[]=[];
  @Output() onTabChange = new EventEmitter<string>();
  activatedTab:string= this.tabsArray[0];
  constructor(){
    
  }
  ngOnInit(): void {
    console.log(this.imageSelected);
    
    this.activatedTab= this.tabsArray[0];
  }
  setTab(tabName:string){
    if (this.imageSelected.length > 0 ) {
      return false
    }
    this.activatedTab=tabName;
    this.onTabChange.emit(this.activatedTab);
  }
}

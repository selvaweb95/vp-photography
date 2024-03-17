import { Component, EventEmitter, Input, Output,OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements OnInit{
  @Input() tabsArray:any[] =[];
  @Input() imageSelected:any[] =[];
  @Input() newlySelected:boolean=false
  @Output() onTabChange = new EventEmitter<string>();
  activatedTab:string | undefined;
  constructor(private service:SharedService){

  }
  ngOnInit(): void {
    this.activatedTab= this.tabsArray[0];
  }
  setTab(tabName:string){
    if (this.newlySelected) {
      this.service.openSnackBar("Add the selected Photos to the Folder Before switching the Tabs")
      return false
    }
    this.activatedTab=tabName;
    this.onTabChange.emit(this.activatedTab);
  }
  }


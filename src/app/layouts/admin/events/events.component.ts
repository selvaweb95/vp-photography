import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared/shared.service';

export interface UserData {
  createdAt: string;
  customerId: string;
  customerName: string;
  email: string;
  eventType: string;
  welcomeImage: string;
}

/** Constants used to fill up our data base. */



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements AfterViewInit{
  displayedColumns: string[] = ['image', 'CustomerName', 'PhoneNumber', 'EventType','Createdat','Createdby','Action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  event:any
  constructor(private service:SharedService,private router:Router) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    service.getAllEvent().subscribe((res:any)=>{
      if (res.isSucceeded) {
        this.event = res.returnData
        console.log(this.event);
        this.dataSource = new MatTableDataSource(this.event);
        
      } else {
        
      }
    })
    // Assign the data to the data source for the table to render
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editEvent(id:string){
    // 
    this.router.navigate(['/admin-panel/events/new-events'],{ state: { id: id } })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
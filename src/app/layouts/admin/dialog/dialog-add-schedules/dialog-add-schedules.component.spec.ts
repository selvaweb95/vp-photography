import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddSchedulesComponent } from './dialog-add-schedules.component';

describe('DialogAddSchedulesComponent', () => {
  let component: DialogAddSchedulesComponent;
  let fixture: ComponentFixture<DialogAddSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAddSchedulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerControlComponent } from './datepicker-control.component';

describe('DatepickerControlComponent', () => {
  let component: DatepickerControlComponent;
  let fixture: ComponentFixture<DatepickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

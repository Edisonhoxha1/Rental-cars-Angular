import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarsModalComponent } from './edit-cars-modal.component';

describe('EditCarsModalComponent', () => {
  let component: EditCarsModalComponent;
  let fixture: ComponentFixture<EditCarsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

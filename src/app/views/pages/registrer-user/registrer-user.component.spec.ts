import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerUserComponent } from './registrer-user.component';

describe('RegistrerUserComponent', () => {
  let component: RegistrerUserComponent;
  let fixture: ComponentFixture<RegistrerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

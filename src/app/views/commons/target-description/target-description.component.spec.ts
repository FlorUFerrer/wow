import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDescriptionComponent } from './target-description.component';

describe('TargetDescriptionComponent', () => {
  let component: TargetDescriptionComponent;
  let fixture: ComponentFixture<TargetDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedTaskComponent } from './finished-task.component';

describe('FinishedTaskComponent', () => {
  let component: FinishedTaskComponent;
  let fixture: ComponentFixture<FinishedTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

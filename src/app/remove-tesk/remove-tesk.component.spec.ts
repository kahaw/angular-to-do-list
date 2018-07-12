import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTeskComponent } from './remove-tesk.component';

describe('RemoveTeskComponent', () => {
  let component: RemoveTeskComponent;
  let fixture: ComponentFixture<RemoveTeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

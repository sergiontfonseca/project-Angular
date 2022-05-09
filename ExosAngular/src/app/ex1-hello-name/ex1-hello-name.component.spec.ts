import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1HelloNameComponent } from './ex1-hello-name.component';

describe('Ex1HelloNameComponent', () => {
  let component: Ex1HelloNameComponent;
  let fixture: ComponentFixture<Ex1HelloNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1HelloNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1HelloNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDeepEqualsPureComponent } from './ngx-deep-equals-pure.component';

describe('NgxDeepEqualsPureComponent', () => {
  let component: NgxDeepEqualsPureComponent;
  let fixture: ComponentFixture<NgxDeepEqualsPureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDeepEqualsPureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDeepEqualsPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

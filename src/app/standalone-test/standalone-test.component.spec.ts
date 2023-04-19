import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneTestComponent } from './standalone-test.component';

describe('StandaloneTestComponent', () => {
  let component: StandaloneTestComponent;
  let fixture: ComponentFixture<StandaloneTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

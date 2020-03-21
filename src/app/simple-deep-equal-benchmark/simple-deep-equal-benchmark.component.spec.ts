import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeepEqualBenchmarkComponent } from './simple-deep-equal-benchmark.component';

describe('SimpleDeepEqualBenchmarkComponent', () => {
  let component: SimpleDeepEqualBenchmarkComponent;
  let fixture: ComponentFixture<SimpleDeepEqualBenchmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDeepEqualBenchmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDeepEqualBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

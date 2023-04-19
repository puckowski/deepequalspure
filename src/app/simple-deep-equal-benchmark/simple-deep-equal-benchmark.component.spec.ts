import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDeepEqualBenchmarkComponent } from './simple-deep-equal-benchmark.component';

describe('SimpleDeepEqualBenchmarkComponent', () => {
  let component: SimpleDeepEqualBenchmarkComponent;
  let fixture: ComponentFixture<SimpleDeepEqualBenchmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleDeepEqualBenchmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDeepEqualBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import deepEqual from 'deep-equal';
import { NgxDeepEqualsPureService } from 'ngx-deep-equals-pure';

@Component({
  selector: 'eq-pure-simple-deep-equal-benchmark',
  templateUrl: './simple-deep-equal-benchmark.component.html',
  styleUrls: ['./simple-deep-equal-benchmark.component.scss']
})
export class SimpleDeepEqualBenchmarkComponent implements OnInit {

  private obj1: any = {
    b: () => {
      console.log('foo');
    },
    e: 'abcbc',
    a: [
      { 'a': 12.7 },
      { 'c': 37.6 }
    ],
    c: 126.8,
    f: ['f', 'a'],
    g: [
      { t: () => { console.log('h'); }, g: 'a', j: 12 },
      ['b', 2, { p: '123' }],
      '789',
      12.6,
      809,
      () => { console.log('er'); }
    ]
  };

  private obj2: any = {
    g: [
      [{ p: '123' }, 2, 'b'],
      '789',
      12.6,
      () => { console.log('er'); },
      { g: 'a', t: () => { console.log('h'); }, j: 12 },
      809
    ],
    e: 'abcbc',
    b: () => {
      console.log('foo');
    },
    a: [
      { 'c': 37.6 },
      { 'a': 12.7 }
    ],
    f: ['f', 'a'],
    c: 126.8
  };

  private obj3: any = {
    g: [
      [{ p: '123' }, 2, 'b'],
      '789',
      12.6,
      () => { console.log('er'); },
      { t: () => { console.log('h'); }, j: 12 },
      809
    ],
    e: 'abcbc',
    b: () => {
      console.log('foo');
    },
    a: [
      { 'c': 37.6 },
      { 'a': 12.7 }
    ],
    f: ['f', 'a'],
    c: 126.8
  };

  private obj4: any = {
    g: [
      [{ p: '123' }, 2, 'b'],
      '789',
      12.6,
      () => { console.log('er'); },
      { g: '6', t: () => { console.log('h'); }, j: 12 },
      809
    ],
    e: 'abcbc',
    b: () => {
      console.log('foo');
    },
    a: [
      { 'c': 37.6 },
      { 'a': 12.7 }
    ],
    f: ['f', 'a'],
    c: 126.8
  };

  private obj5: any = {
    g: [
      [{ u: '123' }, 2, 'b'],
      '789',
      12.6,
      () => { console.log('er'); },
      { g: 'a', t: () => { console.log('h'); }, j: 12 },
      809
    ],
    e: 'abcbc',
    b: () => {
      console.log('foo');
    },
    a: [
      { 'c': 37.6 },
      { 'a': 12.7 }
    ],
    f: ['f', 'a'],
    c: 126.8
  };

  private obj6: any = {
    g: [
      [{ p: '123' }, 2, 'b'],
      '789',
      12.6,
      () => { console.log('er'); },
      { g: 'a', y: () => { console.log('h'); }, j: 12 },
      809
    ],
    e: 'abcbc',
    b: () => {
      console.log('foo');
    },
    a: [
      { 'c': 37.6 },
      { 'a': 12.7 }
    ],
    f: ['f', 'a'],
    c: 126.8
  };

  private obj7: any = {
    b: () => {
      console.log('foo');
    },
    e: 'abcbc',
    a: [
      { 'a': 12.7 },
      { 'c': 37.6 }
    ],
    c: 126.8,
    f: ['f', 'a'],
    g: [
      { t: () => { console.log('h'); }, g: 'a', j: 12 },
      ['b', 2, { p: '123' }],
      '789',
      12.6,
      809,
      () => { console.log('er'); }
    ]
  };

  private obj8: any = { b: 'a', c: 2 };
  private obj9: any = { c: 2, b: 'a' };

  private readonly DEFAULT_BENCH_RUNS: number = 20;
  private readonly DEFAULT_BENCH_ITERATIONS: number = 100;

  private isMatch: any[];
  private isMatchLodash: any[];
  private isMatchDeepEqual: any;

  private isMatchTimes: number[];
  private isMatchAverage: number;

  private isMatchLodashTimes: number[];
  private isMatchLodashAverage: number;

  private isMatchDeepEqualTimes: number[];
  private isMatchDeepEqualAverage: number;

  private benchTimeData: any[];
  private benchResults: any;

  private benchData: any[];
  private testData: any[];

  private isLoading: boolean;

  constructor(private ngxDeepEquals: NgxDeepEqualsPureService) {
    this.isMatch = [];
    this.isMatchLodash = [];
    this.isMatchDeepEqual = [];

    this.isMatchAverage = 0.00;

    this.isMatchDeepEqualAverage = 0.00;

    this.isMatchLodashAverage = 0.00;

    this.benchData = [];
    this.testData = [];

    this.isMatch = [];
    this.isMatchLodash = [];
    this.isMatchDeepEqual = [];

    this.isMatchTimes = [];
    this.isMatchAverage = 0.00;

    this.isMatchDeepEqualTimes = [];
    this.isMatchDeepEqualAverage = 0.00;

    this.isMatchLodashTimes = [];
    this.isMatchLodashAverage = 0.00;

    this.benchTimeData = [];
    this.benchResults = {};

    this.isLoading = true;
  }

  ngOnInit(): void {
    this.runSimpleTests();
    this.mergeTestData();
    this.run();
  }

  public run(): void {
    this.warmup();
    this.runSimpleBenchmark();
    this.mergeBenchData();
    this.isLoading = false;
  }

  private mergeBenchData(): void {
    for (let i = 0; i < this.DEFAULT_BENCH_RUNS; ++i) {
      const result: any = {
        ngx: this.getIsMatchTimes()[i],
        deep: this.getIsMatchDeepEqualTimes()[i],
        lodash: this.getIsMatchLodashTimes()[i]
      };

      this.benchTimeData.push(result);
    }

    this.benchResults.data = this.benchTimeData;
    this.benchResults.ngx = this.getIsMatchAverage();
    this.benchResults.lodash = this.getIsMatchLodashAverage();
    this.benchResults.deep = this.getIsMatchDeepEqualAverage();
  }

  private warmup(): void {
    for (let i = 0; i < 10; ++i) {
      this.ngxDeepEquals.deepEquals(this.obj1, this.obj2);
      this.ngxDeepEquals.deepEquals(this.obj1, this.obj3);
      this.ngxDeepEquals.deepEquals(this.obj1, this.obj4);
      this.ngxDeepEquals.deepEquals(this.obj1, this.obj5);
      this.ngxDeepEquals.deepEquals(this.obj1, this.obj6);
      this.ngxDeepEquals.deepEquals(this.obj1, this.obj7);
      this.ngxDeepEquals.deepEquals(this.obj8, this.obj9);
    }

    for (let i = 0; i < 10; ++i) {
      deepEqual(this.obj1, this.obj2);
      deepEqual(this.obj1, this.obj3);
      deepEqual(this.obj1, this.obj4);
      deepEqual(this.obj1, this.obj5);
      deepEqual(this.obj1, this.obj6);
      deepEqual(this.obj1, this.obj7);
      deepEqual(this.obj8, this.obj9);
    }

    for (let i = 0; i < 10; ++i) {
      _.isEqual(this.obj1, this.obj2);
      _.isEqual(this.obj1, this.obj3);
      _.isEqual(this.obj1, this.obj4);
      _.isEqual(this.obj1, this.obj5);
      _.isEqual(this.obj1, this.obj6);
      _.isEqual(this.obj1, this.obj7);
      _.isEqual(this.obj8, this.obj9);
    }
  }

  private runSimpleBenchmark(): void {
    let benchAverage = 0;
    for (let n = 0; n < this.DEFAULT_BENCH_RUNS; ++n) {
      const startDate = new Date();
      for (let i = 0; i < this.DEFAULT_BENCH_ITERATIONS; ++i) {
        this.ngxDeepEquals.deepEquals(this.obj1, this.obj2);
        this.ngxDeepEquals.deepEquals(this.obj1, this.obj3);
        this.ngxDeepEquals.deepEquals(this.obj1, this.obj4);
        this.ngxDeepEquals.deepEquals(this.obj1, this.obj5);
        this.ngxDeepEquals.deepEquals(this.obj1, this.obj6);
        this.ngxDeepEquals.deepEquals(this.obj1, this.obj7);
        this.ngxDeepEquals.deepEquals(this.obj8, this.obj9);
      }
      const endDate = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

      this.isMatchTimes.push(seconds);
      benchAverage += seconds;
    }
    benchAverage /= this.DEFAULT_BENCH_RUNS;
    this.isMatchAverage = benchAverage;

    benchAverage = 0;
    for (let n = 0; n < this.DEFAULT_BENCH_RUNS; ++n) {
      const startDate = new Date();
      for (let i = 0; i < this.DEFAULT_BENCH_ITERATIONS; ++i) {
        deepEqual(this.obj1, this.obj2);
        deepEqual(this.obj1, this.obj3);
        deepEqual(this.obj1, this.obj4);
        deepEqual(this.obj1, this.obj5);
        deepEqual(this.obj1, this.obj6);
        deepEqual(this.obj1, this.obj7);
        deepEqual(this.obj8, this.obj9);
      }
      const endDate = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

      this.isMatchDeepEqualTimes.push(seconds);
      benchAverage += seconds;
    }
    benchAverage /= this.DEFAULT_BENCH_RUNS;
    this.isMatchDeepEqualAverage = benchAverage;

    benchAverage = 0;
    for (let n = 0; n < this.DEFAULT_BENCH_RUNS; ++n) {
      const startDate = new Date();
      for (let i = 0; i < this.DEFAULT_BENCH_ITERATIONS; ++i) {
        _.isEqual(this.obj1, this.obj2);
        _.isEqual(this.obj1, this.obj3);
        _.isEqual(this.obj1, this.obj4);
        _.isEqual(this.obj1, this.obj5);
        _.isEqual(this.obj1, this.obj6);
        _.isEqual(this.obj1, this.obj7);
        _.isEqual(this.obj8, this.obj9);
      }
      const endDate = new Date();
      const seconds = (endDate.getTime() - startDate.getTime()) / 1000;

      this.isMatchLodashTimes.push(seconds);
      benchAverage += seconds;
    }
    benchAverage /= this.DEFAULT_BENCH_RUNS;
    this.isMatchLodashAverage = benchAverage;
  }

  public getIsMatchTimes(): number[] {
    return this.isMatchTimes;
  }

  public getIsMatchLodashTimes(): number[] {
    return this.isMatchLodashTimes;
  }

  public getIsMatchDeepEqualTimes(): number[] {
    return this.isMatchDeepEqualTimes;
  }

  public getBenchTimeData(): any[] {
    return this.benchTimeData;
  }

  public getBenchResults(): any {
    return this.benchResults;
  }

  private mergeTestData(): void {
    let testCount: number = Math.min(this.getIsMatch().length, this.getIsMatchDeepEqual().length);
    testCount = Math.min(testCount, this.getIsMatchLodash().length);

    for (let i = 0; i < testCount; ++i) {
      const result: any = {
        ngx: this.getIsMatch()[i],
        deep: this.getIsMatchDeepEqual()[i],
        lodash: this.getIsMatchLodash()[i]
      };

      this.testData.push(result);
    }
  }

  private runSimpleTests(): void {
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj1, this.obj2));
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj1, this.obj3));
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj1, this.obj4));
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj1, this.obj5));
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj1, this.obj6));
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj1, this.obj7));
    this.isMatch.push(this.ngxDeepEquals.deepEquals(this.obj8, this.obj9));

    this.isMatchLodash.push(_.isEqual(this.obj1, this.obj2));
    this.isMatchLodash.push(_.isEqual(this.obj1, this.obj3));
    this.isMatchLodash.push(_.isEqual(this.obj1, this.obj4));
    this.isMatchLodash.push(_.isEqual(this.obj1, this.obj5));
    this.isMatchLodash.push(_.isEqual(this.obj1, this.obj6));
    this.isMatchLodash.push(_.isEqual(this.obj1, this.obj7));
    this.isMatchLodash.push(_.isEqual(this.obj8, this.obj9));

    this.isMatchDeepEqual.push(deepEqual(this.obj1, this.obj2));
    this.isMatchDeepEqual.push(deepEqual(this.obj1, this.obj3));
    this.isMatchDeepEqual.push(deepEqual(this.obj1, this.obj4));
    this.isMatchDeepEqual.push(deepEqual(this.obj1, this.obj5));
    this.isMatchDeepEqual.push(deepEqual(this.obj1, this.obj6));
    this.isMatchDeepEqual.push(deepEqual(this.obj1, this.obj7));
    this.isMatchDeepEqual.push(deepEqual(this.obj8, this.obj9));
  }

  public getIsMatch(): any[] {
    return this.isMatch;
  }

  public getIsMatchLodash(): any[] {
    return this.isMatchLodash;
  }

  public getIsMatchDeepEqual(): any[] {
    return this.isMatchDeepEqual;
  }

  public getIsMatchAverage(): number {
    return this.isMatchAverage;
  }

  public getIsMatchLodashAverage(): number {
    return this.isMatchLodashAverage;
  }

  public getIsMatchDeepEqualAverage(): number {
    return this.isMatchDeepEqualAverage;
  }

  public getBenchData(): any[] {
    return this.benchData;
  }

  public getTestData(): any[] {
    return this.testData;
  }

  public getIsLoading(): boolean {
    return this.isLoading;
  }

}

import { TestBed } from '@angular/core/testing';

import { NgxDeepEqualsPureService } from './ngx-deep-equals-pure.service';

describe('NgxDeepEqualsPureService', () => {
  let service: NgxDeepEqualsPureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDeepEqualsPureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be equal', () => {
    const obj1: any = {
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

    const obj2: any = {
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

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals).toBeTruthy('obj1 should equal obj2');
  });

  it('should not be equal', () => {
    const obj1: any = {
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

    const obj3: any = {
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

    const isEquals: boolean = service.deepEquals(obj1, obj3);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj3');
  });

  it('should not be equal', () => {
    const obj1: any = {
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

    const obj4: any = {
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

    const isEquals: boolean = service.deepEquals(obj1, obj4);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj4');
  });

  it('should not be equal', () => {
    const obj1: any = {
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

    const obj5: any = {
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

    const isEquals: boolean = service.deepEquals(obj1, obj5);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj5');
  });

  it('should not be equal', () => {
    const obj1: any = {
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

    const obj6: any = {
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

    const isEquals: boolean = service.deepEquals(obj1, obj6);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj6');
  });
});

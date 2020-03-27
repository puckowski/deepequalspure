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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {
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
        [
          [{ m: 5, l: 6 }, 2, 'a', 6.7],
          [{ a: 2722 }, 6.7989, 'u', 3],
          ['c', 9.8, 5, 6, 10.112, 't', { e: 434, f: 5834 }, { y: 6984, g: 584 }, { r: 373, p: 583 }],
          [9.8, 'b', 5, { h: 5, b: 3.12 }, { f: 7, k: 6 }]
        ],
        12.6,
        809,
        () => { console.log('er'); }
      ]
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {};

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {
      b: () => {
        console.log('foo');
      },
      e: 'abcbc',
      a: [
        { 'a': 12.7 },
        { 'c': 37.6 }
      ],
      c: 126.8,
      f: ['f', 'a']
    };

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {
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
        [
          [{ m: 5 }, 2, 'a', 6.7],
          [{ a: 2722 }, 6.7989, 'u', 3],
          ['c', 9.8, 5, 6, 10.112, 't', { e: 434, f: 5834 }, { y: 6984, g: 584 }, { r: 373, p: 583 }],
          [9.8, 'b', 5, { h: 5, b: 3.12 }, { f: 7, k: 6 }]
        ],
        12.6,
        809,
        () => { console.log('er'); }
      ]
    };

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {
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
        [
          [{ m: 5, l: 6 }, 2, 'a', 6.7],
          [{ a: 2722 }, 6.7989, 'u', 3],
          ['c', 9.8, 5, 6, 10.112, { e: 434, f: 5834 }, { y: 6984, g: 584 }, { r: 373, p: 583 }],
          [9.8, 'b', 5, { h: 5, b: 3.12 }, { f: 7, k: 6 }]
        ],
        12.6,
        809,
        () => { console.log('er'); }
      ]
    };

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {
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
        { g: 'a', j: 12 },
        ['b', 2, { p: '123' }],
        '789',
        [
          [{ m: 5, l: 6 }, 2, 'a', 6.7],
          [{ a: 2722 }, 6.7989, 'u', 3],
          ['c', 9.8, 5, 6, 10.112, 't', { e: 434, f: 5834 }, { y: 6984, g: 584 }, { r: 373, p: 583 }],
          [9.8, 'b', 5, { h: 5, b: 3.12 }, { f: 7, k: 6 }]
        ],
        12.6,
        809,
        () => { console.log('er'); }
      ]
    };

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = {};

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = [];

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = null;

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = undefined;

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = 'abc';

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = 12;

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
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
        () => { console.log('er'); },
        [
          [{ l: 6, m: 5 }, 'a', 2, 6.7],
          ['b', 5, 9.8, { k: 6, f: 7 }, { h: 5, b: 3.12 }],
          ['c', 't', 5, 6, 9.8, 10.112, { g: 584, y: 6984 }, { f: 5834, e: 434 }, { p: 583, r: 373 }],
          ['u', 6.7989, 3, { a: 2722 }]
        ]
      ]
    };

    const obj2: any = 3.14;

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals === false).toBeTruthy('obj1 should not equal obj2');
  });

  it('should be equal', () => {
    const obj1: any = {
      first: 30,
      rows: 10,
      sortField: 'brand',
      sortOrder: 1,
      filters: {
        year: {
          matchMode: 'contains',
          value: '19'
        }
      },
      globalFilter: undefined,
      multiSortMeta: []
    };

    const obj2: any = {
      sortField: 'brand',
      rows: 10,
      filters: {
        year: {
          matchMode: 'contains',
          value: '19'
        }
      },
      sortOrder: 1,
      multiSortMeta: [],
      first: 30,
      globalFilter: undefined
    };

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals).toBeTruthy('obj1 should equal obj2');
  });

  it('should be equal', () => {
    const obj1: any = {
      first: 0,
      rows: 2,
      sortOrder: 1,
      filters: {},
      globalFilter: null,
      multiSortMeta: [],
      sortField: undefined
    };
    Object.defineProperty(obj1, 'filterID', {
      enumerable: true,
      writable: true,
      configurable: true,
      value: 9067
    });

    const obj2: any = {
      globalFilter: null,
      multiSortMeta: [],
      sortField: undefined,
      rows: 2,
      sortOrder: 1,
      filters: {},
      first: 0
    };
    Object.defineProperty(obj2, 'filterID', {
      enumerable: true,
      writable: true,
      configurable: true,
      value: 9067
    });

    const isEquals: boolean = service.deepEquals(obj1, obj2);

    expect(isEquals).toBeTruthy('obj1 should equal obj2');
  });
});

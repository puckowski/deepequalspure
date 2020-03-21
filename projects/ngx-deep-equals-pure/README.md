# NgxDeepEqualsPure

This is a package intended to provide a deep equals function for JavaScript objects without requiring numerous dependencies. Other packages which provide a deep equals function, like Lodash or deep-equal, require a large number of dependencies or they are themselves very large. This contributes to unnecessary bloat and, ultimately, poor application load performance.

Repository:
https://github.com/puckowski/deepequalspure

Bugs:
https://github.com/puckowski/deepequalspure/issues

## Size

The minified ES2015 size of ngx-deep-equals-pure is 8.92KB including the source map.

|ngx-deep-equals-pure |deep-equal |Lodash |
|---------------------|-----------|-------|
|8.92KB |3.44KB |557KB |

## Performance

|ngx-deep-equals-pure |deep-equal |Lodash isEqual |
|-----------|---------|--------|
| 0.331     | 1.976   | 0.061  |
| 0.284     | 2.055   | 0.036  |
| 0.283     | 2.006   | 0.037  |
| 0.28      | 2.013   | 0.036  |
| 0.282     | 2.005   | 0.036  |
| 0.28      | 2.018   | 0.037  |
| 0.283     | 2.011   | 0.036  |
| 0.281     | 2.006   | 0.035  |
| 0.28      | 2.006   | 0.037  |
| 0.279     | 2.009   | 0.037  |
| 0.304     | 2.008   | 0.036  |
| 0.287     | 2.009   | 0.044  |
| 0.292     | 2.005   | 0.039  |
| 0.278     | 2.004   | 0.034  |
| 0.279     | 2.012   | 0.034  |
| 0.28      | 2.007   | 0.034  |
| 0.279     | 2.015   | 0.034  |
| 0.277     | 2.022   | 0.034  |
| 0.279     | 2.173   | 0.034  |
| 0.277     | 2.175   | 0.035  |
| **Avg: 0.28475s**   | **Avg: 2.02675s** | **Avg: 0.03730s** |

## Tests
```javascript
this.isMatch.push(this.deep.deepEquals(obj1, obj2));
this.isMatch.push(this.deep.deepEquals(obj1, obj3));
this.isMatch.push(this.deep.deepEquals(obj1, obj4));
this.isMatch.push(this.deep.deepEquals(obj1, obj5));
this.isMatch.push(this.deep.deepEquals(obj1, obj6));
this.isMatch.push(this.deep.deepEquals(obj1, obj7));
this.isMatch.push(this.deep.deepEquals(obj8, obj9));

this.isMatchLodash.push(_.isEqual(obj1, obj2));
this.isMatchLodash.push(_.isEqual(obj1, obj3));
this.isMatchLodash.push(_.isEqual(obj1, obj4));
this.isMatchLodash.push(_.isEqual(obj1, obj5));
this.isMatchLodash.push(_.isEqual(obj1, obj6));
this.isMatchLodash.push(_.isEqual(obj1, obj7));
this.isMatchLodash.push(_.isEqual(obj8, obj9));

this.isMatchDeepEqual.push(deepEqual(obj1, obj2));
this.isMatchDeepEqual.push(deepEqual(obj1, obj3));
this.isMatchDeepEqual.push(deepEqual(obj1, obj4));
this.isMatchDeepEqual.push(deepEqual(obj1, obj5));
this.isMatchDeepEqual.push(deepEqual(obj1, obj6));
this.isMatchDeepEqual.push(deepEqual(obj1, obj7));
this.isMatchDeepEqual.push(deepEqual(obj8, obj9));
```

## Results
```javascript
ngx-deep-equals-pure
Test 1 is a match: true

Test 2 is a match: false

Test 3 is a match: false

Test 4 is a match: false

Test 5 is a match: false

Test 6 is a match: true

Test 7 is a match: true

Lodash
Test 1 is a match: false

Test 2 is a match: false

Test 3 is a match: false

Test 4 is a match: false

Test 5 is a match: false

Test 6 is a match: false

Test 7 is a match: true

deep-equal
Test 1 is a match: false

Test 2 is a match: false

Test 3 is a match: false

Test 4 is a match: false

Test 5 is a match: false

Test 6 is a match: false

Test 7 is a match: true
```

## Input objects
```javascript
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

const obj7: any = {
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

const obj8: any = { b: 'a', c: 2 };
const obj9: any = { c: 2, b: 'a' };
```

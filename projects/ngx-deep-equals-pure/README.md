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
|9.18KB |3.44KB |528KB |

## Performance

The following is the latest performance result of 5,000 comparisons run in a web worker.

|ngx-deep-equals-pure |deep-equal |Lodash isEqual |
|-----------|---------|--------|
|	0.3   | 0.06  |	13.57  |
|	0.275 | 0.035 | 13.833 |
|	0.276 | 0.036	| 12.831 |
|	0.276 | 0.036	| 11.556 |
|	0.278 | 0.043	| 11.553 |
|	0.271 | 0.035	| 12.933 |
|	0.272 | 0.032	| 14.445 |
|	0.293 | 0.032	| 14.458 |
|	0.279 | 0.032	| 14.461 |
|	0.272 | 0.032	| 14.464 |
|	0.272 | 0.032	| 14.443 |
|	0.272 | 0.031	| 14.443 |
|	0.272 | 0.032	| 14.461 |
|	0.273 | 0.032	| 14.43  |
|	0.271 | 0.033	| 14.455 |
|	0.273 | 0.034	| 14.471 | 
|	0.273 | 0.032	| 14.482 |
|	0.273 | 0.034	| 14.415 |
|	0.273 | 0.033	| 14.46  |
|	0.271 | 0.033	| 14.465 |
| **Avg: 0.27575s**   | **Avg: 0.034950s** | **Avg: 13.931450s** |

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

## Building library

Use command:

```
ng build NgxDeepEqualsPure --prod
```

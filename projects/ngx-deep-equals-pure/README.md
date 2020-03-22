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

|ngx-deep-equals-pure |deep-equal |Lodash isEqual |
|-----------|---------|--------|
|	0.287 | 0.065 |	18.788 |
|	0.257 | 0.035 |	18.968 |
|	0.258 | 0.035 |	18.993 |
|	0.258 | 0.035 |	18.982 |
|	0.261 | 0.046 |	21.897 |
|	0.251 | 0.033 |	25.989 |
|	0.251 | 0.034 |	25.947 |
|	0.252 | 0.033 |	26.15  |
|	0.252 | 0.033 |	26.213 |
|	0.255 | 0.033 | 26.249 |
|	0.251 | 0.034	| 26.276 |
|	0.256 | 0.032 |	25.795 |
|	0.251 | 0.034 |	21.492 |
|	0.258 | 0.033 |	21.511 |
|	0.251 | 0.033 |	21.547 |
|	0.252 | 0.033 |	21.469 |
|	0.255 | 0.035 |	24.255 |
|	0.251 | 0.033 |	25.917 |
|	0.252 | 0.033 |	26.212 |
|	0.255 | 0.033 |	26.326 |
| **Avg: 0.25569s**   | **Avg: 0.035750s** | **Avg: 23.44880s** |

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

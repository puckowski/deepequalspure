# NgxDeepEqualsPure

Note:
Please use version 0.3.0+ for Angular 12.0+ projects. Please use version 0.2.5 for projects using Angular 11.0 and below. Version 0.4.0+ supports use in Web Workers.

This is a package intended to provide a deep equals function for JavaScript objects without requiring numerous dependencies. Other packages which provide a deep equals function, like Lodash or deep-equal, require a large number of dependencies or they are themselves very large. This contributes to unnecessary bloat and, ultimately, poor application load performance.

Unlike deep-equal and Lodash, ngx-deep-equals-pure can correctly handle function properties. Furthermore, ngx-deep-equals-pure properly determines equality for arrays of complex objects when the order of the data differs where deep-equal and Lodash fail to do so.

Repository:
https://github.com/puckowski/deepequalspure

Bugs:
https://github.com/puckowski/deepequalspure/issues

## Size

The minified ES2015 size of ngx-deep-equals-pure is 9.18KB which includes ESM5, ESM2015, FESM5, and FESM2015 bundles.

|ngx-deep-equals-pure |deep-equal |Lodash |
|---------------------|-----------|-------|
|9.18KB |3.44KB |528KB |

## npm Package

https://www.npmjs.com/package/ngx-deep-equals-pure

## Usage

In the appropriate module, such as ```AppModule```, add the following to ```providers```:

```javascript
providers: [NgxDeepEqualsPureService],
```

In a component part of a module where NgxDeepEqualsPureService is provided, inject the deep equals service in the constructor like so:

```javascript
constructor(private ngxDeepEquals: NgxDeepEqualsPureService) {
```

Then use NgxDeepEqualsPure like so:

```javascript
this.ngxDeepEquals.deepEquals(this.obj1, this.obj2);
```

Alternatively, construct a standalone component like the following:

```javascript
import { Component } from '@angular/core';
import { NgxDeepEqualsPureModule, NgxDeepEqualsPureService } from 'NgxDeepEqualsPure';

@Component({
  selector: 'app-standalone-test',
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.scss'],
  standalone: true,
  imports: [NgxDeepEqualsPureModule]
})
export class StandaloneTestComponent {

  private obj8: any = { b: 'a', c: 2 };
  private obj9: any = { c: 2, b: 'a' };

  public isStandaloneMatch: boolean;

  constructor(private ngxDeepEquals: NgxDeepEqualsPureService) {
    this.isStandaloneMatch = this.ngxDeepEquals.deepEquals(this.obj8, this.obj9);
  }
}
```

## Performance

The following is the latest performance result of 2,000 comparisons run in a web worker.

|ngx-deep-equals-pure |deep-equal |Lodash isEqual |
|---------------------|-----------|---------------|
|	0.023 | 0.006 |	0.091 |
|	0.007 | 0.008 |	0.107 |
|	0.006 | 0.004	| 0.106 |
|	0.006 | 0.001 |	0.115 |
|	0.006 | 0.001 |	0.115 |
|	0.006 | 0.001 |	0.117 |
|	0.005 | 0.001 |	0.117 |
|	0.006 | 0.001 |	0.12  |
|	0.006 | 0.001 |	0.118 |
|	0.006 | 0.001 |	0.117 |
|	0.006 | 0.001 |	0.117 |
|	0.006 | 0.001 |	0.116 |
|	0.006 | 0.001 |	0.118 |
|	0.006 | 0.001 |	0.118 |
|	0.006 | 0.001 |	0.118 |
|	0.005 | 0.001 |	0.118 |
|	0.006 | 0.001 |	0.119 |
|	0.006 | 0.001 |	0.118 |
|	0.006 | 0	    | 0.118 |
|	0.006 | 0.002	| 0.117 |
| **Avg: 0.0068s**   | **Avg: 0.00175s** | **Avg: 0.1149s** |

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
|#|Actual  |ngx-deep-equals-pure |deep-equal |Lodash isEqual |
|---|-------------|---------------------|-----------|---------------|
|1  |	true        | true                | false     | false         |
|2  | false       | false               | false     | false         |
|3  | false       | false               | false     | false         |
|4  | false       | false               | false     | false         |
|5  | false       | false               | false     | false         |
|6  | true        | true                | false     | false         |
|7  | true        | true                | true      | true          |

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

## Running benchmark

Use command:

```
ng serve
```

Then navigate to localhost:4200 in your preferred browser.

Note:
It may be necessary to run the build command before trying to run the benchmark.

See the GitHub repository at https://github.com/puckowski/deepequalspure for example usage of ngx-deep-equals-pure in an Angular application and for example usage in a Web Worker.

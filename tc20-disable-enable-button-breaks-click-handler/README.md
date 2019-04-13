# Test Case: JSDOM, Disabling and re-enabling button breaks click handler

## Test Case Code
https://drive.google.com/open?id=1IayEFjUReATiuJI8CD6hBQRPGR7iIrFZ

```js
// check file
app.component.spec.ts
```

## Topcoder handle

liqiang372

## Your document content (required)
### How to run test
#### Prerequisites

1. Node 8+
2. NPM or yarn
3. Git
4. Safari, Chrome, Firefox

#### Run Test on Karma

```bash
cd topcoder-jest-test
git checkout disabled-btn
npm install
npm run test
```
#### Run Test on Jest

```bash
npm run test:jest
```

### Browser have tested

Chrome, Safari, Firefox

### Test Result on Karma

| Browser | Result |
| ------ | ------ |
| Chrome 72.0.3626 (Mac OS X 10.14.2) | success |
| Safari 11.1.0 (Mac OS X 10.14.2)  | success | 
| Firefox 65.0.0 (Mac OS X 10.14.2) | success | 


### Test Result on Jest 
#### What we get
```js
 FAIL  src/app/app.component.spec.ts
  AppComponent
    ✕ should create the app (109ms)

  ● AppComponent › should create the app

    AssertionError: expected false to equal true

      31 |     btn.disabled = false;
      32 |     btn.click();
    > 33 |     expect(spiedCallback.calledTwice).to.equal(true);
         |                                          ^
      34 |   });
      35 | });
      36 | 

      at src/app/app.component.spec.ts:33:42

  console.log src/app/app.component.ts:12
    clicked

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        2.642s
```
#### Expected
Expect the click handler also called after toggling button `disable` property

## Description
A bug in JSDOM implementation

issue: https://github.com/jsdom/jsdom/issues/2496


# Vue Unit Test Performance Comparison

This is a performance comparison between test runners testing Vue SFCs.

## Comparison

| Runner        | 10 tests  | 100 tests  | 1000 tests | 5000 tests |
| :------------ |:--------- |:---------  |:---------  |:--------- |
| tape | 2.32s |  3.49s |  9.28s |  38.31s |
| jest | 2.44s |  4.50s |  21.84s |  91.91s |
| mocha-webpack | 2.32s |  3.07s |  10.79s |  38.97s |
| karma-mocha | 7.93s |  11.01s |  33.30s |  119.34s |
| ava | 19.05s |  73.44s |  625.15s |  7161.49s |

## Details

The tests use two SFC. You can see the tests inside the runner directories.

The time is the average of 10 runs.

## Results

Currently tape is the fastest.

AVA is by far the slowest. This is because the [current suggested method](https://github.com/avajs/ava/blob/master/docs/recipes/precompiling-with-webpack.md) does not utilize caching. If caching was added, it would be comparable to Jest.

## Usage

Running the test script will generate a results table in RESULTS.md:

```
npm test
```

**Warning: It takes around 5 minutes to run**

## Contributing

Feel free to add an extra test setup. The aim of this project is to find the best setup out there.

### Add a new setup
* Create directory with a descriptive name, using test template below
* Add `Basic.spec.js` file with 30 tests
* Create a `test` script in your package.json
* Add name of directory to `test_runners` array in `test.sh`
* Run tests from the root by running `npm test`

### Test template
Copy this and change the syntax to match your test runner.
```js
it('renders correct text', () => {
  const wrapper = shallow(Basic)
  expect(wrapper.find('.hello h1').text()).toBe('Welcome to Your Vue.js App')
})
```

# Vue Unit Test Performance Comparison

This is a performance comparison between test runners testing Vue SFCs.

## Comparison

| Runner        | Time  (average of 10 runs of 300 tests)         |
| ------------- |:-------------:|
| tape | 3.08s |
| jest | 3.32s |
| mocha-webpack | 4.51s |
| karma-mocha | 6.30s |
| ava | 8.35s |


## Details

The tests use one SFC. They run 10 files of 30 tests, so 300 tests overall.

The Time is the average of 10 runs of 300 tests.

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

### Add a new setup
* Create directory with a descriptive name, using test template below
* Add `Basic.spec.js` file with 30 tests
* Create a `test` script in your package.json
* Add name of directory to `test_runners` array in `test.sh`
* Run tests from the root by running `npm test`

### Test template
Copy this and change the syntax to match your test runner.
```
it('renders correct text', () => {
  const wrapper = shallow(Basic)
  expect(wrapper.find('.hello h1').text()).toBe('Welcome to Your Vue.js App')
})
```

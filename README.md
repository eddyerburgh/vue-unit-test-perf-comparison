# Vue Unit Test Performance Comparison

This is a performance comparison between test runners testing Vue SFCs.

## Comparison

| Runner        | 300 tests | 600 tests | 1200 tests|3000 tests|9000 tests|
| ------------- |-------------|-------------|-------------|-------------|-------------|
| tape | 2.81s |4.16s | 5.50s | 11.32s |33.56s|
| jest | 2.96s |3.39s | 4.81s | 7.50s |15.20s|
| mocha-webpack | 4.34s |4.51s | 5.63s | 9.78s |19.47s|
| karma-mocha | 6.85s |8.88s | 11.26s | 22.63s |26.98s|
| ava | 9.72s |17.77s | 27.42s | 68.23s |291.22s|

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

### Add a new setup
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

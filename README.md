# Vue Unit Test Performance Comparison

This is a performance comparison between test runners testing Vue SFCs.

## Comparison

| Runner        | Time           |
| ------------- |:-------------:|
| tape | 2.84s |
| ava | 8.90s |
| jest | 3.24s |
| karma-mocha | 6.59s |
| mocha-webpack | 4.20s |

## Details

The tests use one component (currently). They run 10 files of 30 tests, so 300 tests overall.

The results are the average of 10 runs.

## Results

Currently tape is the fastest.

AVA is by far the slowest. This is because the [current suggested method](https://github.com/avajs/ava/blob/master/docs/recipes/precompiling-with-webpack.md) does not utilize caching. If caching was added, it would be comparable to Jest.

## Usage

Running the test script will generate a results table in RESULTS.md:

```
npm test
```

**Warning: It takes around 5 minutes to run**

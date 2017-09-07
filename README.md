# Vue Unit Test Performance Comparison

This is a performance comparison between test runners testing Vue SFCs.

## Comparison

| Runner        | Time           |
| ------------- |:-------------:|
| tape | 3.386s |
| ava | 10.468s |
| jest | 4.524s |
| karma-mocha | 8.732s |
| mocha-webpack | 5.519s |

## Details

The tests use one component (currently). They run 10 files of 30 tests, so 300 tests overall.

## Results

Currently tape is the fastest.

AVA is by far the slowest. This is because the [current suggested method](https://github.com/avajs/ava/blob/master/docs/recipes/precompiling-with-webpack.md) does not utilize caching. If caching was added, it would be comparable to Jest.

## Plan for repository

The plan for this repository is to add more components and more complex tests. As better testing methods are found, the directories and results will be updated.

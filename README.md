# Vue Unit Test Performance Comparison

This is a performance comparison between test runners testing Vue SFCs.

## Comparison

| Runner        | Time           |
| ------------- |:-------------:|
| Jest    | 3.5s |
| mocha-webpack    | 4.7s |
| AVA      | 12s      |

## Details

The tests use one component (currently). They run 10 files of 30 tests, so 300 tests overall.

## Results

Currently Jest is the fastest. Mainly because it utilizes caching more effectively than mocha-webpack.

AVA is by far the slowest. This is because the [current suggested method](https://github.com/avajs/ava/blob/master/docs/recipes/precompiling-with-webpack.md) does not utilize caching. If caching was added, it would be comparable to Jest.

## Plan for repository

The plan for this repository is to add more components and more complex tests. As better testing methods are found, the directories and results will be updated.

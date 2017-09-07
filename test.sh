#!/bin/bash

declare -a test_runners=( "tape"  "jest" "mocha-webpack"  "karma-mocha" "ava")

function generate_test_files {
  for i in {0..10}
  do
     cp Basic.spec.js "Basic$i.spec.js"
  done
}

function remove_test_files {
  for i in {0..10}
  do
     rm "Basic$i.spec.js"
  done
}

cp results.template RESULTS.md

for test_runner in "${test_runners[@]}"
do (
  cd "${test_runner}" || echo "failed to change into ./${test_runner}"
  generate_test_files
  TIMEFORMAT=%R
  declare -a results_arr

  for i in {0..10}
  do
    process_time=$(time (yarn test >/dev/null 2>&1) 2>&1)
    results_arr[$i]=$process_time
  done
  scale=2
  # process_time=$(time (yarn test >/dev/null 2>&1) 2>&1)
  SUM="$(echo "${results_arr[0]} + ${results_arr[1]} + ${results_arr[2]} + ${results_arr[3]} + ${results_arr[5]} + ${results_arr[6]} + ${results_arr[7]} + ${results_arr[8]} + ${results_arr[9]} + ${results_arr[10]}" | bc)"
  AVERAGE="$(echo "scale=2; $SUM / 11" | bc -l)"


  echo "| $test_runner | ${AVERAGE}s |" >> ../RESULTS.md

  remove_test_files
  )
done

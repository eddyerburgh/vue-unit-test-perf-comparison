#!/bin/bash

declare -a test_runners=( "tape" "ava" "jest" "karma-mocha" "mocha-webpack")

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

  process_time=$(time (yarn test >/dev/null 2>&1) 2>&1)

  echo "$process_time"

  echo "| $test_runner | ${process_time}s |" >> ../RESULTS.md

  remove_test_files
  )
done

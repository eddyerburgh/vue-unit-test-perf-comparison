#!/bin/bash

declare -a test_runners=( "jest" "ava" "mocha-webpack" "mocha-karma" "tape" )

for test_runner in "${test_runners[@]}"
do (
  cd "${test_runner}" || echo "failed to change into ./${test_runner}"
  for i in {0..10}
  do
     cp Basic.spec.js "Basic$i.spec.js"
  done
  yarn test
  for i in {0..10}
  do
     rm "Basic$i.spec.js"
  done
  )
done

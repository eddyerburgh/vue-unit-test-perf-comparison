#!/bin/bash

declare -a test_runners=("tape" "jest" "mocha-webpack" "karma-mocha" "ava")

function generate_test_files() {
	for ((i = 0; i < $1; i++)); do
		cp Basic.spec.js "Basic$i.spec.js"
		cp Parent.spec.js "Parent$i.spec.js"
	done
}

function remove_test_files() {
	for ((i = 0; i < $1; i++)); do
		rm "Basic$i.spec.js"
		rm "Parent$i.spec.js"
	done
}

function get_average_time_of_tests() {
	generate_test_files "$1"
	TIMEFORMAT=%R
	declare -a results_arr
	for i in {0..10}; do
		process_time=$(time (yarn test >/dev/null 2>&1) 2>&1)
		results_arr[$i]=$process_time
	done
	SUM="$(echo "${results_arr[0]} + ${results_arr[1]} + ${results_arr[2]} + ${results_arr[3]} + ${results_arr[5]} + ${results_arr[6]} + ${results_arr[7]} + ${results_arr[8]} + ${results_arr[9]} + ${results_arr[10]}" | bc)"
	AVERAGE="$(echo "scale=2; $SUM / 11" | bc -l)"
	remove_test_files "$1"
	echo "$AVERAGE"
}

cp results.template RESULTS.md

for test_runner in "${test_runners[@]}"; do (
	cd "${test_runner}" || echo "failed to change into ./${test_runner}"
	echo "getting average of 10 tests in $test_runner ..."
	TIME_10=$(get_average_time_of_tests 1)
	echo "getting average of  100 tests in $test_runner ..."
	TIME_100=$(get_average_time_of_tests 10)
	echo "getting average of  1000 tests in $test_runner ..."
	TIME_1000=$(get_average_time_of_tests 100)
	echo "getting average of  10000 tests in $test_runner ..."
	TIME_10000=$(get_average_time_of_tests 1000)
	echo "done, generating results row for $test_runner ..."

	echo "| $test_runner | ${TIME_10}s |  ${TIME_100}s |  ${TIME_1000}s |  ${TIME_10000}s |" >>../RESULTS.md

)
done

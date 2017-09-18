#!/usr/bin/env bash

declare -a test_runners=("tape" "jest" "mocha-webpack" "karma-mocha" "ava")

declare -a test_files=("Basic1" "Basic2" "Basic3" "Basic4" "Basic5" "Basic6" "Basic7" "Basic8" "Parent")

remove_temp_directories() {
	for test_runner in "${test_runners[@]}"; do
		rm -rf "${test_runner}-temp"
	done
}

generate_test_files() {
	for ((i = 0; i < $1; i++)); do
		for test_file in "${test_files[@]}"; do
			cp "${test_file}.spec.js" "${test_file}-${i}.spec.js"
		done
	done
}

remove_test_files() {
	for ((i = 0; i < $1; i++)); do
		for test_file in "${test_files[@]}"; do
			rm "${test_file}-${i}.spec.js"
		done
	done
}

get_average_time_of_tests() {
	local sum
	local average
	generate_test_files "$1"
	TIMEFORMAT=%R
	declare -a results_arr
	for i in {1..3}; do
		process_time=$(time (yarn test >/dev/null 2>&1) 2>&1)
		results_arr[$i]=$process_time
	done
	sum="$(echo "${results_arr[1]} + ${results_arr[2]} + ${results_arr[3]}" | bc)"
	average="$(echo "scale=2; $sum / 3" | bc -l)"
	remove_test_files "$1"
	echo "$average"
}

generate_table_row() {
	local test_runner="$1"
	local time_10
	local time_100
	local time_1000
	local time_5000
	cp -R "${test_runner}" "${test_runner}-temp"
	cd "${test_runner}-temp" || echo "failed to change into ./${test_runner}-temp"
	echo "getting average of 10 tests in $test_runner ..."
	time_10=$(get_average_time_of_tests 1 "$test_runner")
	echo "getting average of  100 tests in $test_runner ..."
	time_100=$(get_average_time_of_tests 10)
	echo "getting average of  1000 tests in $test_runner ..."
	time_1000=$(get_average_time_of_tests 100)
	echo "getting average of  5000 tests in $test_runner ..."
	time_5000=$(get_average_time_of_tests 500)
	echo "done, generating results row for $test_runner ..."
	echo "| $test_runner | ${time_10}s |  ${time_100}s |  ${time_1000}s |  ${time_5000}s |" >>../RESULTS.md
}

run_tests() {
	cp results.template RESULTS.md

	for test_runner in "${test_runners[@]}"; do (
		generate_table_row "$test_runner"
	)
	done

	remove_temp_directories
}

remove_temp_directories
run_tests

trap remove_temp_directories EXIT INT TERM

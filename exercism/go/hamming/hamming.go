package hamming

import (
	"errors"
)

// Distance calculates the Hamming distance between two strings.
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return -1, errors.New("Strings not same length.")
	}
	count := 0
	for idx, c := range a {
		if string(c) != string(b[idx]) {
			count++
		}
	}
	return count, nil
}

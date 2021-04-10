package hamming

import (
	"errors"
)

// Distance calculates the Hamming distance between two strings.
func Distance(a, b string) (int, error) {
	runesA, runesB := []rune(a), []rune(b)
	if len(runesA) != len(runesB) {
		return 0, errors.New("strings should have equal length")
	}
	distance := 0
	for i := 0; i < len(runesA); i++ {
		if runesA[i] != runesB[i] {
			distance++
		}
	}
	return distance, nil
}

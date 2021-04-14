/*
 Package isogram offers a function for
 isogram detection.
*/
package isogram

import "unicode"

// IsIsogram determines if a word is an isogram.
func IsIsogram(word string) bool {
	if word == "" {
		return true
	}
	cache := map[rune]bool{}
	for _, char := range word {
		if char == ' ' || char == '-' {
			continue
		}
		if _, ok := cache[unicode.ToLower(char)]; ok {
			return false
		}
		cache[unicode.ToLower(char)] = true
	}
	return true
}

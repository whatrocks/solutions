/*
 Package isogram offers a function for
 isogram detection.
*/
package isogram

import "unicode"

// IsIsogram determines if a word is an isogram.
func IsIsogram(word string) bool {
	cache := map[rune]bool{}
	for _, char := range word {
		if char == ' ' || char == '-' {
			continue
		}
		letter := unicode.ToLower(char)
		if _, ok := cache[letter]; ok {
			return false
		}
		cache[letter] = true
	}
	return true
}

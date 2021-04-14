// Package leaps determines if a year is a leap year.
package leap

// IsLeapYear determines if a year is a leap year.
func IsLeapYear(year int) bool {
	isLeap := false
	if year%4 == 0 && !(year%100 == 0 && year%400 != 0) {
		isLeap = true
	}
	return isLeap
}

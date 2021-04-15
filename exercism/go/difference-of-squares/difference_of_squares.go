/*
	diffsquares package calculcates difference of squares.
*/
package diffsquares

// SquareOfSum calculates the square of the sum of numbers.
func SquareOfSum(n int) int {
	return (n * (n + 1) / 2) * (n * (n + 1) / 2)
}

// SumOfSquares calculates the sum of the squares of numbers.
func SumOfSquares(n int) int {
	return (n * (n + 1) * (2*n + 1)) / 6
}

// Difference calculates the difference of squares.
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}

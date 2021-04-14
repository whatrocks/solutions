/*
	diffsquares package calculcates difference of squares.
*/
package diffsquares

// SquareOfSum calculates the square of the sum of numbers.
func SquareOfSum(number int) int {
	sum := 0
	for i := 1; i <= number; i++ {
		sum += i
	}
	return sum * sum
}

// SumOfSquares calculates the sum of the squares of numbers.
func SumOfSquares(number int) int {
	sum := 0
	for i := 1; i <= number; i++ {
		sum += i * i
	}
	return sum
}

// Difference calculates the difference of squares.
func Difference(number int) int {
	return SquareOfSum(number) - SumOfSquares(number)
}

package raindrops

import "strconv"

const (
	pling = "Pling"
	plang = "Plang"
	plong = "Plong"
)

func Convert(num int) string {
	result := ""
	if num % 3 == 0 {
		result += pling
	}
	if num % 5 == 0 {
		result += plang
	}
	if num % 7 == 0 {
		result += plong
	}
	if len(result) == 0 {
		result = strconv.Itoa(num)
	}
	return result
}
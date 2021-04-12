// proverb generates the proverb.
package proverb

import "fmt"

const (
	lineFmtStr    = "For want of a %s the %s was lost."
	endLineFmtStr = "And all for the want of a %s."
)

// Proverb creates the proverb given a list of rhymes.
func Proverb(rhyme []string) []string {
	proverb := []string{}
	for i := 0; i < len(rhyme); i++ {
		if i == len(rhyme)-1 {
			proverb = append(proverb, fmt.Sprintf(endLineFmtStr, rhyme[0]))
			break
		}
		proverb = append(proverb, fmt.Sprintf(lineFmtStr, rhyme[i], rhyme[i+1]))
	}
	return proverb
}

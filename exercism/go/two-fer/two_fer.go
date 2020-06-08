package twofer

import "fmt"

// ShareWith takes a name and returns a message
func ShareWith(name string) string {
  n := "you"
  if name != "" {
    n = name
  }
  return fmt.Sprintf("One for %s, one for me.", n)
}

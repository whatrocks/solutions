package twofer

import "fmt"

// ShareWith takes a name and returns a messages
func ShareWith(name string) string {
  if name == "" {
    name = "you"
  }
  return fmt.Sprintf("One for %s, one for me.", name)
}
//  structs are collections of fields
//  they are useful for grouping data together to form records
//
package main

import "fmt"

type person struct {
  name string
  age int
}

func main() {

  fmt.Println(person{"Bob", 20})

  fmt.Println(person{name: "Alice", age: 30})

  fmt.Println(person{name: "Free"})

  fmt.Println(&person{name: "Ann", age: 40})

  s := person{name: "Sean", age: 50}
  fmt.Println(s.name)

  sp := &s
  fmt.Println(sp.age)

  sp.age = 51
  fmt.Println(sp.age)

}

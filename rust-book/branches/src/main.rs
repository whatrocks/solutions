fn main() {
    let number = 6;

    if number % 4 == 0 {
        println!("divisable by 4");
    } else if number % 3 == 0 {
        println!("by 3");
    } else if number % 2 == 0 {
        println!("by 2");
    } else {
        println!("not");
    }

    let condition = true;
    let number = if condition { 5 } else { 6 };
    println!("number is {}", number);
}
